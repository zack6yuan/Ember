"use client";
import { useState, useEffect, useCallback } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Features", href: "#services" },
    { name: "How It Works", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  // Close mobile menu on Escape key
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [handleEscape]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header className="w-full relative">
      <nav className="flex justify-between px-7 py-5 items-center max-w-7xl mx-auto" aria-label="Main navigation">
        <div className="flex flex-row items-center gap-3 z-50">
          <Link href="/" className="text-4xl tracking-tight leading-none focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">Ember</Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className="relative group text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white/80 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true"></span>
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left blur-xs" aria-hidden="true"></span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            className="group flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 shadow-[0_2px_12px_rgba(234,88,12,0.3)] hover:shadow-[0_4px_20px_rgba(234,88,12,0.5)] hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Join the Waitlist
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
        <button 
          className="md:hidden z-50 p-2 relative w-12 h-12 flex items-center justify-center text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <Menu 
            size={32} 
            className={`absolute transition-all duration-500 ease-in-out ${
              isOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
            }`}
            aria-hidden="true"
          />
          <X 
            size={32} 
            className={`absolute transition-all duration-500 ease-in-out ${
              isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
            }`}
            aria-hidden="true"
          />
        </button>
      </nav>
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation menu"
        aria-modal={isOpen}
        className={`md:hidden absolute top-0 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ease-in-out z-40 overflow-hidden ${
          isOpen ? "max-h-screen py-24 border-opacity-100" : "max-h-0 py-0 border-opacity-0"
        }`}
        inert={!isOpen ? true : undefined}
      >
        <ul className="flex flex-col px-8 gap-8" role="list">
          {navLinks.map((link, index) => (
            <li 
              key={link.name}
              className={`transform transition-all duration-500 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? `${index * 100}ms` : "0ms" }}
            >
              <Link 
                href={link.href}
                className="group inline-flex items-center w-fit text-3xl font-ztNature tracking-wide text-white/70 hover:text-white transition-all duration-300 hover:translate-x-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-sm"
                onClick={() => setIsOpen(false)}
                tabIndex={isOpen ? 0 : -1}
              >
                {link.name}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-4 text-white/50 text-2xl" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
          <li
            className={`transform transition-all duration-500 mt-4 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? `${navLinks.length * 100}ms` : "0ms" }}
          >
            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-2xl text-xl font-medium transition-all duration-300 shadow-[0_4px_20px_rgba(234,88,12,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? 0 : -1}
            >
              Join the Waitlist
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}