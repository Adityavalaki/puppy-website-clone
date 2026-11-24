export default function Paw({ className, style }) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" aria-hidden="true" className={className} style={style}>
      <ellipse cx="32" cy="44" rx="13" ry="11" />
      <ellipse cx="13" cy="30" rx="5.5" ry="7" transform="rotate(-20 13 30)" />
      <ellipse cx="24" cy="17" rx="5.5" ry="7.5" transform="rotate(-8 24 17)" />
      <ellipse cx="40" cy="17" rx="5.5" ry="7.5" transform="rotate(8 40 17)" />
      <ellipse cx="51" cy="30" rx="5.5" ry="7" transform="rotate(20 51 30)" />
    </svg>
  )
}
