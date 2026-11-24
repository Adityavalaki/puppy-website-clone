// The cartoon poodle drawn in parts so it can walk: four legs, a tail and a head, each with its own pivot point.
// Mascot.jsx moves the parts by setting CSS variables on a parent element:
//   --leg-a / --leg-b  leg swing in degrees (diagonal pairs move together, like a real trot)
//   --bob              body bounce in px      --nod  head tilt in degrees
// Each part sets transform-origin in the SVG's own coordinates (needs transform-box: view-box, see index.css).

const ink = '#2a170e'
const coat = '#f2be6b'
const shade = '#e0a24f'

function Leg({ x, top, height, color, pair }) {
  return (
    <g className={`pup-leg pup-leg--${pair}`} style={{ transformOrigin: `${x + 11}px ${top + 4}px` }}>
      <rect x={x} y={top} width="22" height={height} rx="11" fill={color} />
      {/* Paw pad at the bottom of the leg. */}
      <path d={`M${x + 4} ${top + height - 7}h14`} strokeWidth="3" />
    </g>
  )
}

export default function Pup({ className }) {
  return (
    <svg viewBox="0 0 240 200" aria-hidden="true" className={className} fill="none" stroke={ink} strokeWidth="5" strokeLinejoin="round" strokeLinecap="round">
      <ellipse cx="118" cy="190" rx="92" ry="7" fill={ink} opacity="0.12" stroke="none" />

      {/* Far-side legs, behind the body (darker). */}
      <Leg x={58} top={124} height={60} color={shade} pair="b" />
      <Leg x={140} top={124} height={60} color={shade} pair="a" />

      <g className="pup-upper">
        <g className="pup-tail" style={{ transformOrigin: '62px 104px' }}>
          <path d="M62 104C52 92 46 82 44 72" strokeWidth="6" />
          <circle cx="40" cy="62" r="15" fill={coat} />
        </g>
        <ellipse cx="110" cy="116" rx="60" ry="38" fill={coat} />
        <path d="M92 96c6-4 14-4 20 0M120 92c6-4 14-4 20 0" stroke={shade} strokeWidth="4" />
      </g>

      {/* Near-side legs, in front of the body. */}
      <Leg x={80} top={128} height={58} color={coat} pair="a" />
      <Leg x={160} top={124} height={62} color={coat} pair="b" />

      <g className="pup-upper">
        <g className="pup-head" style={{ transformOrigin: '170px 104px' }}>
          <ellipse cx="146" cy="82" rx="15" ry="26" fill={shade} transform="rotate(14 146 82)" />
          <ellipse cx="206" cy="82" rx="15" ry="26" fill={shade} transform="rotate(-14 206 82)" />
          <circle cx="176" cy="70" r="36" fill={coat} />
          <circle cx="162" cy="34" r="11" fill={coat} />
          <circle cx="176" cy="28" r="12" fill={coat} />
          <circle cx="190" cy="34" r="11" fill={coat} />
          <ellipse cx="176" cy="86" rx="17" ry="13" fill="#fbe3b4" stroke="none" />
          <circle cx="152" cy="84" r="7" fill="#f9cdbf" stroke="none" />
          <circle cx="200" cy="84" r="7" fill="#f9cdbf" stroke="none" />
          <circle cx="163" cy="70" r="5.5" fill={ink} stroke="none" />
          <circle cx="189" cy="70" r="5.5" fill={ink} stroke="none" />
          <circle cx="164.8" cy="68" r="1.8" fill="#fffdf8" stroke="none" />
          <circle cx="190.8" cy="68" r="1.8" fill="#fffdf8" stroke="none" />
          <ellipse cx="176" cy="80" rx="5" ry="4" fill={ink} stroke="none" />
          <path d="M170 89c3 3 9 3 12 0" strokeWidth="3.5" />
          <path d="M150 106c14 8 38 8 52 0" stroke="#8e3f15" strokeWidth="7" />
          <circle cx="176" cy="116" r="5" fill={coat} strokeWidth="3" />
        </g>
      </g>
    </svg>
  )
}
