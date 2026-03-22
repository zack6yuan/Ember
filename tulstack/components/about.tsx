import Image from "next/image";
export default function AboutSection() {
  const skills = [
    { name: "React", url: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", url: "https://cdn.simpleicons.org/nextdotjs/white" },
    { name: "Tailwind CSS", url: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "TypeScript", url: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "JavaScript", url: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "Figma", url: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "Vercel", url: "https://cdn.simpleicons.org/vercel/white" },
    { name: "Netlify", url: "https://cdn.simpleicons.org/netlify/00C7B7" }
  ];
  return (
    <div id="about" className="w-full max-w-7xl mx-auto px-8 py-16 lg:py-32 xl:px-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 flex flex-col items-center">
      <div className="w-full max-w-5xl flex flex-col items-center">
        <div className="w-full text-center flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-ztNature font-medium leading-[1.1] tracking-tight text-white mb-4">
            <span className="bg-linear-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent drop-shadow-sm">
              The Person Behind<br className="hidden md:block" /> the Work.
            </span>
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12 w-full mb-16 relative">
          <div className="absolute top-0 left-0 w-48 h-48 bg-blue-600/20 blur-3xl rounded-full z-0 hidden sm:block"></div>
          <div className="shrink-0 relative z-10 w-40 h-40 md:w-48 md:h-48 rounded-3xl overflow-hidden border border-white/10 shadow-[0_8px_40px_-12px_rgba(255,255,255,0.1)] group cursor-default">
            <Image 
              src="/zack.jpeg" 
              alt="Zack Yuan" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500"></div>
          </div>
          <div className="flex flex-col justify-center pt-2 sm:pt-4 z-10 text-center sm:text-left">
            <h3 className="text-3xl md:text-5xl font-medium text-white mb-2 tracking-tight">Zack Yuan</h3>
            <p className="text-blue-500 text-lg md:text-2xl font-medium mb-4 drop-shadow-sm">
              Freelance Developer & Designer
            </p>
            <p className="text-white/70 text-base md:text-xl leading-relaxed font-light max-w-xl mx-auto sm:mx-0">
              Helping small businesses turn ideas into digital products people love. Based in Tulsa, Oklahoma.
            </p>
          </div>
        </div>
        <div className="w-full bg-white/5 border border-white/10 rounded-4xl p-6 md:p-12 backdrop-blur-md shadow-[0_4px_40px_-10px_rgba(255,255,255,0.05)] hover:border-white/20 transition-all duration-500">
          <div className="flex flex-row items-center justify-between gap-1 sm:gap-4 md:gap-8 w-full">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="group relative flex flex-col items-center shrink-0 transition-transform duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 flex items-center justify-center rounded-xl md:rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500 shadow-inner">
                  <img 
                    src={skill.url} 
                    alt={skill.name} 
                    className="w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <span className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-[10px] md:text-sm font-medium text-white/50 absolute -bottom-5 md:-bottom-8 whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
