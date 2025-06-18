import React from "react";

function AboutSection() {
    const borderText = "✨ Empowering brands every day ";
  return (
    <div className="relative w-full h-screen overflow-hidden about-bg">

      
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

      <div className="h-full">
     
        <div className="flex h-[120%]">

       
          <div className="h-full flex m-0 p-0 items-end justify-start">
            <img
            src="/places_dubai.webp"
            alt="About"
            className="w-full h-full object-contain"
            />
          </div>

  

       
       
        </div>
      </div>
        <div className="absolute inset-0 w-full z-10 flex items-start pt-20">

  {/* LEFT SIDE — stays naturally placed */}
  <div className="w-1/2 flex flex-col justify-center pt-20 items-center text-white font-mono">
    <h2 className="text-6xl mb-4">Adpedia</h2>

    <h3 className="text-center text-2xl leading-relaxed">
      A fully <br />
      <span className="text-2xl pl-20">integrated</span><br />

      <span className="bg-yellow-400 text-black px-2">digital</span>

      <span
        className="text-yellow-400 text-4xl font-light mx-3"
        style={{ fontFamily: '"Great Vibes", cursive' }}
      >
        &amp;
      </span>

      <br />
      <span className="bg-white text-black px-2 ml-30">creative</span>
      <br />
      agency
    </h3>
  </div>

  {/* RIGHT SIDE FLOATING BOX */}
  <div
  className="bill-board absolute top-[3rem] right-[1vw] w-[20vw] min-w-[240px] bg-yellow-400 text-black font-serif px-6 py-8 shadow-lg relative"
>
  {/* Triangle Corner */}
  <div className="absolute -top-0 -left-10 w-0 h-0 border-b-[40px] border-b-gray-400 border-l-[40px] border-l-transparent"></div>

  <div className="mb-6">
    <p className="bg-black text-yellow-400 px-2 py-1 inline-block font-bold text-sm" style={{fontFamily:'"Savate"'}}>
      Started:
    </p>
    <p className="text-xl mt-1" style={{fontFamily:"Savate"}}>2022</p>
  </div>

  <div className="mb-6">
    <p className="bg-black text-yellow-400 px-2 py-1 inline-block font-bold text-sm" style={{fontFamily:'"Savate"'}}>
      Expertise In:
    </p>
    <p className="text-xl mt-1" style={{fontFamily:'"Savate"'}}>Advertising & Marketing</p>
  </div>

  <div className="mb-4">
    <p className="bg-black text-yellow-400 px-2 py-1 inline-block font-bold text-sm" style={{fontFamily:'"Savate"'}}>
      Offices:
    </p>
    <p className="text-xl mt-1 leading-snug" style={{fontFamily:'"Savate"'}}>
     Dubai <br /> & Trivandrum
    </p>
  </div>

  {/* <p className="text-sm leading-relaxed mt-2" style={{fontFamily:'"Savate"'}}>
    Bengaluru | Lucknow | Kochi <br />
    Hyderabad | Ahmedabad | Gurugram
  </p> */}
</div>


</div>


    </div>
  );
}

export default AboutSection;
