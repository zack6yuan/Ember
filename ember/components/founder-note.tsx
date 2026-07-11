import FadeIn from "./fade-in";

export default function FounderNote() {
  return (
    <section
      aria-labelledby="founder-heading"
      className="w-full max-w-7xl mx-auto px-8 py-16 lg:py-32 xl:px-0 flex justify-center"
    >
      <FadeIn>
        <figure className="relative w-full max-w-3xl flex flex-col items-center text-center gap-8 rounded-4xl bg-white/5 border border-white/10 p-10 md:p-16 backdrop-blur-md shadow-[0_4px_40px_-10px_rgba(234,88,12,0.15)]">
          {/* Ambient glow behind the note */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none"
            aria-hidden="true"
          />

          <span
            id="founder-heading"
            className="relative z-10 text-sm font-medium uppercase tracking-[0.25em] text-orange-500"
          >
            Why Ember
          </span>

          <blockquote className="relative z-10">
            <p className="font-ztNature text-2xl md:text-4xl font-medium leading-snug tracking-tight text-white">
              &ldquo;I built Ember because you deserve to vent somewhere on the hard days,
              and celebrate on the not so hard ones. That&apos;s something I&apos;ve been
              looking for for a long time.&rdquo;
            </p>
          </blockquote>

          <figcaption className="relative z-10 flex items-center gap-4">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-orange-500 to-red-600 text-lg font-medium text-white shadow-[0_4px_20px_-4px_rgba(234,88,12,0.6)]"
              aria-hidden="true"
            >
              Z
            </div>
            <div className="text-left">
              <p className="font-medium text-white">Zack Yuan</p>
              <p className="text-sm font-light text-white/50">Founder, Ember</p>
            </div>
          </figcaption>
        </figure>
      </FadeIn>
    </section>
  );
}
