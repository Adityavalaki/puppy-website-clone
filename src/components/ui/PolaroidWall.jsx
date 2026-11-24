import { useState } from 'react'
import Lightbox from './Lightbox.jsx'

// Each polaroid gets a slight tilt and a strip of tape, cycling through these looks.
const looks = [
  { tilt: '-2.2deg', tape: 'center', color: '#f6d79a' },
  { tilt: '1.6deg', tape: 'left', color: '#f9cdbf' },
  { tilt: '-1deg', tape: 'right', color: '#bfddf5' },
  { tilt: '2deg', tape: 'corners', color: '#f6d79a' },
]

// Wooden wall of taped polaroids; clicking one opens it in the lightbox.
// `all` shows every photo on phones too (the home page shows six there).
export default function PolaroidWall({ photos, all = false }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <>
      <div className="photo-wall">
        <ul aria-label="Photos from TeddyPups families" className={`photo-wall-prints ${all ? 'photo-wall-prints--all' : ''}`}>
          {photos.map((photo, index) => {
            const look = looks[index % looks.length]
            return (
              <li key={photo.src}>
                <button
                  type="button"
                  aria-label={`Open photo ${index + 1} of ${photos.length}: ${photo.caption}`}
                  onClick={() => setOpenIndex(index)}
                  className="polaroid-button"
                >
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
      </div>
      <Lightbox photos={photos} index={openIndex} onChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
    </>
  )
}
