"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeIn from "./fade-in";

const faqs = [
  {
    question: "Is Scrubs really anonymous?",
    answer: "Yes, 100%. Your real name, workplace, and credentials are never shared with the community. You pick a display name, and that's all anyone sees. We don't sell data, period.",
  },
  {
    question: "Who can join Scrubs?",
    answer: "Scrubs is built for nurses, nursing students, and healthcare workers. Whether you're an RN, LPN, CNA, NP, or still in clinicals — if you've ever had a shift that broke you, you belong here.",
  },
  {
    question: "Is the app free?",
    answer: "Yes. Scrubs is completely free to join and use. We believe every nurse deserves a safe space — no paywall, no premium tiers, no catch.",
  },
  {
    question: "What kind of content is allowed?",
    answer: "Anything that helps you decompress. Vent about tough shifts, celebrate wins, ask for advice, or just drop a meme. The only rule: be kind to each other. No harassment, no doxxing, no toxicity.",
  },
  {
    question: "How is Scrubs different from Reddit or Facebook groups?",
    answer: "Those platforms aren't built for you. Scrubs is nurse-first — anonymous by default, organized by unit type and specialty, and free from the algorithm-driven noise. No ads in your feed, no random opinions from non-nurses.",
  },
  {
    question: "When does Scrubs launch?",
    answer: "Soon! Join the waitlist to get early access and be the first to know when we go live. Early members help shape the community from day one.",
  },
];

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-6 md:py-8 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-white group-hover:text-white/90 transition-colors duration-300 pr-4">
          {question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 md:w-6 md:h-6 shrink-0 text-white/50 group-hover:text-white/80 transition-all duration-300 ${
            isOpen ? "rotate-180 text-red-500" : ""
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
        <p className="text-white/60 text-base md:text-lg leading-relaxed font-light pr-12">
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
          <h2 id="faq-heading" className="text-4xl md:text-6xl lg:text-7xl font-ztNature font-medium leading-[1.1] tracking-tight text-white mb-6">
            <span className="bg-linear-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent drop-shadow-sm">
              Got Questions?
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed font-light">
            We&apos;ve got answers. Here&apos;s what nurses usually ask.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={150}>
        <div className="w-full max-w-3xl bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-md shadow-[0_4px_40px_-10px_rgba(255,255,255,0.05)] hover:border-white/15 transition-all duration-500">
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
