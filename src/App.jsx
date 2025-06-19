import { useState } from 'react'

import './App.css'
import Hero from './components/hero'
import AboutSection from './components/discover'
import Aboutus from './components/aboutus'
import { useLenis } from './components/lenis'
import WhatWeDo from './components/whatwedo'
import Random from './components/random'
import WhoWeAre from './components/whoweare'
import ContactForm from './components/contact'
function App() {
  useLenis()

  return (
    <>
    <div className='common-bg pl-50 pr-50 '>

      <Hero/>
      <AboutSection/>
      <Aboutus/> 
      <WhatWeDo/> 
      <Random/>
      < WhoWeAre/> 
      <ContactForm/>
    </div>
       
    </>
  )
}

export default App
