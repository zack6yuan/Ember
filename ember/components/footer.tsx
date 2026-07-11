import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Features", href: "#services" },
    { name: "How It Works", href: "#process" },
    { name: "FAQ", href: "#faq" },
    { name: "Join the Waitlist", href: "#contact" },
  ];

  return (
    <footer
      className="relative w-full mt-10 md:mt-20 overflow-hidden border-t border-white/10 bg-black/20 backdrop-blur-xl z-10"
      role="contentinfo"
    >
      {/* Ember glow accent along the top edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-px left-0 right-0 h-px bg-linear-to-r from-transparent via-orange-500/50 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-40 w-[600px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/10 blur-[100px]"
      />

      <div className="relative max-w-7xl mx-auto px-8 py-14 lg:py-20 xl:px-0">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-16">
          {/* Brand */}
          <div className="flex max-w-sm flex-col">
            <Link
              href="/"
              className="mb-5 w-fit rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="Ember - Back to homepage"
            >
              <span className="font-ztNature text-4xl font-medium leading-none bg-linear-to-br from-white to-white/60 bg-clip-text text-transparent">
                Ember
              </span>
            </Link>
            <p className="mb-6 font-light leading-relaxed text-white/60">
              A private community where people say the quiet part out loud. Vent.
              Connect. Decompress. Built for the moments that never quite leave you.
            </p>
            <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span>
              </span>
              <span className="text-xs font-medium tracking-wide text-white/70">
                Launching soon
              </span>
            </div>
          </div>

          {/* Links + contact */}
          <div className="flex flex-col gap-12 sm:flex-row sm:gap-20">
            <nav aria-label="Footer navigation">
              <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                Explore
              </h4>
              <ul className="flex flex-col gap-3.5" role="list">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 font-light text-white/60 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-sm"
                    >
                      <span
                        className="h-px w-0 bg-orange-400 transition-all duration-300 group-hover:w-4"
                        aria-hidden="true"
                      ></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                Get in touch
              </h4>
              <a
                href="mailto:zackyuandev@gmail.com"
                className="group inline-flex items-center gap-2.5 font-light text-white/60 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-sm"
              >
                <Mail
                  className="h-4 w-4 text-white/40 transition-colors duration-300 group-hover:text-orange-400"
                  aria-hidden="true"
                />
                zackyuandev@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex w-full flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row md:mt-16">
          <p className="text-sm font-light text-white/40" suppressHydrationWarning>
            © {currentYear} Ember. All rights reserved.
          </p>
          <a
            href="#main-content"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/40 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-sm"
          >
            Back to top
            <ArrowUp
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
