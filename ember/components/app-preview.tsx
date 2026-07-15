import { Flame, Heart, MessageCircle, Signal, Wifi, User, SendHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import EmberMark from "./ember-mark";
import FadeIn from "./fade-in";
import PhoneFrame from "./phone-frame";

type Vent = {
  text: string;
  tag?: string;
  flames?: number;
  hearts?: number;
  replies?: number;
  reply?: boolean;
};

/* ---- mock in-app chrome ------------------------------------------------- */

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-4 pt-2.5 pb-1 text-[9px] font-semibold text-ink-dim">
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <Signal size={9} strokeWidth={2.5} />
        <Wifi size={9} strokeWidth={2.5} />
        <span className="relative ml-0.5 inline-block h-[9px] w-4 rounded-[2px] border border-ink-dim/70">
          <span className="absolute inset-[1.5px] right-1.5 rounded-[1px] bg-ink-dim" />
        </span>
      </span>
    </div>
  );
}

function AppHeader() {
  return (
    <div className="flex items-center gap-2 border-b border-white/[0.06] px-3.5 pb-2.5 pt-1.5">
      <EmberMark size={18} />
      <span className="font-serif text-[15px] leading-none text-ink">Ember</span>
      <span className="ml-auto flex h-6 w-6 items-center justify-center rounded-full border border-white/[0.06] bg-surface-chip text-ink-faint">
        <User size={12} />
      </span>
    </div>
  );
}

function VentCard({ v }: { v: Vent }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/[0.06] p-3",
        v.reply ? "ml-5 bg-surface-chip/60" : "bg-surface-card"
      )}
    >
      <div className="mb-1.5 flex items-center gap-1.5">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-avatar-anon text-ink-faint">
          <User size={11} />
        </span>
        <span className="text-[10px] font-medium text-ink-dim">Anonymous</span>
        {v.tag && (
          <span className="ml-auto rounded-full bg-surface-chip px-2 py-0.5 text-[8px] font-semibold uppercase tracking-wide text-ember">
            {v.tag}
          </span>
        )}
      </div>
      <p className="text-[11px] leading-snug text-ink-body">{v.text}</p>
      {!v.reply && (
        <div className="mt-2 flex items-center gap-3 text-[9px] text-ink-muted">
          <span className="flex items-center gap-1">
            <Flame size={10} className="text-ember" /> {v.flames}
          </span>
          <span className="flex items-center gap-1">
            <Heart size={10} /> {v.hearts}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle size={10} /> {v.replies ?? 0}
          </span>
        </div>
      )}
    </div>
  );
}

function MockFeed({ items, compose }: { items: Vent[]; compose?: boolean }) {
  return (
    <div className="flex h-full flex-col">
      <StatusBar />
      <AppHeader />
      <div className="flex-1 space-y-2.5 overflow-hidden px-3 py-3">
        {items.map((v, i) => (
          <VentCard key={i} v={v} />
        ))}
      </div>
      {compose && (
        <div className="flex items-center gap-2 border-t border-white/[0.06] px-3 py-2.5">
          <span className="flex-1 truncate rounded-full bg-surface-input px-3 py-2 text-[10px] text-ink-faint">
            Say what&rsquo;s on your mind&hellip;
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-[160deg] from-ember-from to-ember-to text-on-ember">
            <SendHorizontal size={13} />
          </span>
        </div>
      )}
    </div>
  );
}

function MockCompose() {
  const moods = ["Drained", "Numb", "Hopeful", "Angry", "Okay"];
  return (
    <div className="flex h-full flex-col">
      <StatusBar />
      <AppHeader />
      <div className="flex flex-1 flex-col gap-3.5 px-4 py-4">
        <p className="font-serif text-[15px] text-ink">How are you, really?</p>
        <div className="flex flex-wrap gap-1.5">
          {moods.map((m, i) => (
            <span
              key={m}
              className={cn(
                "rounded-full px-2.5 py-1 text-[10px]",
                i === 0
                  ? "bg-linear-[160deg] from-ember-from to-ember-to font-semibold text-on-ember"
                  : "border border-white/[0.06] bg-surface-chip text-ink-dim"
              )}
            >
              {m}
            </span>
          ))}
        </div>
        <div className="mt-1 flex-1 rounded-2xl border border-white/[0.06] bg-surface-input p-3">
          <p className="text-[11px] leading-snug text-ink-faint">
            Third night shift this week. I just need to put this somewhere&hellip;
          </p>
        </div>
        <button className="rounded-xl bg-linear-[160deg] from-ember-from to-ember-to py-2.5 text-[11px] font-semibold text-on-ember">
          Share anonymously
        </button>
      </div>
    </div>
  );
}

/* ---- content ------------------------------------------------------------ */

const feedMain: Vent[] = [
  { text: "Told everyone I'm fine. First time admitting out loud that I'm not.", tag: "Venting", flames: 41, hearts: 27, replies: 6 },
  { text: "You're not alone in this — I felt the exact same way last month.", reply: true },
  { text: "Just needed somewhere to set this down. Thanks for listening.", tag: "Grateful", flames: 18, hearts: 22, replies: 3 },
];

const feedSide: Vent[] = [
  { text: "Third night shift this week. Running on fumes and can't slow down.", tag: "Burnout", flames: 24, hearts: 11, replies: 4 },
  { text: "Does anyone else feel guilty for taking a break?", tag: "Anxiety", flames: 9, hearts: 18, replies: 7 },
];

export default function AppPreview() {
  return (
    <section
      id="preview"
      aria-labelledby="preview-heading"
      className="flex w-full max-w-7xl mx-auto flex-col items-center gap-12 px-8 py-16 lg:py-32 xl:px-0"
    >
      <FadeIn>
        <div className="mx-auto w-full max-w-3xl text-center">
          <h2
            id="preview-heading"
            className="text-5xl md:text-6xl xl:text-7xl font-serif font-medium leading-[1.1] tracking-tight text-ink"
          >
            A feed of people being{" "}
            <span className="italic text-ember-warm pr-[0.12em]">real</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl font-light leading-relaxed text-ink-dim">
            No performance, no highlight reels &mdash; just honest, anonymous voices, and a place to
            add yours. Here&rsquo;s a glimpse of the experience.
          </p>
        </div>
      </FadeIn>

      {/*
        PLACEHOLDER SCREENS — the mock UI below stands in until the app ships.
        To use real screenshots: drop PNGs in /public/screens/ and replace each
        <MockX /> with a src, e.g. <PhoneFrame src="/screens/feed.png" alt="…" />.
        The frame, sizing, glow, and layout stay exactly the same.
      */}
      <div className="flex items-end justify-center gap-4 md:gap-6">
        <FadeIn delay={120} className="hidden lg:block">
          <PhoneFrame className="w-[196px] rotate-[-5deg] transition-transform duration-500 hover:-translate-y-1.5 hover:rotate-[-3deg]">
            <MockCompose />
          </PhoneFrame>
        </FadeIn>
        <FadeIn>
          <PhoneFrame className="z-10 w-[236px] transition-transform duration-500 hover:-translate-y-1.5">
            <MockFeed items={feedMain} compose />
          </PhoneFrame>
        </FadeIn>
        <FadeIn delay={240} className="hidden md:block">
          <PhoneFrame className="w-[196px] rotate-[5deg] transition-transform duration-500 hover:-translate-y-1.5 hover:rotate-[3deg]">
            <MockFeed items={feedSide} />
          </PhoneFrame>
        </FadeIn>
      </div>

      <FadeIn>
        <p className="text-sm text-ink-faint">A preview of the experience &mdash; the app launches soon.</p>
      </FadeIn>
    </section>
  );
}
