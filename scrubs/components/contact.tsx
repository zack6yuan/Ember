import { Send } from "lucide-react";
import FadeIn from "./fade-in";
export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="w-full max-w-7xl mx-auto px-8 py-16 lg:py-32 xl:px-0 flex flex-col items-center">
      <FadeIn>
        <div className="w-full max-w-4xl flex flex-col items-center text-center">
          <h2 id="contact-heading" className="text-4xl md:text-6xl lg:text-7xl font-ztNature font-medium leading-[1.1] tracking-tight text-white mb-6">
            <span className="bg-linear-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent drop-shadow-sm">
              Find your community on<br className="hidden md:block" /> Scrubs, today.
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 leading-relaxed font-light mb-16">
            Join the conversation, find your community, share your experiences, and connect with nurses who get it.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={200}>
        <div className="w-full max-w-2xl bg-white/5 border border-white/10 rounded-4xl p-8 md:p-12 backdrop-blur-md shadow-[0_4px_40px_-10px_rgba(220,38,38,0.12)] hover:border-white/20 hover:shadow-[0_8px_50px_-10px_rgba(220,38,38,0.2)] transition-all duration-500">
          <form
            action="https://formsubmit.co/zackyuandev@gmail.com"
            method="POST"
            className="flex flex-col gap-6 text-left"
            aria-label="Contact form"
          >
            <input type="text" name="_honey" className="hidden" tabIndex={-1} aria-hidden="true" autoComplete="off" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Inquiry from Scrubs Website!" />
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
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus:border-red-500 focus:bg-white/10 transition-all duration-300"
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
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus:border-red-500 focus:bg-white/10 transition-all duration-300"
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
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus:border-red-500 focus:bg-white/10 transition-all duration-300 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 group flex items-center justify-center gap-3 bg-red-600 hover:bg-red-500 transition-all duration-300 text-white px-8 py-5 rounded-2xl font-medium text-lg md:text-xl shadow-[0_4px_30px_rgba(220,38,38,0.4)] hover:shadow-[0_8px_50px_rgba(220,38,38,0.6)] w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
            </button>
          </form>
        </div>
      </FadeIn>
    </section>
  );
}
