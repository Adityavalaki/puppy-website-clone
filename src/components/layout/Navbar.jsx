import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks, site } from '../../data/content.js'
import Paw from '../ui/Paw.jsx'

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [closing, setClosing] = useState(false)
  const menuRef = useRef(null)

  // Hide the header while scrolling down, bring it back on any scroll up.
  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 8)
      setHidden(y > lastY && y > 120)
      lastY = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Home starts with a see-through header over the hero; other pages show the milk bar from the top.
  const solid = scrolled || pathname !== '/'

  const closeMenu = () => {
    // The closing animation only runs when motion is allowed, so close straight away otherwise.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) menuRef.current.close()
    else setClosing(true)
  }

  const onMenuAnimationEnd = (event) => {
    // Link animations bubble up here too; only the dialog's own closing animation should close it.
    if (event.target !== event.currentTarget || !closing) return
    menuRef.current.close()
    setClosing(false)
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-silk ${hidden ? '-translate-y-[120%]' : ''}`}>
      <div className={`absolute inset-0 bg-milk transition-opacity duration-350 ${solid ? '' : 'opacity-0'}`} />
      <svg aria-hidden="true" width="100%" height="14" preserveAspectRatio="none" className={`pointer-events-none absolute left-0 top-[calc(100%-1px)] drop-shadow-[0_4px_4px_rgba(42,23,14,0.08)] transition-opacity duration-350 ${solid ? '' : 'opacity-0'}`}>
        <defs>
          <pattern id="header-scallop" width="44" height="14" patternUnits="userSpaceOnUse">
            <path d="M0 0H44V2A22 11 0 0 1 0 2Z" className="fill-milk" />
            <path d="M0 2A22 11 0 0 0 44 2" fill="none" stroke="rgba(42,23,14,0.14)" strokeWidth="1.5" />
          </pattern>
        </defs>
        <rect width="100%" height="14" fill="url(#header-scallop)" />
      </svg>

      <div className="gutter relative mx-auto flex h-16 max-w-[110rem] items-center gap-6 md:h-[4.75rem]">
        <Link to="/" aria-label={`${site.name} home`} className="group flex shrink-0 items-center gap-3 rounded-full">
          <img src="/images/icons/logo.png" alt="" className="size-[2.6rem] transition-[rotate] duration-600 ease-pounce group-hover:-rotate-8 md:size-12" />
          <span className="font-display text-[clamp(1.15rem,4.6vw,1.4rem)] leading-none font-extrabold lg:hidden xl:inline">{site.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-[clamp(1.25rem,2.3vw,2.4rem)]">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) => `group relative inline-flex items-center px-0.5 py-2 font-[620] whitespace-nowrap transition-colors ${isActive ? 'text-toffee-deep' : 'hover:text-toffee-ink'}`}
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      <Paw className={`pointer-events-none absolute -bottom-[0.45rem] left-1/2 size-[0.8rem] -translate-x-1/2 -rotate-10 text-toffee transition-[opacity,scale] duration-300 ease-pounce ${isActive ? '' : 'scale-40 opacity-0 group-hover:scale-100 group-hover:opacity-45'}`} />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2.5">
          <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp hidden min-h-11 px-[1.35rem] py-2.5 text-[0.95rem] md:inline-flex">
            WhatsApp us
          </a>
          <button
            type="button"
            aria-haspopup="dialog"
            onClick={() => menuRef.current.showModal()}
            className="inline-flex h-10 items-center gap-2 rounded-full border-2 border-cocoa bg-milk px-4 text-[0.95rem] font-semibold lg:hidden"
          >
            <Paw className="size-4" />
            Menu
          </button>
        </div>
      </div>

      {/* A native <dialog> opened with showModal() traps focus, closes on Escape and blocks the page behind it. */}
      <dialog
        ref={menuRef}
        aria-label="Site menu"
        data-closing={closing || undefined}
        onCancel={(event) => {
          event.preventDefault()
          closeMenu()
        }}
        onAnimationEnd={onMenuAnimationEnd}
        className="mobile-menu m-0 h-dvh max-h-none w-screen max-w-none bg-honey p-0 text-cocoa backdrop:bg-cocoa/40"
      >
        <div className="gutter flex h-full flex-col pt-5 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
          <div className="flex items-center justify-between">
            <span className="font-hand text-lg">where to, friend?</span>
            <button type="button" onClick={closeMenu} className="h-11 rounded-full bg-cocoa px-5 font-semibold text-milk">
              Close
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-10 flex-1">
            <ul className="space-y-1">
              {navLinks.map(({ label, to }, index) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    onClick={closeMenu}
                    style={{ animationDelay: `${index * 50}ms` }}
                    className={({ isActive }) => `menu-link block py-2 font-display text-[clamp(2.4rem,11vw,3.4rem)] leading-tight font-extrabold ${isActive ? 'text-toffee-deep' : ''}`}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-full">
            WhatsApp us
          </a>
          <a href={site.phoneHref} className="mt-3 text-center text-sm">
            {site.phoneDisplay}
          </a>
        </div>
      </dialog>
    </header>
  )
}
