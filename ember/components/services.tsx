import { EyeOff, Users, MessageCircleHeart } from "lucide-react";
import FadeIn from "./fade-in";

const cards = [
  {
    icon: EyeOff,
    title: "Anonymous Venting",
    desc: "Say what you need to say without consequence. Your identity stays yours — always.",
  },
  {
    icon: Users,
    title: "Find Your People",
    desc: "Connect with others by mood, topic, or shared experience. Your community is already here.",
  },
  {
    icon: MessageCircleHeart,
    title: "Real-Time Support",
    desc: "Get advice, encouragement, or just a reaction when you need it most.",
    wide: true,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="flex flex-col items-center text-center gap-10 w-full max-w-7xl mx-auto px-8 py-16 lg:py-32 xl:px-0">
      <FadeIn>
        <div className="w-full max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
          <h2 id="services-heading" className="text-5xl md:text-6xl xl:text-7xl font-serif font-medium text-ink leading-[1.1] tracking-tight">
            Your safe space,{" "}
            <br className="block md:hidden" />
            your <span className="italic text-ember-warm">rules</span>.
          </h2>
          <p className="mt-6 max-w-3xl mx-auto px-3 md:px-0 text-lg md:text-xl lg:text-2xl text-ink-dim leading-relaxed font-light">
            A space built for real people, not highlight reels. No fluff, no toxic positivity, just honest talk from people who actually get&nbsp;it.
          </p>
        </div>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-4" role="list">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <FadeIn key={card.title} delay={i * 150} className={card.wide ? "md:col-span-2 lg:col-span-1" : undefined}>
              <article className="group relative flex flex-col items-start text-left p-8 md:p-10 rounded-3xl bg-surface-card border border-white/[0.06] shadow-[0_20px_50px_-30px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-ember/25 hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(232,90,42,0.28)] overflow-hidden h-full" role="listitem">
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 text-ember translate-x-4 -translate-y-4" aria-hidden="true">
                  <Icon size={120} />
                </div>
                <div className="h-14 w-14 rounded-2xl bg-linear-[160deg] from-ember-alt to-ember-to flex items-center justify-center mb-8 text-on-ember group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(232,90,42,0.35)] group-hover:shadow-[0_0_28px_rgba(232,90,42,0.5)] relative z-10" aria-hidden="true">
                  <Icon size={26} strokeWidth={1.75} />
                </div>
                <h3 className="text-2xl font-semibold text-ink mb-4 relative z-10">{card.title}</h3>
                <p className="text-base md:text-lg text-ink-body/85 leading-relaxed font-light relative z-10">
                  {card.desc}
                </p>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
