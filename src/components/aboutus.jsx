import React from "react";

function AboutUs() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gray-100">
      {/* Heading Section */}
      <div className="bg-[#f2f2f2] border-t-4 border-b-4 border-black py-6 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-wide flex justify-center items-center gap-3 flex-wrap">
          <span className="font-extrabold">THE ADPEDIA STORY</span>
          <img src="/light_bulb.svg" alt="Idea" className="w-8 sm:w-10 h-auto" />
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="px-4 py-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-10 font-mono text-black ml-5 mr-5">
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold">
            From Idea to Impact: Inside the World of{" "}
            <strong>Adpedia Advertising</strong>
          </h2>

          <p>
            <strong>Adpedia Advertising</strong> is a leading 360° marketing and
            advertising agency based in the UAE, offering end-to-end creative
            and strategic solutions. From{" "}
            <strong>branding, digital marketing, media buying</strong>, and
            corporate events to exhibitions, photography, videography, and
            website development — we are your one-stop destination for all
            things advertising.
          </p>

          <p>
            At <strong>Adpedia</strong>, we don’t just deliver services — we
            create impact. Whether it’s a{" "}
            <strong>
              powerful brand identity, a high-converting digital campaign
            </strong>
            , or a compelling visual story, we ensure your message reaches and
            resonates with the right audience.
          </p>

          <p>
            Our expertise also extends to{" "}
            <strong>printing, joinery, and production</strong>, allowing us to
            offer cost-effective solutions without compromising on quality.
            Backed by <strong>creativity, innovation, and commitment</strong>,
            Adpedia Advertising is where{" "}
            <strong>brands grow, connect, and shine</strong>.
          </p>

          {/* Social Media Section */}
          <div className="pt-6">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Check us out on social media
            </h3>
            <div className="flex gap-4 items-center flex-wrap pl-10">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/facebook.svg"
                  alt="Facebook"
                  className="w-6 h-6 hover:scale-110 transition"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/instagram.svg"
                  alt="Instagram"
                  className="w-6 h-6 hover:scale-110 transition"
                />
              </a>
              <a href="mailto:youremail@example.com">
                <img
                  src="/gmail.svg"
                  alt="Gmail"
                  className="w-6 h-6 hover:scale-110 transition"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        {/* Image Section with newspaper-style caption */}
<div className="w-full lg:w-[40%] flex flex-col gap-4">
  <img
    src="/about.jpg"
    alt="Adpedia Office"
    className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[500px]"
  />

  {/* Newspaper-style Caption */}
  <div className="text-xs sm:text-sm font-serif text-gray-700 leading-snug px-2">
    <p className="mb-2 italic">
      Above: A glimpse inside the Adpedia Advertising office in the UAE. Known for its creative synergy, the workspace fosters ideas that shape impactful campaigns across the Middle East and beyond.
    </p>
   
  </div>
</div>

      </div>
    </div>
  );
}

export default AboutUs;
