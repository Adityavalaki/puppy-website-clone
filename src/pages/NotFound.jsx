import { Link } from 'react-router-dom'
import { notFoundPage } from '../data/content.js'

// A "lost dog" poster with tear-off tabs that link back to the main pages.
export default function NotFound() {
  return (
    <section aria-labelledby="lost-title" className="gutter grid place-items-center bg-[#f4efe7] py-[clamp(2.5rem,7vh,5rem)]">
      <div className="lost-poster">
        <span aria-hidden="true" className="tape tape--left" style={{ '--tape': '#f6d79a' }} />
        <span aria-hidden="true" className="tape tape--right" style={{ '--tape': '#f6d79a' }} />
        <p className="font-hand text-[clamp(1.1rem,2.4vw,1.35rem)] text-toffee-ink">{notFoundPage.kicker}</p>
        <h1 id="lost-title" className="display-title mt-1 text-[clamp(4rem,15vw,7.5rem)] tracking-[0.02em] uppercase">
          {notFoundPage.title}
          <span className="sr-only">: this page has wandered off</span>
        </h1>
        <div className="mx-auto mt-4 grid aspect-[4/3] w-[min(100%,18rem)] place-items-center rounded-xl border-[3px] border-dashed border-cocoa/40">
          <img src="/images/icons/pup-stand.svg" alt="" className="w-[70%]" />
        </div>
        <p className="mx-auto mt-5 max-w-[34ch] text-cocoa-soft">{notFoundPage.text}</p>
        <p className="mt-5 font-hand text-lg text-toffee-ink">{notFoundPage.tabsLabel}</p>
        <ul className="lost-tabs">
          {notFoundPage.tabs.map((tab) => (
            <li key={tab.to}>
              <Link to={tab.to} className="lost-tab">{tab.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
