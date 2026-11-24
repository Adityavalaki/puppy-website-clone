import { Link } from 'react-router-dom'
import { PupPeek } from '../components/ui/Pup.jsx'
import { goneHome, goneHomePage } from '../data/content.js'

export default function GoneHome() {
  return (
    <section aria-labelledby="gone-title" className="gutter mx-auto max-w-[110rem] pt-[clamp(2.5rem,6vh,4rem)] pb-24">
      <div className="flex flex-wrap items-end justify-between gap-10">
        <div>
          <h1 id="gone-title" className="display-title flex items-start gap-3 text-[clamp(3rem,8.5vw,8rem)]">
            {goneHomePage.title}
            <svg aria-hidden="true" viewBox="0 0 24 24" className="mt-[0.15em] w-[0.42em] shrink-0 text-toffee" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
              <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
            </svg>
          </h1>
          <p className="mt-6 max-w-[52ch] text-[clamp(1.05rem,1.3vw,1.25rem)] text-cocoa-soft">{goneHomePage.lede}</p>
          <Link to="/puppies" className="btn btn-primary mt-7">{goneHomePage.cta}</Link>
        </div>
        <div aria-hidden="true" className="relative hidden w-60 sm:block">
          <PupPeek className="mx-auto -mb-3 w-24" />
          <div className="relative overflow-hidden rounded-xl border-[3px] border-cocoa bg-honey-soft pt-7 pb-4 text-center font-display text-xl font-extrabold text-toffee-ink">
            <span className="absolute inset-x-0 top-0 h-6 border-b-[3px] border-cocoa bg-[repeating-linear-gradient(90deg,var(--color-toffee)_0_1.05rem,var(--color-milk)_1.05rem_2.1rem)]" />
            {goneHomePage.booth}
          </div>
        </div>
      </div>

      <ul className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {goneHome.map((pup, index) => (
          <li key={pup.name} className="ticket" style={{ '--tilt': ['-1deg', '0.8deg', '-0.4deg'][index % 3] }}>
            <img src={pup.image} alt={`${pup.name}, ${pup.breed}`} loading="lazy" className="size-18 shrink-0 rounded-full border-[3px] border-cocoa object-cover sm:size-24" />
            <div className="min-w-0 flex-1">
              <p className="font-hand text-sm text-toffee-ink">one ticket home</p>
              <p className="font-display text-2xl leading-tight font-extrabold">{pup.name}</p>
              <p className="text-sm text-cocoa-soft">{pup.breed}, {pup.sex}</p>
              <p className="mt-2 flex flex-wrap items-center gap-x-2 text-xs font-bold tracking-wider uppercase">
                {pup.from} <span aria-hidden="true" className="text-toffee">- - -›</span> Home <span aria-hidden="true">♥</span>
              </p>
            </div>
            <span aria-hidden="true" className="ticket-stub">admit one</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
