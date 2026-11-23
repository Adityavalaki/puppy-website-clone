import { useState } from 'react'
import { Link } from 'react-router-dom'
import { families } from '../../../data/content.js'
import Lightbox from '../../ui/Lightbox.jsx'

// Each polaroid gets a slight tilt and a strip of tape, cycling through these looks.
const looks = [
  { tilt: '-2.2deg', tape: 'center', color: '#f6d79a' },
  { tilt: '1.6deg', tape: 'left', color: '#f9cdbf' },
  { tilt: '-1deg', tape: 'right', color: '#bfddf5' },
  { tilt: '2deg', tape: 'corners', color: '#f6d79a' },
]

export default function HappyFamilies() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section aria-labelledby="families-title" className="overflow-x-clip bg-linear-to-b from-[#a65a30] to-[#4d2b19] pt-[clamp(3rem,7vh,5rem)] pb-[clamp(4rem,9vh,6rem)] text-milk">
      <div className="gutter mx-auto grid max-w-[110rem] gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,31rem)] lg:items-end">
        <div>
          <h2 id="families-title" className="font-display text-[clamp(2.6rem,6.4vw,6.25rem)] leading-[0.92] font-extrabold tracking-[-0.025em] text-balance">
            {families.title}
          </h2>
          <p className="mt-5 max-w-[50ch] text-[clamp(1.125rem,1.4vw,1.375rem)] leading-normal text-milk/80">{families.lede}</p>
        </div>
        <figure className="quote-bubble">
          <blockquote className="font-display text-[clamp(1.02rem,1.25vw,1.2rem)] leading-normal">“{families.quote}”</blockquote>
          <figcaption className="mt-3 font-hand text-toffee-ink">{families.quoteBy}</figcaption>
        </figure>
      </div>

      <div className="photo-wall">
        <ul aria-label="Photos from TeddyPups families" className="photo-wall-prints">
          {families.photos.map((photo, index) => {
            const look = looks[index % looks.length]
            return (
              <li key={photo.src}>
                <button
                  type="button"
                  aria-label={`Open photo ${index + 1} of ${families.photos.length}: ${photo.caption}`}
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

      <div className="mt-12 text-center">
        <Link to="/happy-families" className="btn btn-ghost-light">{families.cta}</Link>
      </div>

      <Lightbox photos={families.photos} index={openIndex} onChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
    </section>
  )
}
