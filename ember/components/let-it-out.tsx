"use client";
import { useCallback, useRef, useState } from "react";
import { Flame, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import FadeIn from "./fade-in";

type Phase = "idle" | "burning" | "done";

const EMBER_COLORS = ["#ffd9a8", "#ffb073", "#ffa04d", "#ff8a3d", "#e85a2a"];

/**
 * Renders the textarea's text into an offscreen canvas, samples the lit pixels,
 * and animates each as a rising, flickering ember on the overlay canvas.
 */
function burn(
  textarea: HTMLTextAreaElement,
  canvas: HTMLCanvasElement,
  value: string,
  onDone: () => void
) {
  const W = textarea.clientWidth;
  const H = textarea.clientHeight;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const ctx = canvas.getContext("2d");
  if (!ctx || W === 0 || H === 0) {
    onDone();
    return;
  }
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width = `${W}px`;
  canvas.style.height = `${H}px`;
  ctx.scale(dpr, dpr);

  // Offscreen render of the wrapped text, to sample pixel positions.
  const off = document.createElement("canvas");
  off.width = W * dpr;
  off.height = H * dpr;
  const octx = off.getContext("2d");
  if (!octx) {
    onDone();
    return;
  }
  octx.scale(dpr, dpr);
  const cs = getComputedStyle(textarea);
  const fontSize = parseFloat(cs.fontSize);
  const lineHeight = parseFloat(cs.lineHeight) || fontSize * 1.4;
  octx.font = `${cs.fontWeight} ${fontSize}px ${cs.fontFamily}`;
  octx.textBaseline = "top";
  octx.fillStyle = "#fff";

  // Word-wrap to the textarea width.
  const words = value.split(/\s+/);
  const lines: string[] = [];
  let line = "";
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (octx.measureText(test).width > W && line) {
      lines.push(line);
      line = w;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  lines.forEach((ln, i) => octx.fillText(ln, 0, i * lineHeight));

  // Sample lit pixels into particles.
  const data = octx.getImageData(0, 0, off.width, off.height).data;
  const step = Math.max(2, Math.round(2 * dpr));
  type P = { x: number; y: number; vx: number; vy: number; life: number; ttl: number; delay: number; size: number; color: string; seed: number };
  const particles: P[] = [];
  for (let py = 0; py < off.height; py += step) {
    for (let px = 0; px < off.width; px += step) {
      if (data[(py * off.width + px) * 4 + 3] > 130) {
        const x = px / dpr;
        const y = py / dpr;
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.45,
          vy: -(0.24 + Math.random() * 0.6),
          life: 0,
          ttl: 95 + Math.random() * 70,
          delay: (x / W) * 30 + Math.random() * 22, // left-to-right burn sweep
          size: 1.1 + Math.random() * 1.4,
          color: EMBER_COLORS[(Math.random() * EMBER_COLORS.length) | 0],
          seed: Math.random() * 6.28,
        });
      }
    }
  }

  ctx.globalCompositeOperation = "lighter";
  let frame = 0;
  function tick() {
    if (!ctx) return;
    ctx.clearRect(0, 0, W, H);
    let alive = false;
    for (const p of particles) {
      if (frame < p.delay) {
        // Not yet ignited: still shows as the intact letter.
        alive = true;
        ctx.globalAlpha = 1;
        ctx.fillStyle = "#fff6ef";
        ctx.fillRect(p.x, p.y, p.size, p.size);
        continue;
      }
      if (p.life > p.ttl) continue;
      alive = true;
      p.life++;
      p.vy -= 0.004;
      p.x += p.vx + Math.sin(p.life * 0.12 + p.seed) * 0.35;
      p.y += p.vy;
      const alpha = 1 - p.life / p.ttl;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = p.color;
      const s = p.size * (0.7 + alpha * 0.8);
      ctx.fillRect(p.x, p.y, s, s);
    }
    frame++;
    if (alive && frame < 460) {
      requestAnimationFrame(tick);
    } else {
      ctx.clearRect(0, 0, W, H);
      onDone();
    }
  }
  requestAnimationFrame(tick);
}

export default function LetItOut() {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const release = useCallback(() => {
    const value = text.trim();
    if (!value || phase !== "idle") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ta = textareaRef.current;
    const canvas = canvasRef.current;
    if (reduce || !ta || !canvas) {
      setPhase("done");
      return;
    }
    setPhase("burning");
    burn(ta, canvas, value, () => setPhase("done"));
  }, [text, phase]);

  const reset = () => {
    const canvas = canvasRef.current;
    canvas?.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
    setText("");
    setPhase("idle");
    requestAnimationFrame(() => textareaRef.current?.focus());
  };

  return (
    <section
      id="let-it-out"
      aria-labelledby="let-it-out-heading"
      className="flex w-full max-w-7xl mx-auto flex-col items-center gap-10 px-8 py-16 lg:py-28 xl:px-0"
    >
      <FadeIn>
        <div className="mx-auto w-full max-w-3xl text-center">
          <h2
            id="let-it-out-heading"
            className="text-5xl md:text-6xl xl:text-7xl font-serif font-medium leading-[1.1] tracking-tight text-ink"
          >
            Go ahead. <span className="italic text-ember-warm">Let it out.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl font-light leading-relaxed text-ink-dim">
            A taste of what Ember is for. Type whatever&rsquo;s weighing on you and watch it go.
            Nothing is saved, nothing is sent &mdash; this one&rsquo;s just for you.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={150} className="w-full">
        <div className="relative mx-auto w-full max-w-2xl rounded-4xl border border-white/[0.06] bg-surface-card p-5 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.9)] md:p-7">
          <div className="relative min-h-[9.5rem]">
            <textarea
              ref={textareaRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              disabled={phase !== "idle"}
              maxLength={280}
              rows={4}
              aria-label="Write what's on your mind"
              placeholder="Type whatever's weighing on you…"
              className={cn(
                "w-full resize-none border-0 bg-transparent p-0 text-lg md:text-xl leading-relaxed text-ink placeholder:text-ink-faint/70 focus:outline-none focus:ring-0",
                phase !== "idle" && "pointer-events-none opacity-0"
              )}
            />
            {/* Ember burn overlay */}
            <canvas
              ref={canvasRef}
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute inset-0 h-full w-full transition-opacity",
                phase === "burning" ? "opacity-100" : "opacity-0"
              )}
            />
            {/* Afterglow message */}
            {phase === "done" && (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center"
                role="status"
              >
                <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-full bg-ember/15 shadow-[0_0_30px_-6px_rgba(232,90,42,0.6)]">
                  <Flame className="h-6 w-6 text-ember" />
                </div>
                <p className="font-serif text-3xl text-ink">Gone.</p>
                <p className="max-w-sm font-light text-ink-dim">
                  Nothing saved, nothing shared. That&rsquo;s the whole idea &mdash; somewhere to set
                  it down and breathe.
                </p>
              </div>
            )}
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <span className="text-xs text-ink-faint" aria-hidden={phase !== "idle"}>
              {phase === "idle" ? `${text.length}/280 · nothing is saved` : " "}
            </span>
            {phase === "done" ? (
              <div className="flex items-center gap-4">
                <button
                  onClick={reset}
                  className="text-sm font-medium text-ink-dim transition-colors hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ember rounded-sm"
                >
                  Write another
                </button>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-linear-[160deg] from-ember-from to-ember-to px-5 py-2.5 text-sm font-semibold text-on-ember shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_10px_28px_-8px_rgba(232,90,42,0.55)] transition-all hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hearth"
                >
                  Join the waitlist
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            ) : (
              <button
                onClick={release}
                disabled={!text.trim() || phase !== "idle"}
                className="group inline-flex items-center gap-2 rounded-xl bg-linear-[160deg] from-ember-from to-ember-to px-6 py-3 text-base font-semibold text-on-ember shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_10px_28px_-8px_rgba(232,90,42,0.55)] transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:brightness-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hearth"
              >
                Release
                <Flame className="h-4 w-4 transition-transform group-hover:scale-110" />
              </button>
            )}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
