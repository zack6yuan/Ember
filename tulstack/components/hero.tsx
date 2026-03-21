import girl from "../public/girl.jpg";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center text-center gap-8 w-full max-w-7xl mx-auto px-8 py-12 lg:py-24 xl:px-0 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      {/* Premium Glassmorphic Badge */}
      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-[0_4px_24px_-8px_rgba(255,255,255,0.1)] backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 cursor-default">
        <div className="relative flex h-2.5 w-2.5 items-center justify-center">
          <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></div>
          <div className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
        </div>
        <p className="text-sm font-medium tracking-wide text-white/80">
          Available for new projects
        </p>
      </div>

      {/* Large Gradient Headline */}
      <div className="w-full max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl xl:text-8xl font-ztNature font-medium leading-[1.05] tracking-tight">
          <span className="bg-gradient-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent drop-shadow-sm">
            Your Tulsa Business.
          </span>
          <br className="block xl:hidden" />
          <span className="bg-gradient-to-br from-white/80 to-white/30 bg-clip-text text-transparent px-1">
            Online.
          </span>{' '}
          <span className="bg-gradient-to-br from-white/80 to-white/30 bg-clip-text text-transparent">
            Done Right.
          </span>
        </h1>
      </div>
      <div className="max-w-2xl mt-2 mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-150 fill-mode-both">
        <p className="text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed font-light">
          I build modern websites for local Tulsa businesses - no templates, no bloat, just results.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mt-2 mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-150 border border-white/10 w-full p-8 sm:p-10 rounded-2xl bg-white/2">
        <div className="flex -space-x-4">
          <Image src={girl} alt="Girl" className="w-20 h-20 rounded-full border-2 border-black object-cover relative z-30" />
          <Image src={girl} alt="Girl" className="w-20 h-20 rounded-full border-2 border-black object-cover relative z-20" />
          <Image src={girl} alt="Girl" className="w-20 h-20 rounded-full border-2 border-black object-cover relative z-10" />
        </div>
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="flex items-center gap-1">
            <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" />
            <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" />
            <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" />
            <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" />
            <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" />
          </div>
          <div className="">
            <p className="text-white/90 text-lg font-medium">Trusted by Tulsa Businesses</p>
          </div>
        </div>
      </div>

      <div className="mt-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 fill-mode-both flex">
        <a
          href="#contact"
          className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:bg-white/90 hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        >
          <span>Let's Talk</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  )
}