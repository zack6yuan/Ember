import { ArrowRight } from "lucide-react";
import FadeIn from "./fade-in";
import Embers from "./embers";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden w-full max-w-[1920px] mx-auto px-5 md:px-8 pt-40 md:pt-52 lg:pt-60 pb-24 lg:pb-40"
    >
      {/* Ambient hearth glow rising from the bottom, behind everything */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(150%_85%_at_50%_120%,rgba(255,150,60,0.35),rgba(232,90,42,0.12)_38%,transparent_64%)]" />
        <div className="absolute left-1/2 -bottom-40 h-[520px] w-[820px] max-w-full -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,138,61,0.28),transparent_68%)] blur-2xl animate-ember-glow motion-reduce:animate-none" />
      </div>

      {/* Rising embers, behind the hero content */}
      <Embers />

      <div className="flex flex-col items-center text-center gap-8 w-full max-w-7xl mx-auto">

        <FadeIn delay={100} duration={800}>
          <div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-surface-chip/60 border border-white/10 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all hover:border-ember/40 cursor-default"
            role="status"
          >
            <div
              className="relative flex h-2.5 w-2.5 items-center justify-center"
              aria-hidden="true"
            >
              <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember opacity-60"></div>
              <div className="relative inline-flex rounded-full h-2 w-2 bg-ember shadow-[0_0_8px_rgba(240,130,74,0.8)]"></div>
            </div>
            <p className="text-sm font-medium tracking-wide text-ink-dim">
              App coming soon, join the waitlist!
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={300} duration={900}>
          <div className="relative w-full max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
            {/* Glow behind heading */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[120%] bg-ember-to/12 rounded-full blur-[100px] pointer-events-none"
              aria-hidden="true"
            />
            <h1
              id="hero-heading"
              className="relative text-balance md:text-wrap text-5xl md:text-7xl xl:text-8xl font-serif font-medium text-ink leading-[1.06] tracking-[-0.01em]"
            >
              Let it out before{" "}
              <br className="hidden md:block" />
              it{" "}
              <span className="italic text-ember-warm pr-[0.12em]">burns</span>{" "}
              you up.
            </h1>
          </div>
        </FadeIn>

        <FadeIn delay={500} duration={900}>
          <div className="max-w-3xl mt-4 mx-auto px-6 md:px-0">
            <p className="text-lg md:text-xl lg:text-2xl text-ink-dim leading-relaxed font-light">
              Ember is a community where you say the quiet part out loud. Vent.
              Connect. Decompress. Built for the moments that never quite leave
              you.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={900} duration={900}>
          <div className="mt-4 flex">
            <a
              href="#contact"
              className="group flex items-center justify-center gap-3 bg-linear-[160deg] from-ember-from to-ember-to hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300 text-on-ember px-8 py-5 rounded-2xl font-semibold text-lg md:text-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_12px_34px_-6px_rgba(232,90,42,0.5)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.38),0_16px_40px_-6px_rgba(232,90,42,0.62)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hearth"
            >
              <span>Join the Waitlist</span>
              <ArrowRight
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
