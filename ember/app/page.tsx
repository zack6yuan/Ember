import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import LetItOut from "@/components/let-it-out";
import AppPreview from "@/components/app-preview";
import PromptsMarquee from "@/components/prompts-marquee";
import ServicesSection from "@/components/services";
import ProcessSection from "@/components/process";
import FounderNote from "@/components/founder-note";
import FAQSection from "@/components/faq";
import ContactSection from "@/components/contact";
import Footer from "@/components/footer";
export default function App() {
  return (
    <div className="relative w-full overflow-hidden selection:bg-ember/30 selection:text-ink">

      {/* Ambient Animated Blobs (Fixed to background) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-ember-to/12 rounded-full filter blur-[120px] opacity-60 animate-blob"></div>
         <div className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] bg-ember/8 rounded-full filter blur-[120px] animate-blob" style={{ animationDelay: "2s" }}></div>
         <div className="absolute top-[80%] left-[20%] w-[600px] h-[600px] bg-ember-to/10 rounded-full filter blur-[140px] animate-blob" style={{ animationDelay: "4s" }}></div>
      </div>

      <main id="main-content" className="relative z-10">
        <Navbar />
        <HeroSection />
        <LetItOut />
        <PromptsMarquee />
        <ServicesSection />
        <AppPreview />
        <ProcessSection />
        <FounderNote />
        <FAQSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}