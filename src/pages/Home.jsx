import HappyFamilies from '../components/sections/home/HappyFamilies.jsx'
import Hero from '../components/sections/home/Hero.jsx'
import HomeCta from '../components/sections/home/HomeCta.jsx'
import Journey from '../components/sections/home/Journey.jsx'
import Mascot from '../components/sections/home/Mascot.jsx'
import MeetThePups from '../components/sections/home/MeetThePups.jsx'
import Questions from '../components/sections/home/Questions.jsx'
import Trust from '../components/sections/home/Trust.jsx'
import TwoWays from '../components/sections/home/TwoWays.jsx'

// Sections run from morning to night: each one's background picks up where the previous one ended.
// `relative` gives the mascot's paw-print layer a box covering the whole page.
export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <MeetThePups />
      <TwoWays />
      <Journey />
      <Trust />
      <HappyFamilies />
      <Questions />
      <HomeCta />
      <Mascot />
    </div>
  )
}
