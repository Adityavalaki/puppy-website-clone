import { useEffect, useId, useRef } from 'react'

// Dotted route from Korea to Dubai with a plane that flies along it as the scene scrolls through the screen.
// The part already flown turns solid. With reduced motion the plane simply waits half way.
const route = 'M60 250C170 60 470 30 610 170'
const clamp = (value) => Math.min(1, Math.max(0, value))

// `from` names the start of the route (Home says Korea; How it works says Europe · Korea, like the reference).
export default function FlightPath({ image, label, className, from = 'Korea' }) {
  const svgRef = useRef(null)
  const flownRef = useRef(null)
  const planeRef = useRef(null)
  const windowId = `porthole-${useId().replace(/[^a-z0-9]/gi, '')}`

  useEffect(() => {
    const svg = svgRef.current
    const flown = flownRef.current
    const plane = planeRef.current
    const length = flown.getTotalLength()
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    flown.style.strokeDasharray = `${length}`
    let frame = 0

    const place = () => {
      frame = 0
      const box = svg.getBoundingClientRect()
      const vh = window.innerHeight
      // 0 when the scene's top enters the bottom of the screen, 1 when its middle reaches 30% from the top.
      const start = vh * 0.95
      const end = vh * 0.3 - box.height / 2
      const progress = still ? 0.5 : clamp((start - box.top) / (start - end))
      const distance = progress * length
      const at = flown.getPointAtLength(distance)
      const behind = flown.getPointAtLength(Math.max(0, distance - 2))
      const ahead = flown.getPointAtLength(Math.min(length, distance + 2))
      const angle = (Math.atan2(ahead.y - behind.y, ahead.x - behind.x) * 180) / Math.PI
      plane.setAttribute('transform', `translate(${at.x} ${at.y}) rotate(${angle}) scale(0.72)`)
      flown.style.strokeDashoffset = `${length - distance}`
    }

    const request = () => {
      if (!frame) frame = requestAnimationFrame(place)
    }
    place()
    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', request)
      window.removeEventListener('resize', request)
    }
  }, [])

  return (
    <svg ref={svgRef} role="img" aria-label={label} viewBox="0 0 660 300" className={`overflow-visible ${className ?? ''}`}>
      <defs>
        <clipPath id={windowId}>
          <circle cx="22" cy="-2" r="15" />
        </clipPath>
      </defs>
      <path d={route} fill="none" stroke="var(--color-toffee-deep)" strokeWidth="3" strokeDasharray="3 11" strokeLinecap="round" opacity="0.6" />
      <path ref={flownRef} d={route} fill="none" stroke="var(--color-toffee-deep)" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="60" cy="250" r="8" fill="var(--color-toffee-deep)" />
      <circle cx="610" cy="170" r="8" fill="var(--color-toffee-deep)" />
      <text x="60" y="284" textAnchor="middle" className="fill-cocoa-soft font-hand text-[19px]">{from}</text>
      <text x="610" y="204" textAnchor="middle" className="fill-cocoa-soft font-hand text-[19px]">Dubai</text>

      {/* Cartoon airliner pointing right (nose at +x), centred on 0,0. */}
      <g ref={planeRef}>
        <g className="plane" stroke="var(--color-cocoa)" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round">
          <path d="M-4 10L-42 54H-18L26 12Z" fill="var(--color-toffee-deep)" />
          <path d="M-90 -8L-116 -56H-94L-62 -14Z" fill="var(--color-toffee)" />
          <path d="M-110 -4C-110 -18 -96 -26 -80 -26H62C92 -26 114 -12 118 0C114 12 92 22 62 22H-80C-98 22 -110 12 -110 -4Z" fill="var(--color-milk)" />
          <path d="M-98 11H74" stroke="var(--color-toffee)" strokeWidth="5" />
          <path d="M86 -15C96 -12 104 -7 109 -1H86Z" fill="var(--color-sky)" strokeWidth="3" />
          <circle cx="-62" cy="-5" r="5" fill="var(--color-sky)" strokeWidth="3" />
          <circle cx="-42" cy="-5" r="5" fill="var(--color-sky)" strokeWidth="3" />
          <circle cx="-22" cy="-5" r="5" fill="var(--color-sky)" strokeWidth="3" />
          {image ? (
            <image href={image} x="7" y="-17" width="30" height="30" preserveAspectRatio="xMidYMid slice" clipPath={`url(#${windowId})`} />
          ) : (
            <circle cx="22" cy="-2" r="15" fill="var(--color-sky)" stroke="none" />
          )}
          <circle cx="22" cy="-2" r="15" fill="none" strokeWidth="4.5" />
          <path d="M-12 2L-50 46H-26L24 6Z" fill="var(--color-toffee)" />
          <path d="M-96 -1L-124 14H-104L-80 2Z" fill="var(--color-toffee-deep)" />
        </g>
      </g>
    </svg>
  )
}
