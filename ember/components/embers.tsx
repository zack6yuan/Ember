"use client";
import { useEffect, useRef } from "react";

/**
 * Lightweight canvas of embers drifting upward. Sits behind the hero content.
 * Honors prefers-reduced-motion (renders nothing / stays static).
 */
export default function Embers({ count = 45 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let raf = 0;

    type Ember = {
      x: number;
      y: number;
      r: number;
      vy: number;
      vx: number;
      drift: number;
      life: number;
      maxLife: number;
    };

    function makeEmber(initial: boolean): Ember {
      const maxLife = 220 + Math.random() * 220;
      return {
        x: Math.random() * width,
        y: initial ? Math.random() * height : height + 12,
        r: 0.6 + Math.random() * 1.8,
        vy: 0.2 + Math.random() * 0.6,
        vx: (Math.random() - 0.5) * 0.3,
        drift: Math.random() * Math.PI * 2,
        life: initial ? Math.random() * maxLife : 0,
        maxLife,
      };
    }

    let embers: Ember[] = [];

    function resize() {
      const parent = canvas.parentElement;
      width = parent?.clientWidth ?? window.innerWidth;
      height = parent?.clientHeight ?? window.innerHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function frame() {
      ctx.clearRect(0, 0, width, height);
      for (const e of embers) {
        e.life++;
        e.drift += 0.02;
        e.y -= e.vy;
        e.x += e.vx + Math.sin(e.drift) * 0.3;

        if (e.life >= e.maxLife || e.y < -12) {
          Object.assign(e, makeEmber(false));
          continue;
        }

        // Fade in then out across the ember's lifetime.
        const alpha = Math.sin((e.life / e.maxLife) * Math.PI) * 0.85;
        const radius = e.r * 3;
        const g = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, radius);
        g.addColorStop(0, `rgba(255, 184, 92, ${alpha})`);
        g.addColorStop(0.4, `rgba(249, 115, 22, ${alpha * 0.55})`);
        g.addColorStop(1, "rgba(249, 115, 22, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(e.x, e.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    }

    resize();
    embers = Array.from({ length: count }, () => makeEmber(true));
    frame();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 h-full w-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
