import { ArrowRight } from "lucide-react";
export default function ProcessSection() {
  const processSteps = [
    {
      num: "1",
      title: "Discovery Call",
      desc: "We chat about your business, goals, and what you need. Free, no pressure, 30-45 minutes.",
    },
    {
      num: "2",
      title: "Design & Build",
      desc: "I design and build your site from scratch. You get updates throughout so there are no surprises.",
    },
    {
      num: "3",
      title: "Go Live",
      desc: "Your site launches. I handle hosting setup, domain, and make sure everything runs smooth.",
    },
  ];
  return (
    <div id="process" className="flex flex-col items-center gap-10 w-full max-w-7xl mx-auto px-8 py-16 lg:py-32 xl:px-0 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="w-full max-w-4xl text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-ztNature font-medium leading-[1.1] tracking-tight text-white mb-6">
          <span className="bg-linear-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent drop-shadow-sm">
            Simple as 1, 2, 3.
          </span>
        </h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed font-light">
          A straightforward, transparent process designed to get your business online quickly and efficiently without the headache.
        </p>
      </div>
      <div className="relative mt-8 md:mt-16 w-full max-w-4xl">
        <div className="absolute top-[24px] left-[23.5px] md:top-[32px] md:left-[39.5px] bottom-10 w-px md:w-[2px] bg-linear-to-b from-blue-600 via-blue-600/50 to-transparent z-0"></div>
        <div className="flex flex-col gap-12 sm:gap-16">
          {processSteps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex gap-6 md:gap-10 items-start group">
              <div className="shrink-0 w-12 h-12 md:w-20 md:h-20 rounded-full bg-blue-600 flex items-center justify-center text-2xl md:text-4xl font-medium text-white shadow-[0_4px_30px_rgba(37,99,235,0.4)] transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_4px_40px_rgba(37,99,235,0.6)]">
                {step.num}
              </div>
              <div className="pt-2 md:pt-4">
                <h3 className="text-2xl md:text-4xl font-medium text-white mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-white/70 text-base md:text-xl lg:text-2xl leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-3xl mt-12 md:mt-20">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 p-8 md:p-10 rounded-4xl bg-white/5 border border-white/10 shadow-[0_4px_40px_-10px_rgba(255,255,255,0.05)] backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-500">
          <div className="text-center sm:text-left flex-1">
            <h3 className="text-2xl md:text-4xl font-medium text-white mb-2 tracking-tight">Ready to get started?</h3>
            <p className="text-white/70 text-base md:text-xl font-light">Takes 30 minutes to kick off.</p>
          </div>
          <a
            href="#contact"
            className="group flex shrink-0 items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 transition-all duration-300 text-white px-8 py-5 rounded-2xl font-medium text-lg md:text-xl shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_30px_rgba(37,99,235,0.5)]"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
