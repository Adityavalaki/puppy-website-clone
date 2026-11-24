import { useState } from 'react'
import { faqPage, faqs, site } from '../data/content.js'
import Pup from '../components/ui/Pup.jsx'

// Pin colours and tilts so the notes look hand-pinned to the cork board.
const pins = ['#c2622b', '#2f6e9e', '#d4893f', '#1f6b45']
const tilts = ['-1.2deg', '0.8deg', '-0.5deg', '1deg']

export default function Faq() {
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(0)
  const term = search.trim().toLowerCase()
  const shown = faqs.filter((item) => `${item.q} ${item.a}`.toLowerCase().includes(term))

  return (
    <section aria-labelledby="faq-title" className="overflow-hidden bg-linear-to-b from-[#a95e32] to-[#331c11] pt-[clamp(2.5rem,6vh,4rem)] pb-28 text-milk">
      <div className="gutter mx-auto grid max-w-[110rem] gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
        <div className="lg:col-span-2">
          <h1 id="faq-title" className="display-title max-w-[10ch] text-[clamp(3rem,8.5vw,8rem)]">{faqPage.title}</h1>
          <p className="mt-6 max-w-[48ch] text-lg text-milk/85">{faqPage.lede}</p>
        </div>

        <div>
          <label htmlFor="faq-search" className="font-hand text-lg text-honey">{faqPage.searchLabel}</label>
          <div className="relative mt-2">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-cocoa" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="11" cy="11" r="6.5" />
              <path d="M16 16l4.5 4.5" />
            </svg>
            <input
              id="faq-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={faqPage.searchPlaceholder}
              className="h-13 w-full rounded-full border-[3px] border-cocoa bg-milk pr-4 pl-12 text-cocoa shadow-[0_6px_0_-2px_var(--color-cocoa)] placeholder:text-cocoa-soft/70"
            />
          </div>
          <p aria-live="polite" className="mt-3 font-semibold">{shown.length} {shown.length === 1 ? 'note' : 'notes'} on the board</p>
          <div className="relative mt-10 hidden w-44 lg:block">
            <span aria-hidden="true" className="float absolute -top-8 left-24 grid size-12 place-items-center rounded-full border-[3px] border-cocoa bg-milk font-display text-2xl font-extrabold text-toffee-deep">!</span>
            <Pup />
          </div>
          <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp mt-8">{faqPage.ask}</a>
        </div>

        {/* Cork board: each question is a pinned note that opens to show its answer (one at a time). */}
        <div className="cork-board">
          {shown.length === 0 && <p className="rounded-xl bg-milk p-6 text-cocoa">{faqPage.empty}</p>}
          <ul className="grid gap-6">
            {shown.map((item, index) => {
              const expanded = open === faqs.indexOf(item)
              const id = `faq-answer-${faqs.indexOf(item)}`
              return (
                <li key={item.q} className="faq-note" style={{ '--tilt': tilts[index % tilts.length], '--pin': pins[index % pins.length] }}>
                  <h2>
                    <button
                      type="button"
                      aria-expanded={expanded}
                      aria-controls={id}
                      onClick={() => setOpen(expanded ? -1 : faqs.indexOf(item))}
                      className="flex w-full items-start justify-between gap-4 text-left font-display text-[clamp(1.1rem,1.6vw,1.4rem)] font-extrabold"
                    >
                      {item.q}
                      <span aria-hidden="true" className={`mt-1 shrink-0 text-toffee-deep transition-transform ${expanded ? 'rotate-180' : ''}`}>⌄</span>
                    </button>
                  </h2>
                  <div id={id} hidden={!expanded} className="mt-3 border-t-2 border-dashed border-cocoa/25 pt-3 text-cocoa-soft">{item.a}</div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
