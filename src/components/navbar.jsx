import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
  className="fixed top-0 left-0 shadow z-60 py-3 mx-[15%] w-[70%]"
  style={{ backgroundColor: "rgb(244, 210, 38)", borderRadius: "0.5rem" }}
>
  <div className="flex items-center justify-between">
    {/* Left: Logo */}
    <div className="text-2xl font-bold text-blue-600">
      <img src="/logo.png" style={{ width: "50px" }} alt="Adpedia Logo" />
    </div>

    {/* Right: Contact button (desktop) */}
    <div className="hidden md:block">
      <button
        onClick={scrollToContact}
        className="bg-black text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        style={{ fontFamily: "Arial" }}
      >
        Contact
      </button>
    </div>

    {/* Hamburger (mobile) */}
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="md:hidden mt-3">
      <button
        onClick={scrollToContact}
        className="block w-full text-left bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Contact
      </button>
    </div>
  )}
</nav>

  );
}

export default Navbar;
