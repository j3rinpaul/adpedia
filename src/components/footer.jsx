import React from "react";
import { Helmet } from "react-helmet";

import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const workingHours = {
  
  Monday: "9:00 AM – 5:00 PM",
  Tuesday: "9:00 AM – 5:00 PM",
  Wednesday: "9:00 AM – 5:00 PM",
  Thursday: "9:00 AM – 5:00 PM",
  Friday: "9:00 AM – 5:00 PM",
  Saturday: "Closed",
  Sunday: "Closed"
};

const Footer = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });
  <Helmet>
  <title>Contact Us | Adpedia</title>
  <meta
    name="description"
    content="Get in touch with Adpedia — located in Aspin Commercial Tower, Dubai. Reach out via phone or email for innovative advertising solutions."
  />
  <meta
    name="keywords"
    content="Adpedia contact, Dubai advertising agency, Aspin Tower, Adpedia phone number, Adpedia location, Adpedia working hours"
  />
  <meta name="author" content="Adpedia Team" />

  {/* Open Graph */}
  <meta property="og:title" content="Contact Adpedia - Creative Agency Dubai" />
  <meta
    property="og:description"
    content="Visit Adpedia at Aspin Commercial Tower or contact us to bring your brand vision to life."
  />
  <meta property="og:image" content="https://theadpedia.com/logo.png" />
  <meta property="og:url" content="https://theadpedia.com/#contact" />
  <meta property="og:type" content="business.business" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Contact Adpedia - Creative Agency Dubai" />
  <meta
    name="twitter:description"
    content="Connect with our expert team for advertising, branding, and marketing solutions."
  />
  <meta name="twitter:image" content="https://theadpedia.com/logo.png" />

  <link rel="canonical" href="https://theadpedia.com/#contact" />
</Helmet>


  return (

    
    <footer className="relative bg-gray-900 text-white px-6 py-12 z-10">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>

              
          <p>Aspin</p>
          <p>Commercial Tower, Financial centre</p>
          <p>Dubai</p>
          <p>Phone: +97 1545401082</p>
          <p>Email: info@adpedia.com</p>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
          <ul className="space-y-2">
            {Object.entries(workingHours).map(([day, hours]) => (
              <li
                key={day}
                className={`flex justify-between ${
                  day === today ? "text-yellow-300 font-bold" : ""
                }`}
              >
                <span>{day}</span>
                <span>{hours}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Social + Map */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl mb-4">
            <a href="https://instagram.com/theadpedia/"  target="_blank" aria-label="Instagram" className="hover:text-yellow-400">
              <FaInstagram />
            </a>
            {/* <a href="#" aria-label="Twitter" className="hover:text-yellow-400">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-yellow-400">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-yellow-400">
              <FaFacebook />
            </a> */}
          </div>

          <div className="w-full h-40 md:h-32 rounded overflow-hidden">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.8297749608623!2d55.2699234753823!3d25.208962477703356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f428853023db3%3A0x6e63a9fe6b2d7cfe!2sAspin%20Commercial%20Tower%20-%20106%20Sheikh%20Zayed%20Rd%20-%20Trade%20Centre%20-%20Trade%20Centre%201%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1750327897541!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} theAdpedia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
