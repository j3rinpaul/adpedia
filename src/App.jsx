import { useState } from 'react'

import './App.css'
import Hero from './components/hero'
import AboutSection from './components/discover'

function App() {

  return (
    <>
    <div className='common-bg pl-40 pr-40 '>

      <Hero/>
      <AboutSection/>
    </div>
       
    </>
  )
}

export default App
