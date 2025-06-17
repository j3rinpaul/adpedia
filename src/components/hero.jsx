import React from "react";

function Hero() {
    
  return (
    <div className="relative h-[80vh] overflow-hidden ">
      {/* Background Image */}
      <div className="parallax-base">

      <img
        src="/hero.jpg"
        alt="hero"
        className=" w-full object-cover"
      />
      </div>

      {/* Overlay for dark shade */}
      <div className="absolute inset-0 bg-black/20 h-[90vh] w-full z-10" />

      {/* Text content */}
      <div className="absolute bottom-60 left-10 text-white z-20">
        <h1
          className="text-7xl"
          style={{ fontFamily: "Caveat Brush" }}
        >
          Innovative Advertising Solutions <br /> for Your Business Growth
        </h1>
        <p className="text-xl mt-2">
          Maximise your brand's reach with expert marketing strategies
        </p>
      </div>

      <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2 z-30">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-1 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
