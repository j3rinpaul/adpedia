import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_gsi4zbh",      // Replace with your EmailJS service ID
        "template_utf9rjd",     // Replace with your EmailJS template ID
        form.current,
        "ys5Hom4cMos1d8cu3"       // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("Failed to send message.");
          console.error(error);
        }
      );
  };

  return (
  <div className="relative w-full px-4 md:px-10 py-10 bg-white shadow-lg z-50">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-center">Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        {/* Name Field */}
        <div className="w-full">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 py-2 bg-transparent"
            required
          />
        </div>

        {/* Email Field */}
        <div className="w-full">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 py-2 bg-transparent"
            required
          />
        </div>

        {/* Message Field */}
        <div className="w-full">
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 py-2 bg-transparent resize-none"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </div>

        {/* Status Message */}
        {status && (
          <p className="text-center text-sm mt-4 text-gray-600">{status}</p>
        )}
      </form>
    </div>
  </div>
);

}
