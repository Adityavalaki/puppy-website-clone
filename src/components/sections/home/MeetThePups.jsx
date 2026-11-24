import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { meet, puppies } from '../../../data/content.js'
import Paw from '../../ui/Paw.jsx'
import Pup from '../../ui/Pup.jsx'

const doorColors = ['#a24a1a', '#5a3a28', '#d4893f', '#b8644a', '#7a4a2e']

// The row only pins and slides sideways on wide screens with motion allowed; otherwise it is a normal grid.
const pinQuery = '(min-width: 1024px) and (prefers-reduced-motion: no-preference)'

export default function MeetThePups() {
  const wrapRef = useRef(null)
  const trackRef = useRef(null)
  const [pinned, setPinned] = useState(() => window.matchMedia(pinQuery).matches)
  const [distance, setDistance] = useState(0)
  const [x, setX] = useState(0)
  const [openCount, setOpenCount] = useState(0)

  useEffect(() => {
    const query = window.matchMedia(pinQuery)
    const onChange = () => setPinned(query.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  // How far the door row must slide so its last door ends on screen.
  useEffect(() => {
    if (!pinned) return
    const track = trackRef.current
    const measure = () => setDistance(Math.max(0, track.scrollWidth - window.innerWidth))
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    window.addEventListener('resize', measure)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [pinned])

  // Scrolling down through the tall wrapper slides the row left; doors swing open once they pass the dog.
  useEffect(() => {
    if (!pinned) return
    const onScroll = () => {
      const wrap = wrapRef.current
      const range = wrap.offsetHeight - window.innerHeight
      const progress = range > 0 ? Math.min(1, Math.max(0, -wrap.getBoundingClientRect().top / range)) : 0
      const nextX = -distance * progress
      const dogLine = window.innerWidth * 0.36
      setX(nextX)
      setOpenCount([...trackRef.current.children].filter((door) => door.offsetLeft + nextX < dogLine).length)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pinned, distance])

  return (
    <section aria-labelledby="meet-title" data-pinned={pinned || undefined} className="meet bg-linear-to-b from-[#fff1d8] to-honey-soft">
      {/* Taller than the screen while pinned: the extra height is the scroll distance that drives the slide. */}
      <div ref={wrapRef} style={pinned ? { height: `calc(100vh + ${Math.round(distance * 0.8)}px)` } : undefined}>
        <div className="meet-stage">
          <header className="gutter mx-auto flex w-full max-w-[110rem] flex-wrap items-end justify-between gap-x-8 gap-y-5">
            <div>
              <h2 id="meet-title" className="font-display text-[clamp(2.6rem,6.4vw,6.25rem)] leading-[0.92] font-extrabold tracking-[-0.025em] text-balance">
                {meet.title}
              </h2>
              <p className="mt-3 max-w-[44ch] text-[clamp(1.125rem,1.4vw,1.375rem)] leading-normal text-cocoa-soft">{meet.lede}</p>
            </div>
            <Link to="/puppies" className="btn btn-primary shrink-0">{meet.cta}</Link>
          </header>

          <div className="meet-hall">
            <ul ref={trackRef} className="meet-track gutter" style={pinned ? { transform: `translateX(${x}px)` } : undefined}>
              {puppies.map((pup, index) => (
                <li key={pup.slug} className="door" data-open={(pinned && index < openCount) || undefined}>
                  <Link to={`/puppies/${pup.slug}`} className="door-link" style={{ '--door': doorColors[index % doorColors.length] }}>
                    <span className="door-plate">
                      <span className="door-name font-display font-extrabold">{pup.name}</span>
                      {/* Puppies listed by breed only skip the breed here, like the reference: "girl, 2 months, with video". */}
                      <span className="door-meta">{[pup.name !== pup.breed && pup.breed, pup.sex, pup.age, pup.video && 'with video'].filter(Boolean).join(', ')}</span>
                    </span>
                    <span className="door-frame">
                      <span className="door-room">
                        <img src={pup.image} alt="" loading="lazy" />
                      </span>
                      <span aria-hidden="true" className="door-way">
                        <span className="door-leaf">
                          <Paw className="door-peephole" />
                          <span className="door-knob" />
                        </span>
                      </span>
                      <span className="door-tag font-hand">Available</span>
                    </span>
                  </Link>
                </li>
              ))}
              <li className="door door--all">
                <Link to="/puppies" className="door-link w-full">
                  <span className="door-frame door-frame--all">
                    <span className="door-all font-display font-extrabold">{meet.allLabel}</span>
                  </span>
                </Link>
              </li>
            </ul>
            <div aria-hidden="true" className="meet-floor" style={pinned ? { backgroundPositionX: `${x}px` } : undefined} />
            <Pup data-pup-stop data-pup-face="right" className="meet-pup" />
          </div>
        </div>
      </div>
    </section>
  )
}
