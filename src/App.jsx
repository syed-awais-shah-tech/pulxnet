// import { useState } from 'react'
import './App.css'
import AboutUs from './components/AboutUs'
import DiscoverSection from './components/DiscoverSection'
import HighlightsStrip from './components/HighlightsStrip'
import Header from './components/MainHeader'
import Navbar from './components/Navbar'
import OurExpertise from './components/OurExpertise'
import ProcessSection from './components/ProcessSection'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Header/>
      <HighlightsStrip/>
      <AboutUs/>
      <ProcessSection/>
      <DiscoverSection/>
      <OurExpertise/>
    </>
  )
}

export default App
