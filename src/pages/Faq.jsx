import { useEffect, useRef, useState } from 'react'
import { faqPage, faqs, site } from '../data/content.js'
import { PupSit } from '../components/ui/Pup.jsx'

// Glossy pin colours and small tilts so the notes look hand-pinned to the cork board.
const pins = ['#c2622b', '#2f6e9e', '#d4893f', '#1f6b45']
const tilts = ['-1.2deg', '0.8deg', '-0.5deg', '1deg']

export default function Faq() {
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(-1)
  const listRef = useRef(null)
  const term = search.trim().toLowerCase()
  const shown = faqs.filter((item) => `${item.q} ${item.a}`.toLowerCase().includes(term))

  // Notes drop onto the board as they scroll into view, their pins popping in just after (index.css,
  // .note[data-armed]). Armed from here and only when motion is allowed, so otherwise they simply show.
  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: no-preference)').matches) return
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.dataset.revealed = ''
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.3 })
    for (const note of listRef.current.children) {
      if (note.hasAttribute('data-revealed')) continue
      note.dataset.armed = ''
      observer.observe(note)
    }
    return () => observer.disconnect()
  }, [term])

  return (
    <section aria-labelledby="faq-title" className="overflow-hidden bg-linear-to-b from-[#a95e32] to-[#331c11] pt-[clamp(2.5rem,6vh,4rem)] pb-28 text-milk">
      <div className="gutter mx-auto max-w-[110rem]">
        <h1 id="faq-title" className="display-title max-w-[10ch] text-[clamp(3rem,8.5vw,8rem)]">{faqPage.title}</h1>
        <p className="mt-6 max-w-[48ch] text-lg text-milk/85">{faqPage.lede}</p>
      </div>

      <div data-open={open !== -1 || undefined} className="notes gutter mx-auto mt-12 max-w-[110rem]">
        <div className="notes-side">
          <label htmlFor="faq-search" className="font-hand text-[1.15rem] text-milk/80">{faqPage.searchLabel}</label>
          <div className="notes-search">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="notes-lens">
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="M15.5 15.5l5 5" />
            </svg>
            <input id="faq-search" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder={faqPage.searchPlaceholder} />
          </div>
          <p aria-live="polite" className="font-semibold text-milk/80">{shown.length} {shown.length === 1 ? 'note' : 'notes'} on the board</p>
          {/* Teddy reads the notes: "?" until one is open, then "!". */}
          <div aria-hidden="true" className="notes-teddy">
            <span className="notes-bubble font-hand">
              <span className="notes-q">?</span>
              <span className="notes-a">!</span>
            </span>
            <PupSit />
          </div>
          <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp justify-self-start">{faqPage.ask}</a>
        </div>

        {/* Cork board: each question is a paper note with a folded corner; it unfolds to show its answer. */}
        <div className="notes-board">
          {shown.length === 0 && <p className="note note--empty">{faqPage.empty}</p>}
          <ul ref={listRef} className="notes-list">
            {shown.map((item, index) => {
              const key = faqs.indexOf(item)
              const unfolded = open === key
              const id = `faq-answer-${key}`
              return (
                <li
                  key={item.q}
                  data-unfolded={unfolded || undefined}
                  className="note"
                  style={{ '--tilt': tilts[index % tilts.length], '--pin': pins[index % pins.length], '--i': index }}
                >
                  <span aria-hidden="true" className="note-pin" />
                  <h2>
                    <button type="button" aria-expanded={unfolded} aria-controls={id} onClick={() => setOpen(unfolded ? -1 : key)} className="note-q">
                      <span>{item.q}</span>
                      <span aria-hidden="true" className="note-chevron" />
                    </button>
                  </h2>
                  <div id={id} inert={!unfolded} className="note-answer">
                    <div className="note-flap">
                      <p>{item.a}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
