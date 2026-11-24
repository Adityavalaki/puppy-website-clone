import { useEffect, useRef, useState } from 'react'
import Paw from '../../ui/Paw.jsx'
import { hero } from '../../../data/content.js'
import Pup, { PupSit } from '../../ui/Pup.jsx'

// Home page only: one dog that walks with you from section to section as you scroll, leaving paw prints.
// The still dogs in each section (marked data-pup-stop) are its stops; they hide while this dog is on.
const motionQuery = '(prefers-reduced-motion: no-preference)'
const lerp = (a, b, t) => a + (b - a) * t
const clamp = (value, min, max) => Math.min(max, Math.max(min, value))
const smooth = (t) => t * t * (3 - 2 * t)
const follow = 0.14 // share of the remaining distance covered each frame: smooth catch-up, never a jump
const maxPrints = 24

export default function Mascot() {
  const dogRef = useRef(null)
  const groundRef = useRef(null)
  const [enabled, setEnabled] = useState(() => window.matchMedia(motionQuery).matches)
  const [prints, setPrints] = useState([])

  useEffect(() => {
    const query = window.matchMedia(motionQuery)
    const onChange = () => setEnabled(query.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const root = document.documentElement
    root.classList.add('mascot-on')
    const dog = dogRef.current
    let frame = 0
    let pos = null // where the dog is drawn now {x, y, w}
    let travelled = 0 // total distance walked in px; drives the leg swing
    let lastPrint = null
    let lastStep = performance.now() // time of the last real step: the "walking" mood lingers briefly so slow scrolls don't flicker it
    let askTimer = 0
    let nextId = 0

    // A stop as a box for the whole dog. `key` is the edge the screen line must cross to leave the stop.
    // The hero pup (data-pup-peek) shows only head + paws, cropped from the same 240x200 drawing (PupPeek's
    // viewBox is 120 6 108 136), so the whole dog goes where its head lines up with the peeking one: it seems
    // to stand up in place. Its key is its bottom, so the dog stands there a moment before walking off.
    const toStop = (el) => {
      const box = el.getBoundingClientRect()
      const face = el.dataset.pupFace
      const pose = el.dataset.pupPose
      if (!el.dataset.pupPeek) return { x: box.left, y: box.top, w: box.width, key: box.top, face, pose }
      const scale = box.width / 108
      return { x: box.left - 120 * scale, y: box.top - 6 * scale, w: 240 * scale, key: box.bottom, face, pose, peek: true }
    }

    // Where the dog should be for the current scroll position.
    const findTarget = () => {
      const vh = window.innerHeight
      // The dog walks to whichever stops sit around this line across the screen. In the last half screen of
      // scrolling the line sweeps down to 95%, so a stop low on the final screen (the footer basket) is reached.
      const maxScroll = document.documentElement.scrollHeight - vh
      const end = clamp(1 - (maxScroll - window.scrollY) / (vh * 0.5), 0, 1)
      const line = vh * (0.55 + 0.4 * end)
      const stops = [...document.querySelectorAll('[data-pup-stop]')]
        .filter((el) => el.getBoundingClientRect().width > 0) // offsetWidth doesn't exist on SVG stops
        .map(toStop)
      if (stops.length === 0) return null
      const below = stops.findIndex((stop) => stop.key > line)
      // On the first stop (the hero pup): hidden at the very top, standing up in its place once you scroll.
      if (below === 0) return { ...stops[0], visible: window.scrollY > 4 }
      // Past the last stop: stay on it and scroll away with it.
      if (below === -1) return { ...stops[stops.length - 1], visible: true, last: true }
      // Between two stops: blend their positions by how far the line has moved from one to the other.
      const a = stops[below - 1]
      const b = stops[below]
      const t = smooth(clamp((line - a.key) / (b.key - a.key), 0, 1))
      const w = lerp(a.w, b.w, t)
      const y = clamp(lerp(a.y, b.y, t), vh * 0.1, vh * 0.86 - w * (200 / 240)) // keep it in view
      return { x: lerp(a.x, b.x, t), y, w, visible: true, face: (t < 0.5 ? a : b).face, between: t > 0.02 && t < 0.98, pose: t < 0.12 ? a.pose : t > 0.88 ? b.pose : undefined }
    }

    const step = () => {
      frame = 0
      const target = findTarget()
      if (!target) return
      if (!pos) pos = { ...target }
      const dx = (target.x - pos.x) * follow
      const dy = (target.y - pos.y) * follow
      pos = { x: pos.x + dx, y: pos.y + dy, w: pos.w + (target.w - pos.w) * follow }
      const moved = Math.hypot(dx, dy)
      const walking = moved > 0.35
      const now = performance.now()
      if (walking) lastStep = now
      const active = now - lastStep < 250
      travelled += moved

      dog.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
      dog.style.width = `${pos.w}px`
      dog.dataset.walking = active
      dog.dataset.pose = !active && target.pose ? target.pose : 'stand' // sits only once it has stopped, close to a sitting stop
      dog.dataset.hidden = !target.visible
      root.toggleAttribute('data-pup-up', target.visible) // hides the hero pup once the walking dog has taken its place
      // Settled on the last stop (the footer basket): the walking dog hands over to the pup resting in the basket.
      const settled = !active && Math.hypot(target.x - pos.x, target.y - pos.y) < 2
      root.toggleAttribute('data-pup-home', Boolean(target.last && target.peek) && settled)

      // Stopped partway between two stops: after a second, the dog asks "coming?". The frame loop stops once the
      // dog settles, so a timer wakes it when the second is up.
      clearTimeout(askTimer)
      const idle = now - lastStep
      dog.dataset.asking = Boolean(target.between) && idle > 1000
      if (target.between && idle <= 1000) askTimer = setTimeout(request, 1020 - idle)
      // The dog faces where it walks, unless the stop it is nearest fixes a side (data-pup-face). Meet the Pups
      // needs that: the row slides left past a dog that stands still on screen, so it should look right.
      if (target.face) dog.dataset.left = target.face === 'left'
      else if (Math.abs(dx) > 0.3) dog.dataset.left = dx < 0

      // Legs swing in a sine wave of the distance walked (one stride every ~70px): they move only while
      // the dog moves, and faster when it moves faster. Diagonal pairs swing together like a trot.
      const phase = travelled / 11
      const swing = walking ? Math.sin(phase) * 28 : 0
      dog.style.setProperty('--leg-a', `${swing}deg`)
      dog.style.setProperty('--leg-b', `${-swing}deg`)
      dog.style.setProperty('--bob', `${walking ? -Math.abs(Math.cos(phase)) * 5 : 0}px`)
      dog.style.setProperty('--nod', `${walking ? Math.sin(phase * 2) * 3 : 0}deg`)

      // Paw prints under the feet, in page coordinates so they stay on the ground as you scroll.
      if (walking && target.visible) {
        const ground = groundRef.current.getBoundingClientRect()
        const feet = { x: pos.x + pos.w * 0.5 - ground.left, y: pos.y + pos.w * (186 / 240) - ground.top }
        if (!lastPrint || Math.hypot(feet.x - lastPrint.x, feet.y - lastPrint.y) > 46) {
          const angle = lastPrint ? (Math.atan2(feet.y - lastPrint.y, feet.x - lastPrint.x) * 180) / Math.PI + 90 : 90
          const print = { id: nextId, x: feet.x, y: feet.y + (nextId % 2 ? 7 : -7), angle }
          nextId += 1
          lastPrint = feet
          setPrints((list) => [...list.slice(1 - maxPrints), print])
        }
      }

      // Keep animating until the dog has caught up with its target.
      if (Math.abs(target.x - pos.x) > 0.3 || Math.abs(target.y - pos.y) > 0.3 || active) request()
    }

    const request = () => {
      if (!frame) frame = requestAnimationFrame(step)
    }
    step()
    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request)
    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(askTimer)
      window.removeEventListener('scroll', request)
      window.removeEventListener('resize', request)
      root.classList.remove('mascot-on')
      root.removeAttribute('data-pup-up')
      root.removeAttribute('data-pup-home')
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div ref={groundRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
        {prints.map((print) => (
          <Paw key={print.id} className="paw-print" style={{ left: print.x, top: print.y, rotate: `${print.angle}deg` }} />
        ))}
      </div>
      <div ref={dogRef} aria-hidden="true" className="mascot">
        <span className="pup-bubble font-hand">{hero.follow}</span>
        <Pup />
        <PupSit />
      </div>
    </>
  )
}
