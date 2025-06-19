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
import Footer from './components/footer'
function App() {
  useLenis()

  return (
    <>
    <div className='common-bg  '>

      <Hero/>
      <AboutSection/>
      <Aboutus/> 
      <WhatWeDo/> 
      <Random/>
      < WhoWeAre/> 
      <ContactForm/>
      <Footer/>
    </div>
       
    </>
  )
}

export default App
