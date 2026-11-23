import { Link } from 'react-router-dom'
import { paths } from '../../../data/content.js'

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
              <svg role="img" aria-label={paths.planeLabel} viewBox="0 0 660 300" className="way-flight absolute inset-0 size-full overflow-visible">
                <defs>
                  <clipPath id="plane-window">
                    <circle cx="10" r="22" />
                  </clipPath>
                </defs>
                <path d="M40 250C160 60 460 30 620 170" fill="none" stroke="var(--color-toffee-deep)" strokeWidth="3" strokeDasharray="3 11" strokeLinecap="round" />
                <circle cx="40" cy="250" r="7" fill="var(--color-toffee-deep)" />
                <circle cx="620" cy="170" r="7" fill="var(--color-toffee-deep)" />
                <text x="40" y="284" textAnchor="middle" className="fill-cocoa-soft font-hand text-[19px]">Korea</text>
                <text x="620" y="204" textAnchor="middle" className="fill-cocoa-soft font-hand text-[19px]">Dubai</text>
                <g transform="translate(300 94) rotate(-14)">
                  <g className="plane" stroke="var(--color-cocoa)" strokeWidth="4" strokeLinejoin="round">
                    <path d="M-10 30L22 68H48L36 30Z" fill="var(--color-toffee-deep)" />
                    <path d="M-92 -12L-112 -44H-90L-66 -22Z" fill="var(--color-toffee)" />
                    <path d="M-100 0C-100 -24 -70 -30 -46 -30H50C78 -30 98 -16 104 0C98 16 78 30 50 30H-46C-70 30 -100 24 -100 0Z" fill="var(--color-milk)" />
                    <path d="M-10 -30L20 -66H44L34 -30Z" fill="var(--color-toffee)" />
                    <path d="M80 -16C88 -13 94 -8 97 0" fill="none" strokeWidth="3.5" strokeLinecap="round" />
                    <image href={paths.imported.image} x="-12" y="-22" width="44" height="44" preserveAspectRatio="xMidYMid slice" clipPath="url(#plane-window)" />
                    <circle cx="10" r="22" fill="none" />
                  </g>
                </g>
              </svg>
            </div>
            <p className="mt-6 max-w-[40ch] text-cocoa-soft">{paths.imported.text}</p>
            <Link to="/puppies?origin=imported" className="btn btn-primary mt-5">{paths.imported.cta}</Link>
          </article>

          <img src="/images/icons/pup-stand.svg" alt="" className="ways-pup" />
        </div>
      </div>
    </section>
  )
}
