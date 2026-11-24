import { useEffect, useRef, useState } from 'react'
import Lightbox from './Lightbox.jsx'
import Paw from './Paw.jsx'

// Each polaroid gets a slight tilt and a strip of tape, cycling through these looks.
const looks = [
  { tilt: '-2.2deg', tape: 'center', color: '#f6d79a' },
  { tilt: '1.6deg', tape: 'left', color: '#f9cdbf' },
  { tilt: '-1deg', tape: 'right', color: '#bfddf5' },
  { tilt: '2deg', tape: 'corners', color: '#f6d79a' },
]

// Wall of taped polaroids; clicking one opens it in the lightbox. Wooden board by default (Home); `plain` puts
// them straight on the page in columns (Happy families). `all` shows every photo on phones too (Home shows six),
// and `children` turns on the street along the bottom.
// Each photo pops in as it scrolls into view and a paw pats it onto the page (index.css, .photo-wall [data-armed]).
export default function PolaroidWall({ photos, all = false, plain = false, children }) {
  const [openIndex, setOpenIndex] = useState(null)
  const listRef = useRef(null)

  // Armed from here, and only when motion is allowed, so without it every photo simply shows.
  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: no-preference)').matches) return
    const items = [...listRef.current.children]
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.dataset.revealed = ''
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.2 })
    for (const item of items) {
      item.dataset.armed = ''
      observer.observe(item)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className={`photo-wall ${plain ? 'photo-wall--plain' : ''}`}>
        <ul ref={listRef} aria-label="Photos from TeddyPups families" className={`photo-wall-prints ${all ? 'photo-wall-prints--all' : ''}`}>
          {photos.map((photo, index) => {
            const look = looks[index % looks.length]
            return (
              <li key={photo.src} style={{ '--d': `${(index % 4) * 90}ms` }}>
                <button
                  type="button"
                  aria-label={`Open photo ${index + 1} of ${photos.length}: ${photo.caption}`}
                  onClick={() => setOpenIndex(index)}
                  className="polaroid-button"
                >
                  <Paw className="wall-paw" />
                  <span className="polaroid" style={{ '--tilt': look.tilt, '--tape': look.color }}>
                    {look.tape === 'corners' ? (
                      <>
                        <span aria-hidden="true" className="tape tape--tl" />
                        <span aria-hidden="true" className="tape tape--tr" />
                      </>
                    ) : (
                      <span aria-hidden="true" className={`tape tape--${look.tape}`} />
                    )}
                    <img src={photo.src} alt="" loading="lazy" className="aspect-[4/4.6] w-full object-cover" />
                    <span className="block min-h-[2.6rem] px-1 pt-2 pb-2.5 text-center font-hand text-[0.92rem] leading-tight text-cocoa-soft">{photo.caption}</span>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
        {/* Optional street along the bottom of the wall: lamp, front door, and whatever is passed in (a link). */}
        {children && (
          <div className="wall-street">
            <span aria-hidden="true" className="wall-lamp" />
            <span aria-hidden="true" className="wall-door" />
            <div className="wall-street-end">{children}</div>
          </div>
        )}
      </div>
      <Lightbox photos={photos} index={openIndex} onChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
    </>
  )
}
