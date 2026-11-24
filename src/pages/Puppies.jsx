import { Link, useSearchParams } from 'react-router-dom'
import { goneHome, puppies, puppiesPage, puppyFilters } from '../data/content.js'

// Does this puppy pass the filter chosen for one key? (breed matches by name, so "Poodle" also finds Toy Poodles.)
function matches(pup, key, value) {
  if (!value) return true
  if (key === 'breed') {
    const label = puppyFilters.find((f) => f.key === 'breed').options.find((o) => o.value === value)?.label ?? ''
    return pup.breed.toLowerCase().includes(label.toLowerCase())
  }
  return pup[key] === value
}

export default function Puppies() {
  // The chosen filters live in the URL (?origin=&breed=&sex=), so a filtered view can be shared or bookmarked.
  const [params, setParams] = useSearchParams()
  const shown = puppies.filter((pup) => puppyFilters.every(({ key }) => matches(pup, key, params.get(key))))

  const toggle = (key, value) => {
    const next = new URLSearchParams(params)
    if (!value || next.get(key) === value) next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true })
  }

  return (
    <div className="bg-[radial-gradient(circle_at_1px_1px,rgba(42,23,14,0.09)_1px,transparent_0)] bg-[length:22px_22px]">
      <section aria-labelledby="puppies-title" className="gutter mx-auto max-w-[110rem] pt-[clamp(2.5rem,6vh,4rem)] pb-16">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="font-hand text-lg text-toffee-ink">{puppiesPage.kicker}</p>
            <h1 id="puppies-title" className="display-title relative mt-1 inline-block text-[clamp(3rem,8.5vw,8rem)]">
              {puppiesPage.title}
              <svg aria-hidden="true" viewBox="0 0 400 16" preserveAspectRatio="none" className="absolute -bottom-3 left-0 h-3.5 w-full text-toffee">
                <path d="M4 10C80 4 160 13 240 7S360 6 396 9" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </h1>
            <p className="mt-8 max-w-[46ch] text-[clamp(1.05rem,1.3vw,1.25rem)] text-cocoa-soft">{puppiesPage.lede}</p>
          </div>
          <figure className="hidden text-center sm:block">
            <span className="relative block size-44 rounded-full border-[3px] border-cocoa bg-honey-soft">
              <img src="/images/icons/pup-stand.svg" alt="" className="absolute inset-x-3 bottom-6" />
              <span className="absolute top-3 left-6 rounded-full border-2 border-cocoa bg-milk px-2 font-hand text-sm">hm?</span>
            </span>
            <figcaption className="mt-1 font-hand text-cocoa-soft">self-portrait</figcaption>
          </figure>
        </div>

        <div className="filter-board">
          {puppyFilters.map((filter) => (
            <div key={filter.key} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
              <p className="w-28 shrink-0 font-hand text-cocoa-soft">{filter.label}</p>
              <div className="flex flex-wrap gap-2.5">
                {filter.key === 'origin' && (
                  <button type="button" aria-pressed={!params.get('origin')} onClick={() => toggle('origin', null)} className="filter-chip">
                    Everywhere
                  </button>
                )}
                {filter.options.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    aria-pressed={params.get(filter.key) === option.value}
                    onClick={() => toggle(filter.key, option.value)}
                    className="filter-chip"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p aria-live="polite" className="mt-10 font-hand text-lg">
          {shown.length} {shown.length === 1 ? 'puppy' : 'puppies'} looking for a home
        </p>

        {shown.length > 0 ? (
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
            {shown.map((pup, index) => (
              <li key={pup.slug}>
                <Link to={`/puppies/${pup.slug}`} className="pup-card group block text-center" style={{ '--tilt': index % 2 ? '3deg' : '-3deg' }}>
                  <span className="relative mx-auto block aspect-square w-[88%]">
                    <span aria-hidden="true" className="pup-card-ring" />
                    <img src={pup.image} alt="" loading="lazy" className="relative size-full rounded-full border-[3px] border-cocoa object-cover transition-transform duration-500 ease-pounce group-hover:scale-105" />
                    <span className="door-tag top-[6%] right-0">Available</span>
                  </span>
                  <span className="mt-4 block font-display text-[clamp(1.35rem,2vw,1.9rem)] leading-none font-extrabold tracking-[-0.02em] group-hover:text-toffee-deep">{pup.name}</span>
                  <span className="mt-1.5 block text-sm text-cocoa-soft">{pup.breed} · {pup.sex} · {pup.age}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-10 rounded-2xl border-[3px] border-dashed border-cocoa/40 p-10 text-center">
            <p>No puppies match those filters right now.</p>
            <button type="button" onClick={() => setParams({}, { replace: true })} className="btn btn-ghost mt-5">Show all puppies</button>
          </div>
        )}
      </section>

      <section aria-labelledby="gone-strip-title" className="border-t-[3px] border-dashed border-cocoa/20 py-14">
        <div className="gutter mx-auto flex max-w-[110rem] flex-wrap items-center justify-between gap-8">
          <h2 id="gone-strip-title" className="display-title text-[clamp(2rem,4vw,3.4rem)]">{puppiesPage.goneTitle}</h2>
          <div className="flex items-center gap-4">
            <ul className="flex -space-x-4">
              {goneHome.slice(0, 5).map((pup) => (
                <li key={pup.name}>
                  <img src={pup.image} alt={`${pup.name}, ${pup.breed}`} loading="lazy" className="size-16 rounded-full border-[3px] border-cocoa object-cover grayscale-[35%]" />
                </li>
              ))}
            </ul>
            <Link to="/gone-home" className="btn btn-ghost">{puppiesPage.goneCta}</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
