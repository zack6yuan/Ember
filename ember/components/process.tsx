import { ArrowRight } from "lucide-react";
import FadeIn from "./fade-in";
export default function ProcessSection() {
  const processSteps = [
    {
      num: "1",
      title: "Download the app",
      desc: "It's free to join. Create an account and join a conversation with people who get it.",
    },
    {
      num: "2",
      title: "Find your people",
      desc: "Scroll through real stories from people across the country. Find your unit, your unit type, or just a friendly face.",
    },
    {
      num: "3",
      title: "Vent or connect",
      desc: "Share your shift, ask for advice, or just drop a GIF. No judgment. No pressure. Just real talk.",
    },
  ];
  return (
    <section id="process" aria-labelledby="process-heading" className="flex flex-col items-center gap-10 w-full max-w-7xl mx-auto px-8 py-16 lg:py-32 xl:px-0">
      <FadeIn>
        <div className="w-full max-w-4xl text-center">
          <h2 id="process-heading" className="text-4xl md:text-6xl lg:text-7xl font-ztNature font-medium leading-[1.1] tracking-tight text-white mb-6">
            <span className="bg-linear-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent drop-shadow-sm">
             Three Steps. That&apos;s It.
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed font-light">
            You&apos;ve earned a place to be honest. Here&apos;s how to get there.
          </p>
        </div>
      </FadeIn>
      <div className="relative mt-8 md:mt-16 w-full max-w-4xl">
        <div className="absolute top-[24px] left-[23.5px] md:top-[32px] md:left-[39.5px] bottom-10 w-px md:w-[2px] bg-linear-to-b from-orange-600 via-orange-600/50 to-transparent z-0" aria-hidden="true"></div>
        <ol className="flex flex-col gap-12 sm:gap-16" role="list">
          {processSteps.map((step, idx) => (
            <FadeIn key={idx} delay={idx * 200} direction="left">
              <li className="relative z-10 flex gap-6 md:gap-10 items-start group">
                <div className="shrink-0 w-12 h-12 md:w-20 md:h-20 rounded-full bg-orange-600 flex items-center justify-center text-2xl md:text-4xl font-medium text-white shadow-[0_4px_30px_rgba(234,88,12,0.5)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_4px_50px_rgba(234,88,12,0.7)]" aria-hidden="true">
                  {step.num}
                </div>
                <div className="pt-2 md:pt-4">
                  <h3 className="text-2xl md:text-4xl font-medium text-white mb-3 tracking-tight">
                    <span className="sr-only">Step {step.num}: </span>{step.title}
                  </h3>
                  <p className="text-white/70 text-base md:text-xl lg:text-2xl leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
      <FadeIn delay={100}>
        <div className="w-full max-w-3xl mt-12 md:mt-20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 p-8 md:p-10 rounded-4xl bg-white/5 border border-white/10 shadow-[0_4px_40px_-10px_rgba(234,88,12,0.15)] backdrop-blur-md hover:bg-white/10 hover:border-white/20 hover:shadow-[0_8px_60px_-10px_rgba(234,88,12,0.25)] transition-all duration-500">
            <div className="text-center sm:text-left flex-1">
              <h3 className="text-2xl md:text-4xl font-medium text-white mb-2 tracking-tight">Ready to find your community?</h3>
              <p className="text-white/70 text-base md:text-xl font-light">Join the conversation today.</p>
            </div>
            <a
              href="#contact"
              className="group flex shrink-0 items-center justify-center gap-3 bg-linear-to-br from-orange-500 via-orange-600 to-red-600 hover:from-orange-400 hover:via-orange-500 hover:to-red-500 hover:-translate-y-0.5 transition-all duration-300 text-white px-8 py-5 rounded-2xl font-medium text-lg md:text-xl border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_4px_20px_-4px_rgba(234,88,12,0.5)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.28),0_6px_28px_-4px_rgba(234,88,12,0.65)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <span>Join Ember</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
