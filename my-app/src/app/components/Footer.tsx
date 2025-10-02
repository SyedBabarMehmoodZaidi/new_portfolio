"use client";
import React from "react";
import { ArrowUp } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export default function Footer() {
  return (
    <>
      {/* Typewriter Strip */}
<div className="w-full bg-cyan-400 h-28 flex items-center justify-center">
  <span className="text-black font-semibold text-4xl">
    <Typewriter
      words={[
        "We do Website Design & Development",
        "We do Frontend Development ",
        "We do Backend Development ",
        "We do API Integration & Development",
        "We do E-Commerce Website Development",
        "We do Portfolio & Business Websites",
        "We do Responsive UI/UX Design",
      ]}
      loop={0} // 0 = infinite loop
      cursor
      cursorStyle="|"
      typeSpeed={50}
      deleteSpeed={40}
      delaySpeed={1500} // delay between words
    />
  </span>
</div>


      {/* Footer */}
      <footer className="flex flex-col md:flex-row justify-between items-center flex-wrap py-6 px-8 bg-gray-800 text-gray-300">
        <div className="footer-text">
          <p className="text-sm text-center md:text-left">
            Copyright &copy; 2025 by{" "}
            <span className="font-semibold text-white">
              SYED BABAR MEHMOOD ZAIDI
            </span>{" "}
            | All Rights Reserved.
          </p>
        </div>

        <div className="mt-4 md:mt-0">
          <a
            href="#home"
            className="inline-flex justify-center items-center p-2 bg-blue-500 rounded-lg hover:shadow-lg transition"
          >
            <ArrowUp size={20} className="text-white" />
          </a>
        </div>
      </footer>
    </>
  );
}
