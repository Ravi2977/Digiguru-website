import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "AETHER LUXURY",
      category: "E-Commerce / Interactive 3D",
      desc: "A fully immersive WebGL shopping experience built for a premium Swiss watchmaker. Customers interact with real-time 3D materials and watch assemblies inside their browser, leading to a 310% boost in online metrics.",
      accent: "#00f0ff",
      gradient: "from-neon-cyan/20 to-transparent",
      device: "Desktop Showroom",
      tech: ["React", "Three.js", "GLSL Shaders", "Tailwind"],
      stats: { metric: "+310%", label: "Conversion Rate" },
    },
    {
      title: "NEXUS EXCHANGE",
      category: "Fintech Platform / Mobile App",
      desc: "A futuristic digital asset wallet and tracking interface. Features deep data stream charts, secure cryptographic signatures, and modular workspace widgets designed to look like a cinematic dashboard.",
      accent: "#bd00ff",
      gradient: "from-purple-glow/20 to-transparent",
      device: "Mobile Interface",
      tech: ["React Native", "D3.js", "Express API", "Docker"],
      stats: { metric: "24ms", label: "Instant Execution" },
    },
    {
      title: "SYNAPSE INTELLIGENCE",
      category: "SaaS Ecosystem / AI Dashboard",
      desc: "An intelligent operations dashboard that processes multi-modal feedback. Integrates generative models, active prompt templates, and customizable visual reports inside a fully responsive high-contrast grid.",
      accent: "#004cff",
      gradient: "from-electric-blue/20 to-transparent",
      device: "Glass Canvas Grid",
      tech: ["React", "Recharts", "Google GenAI", "AWS"],
      stats: { metric: "99.8%", label: "Classification Accuracy" },
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const current = projects[activeIndex];

  return (
    <section
      id="portfolio"
      className="relative min-h-screen w-full py-24 md:py-36 px-6 md:px-12 lg:px-24 z-10 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neon-cyan">03 / Case Studies</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter text-white mt-4">
              Creative Showcases.
            </h2>
          </div>

          {/* Nav Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center text-white hover:bg-white/5 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center text-white hover:bg-white/5 transition-all cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Project Showroom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[500px]">
          {/* Left Block: Narrative Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col"
              >
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: current.accent }} />
                  <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
                    {current.category}
                  </span>
                </div>

                <h3 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tighter mb-6 leading-none">
                  {current.title}
                </h3>

                <p className="text-gray-400 font-light leading-relaxed mb-8">
                  {current.desc}
                </p>

                {/* Performance Stats */}
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-brand-dark/60 border border-white/5 mb-8 w-fit">
                  <div className="text-3xl font-display font-extrabold text-white" style={{ color: current.accent }}>
                    {current.stats.metric}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-gray-500">
                    {current.stats.label}
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {current.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-gray-400 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="interactive-hover inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-white hover:text-neon-cyan transition-colors"
                >
                  <span>Inquire Case Study</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Block: Elegant Glass Device Mockup */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95, rotateY: 15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotateY: -15 }}
                transition={{ duration: 0.6, type: "spring" }}
                className={`relative w-full aspect-video rounded-3xl p-4 bg-gradient-to-br ${current.gradient} border border-white/15 flex flex-col justify-between overflow-hidden shadow-2xl`}
                style={{ perspective: "1000px" }}
              >
                {/* Mockup Header bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <div className="px-4 py-1 rounded-full bg-brand-black/40 border border-white/5 text-[10px] font-mono text-gray-400 tracking-wider">
                    Digiguru-interactive://{current.title.toLowerCase().replace(" ", "-")}.io
                  </div>
                  <div className="text-gray-500">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>

                {/* Inner Preview Workspace Content */}
                <div className="flex-1 flex flex-col justify-center items-center relative py-8">
                  {/* Decorative digital layout lines representing high-tech wireframes */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
                  
                  <motion.div
                    className="flex flex-col items-center text-center p-8 z-10 glass-card rounded-2xl border border-white/10"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  >
                    <span className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">Active Scene</span>
                    <h4 className="font-display font-black text-2xl md:text-3xl text-white tracking-wide">
                      {current.device}
                    </h4>
                    <p className="text-xs font-mono text-gray-500 mt-1 uppercase tracking-widest">
                      WebGL Enabled / 60 FPS
                    </p>
                  </motion.div>
                </div>

                {/* Device Footer status info */}
                <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[10px] font-mono text-gray-500 tracking-widest uppercase">
                  <span>Renderer: WebGL2</span>
                  <span>FPS: 60.00</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
