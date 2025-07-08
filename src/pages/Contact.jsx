import React from 'react';

const Contact = () => {
  return (
    <section className="bg-white text-[#0a1a3c] px-6 py-16 md:px-20 lg:px-40">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700 text-center mb-10">
          Have a question, feedback, or want to place a custom order? Reach out — we’d love to hear from you.
        </p>

        <div className="bg-[#f1f5f9] rounded-2xl shadow-lg p-6 md:p-10 space-y-6">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#0a1a3c] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-blue-900 transition"
            >
              Send Message
            </button>
          </form>

          <div className="text-sm text-gray-600 pt-6 border-t border-gray-300">
            <p>Email: <a href="mailto:info@smartspecs.ng" className="text-blue-700">wade3@elizabeth-liz.com</a></p>
            <p>Phone: <a href="tel:+2348031234567" className="text-blue-700">+1629-279-4356</a></p>
            <p>Location: Ibadan, Nigeria</p>
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        {/* <a
          href="https://wa.me/2348031234567"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all"
          title="Chat with us on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M16.72 11.06a6 6 0 10-9.22 5.06l-1.05 3.05a1 1 0 001.27 1.27l3.05-1.05a6 6 0 005.95-8.33z" />
          </svg>
        </a> */}
      </div>
    </section>
  );
};

export default Contact;
