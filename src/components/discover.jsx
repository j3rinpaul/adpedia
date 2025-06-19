import React from "react";

function AboutSection() {
  const borderText = "✨ Empowering brands every day ";

  return (
    <div className="relative w-full min-h-screen overflow-hidden about-bg">

      {/* FLOWING BORDER */}
      <div className="flowing-border">
        <div className="side top">
          <div className="loop-container">
            <div className="loop">{borderText.repeat(20)}</div>
            <div className="loop">{borderText.repeat(20)}</div>
          </div>
        </div>

        <div className="side right">
          <div className="vertical">
            <div className="loop-container">
              <div className="loop">{borderText.repeat(30)}</div>
              <div className="loop">{borderText.repeat(30)}</div>
            </div>
          </div>
        </div>

        <div className="side bottom">
          <div className="loop-container">
            <div className="loop">{borderText.repeat(20)}</div>
            <div className="loop">{borderText.repeat(20)}</div>
          </div>
        </div>

        <div className="side left">
          <div className="vertical">
            <div className="loop-container">
              <div className="loop">{borderText.repeat(30)}</div>
              <div className="loop">{borderText.repeat(30)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* DUBAI BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 ">
        <img
          src="/places_dubai.webp"
          alt="About"
          className="w-full h-full object-contain lg:pt-30 "
        />

      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col sm:flex-col md:flex-row items-center justify-center gap-12 px-6 pt-24 md:pt-40 max-w-6xl mx-auto">

        {/* LEFT TEXT SECTION */}
       <div className="w-full md:w-1/2 lg:pl-30 text-white font-mono text-center md:text-left">

          <h2 className="text-5xl  sm:text-6xl mb-4">Adpedia</h2>
          <h3 className="text-2xl pl-7 leading-relaxed">
            A fully <br />
            <span className="text-2xl pl-20">integrated</span><br />
            <span className="bg-yellow-400 text-black px-2">all</span><br />
            <span className="bg-white text-black px-2 ml-10">rounder</span><br />
            agency
          </h3>
        </div>

        {/* RIGHT BILLBOARD SECTION */}
       <div className="w-full md:w-[300px] bg-yellow-400 text-black font-serif px-6 py-8 shadow-lg relative mx-4 md:mx-0">


          {/* Triangle Corner */}
          <div className="absolute -top-0 -left-10 w-0 h-0 border-b-[40px] border-b-gray-400 border-l-[40px] border-l-transparent"></div>

          <div className="mb-6">
            <p className="bg-black text-yellow-400 px-2 py-1 inline-block font-bold text-sm" style={{ fontFamily: "Savate" }}>
              Started:
            </p>
            <p className="text-xl mt-1" style={{ fontFamily: "Savate" }}>2022</p>
          </div>

          <div className="mb-6">
            <p className="bg-black text-yellow-400 px-2 py-1 inline-block font-bold text-sm" style={{ fontFamily: "Savate" }}>
              Expertise In:
            </p>
            <p className="text-xl mt-1" style={{ fontFamily: "Savate" }}>Advertising & Marketing</p>
          </div>

          <div className="mb-4">
            <p className="bg-black text-yellow-400 px-2 py-1 inline-block font-bold text-sm" style={{ fontFamily: "Savate" }}>
              Offices:
            </p>
            <p className="text-xl mt-1 leading-snug" style={{ fontFamily: "Savate" }}>
              Dubai <br /> & Trivandrum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
