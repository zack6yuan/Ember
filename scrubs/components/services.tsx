import { EyeOff, Users, MessageCircleHeart } from "lucide-react";
import FadeIn from "./fade-in";
export default function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="flex flex-col items-center text-center gap-10 w-full max-w-7xl mx-auto px-8 py-16 lg:py-32 xl:px-0">
      <FadeIn>
        <div className="w-full max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
          <h2 id="services-heading" className="text-5xl md:text-6xl xl:text-7xl font-ztNature font-medium leading-[1.1] tracking-tight">
            <span className="bg-linear-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent drop-shadow-sm">
              Your Safe Space,{' '}
            </span>
            <br className="block md:hidden" />
            <span className="bg-linear-to-br from-white/80 to-white/30 bg-clip-text text-transparent">
              Your Rules.
            </span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed font-light">
            A space built for real people, not highlight reels. No fluff, no toxic positivity, just honest talk from people who actually get it.
          </p>
        </div>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl mt-4" role="list">
        <FadeIn delay={0}>
          <article className="group relative flex flex-col items-start text-left p-8 md:p-10 rounded-3xl bg-white/5 border border-white/30 shadow-[0_4px_24px_-8px_rgba(255,255,255,0.05)] backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_8px_40px_-10px_rgba(234,88,12,0.2)] overflow-hidden h-full" role="listitem">
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500 text-white translate-x-4 -translate-y-4" aria-hidden="true">
              <EyeOff size={120} />
            </div>
            <div className="h-14 w-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-8 text-white group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500 shadow-[0_0_20px_rgba(234,88,12,0.15)] group-hover:shadow-[0_0_25px_rgba(234,88,12,0.3)] relative z-10" aria-hidden="true">
              <EyeOff size={26} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-medium text-white mb-4 relative z-10">Anonymous Venting</h3>
            <p className="text-base md:text-lg text-white/70 leading-relaxed font-light relative z-10">
            Say what you need to say without consequence. Your identity stays yours — always.
            </p>
          </article>
        </FadeIn>
        <FadeIn delay={150}>
          <article className="group relative flex flex-col items-start text-left p-8 md:p-10 rounded-3xl bg-white/5 border border-white/30 shadow-[0_4px_24px_-8px_rgba(255,255,255,0.05)] backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_8px_40px_-10px_rgba(234,88,12,0.2)] overflow-hidden h-full" role="listitem">
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500 text-white translate-x-4 -translate-y-4" aria-hidden="true">
              <Users size={120} />
            </div>
            <div className="h-14 w-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-8 text-white group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500 shadow-[0_0_20px_rgba(234,88,12,0.15)] group-hover:shadow-[0_0_25px_rgba(234,88,12,0.3)] relative z-10" aria-hidden="true">
              <Users size={26} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-medium text-white mb-4 relative z-10">Find Your People</h3>
            <p className="text-base md:text-lg text-white/70 leading-relaxed font-light relative z-10">
            Connect with others by mood, topic, or shared experience. Your community is already here.
            </p>
          </article>
        </FadeIn>
        <FadeIn delay={300}>
          <article className="group relative flex flex-col items-start text-left p-8 md:p-10 rounded-3xl bg-white/5 border border-white/30 shadow-[0_4px_24px_-8px_rgba(255,255,255,0.05)] backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_8px_40px_-10px_rgba(234,88,12,0.2)] overflow-hidden md:col-span-2 lg:col-span-1 h-full" role="listitem">
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500 text-white translate-x-4 -translate-y-4" aria-hidden="true">
              <MessageCircleHeart size={120} />
            </div>
            <div className="h-14 w-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-8 text-white group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500 shadow-[0_0_20px_rgba(234,88,12,0.15)] group-hover:shadow-[0_0_25px_rgba(234,88,12,0.3)] relative z-10" aria-hidden="true">
              <MessageCircleHeart size={26} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-medium text-white mb-4 relative z-10">Real-Time Support</h3>
            <p className="text-base md:text-lg text-white/70 leading-relaxed font-light relative z-10">
            Get advice, encouragement, or just a reaction when you need it most.
            </p>
          </article>
        </FadeIn>
      </div>
    </section>
  )
}