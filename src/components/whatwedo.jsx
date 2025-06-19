import React from "react";

function WhatWeDo() {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-8 lg:px-16 text-black font-mono relative border-y-4 border-black">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-center items-center mb-12 gap-6 text-center md:text-left">
  {/* Text Section */}
  <div>
    <h3 className="text-2xl sm:text-5xl md:text-6xl tracking-tight flex items-center gap-4 flex-wrap">
      Something we do...
    </h3>
    <p className="text-sm uppercase mt-2 text-gray-600">360° Integrated Solutions</p>
  </div>

  {/* GIF Section */}
  <div className="w-32 h-32 md:w-40 md:h-40">
    <img
      src="/bats_ani.gif" // replace with your gif path or URL
      alt="Animated Visual"
      className="w-full h-full object-contain"
    />
  </div>
</div>


      <div className="grid md:grid-cols-2 gap-10 text-left lg:divide-x lg:divide-gray-300">
        <div className="flex flex-col gap-6 lg:pr-6">
            <div className="list-disc list-inside">
                <h3 className="text-xl font-bold mb-1 flex items-center ">
                    • Branding & Creative Design
                    <img src="/light_bulb.svg" alt="icon" className="w-5 h-5 ml-2" />
                </h3>
                <ul className="pl-4">
                    <li>- Crafting logos</li>
                    <li>- Brand identities</li>
                    <li>- Visuals that make lasting impressions</li>
                </ul>
            </div>
            <div className="list-disc list-inside">
                <h3 className="text-xl font-bold mb-1 flex items-center ">
                    •  Digital Marketing
                    <img src="/marketing.png" alt="icon" className="w-5 h-5 ml-2" />
                </h3>
                <ul className="pl-4">
                    <li>- Email campaigns & PPC</li>
                    <li>- Social media and SEO</li>
                    <li>- Visuals that make lasting impressions</li>
                </ul>
            </div>
            
            <div className="list-disc list-inside">
                <h3 className="text-xl font-bold mb-1 flex items-center ">
                    •  Media Buying & Strategy
                    <img src="/media.png" alt="icon" className="w-5 h-5 ml-2" />
                </h3>
                <ul className="pl-4">
                    <li>- Strategic ad placements</li>
                    <li>- Digital, print, radio, and outdoor to maximize visibility</li>
                    <li>- ROI</li>
                </ul>
            </div>

            <div className="list-disc list-inside">
                <h3 className="text-xl font-bold mb-1 flex items-center ">
                    •  Events & Exhibitions
                    <img src="/event.png" alt="icon" className="w-5 h-5 ml-2" />
                </h3>
                <ul className="pl-4">
                    <li>- Concept-to-completion execution of corporate events</li>
                    <li>- Trade shows</li>
                    <li>- Exhibitions.</li>
                </ul>
            </div>


    

  
  </div>


  <div className="flex flex-col gap-6 lg:pl-6">
    <div className="list-disc list-inside">
                <h3 className="text-xl font-bold mb-1 flex items-center ">
                    •  Photography & Videography
                    <img src="/photography.png" alt="icon" className="w-5 h-5 ml-2" />
                </h3>
                <ul className="pl-4">
                    <li>- Professional shoots for brands, products, and events</li>
                    <li>- Capturing the story you want to tell</li>
                   
                </ul>
            </div>
    <div className="list-disc list-inside">
                <h3 className="text-xl font-bold mb-1 flex items-center ">
                    •  Website Development
                    <img src="/website.png" alt="icon" className="w-5 h-5 ml-2" />
                </h3>
                <ul className="pl-4">
                    <li>- User-focused</li>
                    <li>- Mobile-friendly websites that look stunning and perform flawlessly.</li>
                   
                </ul>
            </div>
    <div className="list-disc list-inside">
                <h3 className="text-xl font-bold mb-1 flex items-center ">
                    • Printing & Production
                    <img src="/printer.png" alt="icon" className="w-5 h-5 ml-2" />
                </h3>
                <ul className="pl-4">
                    <li>- High-quality printing,joinery, and fabrication with competitive pricing</li>
                    <li>- Timely delivery</li>
                   
                </ul>
            </div>
            <div className="list-disc list-inside -mb-15 -mt-12 ">
                       <img src="/cat.gif" alt="" />
                    </div>

    

    

    
  </div>
</div>
      </div>
    </div>
  );
}

export default WhatWeDo;
