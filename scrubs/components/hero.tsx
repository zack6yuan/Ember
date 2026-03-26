import { ArrowRight, Star } from "lucide-react";
import FadeIn from "./fade-in";
import Image from "next/image";
import chloe from "../public/chloe.jpeg"

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="flex flex-col items-center text-center gap-8 w-full max-w-7xl mx-auto px-8 py-12 lg:py-24 xl:px-0">
      
      <FadeIn delay={100} duration={800}>
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-[0_4px_24px_-8px_rgba(255,255,255,0.1)] backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] cursor-default animate-glow" role="status">
          <div className="relative flex h-2.5 w-2.5 items-center justify-center" aria-hidden="true">
            <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></div>
            <div className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
          </div>
          <p className="text-sm font-medium tracking-wide text-white/80">
            App coming soon, join the waitlist!
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={300} duration={900}>
        <div className="w-full max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
          <h1 id="hero-heading" className="text-5xl md:text-7xl xl:text-8xl font-ztNature font-medium leading-[1.05] tracking-tight">
            <span className="bg-linear-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent drop-shadow-sm">
              Nursing is exhausting.
            </span>
            <br className="block xl:hidden" />
            <span className="bg-linear-to-br from-white/80 to-white/30 bg-clip-text text-transparent">
              {' '}Stop pretending{' '}
            </span>
            <br className="block md:hidden" />
            <span className="bg-linear-to-br from-white/80 to-white/30 bg-clip-text text-transparent">
              it isn&apos;t.
            </span>
          </h1>
        </div>
      </FadeIn>

      <FadeIn delay={500} duration={900}>
        <div className="max-w-3xl mt-4 mx-auto">
          <p className="text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed font-light">Scrubs is a private community where nurses say the quiet part out loud. Vent. Connect. Decompress. Built for the shift that never quite ends.</p>
        </div>
      </FadeIn>

      <FadeIn delay={700} duration={900}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mt-2 mx-auto border border-white/30 w-full p-8 sm:p-10 rounded-2xl bg-white/2">
          <div className="flex -space-x-4" aria-hidden="true">
            <Image src={chloe} alt="" width={80} height={80} className="object-cover w-20 h-20 rounded-full shrink-0" aria-hidden="true" />
          </div>
          <div className="flex flex-col items-center sm:items-start gap-1">
            <div className="flex items-center gap-1" role="img" aria-label="5 out of 5 stars">
              <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" aria-hidden="true" />
              <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" aria-hidden="true" />
              <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" aria-hidden="true" />
              <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" aria-hidden="true" />
              <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" aria-hidden="true" />
            </div>
            <p className="text-white/90 text-lg font-medium">Trusted by over 100 nurses</p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={900} duration={900}>
        <div className="mt-4 flex">
          <a
            href="#contact"
            className="group flex items-center justify-center gap-3 bg-red-600 hover:bg-red-500 transition-all duration-300 text-white px-8 py-5 rounded-2xl font-medium text-lg md:text-xl shadow-[0_4px_20px_rgba(220,38,38,0.3)] hover:shadow-[0_4px_30px_rgba(220,38,38,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <span>Join the Waitlist</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
      </FadeIn>
    </section>
  )
}