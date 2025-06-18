import { useState } from 'react'

import './App.css'
import Hero from './components/hero'
import AboutSection from './components/discover'
import WhatweDo from './components/whatwedo'
import { useLenis } from './components/lenis'

function App() {
  useLenis()

  return (
    <>
    <div className='common-bg pl-50 pr-50 '>

      <Hero/>
      <AboutSection/>
      <WhatweDo/>
    </div>
       
    </>
  )
}

export default App
