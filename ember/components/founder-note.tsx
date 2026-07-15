import FadeIn from "./fade-in";

export default function FounderNote() {
  return (
    <section
      aria-labelledby="founder-heading"
      className="w-full max-w-7xl mx-auto px-8 py-16 lg:py-32 xl:px-0 flex justify-center"
    >
      <FadeIn>
        <figure className="relative w-full max-w-3xl flex flex-col items-center text-center gap-8 rounded-4xl bg-surface-card border border-white/[0.06] p-10 md:p-16 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.9)]">
          {/* Ambient glow behind the note */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] bg-ember-to/12 rounded-full blur-[100px] pointer-events-none"
            aria-hidden="true"
          />

          <span
            id="founder-heading"
            className="relative z-10 text-xs font-bold uppercase tracking-[0.25em] text-ember"
          >
            Why Ember
          </span>

          <blockquote className="relative z-10">
            <p className="font-serif text-2xl md:text-4xl font-medium leading-snug tracking-tight text-ink">
              &ldquo;I built Ember because you deserve to vent somewhere on the hard days,
              and celebrate on the not so hard ones. That&apos;s something I&apos;ve been
              looking for for a long time.&rdquo;
            </p>
          </blockquote>

          <figcaption className="relative z-10 flex items-center gap-4">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-[160deg] from-ember-from to-ember-to text-lg font-semibold text-on-ember shadow-[0_4px_20px_-4px_rgba(232,90,42,0.6)]"
              aria-hidden="true"
            >
              Z
            </div>
            <div className="text-left">
              <p className="font-medium text-ink">Zack Yuan</p>
              <p className="text-sm font-light text-ink-faint">Founder, Ember</p>
            </div>
          </figcaption>
        </figure>
      </FadeIn>
    </section>
  );
}
