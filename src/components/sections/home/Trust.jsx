import { trust } from '../../../data/content.js'
import Stamp from '../../ui/Stamp.jsx'
import Pup from '../../ui/Pup.jsx'

export default function Trust() {
  return (
    <section aria-labelledby="trust-title" className="bg-linear-to-b from-[#f0b866] to-[#a65a30] pt-[clamp(4rem,9vh,6rem)]">
      <div className="gutter mx-auto max-w-[96rem]">
        <div className="book">
          <div className="book-page book-page--left">
            <p aria-hidden="true" className="font-hand text-[1.15rem] text-toffee-ink">{trust.kicker}</p>
            <h2 id="trust-title" className="mt-1.5 max-w-[12ch] font-display text-[clamp(2.2rem,4.2vw,3.9rem)] leading-[0.92] font-extrabold tracking-[-0.025em] text-balance">
              {trust.title}
            </h2>
            <Pup data-pup-stop className="book-pup" />
          </div>
          <ul className="book-page book-page--right">
            {trust.stamps.map((stamp) => (
              <li key={stamp.title}>
                <Stamp stamp={stamp} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sunset over the city, fading into the darker section below. */}
      <div aria-hidden="true" className="relative h-[clamp(5rem,12vw,10rem)] overflow-hidden">
        <span className="absolute bottom-[18%] left-[62%] aspect-square w-[clamp(7rem,16vw,13rem)] rounded-full bg-[radial-gradient(closest-side,#ffd27f_70%,rgba(255,210,127,0.45)_73%,transparent)]" />
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 size-full fill-[#a65a30]">
          <path d="M0 160V118H70V96H120V122H180V84H214V60H232V84H262V112H330V98H380V130H440V90H470V70H500V102H560V120H620V76H640V30L650 8L660 30V76H680V110H740V88H800V124H860V94H900V64H930V100H990V118H1050V84H1090V106H1150V72H1180V96H1240V124H1300V92H1350V116H1440V160Z" />
        </svg>
      </div>
    </section>
  )
}
