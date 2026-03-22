import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import ServicesSection from "@/components/services";
import ProcessSection from "@/components/process";
import AboutSection from "@/components/about";
import ContactSection from "@/components/contact";
import Footer from "@/components/footer";
export default function App() {
  return (
    <div className="relative w-full overflow-hidden selection:bg-blue-500/30">
      
      {/* Ambient Animated Blobs (Fixed to background) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-blob"></div>
         <div className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob" style={{ animationDelay: "2s" }}></div>
         <div className="absolute top-[80%] left-[20%] w-[600px] h-[600px] bg-blue-800/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}