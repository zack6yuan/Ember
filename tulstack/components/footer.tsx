import Link from 'next/link';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "The Process", href: "#process" },
    { name: "About Me", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full mt-10 md:mt-20 border-t border-white/10 bg-black/10 backdrop-blur-xl relative z-10">
      <div className="max-w-7xl mx-auto px-8 py-12 lg:py-20 xl:px-0">
        
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
          
          {/* Brand & Location Block */}
          <div className="flex flex-col max-w-sm">
            <Link href="/" className="flex items-center gap-3 mb-6 group w-fit">
              <Image 
                src="/tulsa-flag.webp" 
                alt="Tulsa Flag" 
                width={40} 
                height={40}
                className="rounded object-cover w-10 h-10 shrink-0 transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-3xl font-ztNature tracking-tight text-white leading-none">TulStack</span>
            </Link>
            <p className="text-white/60 mb-6 font-light leading-relaxed">
              Helping local small businesses turn complex ideas into digital products people love. Modern websites designed to scale.
            </p>
            <div className="flex items-center text-sm text-white/50">
              <MapPin size={16} className="mr-2" />
              <p className="font-light tracking-wide">Tulsa, Oklahoma</p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-medium text-lg mb-2">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-white/60 hover:text-blue-400 transition-colors duration-300 font-light flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-blue-400 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-medium text-lg mb-2">Contact Info</h4>
            <div className="flex flex-col gap-3 text-white/60 font-light">
              <a href="mailto:zackyuandev@gmail.com" className="hover:text-blue-400 transition-colors duration-300">
                zackyuandev@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Line */}
        <div className="w-full border-t border-white/10 mt-12 md:mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm font-medium">
          <p>© {currentYear} TulStack. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
