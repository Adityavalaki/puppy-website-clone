import { useEffect, useState } from 'react'
import { site } from '../../data/content.js'
import Pup from '../ui/Pup.jsx'

// Shown on the first visit and again on every page change (App gives it a new key per path): the pup trots
// across until the page (images, fonts) has loaded, then it fades out and unmounts. It stays at least one full
// walk on a first visit so a fast load doesn't just flash it; a page change has nothing new to wait for, so 1s.
const minShowMs = 1800
const pageChangeMs = 1000
const fadeMs = 500

export default function PageLoader() {
  const [phase, setPhase] = useState('loading') // loading → leaving → done

  useEffect(() => {
    let leaveTimer
    let doneTimer
    const started = performance.now()
    const min = document.readyState === 'complete' ? pageChangeMs : minShowMs
    const leave = () => {
      const wait = Math.max(0, min - (performance.now() - started))
      leaveTimer = setTimeout(() => {
        setPhase('leaving')
        doneTimer = setTimeout(() => setPhase('done'), fadeMs)
      }, wait)
    }
    if (document.readyState === 'complete') leave()
    else window.addEventListener('load', leave, { once: true })
    return () => {
      window.removeEventListener('load', leave)
      clearTimeout(leaveTimer)
      clearTimeout(doneTimer)
    }
  }, [])

  if (phase === 'done') return null

  return (
    <div role="status" aria-label="Loading TeddyPups" className="page-loader" data-leaving={phase === 'leaving' || undefined}>
      <div className="loader-track">
        <div className="loader-walker">
          <Pup className="pup-play pup-happy" />
        </div>
      </div>
      <p className="font-hand text-[clamp(1.25rem,2vw,1.6rem)] text-toffee-ink">{site.loaderText}</p>
    </div>
  )
}
