import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/layout/Footer.jsx'
import MobileBar from './components/layout/MobileBar.jsx'
import Navbar from './components/layout/Navbar.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  const { pathname } = useLocation()

  // A new page should open at the top, not at the previous page's scroll position.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-cocoa focus:px-4 focus:py-2 focus:text-milk">
        Skip to content
      </a>
      <Navbar />
      {/* Top padding = header height, so content starts below the fixed header. */}
      <main id="main" tabIndex={-1} className="pt-16 outline-none md:pt-[4.75rem]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}
