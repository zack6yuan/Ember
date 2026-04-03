import Link from 'next/link';


export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Features", href: "#services" },
    { name: "How It Works", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full mt-10 md:mt-20 border-t border-white/10 bg-black/10 backdrop-blur-xl relative z-10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-8 py-12 lg:py-20 xl:px-0">
        
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
          
          {/* Brand & Location Block */}
          <div className="flex flex-col max-w-sm">
            <Link href="/" className="flex items-center gap-3 mb-6 group w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm" aria-label="Scrubs - Back to homepage">
              <span className="text-3xl tracking-tight text-white leading-none" style={{ fontFamily: 'var(--font-dyna-puff)' }}>SCRUBS</span>
            </Link>
            <p className="text-white/60 mb-6 font-light leading-relaxed">
              A private community where nurses say the quiet part out loud. Vent. Connect. Decompress. Built for the shift that never quite ends.
            </p>
          </div>

          {/* Quick Links Column */}
          <nav aria-label="Footer navigation">
            <h4 className="text-white font-medium text-lg mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-3" role="list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-white/60 hover:text-red-400 transition-colors duration-300 font-light flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-red-400 transition-colors" aria-hidden="true"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Contact Info Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-medium text-lg mb-2">Contact Info</h4>
            <div className="flex flex-col gap-3 text-white/60 font-light">
              <a href="mailto:zackyuandev@gmail.com" className="hover:text-red-400 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm">
                zackyuandev@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Line */}
        <div className="w-full border-t border-white/10 mt-12 md:mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm font-medium">
          <p suppressHydrationWarning>© {currentYear} Scrubs. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
