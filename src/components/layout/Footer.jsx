import { Link } from 'react-router-dom'
import { footer, site } from '../../data/content.js'
import { PupPeek } from '../ui/Pup.jsx'
import Sparkle from '../ui/Sparkle.jsx'

// Star positions in the night sky (left %, top %, size px). Each one twinkles 0.4s after the previous.
const stars = [
  [6, 18, 12.6], [14, 42, 8.4], [23, 12, 9.8], [31, 30, 7], [44, 9, 11.2],
  [52, 36, 7.7], [63, 15, 10.5], [71, 40, 7], [92, 33, 8.4],
]

const year = new Date().getFullYear()

export default function Footer() {
  return (
    // Extra bottom padding on phones so the fixed WhatsApp bar never covers the footer.
    <footer className="relative bg-night pb-[calc(6rem+env(safe-area-inset-bottom))] text-milk md:pb-10">
      <svg aria-hidden="true" viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute bottom-[calc(100%-1px)] left-0 block h-[clamp(2.5rem,5vw,5rem)] w-full fill-night">
        <path d="M0 80V40C160 10 300 10 460 30S760 70 940 44 1260 10 1440 36V80Z" />
      </svg>

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-6 h-64 overflow-hidden">
        {stars.map(([left, top, size], index) => (
          <Sparkle
            key={index}
            className="twinkle absolute text-honey"
            style={{ left: `${left}%`, top: `${top}%`, width: size, animationDelay: `${index * 0.4}s` }}
          />
        ))}
        {/* Crescent moon: a transparent circle whose inset shadow draws the lit edge. */}
        <span className="absolute top-[10%] right-[9%] aspect-square w-[clamp(2.6rem,4vw,3.6rem)] -rotate-18 rounded-full shadow-[inset_-0.85rem_0.25rem_0_0_var(--color-honey-soft)] drop-shadow-[0_0_18px_rgba(251,227,180,0.35)]" />
      </div>

      <div className="gutter relative mx-auto grid max-w-[110rem] gap-12 pt-20 md:grid-cols-12 md:gap-x-12 md:gap-y-6 md:pt-28">
        <div className="md:col-span-5">
          <p className="font-display text-[clamp(2rem,4.2vw,4rem)] leading-[0.92] font-extrabold text-honey-soft">{footer.title}</p>
          <p className="mt-5 max-w-md text-milk/80">{footer.blurb}</p>
        </div>

        {/* On phones the basket drops to the end; from 768px it sits under the intro on the left.
            The pup in it is the walking dog's last stop on Home: empty until the dog gets there (Mascot.jsx). */}
        <div aria-hidden="true" className="order-last md:order-none md:col-span-5 md:col-start-1 md:row-start-2">
          <div className="basket">
            <svg viewBox="0 0 300 240" className="basket-back">
              <ellipse cx="150" cy="152" rx="118" ry="16" fill="#8e5a2b" stroke="#2a170e" strokeWidth="5" />
            </svg>
            <PupPeek data-pup-stop data-pup-peek className="basket-peek" />
            <svg viewBox="0 0 300 240" className="basket-front" fill="none" stroke="#2a170e" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round">
              <path d="M38 158H262L232 236H68Z" fill="#d9a05b" />
              <path d="M52 184H248M60 210H240" stroke="#a8692f" strokeWidth="4" />
              <path d="M95 162L102 234M150 162V234M205 162L198 234" stroke="#a8692f" strokeWidth="4" />
              <rect x="30" y="148" width="240" height="18" rx="9" fill="#e8b56f" />
            </svg>
          </div>
        </div>

        <nav aria-label="Footer" className="md:col-span-3 md:col-start-7 md:row-span-2 md:row-start-1">
          <h2 className="font-hand text-lg font-medium text-honey">Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {footer.exploreLinks.map(({ label, to }) => (
              <li key={label}>
                <Link to={to} className="font-semibold text-milk/90 underline-offset-4 hover:text-honey hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3 md:row-span-2 md:row-start-1">
          <h2 className="font-hand text-lg font-medium text-honey">Say hello</h2>
          <ul className="mt-4 space-y-2.5 text-milk/90">
            <li>
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-honey">
                WhatsApp {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all hover:text-honey">
                {site.email}
              </a>
            </li>
            <li>{site.address}</li>
          </ul>
          <ul aria-label="Social media" className="mt-6 flex flex-wrap gap-3">
            {footer.socials.map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center rounded-full border-2 border-milk/30 px-4 text-sm font-semibold hover:border-honey hover:text-honey">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="gutter relative mx-auto mt-16 flex max-w-[110rem] flex-col items-start justify-between gap-4 border-t border-milk/15 pt-6 text-sm text-milk/60 md:flex-row md:items-center">
        <span className="flex items-center gap-3">
          <img src="/images/icons/logo.png" alt="" className="size-9" />© {year} {site.name}
        </span>
        <span className="font-hand text-base font-medium text-honey/80">{site.tagline}</span>
      </div>
    </footer>
  )
}
