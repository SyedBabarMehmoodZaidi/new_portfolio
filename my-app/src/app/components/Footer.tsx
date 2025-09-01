"use client";
import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
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
  );
}
