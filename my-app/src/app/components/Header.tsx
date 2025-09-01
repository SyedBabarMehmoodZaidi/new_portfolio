"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full px-[9%] py-6 bg-bg flex justify-between items-center z-50 border-b border-transparent transition-all duration-300">
      {/* Logo */}
      <a href="#" className="text-2xl md:text-3xl font-bold text-text cursor-default">
        Portfolio
      </a>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex space-x-8">
        <a href="#home" className="text-lg text-text hover:text-main transition">Home</a>
        <a href="#about" className="text-lg text-text hover:text-main transition">About</a>
        <a href="#services" className="text-lg text-text hover:text-main transition">Services</a>
        <a href="#portfolio" className="text-lg text-text hover:text-main transition">Portfolio</a>
        <a href="#contact" className="text-lg text-text hover:text-main transition">Contact</a>
      </nav>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-text text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Navbar */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-bg flex flex-col items-center gap-6 py-6 md:hidden shadow-lg">
          <a href="#home" className="text-lg text-text hover:text-main transition" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="text-lg text-text hover:text-main transition" onClick={() => setIsOpen(false)}>About</a>
          <a href="#services" className="text-lg text-text hover:text-main transition" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#portfolio" className="text-lg text-text hover:text-main transition" onClick={() => setIsOpen(false)}>Portfolio</a>
          <a href="#contact" className="text-lg text-text hover:text-main transition" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
}
