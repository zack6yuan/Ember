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
    <article className="mr-5 flex w-72 md:w-80 shrink-0 flex-col gap-4 rounded-3xl bg-surface-card border border-white/[0.06] p-6 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.8)] transition-colors duration-500 hover:border-ember/25">
      <span className="inline-flex w-fit items-center rounded-full bg-surface-chip border border-white/[0.06] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-ember">
        {prompt.kicker}
      </span>
      <p className="text-lg md:text-xl text-ink-body leading-snug font-light">
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
            className="text-5xl md:text-6xl xl:text-7xl font-serif font-medium leading-[1.1] tracking-tight text-ink mb-4"
          >
            The kind of thing you&apos;ll <span className="italic text-ember-warm">say</span> here.
          </h2>
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-ink-dim leading-relaxed font-light">
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
