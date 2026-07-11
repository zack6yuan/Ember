import FadeIn from "./fade-in";

type Prompt = { kicker: string; text: string };

const rowOne: Prompt[] = [
  { kicker: "Vent", text: "Get the day that broke you a little off your chest." },
  { kicker: "Celebrate", text: "Share the win no one else clapped for." },
  { kicker: "Ask", text: "Ask the question you can't ask anywhere else." },
  { kicker: "Confess", text: "Say the quiet part out loud." },
  { kicker: "Reflect", text: "Admit you're not okay — and be met with kindness." },
];

const rowTwo: Prompt[] = [
  { kicker: "Vent", text: "Let out what you've been carrying all week." },
  { kicker: "Celebrate", text: "Name the small step that actually felt huge." },
  { kicker: "Connect", text: "Find the people who genuinely get it." },
  { kicker: "Decompress", text: "Come down from a shift that took everything." },
  { kicker: "Confess", text: "Drop the mask for five honest minutes." },
];

function PromptCard({ prompt }: { prompt: Prompt }) {
  return (
    <article className="mr-5 flex w-72 md:w-80 shrink-0 flex-col gap-4 rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm shadow-[0_4px_24px_-8px_rgba(255,255,255,0.05)] transition-colors duration-500 hover:bg-white/10 hover:border-white/20">
      <span className="inline-flex w-fit items-center rounded-full bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-medium tracking-wide text-orange-300">
        {prompt.kicker}
      </span>
      <p className="text-lg md:text-xl text-white/85 leading-snug font-light">
        {prompt.text}
      </p>
    </article>
  );
}

function MarqueeRow({ prompts, reverse = false }: { prompts: Prompt[]; reverse?: boolean }) {
  return (
    <div className="group flex overflow-hidden">
      <div
        className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {[...prompts, ...prompts].map((prompt, i) => (
          <PromptCard key={i} prompt={prompt} />
        ))}
      </div>
    </div>
  );
}

export default function PromptsMarquee() {
  return (
    <section
      aria-labelledby="prompts-heading"
      className="w-full overflow-hidden py-16 lg:py-24"
    >
      <FadeIn>
        <div className="mx-auto mb-12 w-full max-w-4xl px-8 text-center">
          <h2
            id="prompts-heading"
            className="text-5xl md:text-6xl xl:text-7xl font-ztNature font-medium leading-[1.1] tracking-tight text-white mb-4"
          >
            <span className="bg-linear-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent drop-shadow-sm">
              The kind of thing you&apos;ll say here.
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed font-light">
            No audience to perform for. Just space to be honest &mdash; however that
            looks today. Anonymous, always.
          </p>
        </div>
      </FadeIn>

      <div
        className="relative flex flex-col gap-5 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]"
        aria-hidden="true"
      >
        <MarqueeRow prompts={rowOne} />
        <MarqueeRow prompts={rowTwo} reverse />
      </div>
    </section>
  );
}
