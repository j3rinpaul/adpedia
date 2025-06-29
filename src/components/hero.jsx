import { useEffect, useState } from "react";
import Navbar from "./navbar";

function Hero() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsHidden(window.scrollY > 550); // hide after 100px scroll
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  return (
    <div className="relative h-screen md:h-[77vh] overflow-hidden z-0 ">

      {/* Background Image */}
          <div className="parallax-base">
        {/* Mobile Image */}
            {/* Mobile (default: <640px) */}
            <img
              src="/hero-mobile.jpg"
              alt="Dubai advertising agency Adpedia - hero "
              className={`w-full h-full object-cover transition-opacity duration-500 sm:hidden ${
                isHidden ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Tablet (640px to <768px) */}
            <img
              src="/hero.jpg"
              alt="Dubai advertising agency Adpedia - hero"
              className={`w-full h-full object-fit transition-opacity duration-500 hidden sm:block md:hidden ${
                isHidden ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Desktop (≥768px) */}
            <img
              src="/hero.jpg"
              alt="Dubai advertising agency Adpedia - hero"
              className={`w-full h-full object-cover transition-opacity duration-500 hidden md:block ${
                isHidden ? "opacity-0" : "opacity-100"
              }`}
            />

      </div>


      
      <div className="absolute inset-0  bg-black/20 w-full z-10 pt-60" />

      <div className="absolute top-4 left-4 z-20">
   
        <div className="text-white text-2xl  p-2 rounded-full">
          <a href="/"><img src="/logo.png" alt="Dubai advertising agency Adpedia Logo image" width={50} /></a>
          </div>
        </div>

  
      <div className="absolute top-[25vh] sm:bottom-40 md:bottom-20 left-4 sm:left-6 md:left-10 text-white z-20 max-w-[90%] sm:max-w-[85%] md:max-w-none">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight"
          style={{ fontFamily: "Caveat Brush" }}
        >
          Innovative Advertising Solutions <br className="hidden sm:block" /> 
       
          <span className="sm:hidden">for Your Business Growth</span>
          <span className="hidden sm:inline">for Your Business Growth</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2 max-w-lg">
          Maximise your brand's reach with expert marketing strategies
        </p>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-1/2 transform -translate-x-1/2 z-30">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-1 bg-white rounded-full animate-bounce" />
        </div>
      </div> */}

      
    </div>
  );
}

export default Hero;
