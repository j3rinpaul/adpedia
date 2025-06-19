import { useRef } from 'react';
import { Helmet } from 'react-helmet';
import './App.css'
import Hero from './components/hero'
import AboutSection from './components/discover'
import Aboutus from './components/aboutus'
import WhatWeDo from './components/whatwedo'
import Random from './components/random'
import WhoWeAre from './components/whoweare'
import ContactForm from './components/contact'
import Footer from './components/footer'
import MessageIcon from '@mui/icons-material/Message';
function App() {
  const contactRef = useRef();

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  // useLenis()

  return (
    <>
    <Helmet>
        <title>Adpedia | Creative Advertising & Marketing Agency</title>
        <meta name="description" content="Adpedia is a full-service creative agency providing innovative advertising, branding, and digital marketing solutions tailored to your business needs." />
        <meta name="keywords" content="Adpedia, advertising, marketing, branding, digital agency, Dubai, Kerala, creative solutions" />
        <meta name="author" content="Adpedia Team" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Adpedia - Your Creative Marketing Partner" />
        <meta property="og:description" content="We build brands that shine with creativity and strategy." />
        <meta property="og:image" content="https://theadpedia.com/logo.png" />
        <meta property="og:url" content="https://theadpedia.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Adpedia - Your Creative Marketing Partner" />
        <meta name="twitter:description" content="We build brands that shine with creativity and strategy." />
        <meta name="twitter:image" content="https://theadpedia.com/logo.png" />

        <link rel="canonical" href="https://theadpedia.com/" />
      </Helmet>

    <div className='common-bg  '>
      {/* <Navbar/> */}
      <Hero/>
      
      <section id='intro'><AboutSection/></section>
      <section id='about'><Aboutus/> </section> 
      <section id='services'><WhatWeDo/></section>
      <Random/>
      <section id='team'>< WhoWeAre/> </section>
      <section id='contact'><ContactForm ref={contactRef} /></section>

      <section id='contact-details'><Footer/></section>
       <button
        onClick={scrollToContact}
        className="fixed bottom-6 right-6 z-50    px-4 py-3  shadow-lg transition rounded-md"
        style={{backgroundColor:"rgb(244, 210, 38)"}}
        >
        <MessageIcon/> 
      </button>
    </div>
       
    </>
  )
}

export default App
