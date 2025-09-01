"use client";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Contact <span className="text-cyan-400">Me!</span>
      </h2>

      <form className="max-w-3xl mx-auto flex flex-col space-y-6">
        {/* First Row */}
        <div className="flex flex-col md:flex-row md:space-x-4">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full md:w-1/2 p-4 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 md:mb-0"
          />
          <input
            type="email"
            placeholder="Your Email Address"
            required
            className="w-full md:w-1/2 p-4 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row md:space-x-4">
          <input
            type="number"
            placeholder="Mobile Number"
            required
            className="w-full md:w-1/2 p-4 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 md:mb-0"
          />
          <input
            type="text"
            placeholder="Email Subject"
            required
            className="w-full md:w-1/2 p-4 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message Box */}
        <textarea
          cols={30}
          rows={10}
          placeholder="Your Message"
          className="w-full p-4 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        ></textarea>

        {/* Button */}
        <div className="flex justify-center">
          <input
            type="submit"
            value="Send Message"
            className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 cursor-pointer transition font-semibold"
          />
        </div>
      </form>
    </section>
  );
}
