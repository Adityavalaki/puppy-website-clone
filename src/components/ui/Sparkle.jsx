// Four-point star used in the night-sky sections. Colour comes from the text colour (e.g. text-honey).
export default function Sparkle({ className, style }) {
  return (
    <svg viewBox="0 0 40 40" fill="currentColor" aria-hidden="true" className={className} style={style}>
      <path d="M20 2C22 14 26 18 38 20C26 22 22 26 20 38C18 26 14 22 2 20C14 18 18 14 20 2Z" />
    </svg>
  )
}
