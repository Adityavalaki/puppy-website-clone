import { useEffect, useRef, useState } from 'react'
import Paw from '../../ui/Paw.jsx'
import Pup from '../../ui/Pup.jsx'

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
    let nextId = 0

    // Where the dog should be for the current scroll position.
    const findTarget = () => {
      const vh = window.innerHeight
      const line = vh * 0.55 // the dog walks to whichever stops sit around this line across the screen
      const els = [...document.querySelectorAll('main [data-pup-stop]')].filter((el) => el.offsetWidth > 0)
      const stops = els.map((el) => el.getBoundingClientRect())
      if (stops.length === 0) return null
      const below = stops.findIndex((box) => box.top > line)
      if (below === 0) {
        // Above the first stop (hero): wait on it, and stay hidden until it scrolls into view.
        const first = stops[0]
        return { x: first.left, y: first.top, w: first.width, visible: first.top < vh, face: els[0].dataset.pupFace }
      }
      if (below === -1) {
        // Past the last stop: stay on it and scroll away with it.
        const last = stops[stops.length - 1]
        return { x: last.left, y: last.top, w: last.width, visible: true, face: els[els.length - 1].dataset.pupFace }
      }
      // Between two stops: blend their positions by how far the line has moved from one to the other.
      const a = stops[below - 1]
      const b = stops[below]
      const t = smooth(clamp((line - a.top) / (b.top - a.top), 0, 1))
      const w = lerp(a.width, b.width, t)
      const y = clamp(lerp(a.top, b.top, t), vh * 0.1, vh * 0.86 - w * (200 / 240)) // keep it in view
      return { x: lerp(a.left, b.left, t), y, w, visible: true, face: els[t < 0.5 ? below - 1 : below].dataset.pupFace }
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
      travelled += moved

      dog.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
      dog.style.width = `${pos.w}px`
      dog.dataset.walking = walking
      dog.dataset.hidden = !target.visible
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
      if (Math.abs(target.x - pos.x) > 0.3 || Math.abs(target.y - pos.y) > 0.3 || walking) request()
    }

    const request = () => {
      if (!frame) frame = requestAnimationFrame(step)
    }
    step()
    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', request)
      window.removeEventListener('resize', request)
      root.classList.remove('mascot-on')
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
        <Pup />
      </div>
    </>
  )
}
