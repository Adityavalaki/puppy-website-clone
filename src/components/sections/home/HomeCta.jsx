import { Link } from 'react-router-dom'
import { homeCta, site } from '../../../data/content.js'

export default function HomeCta() {
  return (
    <section aria-labelledby="cta-title" className="bg-linear-to-b from-[#2f1a10] to-night pt-[clamp(4.5rem,10vh,7rem)] text-center text-milk">
      <div className="gutter">
        <h2 id="cta-title" className="mx-auto max-w-[15ch] font-display text-[clamp(2.6rem,6.4vw,6.25rem)] leading-[0.92] font-extrabold tracking-[-0.025em] text-balance">
          {homeCta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-[52ch] text-[clamp(1.05rem,1.3vw,1.3rem)] leading-[1.55] text-milk/80">{homeCta.lede}</p>
      </div>

      {/* A little house front: wall, lit doorway with a puppy inside, a door that swings open as it scrolls in. */}
      <div className="house">
        <span aria-hidden="true" className="house-plant house-plant--left" />
        <span aria-hidden="true" className="house-lamp" />
        <div className="house-doorway">
          <span className="house-inside">
            <img src={homeCta.image} alt="A puppy waiting inside" loading="lazy" className="size-full object-cover" />
          </span>
          <span aria-hidden="true" className="house-door">
            <span className="house-peep" />
            <span className="house-knob" />
          </span>
        </div>
        <span aria-hidden="true" className="house-plant house-plant--right" />
        <span aria-hidden="true" className="house-mat font-hand">{homeCta.mat}</span>
        <img src="/images/icons/pup-stand.svg" alt="" data-pup-stop className="house-pup" />
      </div>

      <div className="gutter flex flex-wrap justify-center gap-3 pt-[clamp(2rem,4vh,2.75rem)] pb-[clamp(5rem,11vh,8rem)]">
        <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">{homeCta.whatsappCta}</a>
        <Link to="/contact" className="btn btn-ghost-light">{homeCta.contactCta}</Link>
      </div>
    </section>
  )
}
