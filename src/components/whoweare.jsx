const members = [
  {
    name: "Amith Bhadran",
    role: " Captain of Concepts (Founder & Marketing Director)",
    img: "/pic.jfif",
    desc: "The driving force behind Adpedia’s creative vision and strategic growth, He brings over a decade of experience in building brands that stand out.",
  },
  {
    name: "Jinin",
    role: "Design Ninja",
    img: "/pic.jfif",
    desc: "From concept to creation, Jinin leads the design and branding team with a flair for storytelling and visual identity.",
  },
  {
    name: "Bhavana BS",
    role: "Digital Wizard (Digital Marketing Lead)",
    img: "/pic.jfif",
    desc: "Specializing in SEO, social media, and performance campaigns, [Name] ensures your brand connects with the right audience online.",
  },
  // Add more members here
  {
    name: "Random Guy",
    role: "Vibe Manager (Client Servicing & Events)",
    img: "/pic.jfif",
    desc: "The go-to person for seamless communication and on-ground execution.",
  },
  {
    name: "Random Guy",
    role: "Code Crusader (Web Designer/Developer)",
    img: "/pic.jfif",
    desc: "Web whisperer with a passion for clean code, smooth UX, and pixel perfection.",
  },
  // Add more members here
 
];

function WhoWeAre(){
    const borderText = "Who we are? "
    return (
        <div className="relative bg-white h-[120vh] z-50">
            <h3>Who we are</h3>
            <div className="flowing-border m-5">
      
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
    <div className="bg-white py-12 px-4 md:px-16 text-center">
        <h2 className="text-1xl md:text-3xl font-light mb-10">
        The Dream Team Behind the Magic
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center items-center text-center">
  {members.map((member, idx) => (
    <FlipCard key={idx} member={member} />
  ))}
</div>

    </div>

        

        </div>
    )
}
function FlipCard({ member }) {
  return (
    <div className="w-[200px] h-[260px] perspective group">
      <div className="relative w-full h-full duration-700 transform-style-preserve card-inner group-hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden">
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover"
          />
          {/* Name overlay on image */}
          <div className="absolute bottom-0 w-full card-front bg-opacity-60 text-white text-center py-2">
            {member.name}
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full card-back text-black flex flex-col items-center justify-center rotate-y-180 backface-hidden p-4 rounded-2xl bg-yellow-300">
          <h3 className="font-semibold text-lg">{member.name}</h3>
          <p className="text-sm">{member.role}</p>
          <p className="mt-2 text-xs italic text-center">{member.desc}</p>
        </div>
      </div>
    </div>
  );
}



export default WhoWeAre