import { useEffect, useRef } from 'react'

// Leaves small fading paw prints where the mouse pointer travels (the paw cursor itself is set in index.css).
// Mouse only (not touch), and off when the visitor prefers reduced motion.
const gap = 34 // px between prints
const maxPrints = 18

export default function PawCursor() {
  const layerRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return
    const layer = layerRef.current
    let last = null
    let left = false

    const onMove = (event) => {
      if (event.pointerType !== 'mouse') return
      const point = { x: event.clientX, y: event.clientY }
      if (last && Math.hypot(point.x - last.x, point.y - last.y) < gap) return
      // Point the print the way the pointer is moving; alternate left/right feet.
      const angle = last ? (Math.atan2(point.y - last.y, point.x - last.x) * 180) / Math.PI + 90 : 0
      left = !left
      const print = document.createElement('span')
      print.className = 'cursor-print'
      print.style.left = `${point.x + (left ? -5 : 5)}px`
      print.style.top = `${point.y}px`
      print.style.rotate = `${angle}deg`
      print.addEventListener('animationend', () => print.remove())
      layer.append(print)
      if (layer.childElementCount > maxPrints) layer.firstElementChild.remove()
      last = point
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return <div ref={layerRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[70] overflow-hidden" />
}
