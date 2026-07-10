# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev     # Start dev server (http://localhost:3000)
npm run build   # Production build
npm run start   # Serve the production build
npm run lint    # ESLint (eslint-config-next, flat config in eslint.config.mjs)
```

There is no test suite. `clean.js` is a throwaway maintenance script that strips comments/blank
lines from a hardcoded list of source files — do not run it unless explicitly asked; it rewrites
files in place.

## What this is

A single-page marketing/landing site for **Ember**, a (pre-launch) anonymous venting community
app. There is no application product here — just the landing page plus one waitlist form. The whole
UI is dark-themed (orange "ember" glow on near-black), aimed at a waitlist signup.

## Architecture

- **Next.js 16 App Router + React 19 + TypeScript.** Read the AGENTS.md warning above — this Next
  major has breaking changes; consult `node_modules/next/dist/docs/` (App Router lives under
  `01-app/`) before using any Next API.
- **Single page.** `app/page.tsx` is a server component that stacks the section components from
  `components/` in order: `Navbar → HeroSection → ServicesSection → ProcessSection → FAQSection →
  ContactSection → Footer`. To change the landing page you edit these section components; there are
  no routes beyond `/` and the one API route.
- **`app/layout.tsx`** owns global concerns: the radial-gradient page background (inline style on
  `<body>`), fonts, SEO `metadata`, and the skip-to-content link. Section components assume this
  dark background and default `text-white`.
- **Waitlist form.** `components/contact.tsx` (client component) POSTs `{name, email, message}` JSON
  to `app/api/waitlist/route.ts`, which forwards it as URL-encoded form data to a Google Apps Script
  Web App (`SCRIPT_URL`). The route always returns `success` to the client unless it throws; there is
  no database.
- **`components/Aurora.tsx`** is a WebGL background effect built on `ogl` (a shader in a client
  component). Heavy/animated visuals like this must be `"use client"`.

## Conventions

- **Styling is Tailwind CSS v4, configured CSS-first in `app/globals.css`** via `@theme inline` — not
  primarily in `tailwind.config.ts`. Custom animations (`animate-blob`, `animate-glow`,
  `animate-pulse-orange`), the extended radius scale (`rounded-4xl` and up), and the `font-ztNature`
  utility are all defined there. Add new design tokens/animations in `globals.css`, not the JS config.
- **shadcn/ui is wired up** (`components.json`, style `base-nova`, Base UI via `@base-ui/react`,
  icons via `lucide-react`) but no `components/ui/` primitives exist yet — the sections are
  hand-written Tailwind. A **React Bits** registry is also configured (`@react-bits` →
  `reactbits.dev`), which is how components like `Aurora` are pulled in.
- **Path alias:** `@/*` maps to the repo root (e.g. `@/components/hero`, `@/lib/utils`).
- **`cn()` from `lib/utils.ts`** (clsx + tailwind-merge) is the standard class-merge helper.
- **Fonts:** headings use `font-ztNature` (local ZT Nature, `public/fonts/`); `Geist` is the sans
  body font; `DynaPuff` is also loaded. Reference them via the CSS variables set in `layout.tsx`.
- **Scroll-reveal animations** go through `components/fade-in.tsx` (`<FadeIn>`), which uses an
  IntersectionObserver and already honors `prefers-reduced-motion`. Reuse it rather than writing new
  observers.
- **Accessibility is intentional** across sections (skip link, `aria-labelledby` on sections,
  `aria-required`, focus-visible rings, reduced-motion handling). Preserve these patterns when
  editing.
