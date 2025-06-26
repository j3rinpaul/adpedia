import React, { useRef, useState, forwardRef } from "react";
import emailjs from "@emailjs/browser";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ContactForm = React.forwardRef((props, ref) => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [fileName, setFileName] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setEmailSent(false);

    emailjs
      .sendForm(
        "service_gsi4zbh", // your service ID
        "template_utf9rjd", // your template ID
        form.current,
        "ys5Hom4cMos1d8cu3" // your public key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setEmailSent(true);
          setFileName("");
          form.current.reset();
        },
        (error) => {
          setStatus("Failed to send message.");
          console.error(error);
        }
      );
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div
      ref={ref}
      className="relative w-full px-4 md:px-10 py-10 bg-gray-100 shadow-lg z-10"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl font-semibold mb-8 text-center"
          style={{ fontFamily: "Cambria" }}
        >
          Contact Us
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
          encType="multipart/form-data"
        >
          <div className="w-full">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 py-2 bg-transparent"
              required
            />
          </div>

          <div className="w-full">
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 py-2 bg-transparent"
              required
            />
          </div>

          <div className="w-full">
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 py-2 bg-transparent resize-none"
              required
            ></textarea>

            {/* Attachment Field */}
            {/* <label className="flex items-center gap-2 mt-4 cursor-pointer text-gray-600">
              <AttachFileIcon fontSize="small" />
              <input
                type="file"
                name="my_file"
                onChange={handleFileChange}
                className="hidden"
              />
              <span className="text-sm">Attach file</span>
              {fileName && (
                <span className="text-sm text-gray-800 flex items-center">
                  {fileName}
                  {emailSent && (
                    <CheckCircleIcon
                      className="text-green-500 ml-1"
                      fontSize="small"
                    />
                  )}
                </span>
              )}
            </label> */}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-black px-6 py-3 rounded-md hover:bg-blue-700 transition"
              style={{backgroundColor:"rgb(244, 210, 38)"}}
            >
              Send Message
            </button>
          </div>

          {status && (
            <p className="text-center text-sm mt-4 text-gray-600">{status}</p>
          )}
        </form>
      </div>
    </div>
  );
});

export default ContactForm;
