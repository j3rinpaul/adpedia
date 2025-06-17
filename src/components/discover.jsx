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
        <div>
            <h3>Discovering Adpedia: Your creative Advertising partner</h3>
        </div>

      <div className="flex h-full">

       
        <div className="w-1/2 pl-15 h-full">
          <img
            src="/about.jpg"
            alt="About"
            className="w-full h-full object-contain"
          />
        </div>

       
        <div className="w-1/2 flex flex-col justify-center items-start p-16 ">
          <h1 className="text-5xl font-bold mb-6" style={{fontFamily:'"Special Elite", system-ui'}}>Who We Are</h1>
          <p className="text-xl text-gray-700" style={{fontFamily:'"Special Elite", system-ui'}}>
            At our core, we believe in combining creative storytelling with
            strategic insights to drive brand growth. From visual identity to
            digital campaigns, we build experiences that captivate and convert.
          </p>
        </div>
      </div>
        </div>
    </div>
  );
}

export default AboutSection;
