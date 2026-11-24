import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/layout/Footer.jsx'
import MobileBar from './components/layout/MobileBar.jsx'
import Navbar from './components/layout/Navbar.jsx'
import PageLoader from './components/layout/PageLoader.jsx'
import PawCursor from './components/layout/PawCursor.jsx'
import Contact from './pages/Contact.jsx'
import Faq from './pages/Faq.jsx'
import GoneHome from './pages/GoneHome.jsx'
import HappyFamiliesPage from './pages/HappyFamiliesPage.jsx'
import Home from './pages/Home.jsx'
import HowItWorks from './pages/HowItWorks.jsx'
import NotFound from './pages/NotFound.jsx'
import Puppies from './pages/Puppies.jsx'
import PuppyDetail from './pages/PuppyDetail.jsx'

export default function App() {
  const { pathname, hash } = useLocation()

  // A new page opens at the top, or at the section named in the URL (e.g. /how-it-works#delivery).
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])

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
          <Route path="/puppies" element={<Puppies />} />
          <Route path="/puppies/:slug" element={<PuppyDetail />} />
          <Route path="/gone-home" element={<GoneHome />} />
          <Route path="/happy-families" element={<HappyFamiliesPage />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileBar />
      <PawCursor />
      <PageLoader />
    </>
  )
}
