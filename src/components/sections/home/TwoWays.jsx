import { Link } from 'react-router-dom'
import { paths } from '../../../data/content.js'
import FlightPath from '../../ui/FlightPath.jsx'

export default function TwoWays() {
  return (
    <section aria-labelledby="paths-title" className="bg-linear-to-b from-honey-soft to-[#f7d18d] pt-[clamp(4.5rem,11vh,8rem)] pb-[clamp(3rem,8vh,6rem)]">
      <div className="gutter mx-auto max-w-[110rem]">
        <h2 id="paths-title" className="mx-auto max-w-[13ch] text-center font-display text-[clamp(2.6rem,6.4vw,6.25rem)] leading-[0.92] font-extrabold tracking-[-0.025em] text-balance">
          {paths.title}
        </h2>

        <div className="ways">
          {/* Signpost pole between the two signs (wide screens only). */}
          <div aria-hidden="true" className="ways-post" />

          <article aria-labelledby="way-local" className="way way--left">
            <h3 id="way-local" className="way-sign way-sign--left font-display font-extrabold">{paths.local.sign}</h3>
            <div className="way-scene">
              <svg aria-hidden="true" viewBox="0 0 300 120" className="absolute inset-x-0 bottom-0 w-full text-cocoa/30">
                <path
                  d="M4 116H296M18 116V84H34V116M42 116V64H58V116M66 116V88H80V116M112 116V72L124 64V116M146 116V40L150 32V16L153 10L156 16V32L160 40V116M170 116V66L184 74V116M196 116V80H214V116M222 116V58H238V116M246 116V90H268V116"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <figure className="way-window">
                <span className="way-window-glass">
                  <img src={paths.local.image} alt="" loading="lazy" className="size-full rounded-b-[0.4rem] object-cover" />
                </span>
                <figcaption className="mt-1.5 font-hand text-[0.95rem]">{paths.local.caption}</figcaption>
              </figure>
            </div>
            <p className="mt-6 max-w-[40ch] text-cocoa-soft">{paths.local.text}</p>
            <Link to="/puppies?origin=local" className="btn btn-primary mt-5">{paths.local.cta}</Link>
          </article>

          <article aria-labelledby="way-imported" className="way way--right">
            <h3 id="way-imported" className="way-sign way-sign--right font-display font-extrabold">{paths.imported.sign}</h3>
            <div className="way-scene">
              <FlightPath image={paths.imported.image} label={paths.planeLabel} className="way-flight absolute inset-0 size-full" />
            </div>
            <p className="mt-6 max-w-[40ch] text-cocoa-soft">{paths.imported.text}</p>
            <Link to="/puppies?origin=imported" className="btn btn-primary mt-5">{paths.imported.cta}</Link>
          </article>

          <img src="/images/icons/pup-stand.svg" alt="" data-pup-stop className="ways-pup" />
        </div>
      </div>
    </section>
  )
}
