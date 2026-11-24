// The fluffy cartoon poodle, drawn in parts so it can walk: four legs, a tail and a head, each with its own pivot.
// Mascot.jsx moves the parts with CSS variables on a parent element:
//   --leg-a / --leg-b  leg swing in degrees (diagonal pairs move together, like a real trot)
//   --bob              body bounce in px      --nod  head tilt in degrees
// Moods are CSS too (index.css): tongue out + tail wag while walking or playing; `pup-happy` closes the eyes.
// Each part sets transform-origin in the SVG's own coordinates (needs transform-box: view-box, see index.css).

const ink = '#2a170e'
const coat = '#f2be6b'
const shade = '#e0a24f'

// A fluffy outline: an ellipse whose edge is a ring of little bumps (one curve between each pair of points,
// bowed outward by `puff`). Round numbers keep the SVG path short.
function fluff(cx, cy, rx, ry, bumps, puff = 0.14) {
  const at = (angle, grow) => `${Math.round(cx + Math.cos(angle) * rx * grow)} ${Math.round(cy + Math.sin(angle) * ry * grow)}`
  const step = (Math.PI * 2) / bumps
  let d = `M${at(0, 1)}`
  for (let i = 0; i < bumps; i += 1) d += `Q${at((i + 0.5) * step, 1 + puff)} ${at((i + 1) * step, 1)}`
  return `${d}Z`
}

function Leg({ x, top, height, color, pair }) {
  return (
    <g className={`pup-leg pup-leg--${pair}`} style={{ transformOrigin: `${x + 11}px ${top + 4}px` }}>
      <rect x={x} y={top} width="22" height={height} rx="11" fill={color} />
      {/* Toe lines on the paw. */}
      <path d={`M${x + 8} ${top + height - 9}v6M${x + 14} ${top + height - 9}v6`} strokeWidth="2.5" />
    </g>
  )
}

export default function Pup({ className = '', ...rest }) {
  return (
    <svg viewBox="0 0 240 200" aria-hidden="true" className={`pup ${className}`} fill="none" stroke={ink} strokeWidth="4.5" strokeLinejoin="round" strokeLinecap="round" {...rest}>
      <ellipse cx="120" cy="190" rx="86" ry="7" fill={ink} opacity="0.12" stroke="none" />

      {/* Far-side legs, behind the body (darker). */}
      <Leg x={66} top={126} height={58} color={shade} pair="b" />
      <Leg x={146} top={126} height={58} color={shade} pair="a" />

      <g className="pup-upper">
        <g className="pup-tail" style={{ transformOrigin: '64px 110px' }}>
          <path d="M66 110C54 98 46 86 44 76" strokeWidth="5" />
          <path d={fluff(39, 64, 15, 15, 9, 0.28)} fill={coat} />
        </g>
        <path d={fluff(112, 120, 62, 38, 18)} fill={coat} />
        <path d="M96 104c6-4 13-4 19 0M118 100c6-4 13-4 19 0" stroke={shade} strokeWidth="3.5" />
      </g>

      {/* Near-side legs, in front of the body. */}
      <Leg x={86} top={130} height={56} color={coat} pair="a" />
      <Leg x={164} top={126} height={60} color={coat} pair="b" />

      <g className="pup-upper">
        <g className="pup-head" style={{ transformOrigin: '172px 108px' }}>
          <path d={fluff(143, 90, 14, 27, 11, 0.2)} fill={shade} />
          <path d={fluff(205, 90, 14, 27, 11, 0.2)} fill={shade} />
          <path d={fluff(174, 30, 15, 13, 9, 0.3)} fill={coat} />
          <path d={fluff(174, 72, 37, 35, 18, 0.11)} fill={coat} />
          <ellipse cx="174" cy="88" rx="18" ry="13" fill="#fbe3b4" stroke="none" />
          <circle cx="149" cy="85" r="7" fill="#f9cdbf" stroke="none" />
          <circle cx="199" cy="85" r="7" fill="#f9cdbf" stroke="none" />

          <g className="pup-eyes" stroke="none">
            <circle cx="161" cy="72" r="7" fill={ink} />
            <circle cx="187" cy="72" r="7" fill={ink} />
            <circle cx="163.5" cy="69.5" r="2.4" fill="#fffdf8" />
            <circle cx="189.5" cy="69.5" r="2.4" fill="#fffdf8" />
          </g>
          <path className="pup-eyes-closed" d="M154 74q7-7 14 0M180 74q7-7 14 0" strokeWidth="4" />

          <ellipse cx="174" cy="82" rx="6" ry="4.5" fill={ink} stroke="none" />
          <path className="pup-tongue" d="M169.5 90h9v4a4.5 4.5 0 0 1-9 0z" fill="#ef8c8c" strokeWidth="2.5" />
          <path d="M166 89q4 4 8 0q4 4 8 0" strokeWidth="3" />

          {/* Collar: a dark outline under a brown band, with a heart-shaped tag. */}
          <path d="M146 106q28 13 56 0" strokeWidth="11" />
          <path d="M146 106q28 13 56 0" stroke="#8e3f15" strokeWidth="6" />
          <path d="M174 127c-5-3-8-6-8-9a4 4 0 0 1 8-1a4 4 0 0 1 8 1c0 3-3 6-8 9z" fill="#fffdf8" strokeWidth="2.5" />
        </g>
      </g>
    </svg>
  )
}
