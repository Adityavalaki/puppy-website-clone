// Simple line icons drawn for this project (currentColor takes the surrounding text colour).
const icons = {
  heart: 'M32 54C14 41 8 31 8 22a12 12 0 0 1 24-4 12 12 0 0 1 24 4c0 9-6 19-24 32ZM14 30h10l4-7 6 14 4-7h12',
  plane: 'M6 36l20-2 14-20h6l-6 20 14 2 6-8h4l-3 12 3 12h-4l-6-8-14 2 6 20h-6L26 48 6 46Z',
  chat: 'M10 14h44v30H30l-12 10v-10h-8Z M22 29h.5 M32 29h.5 M42 29h.5',
  globe: 'M32 8a24 24 0 1 0 0 48 24 24 0 1 0 0-48ZM8 32h48M32 8c-8 8-10 16-10 24s2 16 10 24M32 8c8 8 10 16 10 24s-2 16-10 24',
}

export function Icon({ name, className }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={icons[name]} />
    </svg>
  )
}

// An ink stamp (as in a passport) with its caption underneath. shape: round | ticket | oval | scallop.
export default function Stamp({ stamp }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className={`stamp stamp--${stamp.shape}`} style={{ '--ink': stamp.ink, '--tilt': stamp.tilt }}>
        <Icon name={stamp.icon} className="size-10" />
        <span className="max-w-[10ch] font-display text-[1.08rem] leading-[1.05] font-extrabold">{stamp.title}</span>
      </span>
      <p className="mt-3.5 max-w-[26ch] text-[0.92rem] leading-[1.45] text-cocoa-soft">{stamp.text}</p>
    </div>
  )
}
