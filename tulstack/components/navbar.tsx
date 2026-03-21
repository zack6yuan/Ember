"use client";

import { useState } from "react";
import { MapPin, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "The Process", href: "#process" },
    { name: "About Me", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="w-full relative">
      <nav className="flex justify-between px-7 py-5 items-center max-w-7xl mx-auto">
        
        {/* Logo & Location */}
        <div className="flex flex-col z-50">
          <Link href="/" className="text-4xl font-ztNature tracking-tight">TulStack</Link>
          <div className="flex items-center text-sm text-white/50 mt-1">
            <MapPin size={14} className="mr-1" />
            <p className="font-light tracking-wide">Tulsa, OK</p>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href}
                className="text-white/70 hover:text-white transition-colors text-sm font-medium tracking-wide"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 p-2 relative w-12 h-12 flex items-center justify-center text-white/80 hover:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          <Menu 
            size={32} 
            className={`absolute transition-all duration-500 ease-in-out ${
              isOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
            }`} 
          />
          <X 
            size={32} 
            className={`absolute transition-all duration-500 ease-in-out ${
              isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
            }`} 
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-0 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ease-in-out z-40 overflow-hidden ${
          isOpen ? "max-h-screen py-24 border-opacity-100" : "max-h-0 py-0 border-opacity-0"
        }`}
      >
        <ul className="flex flex-col px-8 gap-8">
          {navLinks.map((link, index) => (
            <li 
              key={link.name}
              className={`transform transition-all duration-500 delay-${index * 100} ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <Link 
                href={link.href}
                className="text-3xl font-ztNature tracking-wide text-white/90 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}