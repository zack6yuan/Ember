/**
 * Ember brand mark — the flame-"e" logo, knocked out onto a transparent
 * ground so it sits directly on the dark surfaces (navbar, footer). Purely
 * presentational; pass `animate` to enable the subtle flicker + pulsing halo.
 */
export default function EmberMark({
  size = 40,
  animate = false,
  className = "",
}: {
  size?: number;
  animate?: boolean;
  className?: string;
}) {
  return (
    // -translate-y nudge optically centers the mark on the serif wordmark's cap
    // height; flexbox items-center aligns the line-box, which sits low due to the
    // font's descender space.
    <span
      className={`relative inline-flex shrink-0 items-center justify-center -translate-y-[9%] ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Pulsing ember halo (only when animated) */}
      {animate && (
        <span className="absolute inset-[-25%] rounded-full bg-[radial-gradient(circle,rgba(255,138,61,0.5),transparent_70%)] blur-[10px] animate-ember-glow motion-reduce:animate-none" />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo/ember-flame.png"
        alt=""
        width={size}
        height={size}
        className={`relative h-full w-full object-contain drop-shadow-[0_0_7px_rgba(240,120,40,0.5)] ${
          animate ? "animate-flame-flicker motion-reduce:animate-none" : ""
        }`}
      />
    </span>
  );
}
