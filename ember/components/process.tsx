import { ArrowRight } from "lucide-react";
import FadeIn from "./fade-in";
export default function ProcessSection() {
  const processSteps = [
    {
      num: "01",
      title: "Download the app",
      desc: "It's free to join. Create an account and join a conversation with people who get it.",
    },
    {
      num: "02",
      title: "Find your people",
      desc: "Scroll through real stories from people across the country. Find your unit, your unit type, or just a friendly face.",
    },
    {
      num: "03",
      title: "Vent or connect",
      desc: "Share your shift, ask for advice, or just drop a GIF. No judgment. No pressure. Just real talk.",
    },
  ];
  return (
    <section id="process" aria-labelledby="process-heading" className="flex flex-col items-center gap-10 w-full max-w-7xl mx-auto px-8 py-16 lg:py-32 xl:px-0">
      <FadeIn>
        <div className="w-full max-w-4xl text-center">
          <h2 id="process-heading" className="text-5xl md:text-6xl xl:text-7xl font-serif font-medium leading-[1.1] tracking-tight text-ink mb-6">
            <span className="italic text-ember-warm pr-[0.12em]">Three</span> steps. That&apos;s it.
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-ink-dim leading-relaxed font-light">
            You&apos;ve earned a place to be honest. Here&apos;s how to get there.
          </p>
        </div>
      </FadeIn>
      <ol className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-8 md:mt-16" role="list">
        {processSteps.map((step, idx) => (
          <FadeIn key={idx} delay={idx * 150} className="h-full">
            <li className="group relative flex flex-col items-start text-left h-full p-8 md:p-10 rounded-3xl bg-surface-card border border-white/[0.06] shadow-[0_20px_50px_-30px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-ember/25 hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(232,90,42,0.28)]">
              {/* Oversized ghosted step numeral, clipped to the card */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none" aria-hidden="true">
                <span className="absolute -top-8 -right-3 text-[10rem] leading-none font-serif font-medium text-ember/[0.06] group-hover:text-ember/[0.1] transition-colors duration-500 select-none">
                  {step.num}
                </span>
              </div>

              {/* Step index + accent rule */}
              <div className="relative z-10 mb-8 flex items-center gap-3">
                <span className="text-sm font-semibold tracking-[0.25em] text-ember">{step.num}</span>
                <span className="h-px w-8 bg-linear-to-r from-ember/60 to-transparent" aria-hidden="true"></span>
              </div>

              <h3 className="relative z-10 text-2xl md:text-3xl font-semibold text-ink mb-3 tracking-tight">
                <span className="sr-only">Step {idx + 1}: </span>{step.title}
              </h3>
              <p className="relative z-10 text-base md:text-lg text-ink-body/85 leading-relaxed font-light">
                {step.desc}
              </p>

              {/* Sequence connector between cards (desktop only) */}
              {idx < processSteps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-6 -translate-y-1/2 z-20 items-center justify-center text-ember/50" aria-hidden="true">
                  <ArrowRight className="w-6 h-6" strokeWidth={2} />
                </div>
              )}
            </li>
          </FadeIn>
        ))}
      </ol>
    </section>
  );
}
