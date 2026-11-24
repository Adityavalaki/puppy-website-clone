import { Link } from 'react-router-dom'
import { families } from '../../../data/content.js'
import PolaroidWall from '../../ui/PolaroidWall.jsx'

export default function HappyFamilies() {
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

      <PolaroidWall photos={families.photos}>
        <Link to="/happy-families" className="btn btn-primary">{families.cta}</Link>
      </PolaroidWall>
    </section>
  )
}
