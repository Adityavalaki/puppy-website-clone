import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { journey, site, whatsappMessage } from '../../../data/content.js'
import Pup from '../../ui/Pup.jsx'

// Wide screens with motion allowed reveal the chat one step at a time as you scroll; everywhere else it shows in full.
const liveQuery = '(min-width: 1024px) and (prefers-reduced-motion: no-preference)'
const lastStep = journey.steps.length - 1

export default function Journey() {
  const stepRefs = useRef([])
  const [live, setLive] = useState(() => window.matchMedia(liveQuery).matches)
  const [scrollStep, setScrollStep] = useState(-1)
  // Without the scroll reveal every step counts as reached.
  const active = live ? scrollStep : lastStep

  useEffect(() => {
    const query = window.matchMedia(liveQuery)
    const onChange = () => setLive(query.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  // The active step is the last one whose top has scrolled past 55% of the screen height.
  useEffect(() => {
    if (!live) return
    const onScroll = () => {
      const line = window.innerHeight * 0.55
      setScrollStep(stepRefs.current.filter((step) => step.getBoundingClientRect().top < line).length - 1)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [live])

  return (
    <section aria-labelledby="journey-title" className="bg-linear-to-b from-[#f7d18d] to-[#f0b866] pt-[clamp(4.5rem,10vh,7rem)] pb-[clamp(4rem,9vh,6rem)]">
      <div className="journey-grid gutter">
        <div>
          <h2 id="journey-title" className="font-display text-[clamp(2.6rem,6.4vw,6.25rem)] leading-[0.92] font-extrabold tracking-[-0.025em] text-balance">
            {journey.title}
          </h2>
          <p className="mt-5 max-w-[42ch] text-[clamp(1.125rem,1.4vw,1.375rem)] leading-normal text-cocoa-soft">{journey.lede}</p>
          <ol className="journey-steps">
            {journey.steps.map((step, index) => (
              <li
                key={step.title}
                ref={(el) => {
                  stepRefs.current[index] = el
                }}
                data-active={index === active || undefined}
                data-done={index < active || undefined}
                className="journey-step"
              >
                <span aria-hidden="true" className="journey-num font-display font-extrabold">{index + 1}</span>
                <h3 className="font-display text-[clamp(1.6rem,2.3vw,2.3rem)] leading-[1.05] font-extrabold tracking-[-0.025em]">{step.title}</h3>
                <p className="mt-2 max-w-[40ch] text-cocoa-soft">{step.text}</p>
              </li>
            ))}
          </ol>
          <Link to="/how-it-works" className="btn btn-ghost mt-8">{journey.cta}</Link>
        </div>

        <div className="journey-side">
          <div role="group" aria-label={journey.phoneLabel} className="phone">
            <div className="phone-bar">
              <img src="/images/icons/logo.svg" alt="" className="size-10 rounded-full" />
              <span>
                <span className="block text-[0.98rem] leading-tight font-bold">{site.name}</span>
                <span className="block text-[0.78rem] text-cocoa-soft">online</span>
              </span>
            </div>

            {/* Messages stack from the bottom, like a real chat; older ones slide out of view at the top. */}
            <div className="phone-screen">
              <p className="msg msg--me">{whatsappMessage}</p>
              {active >= 0 && (
                <div className="msg-group">
                  <div className="msg msg--them">
                    <p>{journey.steps[0].text}</p>
                    <ul aria-label="Breeds we have now" className="mt-2 flex flex-wrap gap-1">
                      {journey.breeds.map((breed) => (
                        <li key={breed.slug}>
                          <Link to={`/puppies?breed=${breed.slug}`} className="chip">{breed.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              {active >= 1 && (
                <div className="msg-group">
                  <div className="msg msg--them p-1">
                    <div className="grid w-46 grid-cols-2 gap-1">
                      {journey.snaps.map((src) => (
                        <img key={src} src={src} alt="" loading="lazy" className="aspect-square w-full rounded-[0.65rem] object-cover" />
                      ))}
                    </div>
                  </div>
                  <p className="msg msg--them">{journey.steps[1].text}</p>
                </div>
              )}
              {active >= 2 && (
                <div className="msg-group">
                  <div className="msg msg--them">
                    <p>{journey.steps[2].text}</p>
                    <svg aria-hidden="true" viewBox="0 0 220 70" className="mt-1.5 block w-full">
                      <path d="M14 52C60 8 118 66 168 30" fill="none" stroke="var(--color-toffee-deep)" strokeWidth="2.5" strokeDasharray="2 7" strokeLinecap="round" />
                      <circle cx="14" cy="52" r="5" fill="var(--color-toffee-deep)" />
                      <path d="M164 34L177 21L190 34V48H164Z" fill="var(--color-honey)" stroke="var(--color-cocoa)" strokeWidth="2.5" strokeLinejoin="round" />
                      <path d="M177 44C175 41 170 42 171 46C172 49 177 51 177 51S182 49 183 46C184 42 179 41 177 44Z" fill="var(--color-toffee-deep)" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="phone-compose">
              <span>{journey.compose}</span>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[2.4rem] shrink-0 rounded-full bg-whatsapp fill-white p-[0.55rem]">
                <path d="M3 20L21 12L3 4V10L15 12L3 14Z" />
              </svg>
            </a>
          </div>
          <Pup data-pup-stop className="journey-pup" />
        </div>
      </div>
    </section>
  )
}
