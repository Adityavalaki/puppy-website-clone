import { families, familiesPage } from '../data/content.js'
import PolaroidWall from '../components/ui/PolaroidWall.jsx'

export default function HappyFamiliesPage() {
  return (
    <div className="bg-[repeating-linear-gradient(90deg,transparent_0_46px,rgba(42,23,14,0.04)_46px_48px)] bg-[#fff1d8] pb-24">
      <section aria-labelledby="families-page-title" className="gutter mx-auto grid max-w-[110rem] gap-10 pt-[clamp(2.5rem,6vh,4rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:items-end">
        <div>
          <p className="font-hand text-lg text-toffee-ink">{familiesPage.kicker}</p>
          <h1 id="families-page-title" className="display-title mt-1 text-[clamp(3rem,8.5vw,8rem)]">{familiesPage.title}</h1>
          <p className="mt-6 max-w-[50ch] text-[clamp(1.05rem,1.3vw,1.25rem)] text-cocoa-soft">{familiesPage.lede}</p>
          <p className="mt-4 font-hand text-lg text-toffee-ink">{families.photos.length} moments and counting</p>
        </div>
        <figure className="relative rotate-[1.2deg] bg-[repeating-linear-gradient(transparent_0_1.6rem,rgba(42,23,14,0.08)_1.6rem_calc(1.6rem+1px))] bg-[#fffdf5] p-6 shadow-[0_10px_24px_-12px_rgba(42,23,14,0.4)]">
          <span aria-hidden="true" className="tape tape--center" style={{ '--tape': '#bfddf5' }} />
          <blockquote className="font-display leading-relaxed">“{families.quote}”</blockquote>
          <figcaption className="mt-3 font-hand text-toffee-ink">{families.quoteBy}</figcaption>
        </figure>
      </section>

      <PolaroidWall photos={families.photos} all />
    </div>
  )
}
