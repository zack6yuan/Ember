import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import ServicesSection from "@/components/services";
import ProcessSection from "@/components/process";
import ContactSection from "@/components/contact";
import Footer from "@/components/footer";
export default function App() {
  return (
    <div className="relative w-full overflow-hidden selection:bg-red-500/30">
      
      {/* Ambient Animated Blobs (Fixed to background) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-900/20 rounded-full filter blur-[120px] opacity-50 animate-blob"></div>
         <div className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] bg-red-950/15 rounded-full filter blur-[120px] animate-blob" style={{ animationDelay: "2s" }}></div>
         <div className="absolute top-[80%] left-[20%] w-[600px] h-[600px] bg-red-900/15 rounded-full filter blur-[140px] animate-blob" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}