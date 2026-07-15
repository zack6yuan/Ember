"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeIn from "./fade-in";

const faqs = [
  {
    question: "Is Ember really anonymous?",
    answer: "Yes, 100%. Your real name and personal details are never shared with the community. You pick a display name and that's all anyone sees. We don't sell data, period.",
  },
  {
    question: "Who can join Ember?",
    answer: "Everyone. If you've ever had a day that broke you a little — and needed somewhere honest to put it — you belong here.",
  },
  {
    question: "Is the app free?",
    answer: "Yes. Ember is completely free to join and use. Everyone deserves a space to breathe — no paywall, no premium tiers, no catch.",
  },
  {
    question: "What kind of content is allowed?",
    answer: "Anything that helps you decompress. Vent about a hard day, celebrate a small win, ask for advice, or just say the thing you can't say anywhere else. The only rule: be kind to each other. No harassment, no toxicity.",
  },
  {
    question: "How is Ember different from Reddit or X?",
    answer: "Those platforms weren't built for this. Ember is anonymous by default, organized by mood rather than identity, and free from algorithmic noise. No ads in your feed, no clout chasing — just people being real with each other.",
  },
  {
    question: "When does Ember launch?",
    answer: "Soon. Join the waitlist to get early access and help shape the community from day one.",
  },
];

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/[0.06] last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-6 md:py-8 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-ember rounded-sm"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-ink group-hover:text-ember-warm transition-colors duration-300 pr-4">
          {question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 md:w-6 md:h-6 shrink-0 text-ink-muted group-hover:text-ink transition-all duration-300 ${
            isOpen ? "rotate-180 text-ember drop-shadow-[0_0_8px_rgba(240,130,74,0.6)]" : ""
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 pb-6 md:pb-8" : "max-h-0"
        }`}
        role="region"
        aria-hidden={!isOpen}
      >
        <p className="text-ink-body/75 text-base md:text-lg leading-relaxed font-light pr-12">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="flex flex-col items-center gap-10 w-full max-w-7xl mx-auto px-8 py-16 lg:py-32 xl:px-0">
      <FadeIn>
        <div className="w-full max-w-4xl text-center">
          <h2 id="faq-heading" className="text-5xl md:text-6xl xl:text-7xl font-serif font-medium leading-[1.1] tracking-tight text-ink mb-6">
            Got <span className="italic text-ember-warm">questions</span>?
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-ink-dim leading-relaxed font-light">
            We&apos;ve got answers. Here&apos;s what people usually ask.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={150}>
        <div className="w-full max-w-3xl bg-surface-card border border-white/[0.06] rounded-3xl p-6 md:p-10 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.9)] hover:border-ember/20 transition-all duration-500">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
