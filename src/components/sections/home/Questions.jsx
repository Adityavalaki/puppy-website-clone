import { Link } from 'react-router-dom'
import { faqs, questions } from '../../../data/content.js'
import Sparkle from '../../ui/Sparkle.jsx'

// Star positions in the night sky (left %, top %, size px).
const stars = [
  [8, 12, 16], [22, 30, 9], [41, 8, 12.6], [57, 22, 8], [72, 6, 14.4],
  [88, 18, 10.8], [95, 42, 9], [4, 58, 10.8], [48, 70, 7.2], [80, 62, 9],
]

export default function Questions() {
  return (
    <section aria-labelledby="questions-title" className="relative overflow-hidden bg-linear-to-b from-[#4d2b19] to-[#2f1a10] py-[clamp(4.5rem,10vh,7rem)] text-milk">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {stars.map(([left, top, size], index) => (
          <Sparkle
            key={index}
            className="twinkle absolute text-honey"
            style={{ left: `${left}%`, top: `${top}%`, width: size, animationDelay: `${index * 0.4}s` }}
          />
        ))}
      </div>

      <div className="gutter relative mx-auto grid max-w-[110rem] gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start lg:gap-x-[clamp(3rem,7vw,8rem)]">
        <div>
          <h2 id="questions-title" className="font-display text-[clamp(2.6rem,6.4vw,6.25rem)] leading-[0.92] font-extrabold tracking-[-0.025em] text-balance">
            {questions.title}
          </h2>
          <Link to="/faq" className="btn btn-ghost-light mt-8">{questions.cta}</Link>
          <div className="relative mt-9 hidden w-[clamp(9.5rem,30vw,13rem)] md:block">
            <span aria-hidden="true" className="float absolute -top-10 left-[58%] font-display text-[clamp(2.4rem,4vw,3.4rem)] leading-none font-extrabold text-honey">?</span>
            <img src="/images/icons/pup-stand.svg" alt="" data-pup-stop />
          </div>
        </div>

        <dl className="grid gap-[clamp(2rem,4.5vh,3.25rem)]">
          {faqs.map((item) => (
            <div key={item.q}>
              <dt className="flex gap-3 font-display text-[clamp(1.4rem,2vw,1.95rem)] leading-[1.12] font-extrabold tracking-[-0.02em]">
                <Sparkle className="mt-1.5 w-[1.15rem] shrink-0 text-honey" />
                {item.q}
              </dt>
              <dd className="mt-3 max-w-[58ch] pl-[1.9rem] text-milk/80">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
