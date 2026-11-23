import { trust } from '../../../data/content.js'

// Simple line icons drawn for the stamps (currentColor takes each stamp's ink colour).
const icons = {
  heart: 'M32 54C14 41 8 31 8 22a12 12 0 0 1 24-4 12 12 0 0 1 24 4c0 9-6 19-24 32ZM14 30h10l4-7 6 14 4-7h12',
  plane: 'M6 36l20-2 14-20h6l-6 20 14 2 6-8h4l-3 12 3 12h-4l-6-8-14 2 6 20h-6L26 48 6 46Z',
  chat: 'M10 14h44v30H30l-12 10v-10h-8Z M22 29h.5 M32 29h.5 M42 29h.5',
  globe: 'M32 8a24 24 0 1 0 0 48 24 24 0 1 0 0-48ZM8 32h48M32 8c-8 8-10 16-10 24s2 16 10 24M32 8c8 8 10 16 10 24s-2 16-10 24',
}

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
            <img src="/images/icons/pup-stand.svg" alt="" className="book-pup" />
          </div>
          <ul className="book-page book-page--right">
            {trust.stamps.map((stamp) => (
              <li key={stamp.title} className="flex flex-col items-center text-center">
                <span className={`stamp stamp--${stamp.shape}`} style={{ '--ink': stamp.ink, '--tilt': stamp.tilt }}>
                  <svg aria-hidden="true" viewBox="0 0 64 64" className="size-10" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={icons[stamp.icon]} />
                  </svg>
                  <span className="max-w-[10ch] font-display text-[1.08rem] leading-[1.05] font-extrabold">{stamp.title}</span>
                </span>
                <p className="mt-3.5 max-w-[26ch] text-[0.92rem] leading-[1.45] text-cocoa-soft">{stamp.text}</p>
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
