import { useState } from 'react'
import { Link } from 'react-router-dom'
import { howItWorks, site } from '../data/content.js'
import Stamp, { Icon } from '../components/ui/Stamp.jsx'

const { ways, promise, delivery, why, cta } = howItWorks

export default function HowItWorks() {
  const [way, setWay] = useState('local')
  const current = ways[way]

  return (
    <div className="bg-linear-to-b from-[#fffbf3] via-[#fbe3b4] to-[#f6cc85]">
      <section aria-labelledby="how-title" className="gutter mx-auto max-w-[110rem] pt-[clamp(2.5rem,6vh,4rem)]">
        <div className="grid gap-6 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-start lg:gap-12">
          <h1 id="how-title" className="display-title text-[clamp(3rem,8.5vw,8rem)]">{howItWorks.title}</h1>
          <p className="max-w-[44ch] text-[clamp(1.05rem,1.4vw,1.3rem)] text-cocoa-soft lg:pt-6">{howItWorks.lede}</p>
        </div>
        <nav aria-label="On this page" className="mt-8 flex flex-wrap gap-2.5">
          {howItWorks.chapters.map((chapter, index) => (
            <a key={chapter.id} href={`#${chapter.id}`} className="filter-chip">
              <span className="font-display font-extrabold text-toffee">{index + 1}</span> {chapter.label}
            </a>
          ))}
        </nav>
      </section>

      <section id="two-ways" aria-labelledby="two-ways-title" className="gutter mx-auto mt-20 max-w-[110rem] scroll-mt-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-hand text-lg text-toffee-ink">{ways.kicker}</p>
            <h2 id="two-ways-title" className="display-title text-[clamp(2.4rem,5vw,4.5rem)]">{ways.title}</h2>
          </div>
          <div className="flex rounded-full border-[3px] border-cocoa bg-milk p-1.5">
            {['local', 'imported'].map((key) => (
              <button
                key={key}
                type="button"
                aria-pressed={way === key}
                onClick={() => setWay(key)}
                className="rounded-full px-6 py-2 text-center transition-colors aria-pressed:bg-toffee-deep aria-pressed:text-milk"
              >
                <span className="block font-display text-xl font-extrabold">{ways[key].tab}</span>
                <span className="block text-xs">{ways[key].sub}</span>
              </button>
            ))}
          </div>
        </div>
        <div aria-live="polite" className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="display-title text-[clamp(1.9rem,3.4vw,3rem)]">{current.title}</h3>
            <p className="mt-4 max-w-[48ch] text-lg text-cocoa-soft">{current.text}</p>
          </div>
          <div className="relative h-72 overflow-hidden rounded-3xl border-[3px] border-cocoa bg-linear-to-b from-[#fff3dc] to-[#f8d79e] shadow-[8px_10px_0_rgba(42,23,14,0.14)]">
            <p className="absolute top-5 left-6 font-hand text-toffee-ink">{current.scene}</p>
            {way === 'local' ? (
              <>
                <span className="absolute top-12 right-16 size-20 rounded-full bg-honey shadow-[0_0_40px_10px_rgba(242,190,107,0.5)]" />
                <svg aria-hidden="true" viewBox="0 0 300 120" className="absolute inset-x-0 bottom-0 w-full text-cocoa">
                  <path d="M4 116H296M18 116V84H34V116M42 116V64H58V116M66 116V88H80V116M112 116V72L124 64V116M146 116V40L150 32V16L153 10L156 16V32L160 40V116M170 116V66L184 74V116M196 116V80H214V116M222 116V58H238V116M246 116V90H268V116" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 660 300" className="absolute inset-0 size-full">
                <path d="M60 240C180 60 460 40 600 170" fill="none" stroke="var(--color-toffee-deep)" strokeWidth="3" strokeDasharray="3 11" strokeLinecap="round" />
                <circle cx="60" cy="240" r="8" fill="var(--color-toffee-deep)" />
                <circle cx="600" cy="170" r="8" fill="var(--color-toffee-deep)" />
                <g transform="translate(320 92) rotate(-12)" stroke="var(--color-cocoa)" strokeWidth="4" strokeLinejoin="round">
                  <path d="M-10 30L22 68H48L36 30Z" fill="var(--color-toffee-deep)" />
                  <path d="M-100 0C-100 -24 -70 -30 -46 -30H50C78 -30 98 -16 104 0C98 16 78 30 50 30H-46C-70 30 -100 24 -100 0Z" fill="var(--color-milk)" />
                  <path d="M-10 -30L20 -66H44L34 -30Z" fill="var(--color-toffee)" />
                </g>
              </svg>
            )}
          </div>
        </div>
      </section>

      <section id="promise" aria-labelledby="promise-title" className="gutter mx-auto mt-24 max-w-[110rem] scroll-mt-28">
        <div className="book-page rounded-3xl">
          <h2 id="promise-title" className="display-title max-w-[14ch] text-[clamp(2.4rem,5vw,4.5rem)]">{promise.title}</h2>
          <ul className="mt-10 grid gap-10 md:grid-cols-3">
            {promise.stamps.map((stamp) => (
              <li key={stamp.title}><Stamp stamp={stamp} /></li>
            ))}
          </ul>
        </div>
      </section>

      <section id="delivery" aria-labelledby="delivery-title" className="gutter mx-auto mt-24 max-w-[110rem] scroll-mt-28">
        <h2 id="delivery-title" className="display-title max-w-[12ch] text-[clamp(2.4rem,5vw,4.5rem)]">{delivery.title}</h2>
        <p className="mt-4 max-w-[52ch] text-lg text-cocoa-soft">{delivery.lede}</p>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {delivery.items.map((item) => (
            <li key={item.title} className="border-t-[3px] border-dashed border-cocoa/30 pt-5">
              <h3 className="font-display text-xl font-extrabold">{item.title}</h3>
              <p className="mt-2 text-cocoa-soft">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="why-us" aria-labelledby="why-title" className="gutter mx-auto mt-24 grid max-w-[110rem] scroll-mt-28 gap-10 lg:grid-cols-2">
        <div>
          <h2 id="why-title" className="display-title text-[clamp(2.4rem,5vw,4.5rem)]">{why.title}</h2>
          <p className="mt-5 max-w-[46ch] text-lg text-cocoa-soft">{why.text}</p>
        </div>
        <ul className="grid gap-7">
          {why.items.map((item) => (
            <li key={item.title} className="flex gap-4">
              <Icon name={item.icon} className="size-11 shrink-0 text-toffee-deep" />
              <div>
                <h3 className="font-display text-2xl font-extrabold">{item.title}</h3>
                <p className="mt-1 text-cocoa-soft">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="how-cta-title" className="gutter mx-auto max-w-[110rem] pt-24 pb-28">
        <div className="relative grid gap-8 rounded-3xl border-[3px] border-cocoa bg-milk p-[clamp(1.5rem,4vw,3.25rem)] shadow-[8px_10px_0_rgba(42,23,14,0.14)] md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <div>
            <h2 id="how-cta-title" className="display-title text-[clamp(2rem,4vw,3.6rem)]">{cta.title}</h2>
            <p className="mt-4 max-w-[58ch] text-lg text-cocoa-soft">{cta.text}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">{cta.whatsapp}</a>
              <Link to="/puppies" className="btn btn-ghost">{cta.puppies}</Link>
            </div>
          </div>
          <img src="/images/icons/pup-stand.svg" alt="" className="mx-auto w-48" />
        </div>
      </section>
    </div>
  )
}
