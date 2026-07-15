import { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * A CSS phone device frame with an ember glow. The screen is a slot:
 *
 *   // Placeholder (now): pass mock UI as children
 *   <PhoneFrame><MockFeed items={...} /></PhoneFrame>
 *
 *   // Real screenshot (later): drop a PNG in /public/screens/ and pass `src`
 *   <PhoneFrame src="/screens/feed.png" alt="Ember feed" />
 *
 * The frame, sizing, and glow stay identical either way — swapping in real
 * screenshots is a one-line change per phone.
 */
export default function PhoneFrame({
  children,
  src,
  alt = "",
  className = "",
}: {
  children?: ReactNode;
  src?: string;
  alt?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19] w-[236px] shrink-0 rounded-[2.6rem] border border-white/10 bg-[#0a0604] p-2.5",
        "shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.07)]",
        className
      )}
    >
      {/* Ambient ember glow behind the device */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[3.2rem] bg-[radial-gradient(circle,rgba(232,90,42,0.2),transparent_70%)] blur-2xl"
      />
      {/* Screen */}
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-hearth">
        {/* Dynamic island */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-2.5 z-20 h-[18px] w-20 -translate-x-1/2 rounded-full bg-black"
        />
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        ) : (
          children
        )}
      </div>
    </div>
  );
}
