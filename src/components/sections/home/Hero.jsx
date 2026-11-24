import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { hero, puppies, site } from '../../../data/content.js'
import { PupPeek } from '../../ui/Pup.jsx'

const lineup = puppies.slice(0, 6)

export default function Hero() {
  // Which puppy's name tag is showing. It moves along the row on its own, and jumps to whichever photo you hover.
  const [tagIndex, setTagIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setTagIndex((i) => (i + 1) % lineup.length), 2600)
    return () => clearInterval(timer)
  }, [])

  return (
    <section aria-labelledby="hero-title" className="relative flex min-h-[calc(100svh-4rem)] flex-col overflow-x-clip bg-linear-to-b from-milk to-[#fff1d8] md:min-h-[calc(100svh-4.75rem)]">
      <span aria-hidden="true" className="hero-sun" />

      <div className="gutter relative pt-[clamp(1rem,4.5vh,3.75rem)] text-center">
        <p className="relative inline-block font-hand text-[clamp(1.1rem,1.7vw,1.5rem)] font-medium text-toffee-ink">
          {site.tagline}
          <svg aria-hidden="true" viewBox="0 0 220 24" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-3 w-full text-toffee">
            <path d="M4 14C20 5 34 21 52 12S82 4 100 13 132 21 150 12 180 4 198 13 212 15 216 13" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </p>
        <h1 id="hero-title" className="mx-auto mt-[clamp(0.5rem,1.6vh,1.1rem)] max-w-[15ch] font-display text-[clamp(2.6rem,min(9.2vw,11vh),8.4rem)] leading-[0.92] font-extrabold tracking-[-0.025em]">
          {hero.title.map((line) => (
            <span key={line} className="block">{line}</span>
          ))}
        </h1>
        <p className="mx-auto mt-[clamp(0.9rem,2.2vh,1.4rem)] max-w-[46ch] text-[clamp(1.05rem,1.25vw,1.28rem)] leading-normal text-cocoa-soft">{hero.lede}</p>
        <div className="mt-[clamp(1.1rem,3vh,2rem)] flex flex-wrap justify-center gap-3">
          <Link to="/puppies" className="btn btn-primary">{hero.primaryCta}</Link>
          <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">{hero.whatsappCta}</a>
        </div>
      </div>

      <div className="hero-stage">
        <ul aria-label={hero.lineupLabel} className="absolute inset-0">
          {lineup.map((pup, index) => (
            <li key={pup.slug} className="hero-seat" style={{ '--i': index }}>
              <Link
                to={`/puppies/${pup.slug}`}
                aria-label={`Meet ${pup.name}, ${pup.breed}`}
                onMouseEnter={() => setTagIndex(index)}
                onFocus={() => setTagIndex(index)}
                className="hero-pup block rounded-t-full"
              >
                <span className="hero-photo relative block overflow-hidden rounded-t-full border-[2.4px] border-b-0 border-cocoa bg-honey-soft">
                  <img src={pup.image} alt="" className="absolute inset-0 size-full object-cover" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Name tags sit in their own layer above the cushion; tilting the photo seats would otherwise trap them underneath. */}
        <ul aria-hidden="true" className="pointer-events-none absolute inset-0 z-31">
          {lineup.map((pup, index) => (
            <li key={pup.slug} className="hero-seat">
              <span className="relative block h-(--h)">
                <span data-show={index === tagIndex || undefined} className="hero-tag font-hand">{pup.name}</span>
              </span>
            </li>
          ))}
        </ul>

        {/* Hover: head tilts, eyes close, tongue out, "hm?" pops up (all CSS, .hero-peek in index.css). */}
        <div aria-hidden="true" className="hero-teddy hero-peek">
          <span className="pup-bubble font-hand">{hero.peek}</span>
          <PupPeek />
        </div>

        <div aria-hidden="true" className="hero-quilt">
          <svg width="100%" height="40" preserveAspectRatio="none" className="absolute -top-[39px] left-0 block">
            <defs>
              <pattern id="hero-scallop" width="76" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40V27A38 25 0 0 1 76 27V40Z" fill="#fff1d8" />
                <path d="M0 27A38 25 0 0 1 76 27" fill="none" stroke="#2a170e" strokeWidth="3" />
                <path d="M11 33A27 19 0 0 1 65 33" fill="none" stroke="#2a170e" strokeWidth="1.6" strokeDasharray="3.5 5.5" strokeLinecap="round" opacity="0.42" />
              </pattern>
            </defs>
            <rect width="100%" height="40" fill="url(#hero-scallop)" />
          </svg>
        </div>
      </div>
    </section>
  )
}
