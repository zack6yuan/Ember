import { Send } from "lucide-react";
export default function ContactSection() {
  return (
    <div id="contact" className="w-full max-w-7xl mx-auto px-8 py-16 lg:py-32 xl:px-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 flex flex-col items-center">
      <div className="w-full max-w-4xl flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-ztNature font-medium leading-[1.1] tracking-tight text-white mb-6">
          <span className="bg-linear-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent drop-shadow-sm">
            Let's build something<br className="hidden md:block" /> amazing together.
          </span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 leading-relaxed font-light mb-16">
          Ready to elevate your business? Drop a message below and I'll get back to you within 24 hours to kick things off.
        </p>
        <div className="w-full max-w-2xl bg-white/5 border border-white/10 rounded-4xl p-8 md:p-12 backdrop-blur-md shadow-[0_4px_40px_-10px_rgba(255,255,255,0.05)] hover:border-white/20 transition-all duration-500">
          <form
            action="https://formsubmit.co/zackyuandev@gmail.com"
            method="POST"
            className="flex flex-col gap-6 text-left"
          >
            <input type="text" name="_honey" className="hidden" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Inquiry from TulStack Website!" />
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name" className="text-sm font-medium text-white/70 ml-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="email" className="text-sm font-medium text-white/70 ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="john@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-white/70 ml-1">Message</label>
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                placeholder="Tell me a bit about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 group flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 transition-all duration-300 text-white px-8 py-5 rounded-2xl font-medium text-lg md:text-xl shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_30px_rgba(37,99,235,0.5)] w-full"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
