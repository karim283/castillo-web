import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("QfFvGsrSlQYMp6o3q");
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setError("");
    setSent(false);
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        "service_26xmjiu",
        "template_ff3mmb7",
        form.current
      );
      console.log("Success:", result);
      setSent(true);
      form.current.reset();
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      console.error("Full Error:", err);
      setError(`Error: ${err.text || err.message || "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-black px-4 py-20">
        <div className="bg-[#0e0e0e] border border-gray-700 rounded-xl p-6 sm:p-10 w-full max-w-2xl">
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-light text-[#d9c27d] mb-2">
            Contact Us
          </h2>
          <p className="text-center text-gray-400 text-sm sm:text-base mb-6 sm:mb-8">
            We'll give feedback as fast as we can!
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="first_name"
                required
                placeholder="First Name"
                className="w-full px-3 py-2 sm:py-3 bg-transparent border border-gray-600 text-gray-200 text-sm sm:text-base rounded-md focus:outline-none focus:border-[#d9c27d]"
              />
              <input
                name="last_name"
                required
                placeholder="Last Name"
                className="w-full px-3 py-2 sm:py-3 bg-transparent border border-gray-600 text-gray-200 text-sm sm:text-base rounded-md focus:outline-none focus:border-[#d9c27d]"
              />
            </div>

            <input
              name="mobile"
              required
              placeholder="Mobile Number"
              className="w-full px-3 py-2 sm:py-3 bg-transparent border border-gray-600 text-gray-200 text-sm sm:text-base rounded-md focus:outline-none focus:border-[#d9c27d]"
            />

            <input
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className="w-full px-3 py-2 sm:py-3 bg-transparent border border-gray-600 text-gray-200 text-sm sm:text-base rounded-md focus:outline-none focus:border-[#d9c27d]"
            />

            <textarea
              name="message"
              rows="5"
              required
              placeholder="Message"
              className="w-full px-3 py-2 sm:py-3 bg-transparent border border-gray-600 text-gray-200 text-sm sm:text-base rounded-md focus:outline-none focus:border-[#d9c27d] resize-none"
            />

            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#d9c27d] text-black px-8 sm:px-10 py-2 rounded-md tracking-wider font-semibold hover:bg-[#c8b165] transition text-sm sm:text-base disabled:opacity-50"
              >
                {loading ? "SENDING..." : "SEND"}
              </button>
            </div>

            {sent && (
              <p className="text-center text-green-400 text-sm sm:text-base mt-4">
                ✓ Message sent successfully!
              </p>
            )}

            {error && (
              <p className="text-center text-red-400 text-sm sm:text-base mt-4 break-words">
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
