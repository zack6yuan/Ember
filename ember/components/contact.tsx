"use client";
import { useState, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import FadeIn from "./fade-in";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="w-full max-w-7xl mx-auto px-8 py-16 lg:py-32 xl:px-0 flex flex-col items-center">
      <FadeIn>
        <div className="w-full max-w-4xl flex flex-col items-center text-center">
          <h2 id="contact-heading" className="text-4xl md:text-6xl lg:text-7xl font-ztNature font-medium leading-[1.1] tracking-tight text-white mb-6">
            <span className="bg-linear-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent drop-shadow-sm">
              Find your people on<br className="hidden md:block" /> Ember, today.
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 leading-relaxed font-light mb-16">
          Join the conversation, say what's on your mind, and connect with others who actually get it.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={200}>
        <div className="w-full max-w-2xl bg-white/5 border border-white/10 rounded-4xl p-8 md:p-12 backdrop-blur-md shadow-[0_4px_40px_-10px_rgba(234,88,12,0.12)] hover:border-white/20 hover:shadow-[0_8px_50px_-10px_rgba(234,88,12,0.2)] transition-all duration-500">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-medium text-white">You&apos;re on the list!</h3>
              <p className="text-white/60 text-lg font-light max-w-md">
                We&apos;ll reach out when Ember is ready. Welcome to the community.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 text-orange-400 hover:text-orange-300 transition-colors duration-300 text-sm font-medium"
              >
                Submit another response →
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 text-left"
              aria-label="Waitlist signup form"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="name" className="text-sm font-medium text-white/70 ml-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    aria-required="true"
                    placeholder="John Doe"
                    autoComplete="name"
                    disabled={status === "submitting"}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus:border-orange-500 focus:bg-white/10 transition-all duration-300 disabled:opacity-50"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="email" className="text-sm font-medium text-white/70 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    aria-required="true"
                    placeholder="john@company.com"
                    autoComplete="email"
                    disabled={status === "submitting"}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus:border-orange-500 focus:bg-white/10 transition-all duration-300 disabled:opacity-50"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-white/70 ml-1">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  aria-required="true"
                  rows={5}
                  placeholder="Tell us what's on your mind..."
                  disabled={status === "submitting"}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus:border-orange-500 focus:bg-white/10 transition-all duration-300 resize-none disabled:opacity-50"
                ></textarea>
              </div>

              {status === "error" && (
                <div className="flex items-center gap-3 text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-xl px-4 py-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p className="text-sm">Something went wrong. Please try again.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-4 group flex items-center justify-center gap-3 bg-linear-to-br from-orange-500 via-orange-600 to-red-600 enabled:hover:from-orange-400 enabled:hover:via-orange-500 enabled:hover:to-red-500 enabled:hover:-translate-y-0.5 transition-all duration-300 text-white px-8 py-5 rounded-2xl font-medium text-lg md:text-xl border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_4px_20px_-4px_rgba(234,88,12,0.5)] enabled:hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.28),0_6px_28px_-4px_rgba(234,88,12,0.65)] w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Join the Waitlist</span>
                    <Send className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </FadeIn>
    </section>
  );
}
