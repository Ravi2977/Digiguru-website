import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const list = [
    {
      quote: "Digiguru didn't just build us a website; they constructed a digital masterpiece. Our stakeholders were completely stunned by the 3D watch customizer, and we saw conversion rates skyrocket by 310% in just two months.",
      author: "Dominic Thorne",
      role: "VP of Product, Aether Swiss Group",
      color: "from-neon-cyan via-electric-blue to-purple-glow",
      avatarGradient: "bg-gradient-to-tr from-neon-cyan to-electric-blue",
    },
    {
      quote: "The team's grasp of both aesthetic luxury and optimization is unparalleled. The 3D particle interactions load instantly even on standard mobile devices, maintaining a flawless 60 FPS that feels cinematic.",
      author: "Helena Rostova",
      role: "Global Creative Lead, Rostova Cosmetics",
      color: "from-purple-glow via-electric-blue to-neon-cyan",
      avatarGradient: "bg-gradient-to-tr from-purple-glow to-pink-500",
    },
    {
      quote: "Digiguru operates at a different tier altogether. Their semantic SEO strategies combined with an award-winning WebGL design immediately boosted our search discoverability and overall client engagement.",
      author: "Marcus Vance",
      role: "Chief Marketing Officer, Nexus Finance",
      color: "from-electric-blue via-purple-glow to-neon-cyan",
      avatarGradient: "bg-gradient-to-tr from-electric-blue to-purple-glow",
    },
  ];

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % list.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + list.length) % list.length);
  };

  const current = list[activeIndex];

  return (
    <section
      id="testimonials"
      className="relative min-h-screen w-full py-24 md:py-36 px-6 md:px-12 lg:px-24 z-10 flex flex-col justify-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-purple-glow">06 / Client Feedback</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter text-white mt-4">
            Trusted by Leaders.
          </h2>
        </div>

        {/* Floating Glass Rotating Card */}
        <div className="relative">
          {/* Decorative Back glow */}
          <div className="absolute inset-0 -z-10 bg-radial-at-c from-electric-blue/10 via-transparent to-transparent blur-2xl rounded-full" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 25 }}
              className="glass-card relative p-8 md:p-14 rounded-3xl border border-white/10 overflow-hidden"
            >
              {/* Top Quotation Mark Decorator */}
              <div className="absolute top-8 right-8 text-white/5 pointer-events-none">
                <Quote className="w-24 h-24 rotate-180" />
              </div>

              {/* Card Content Grid */}
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                {/* 3D abstract avatar placeholder */}
                <div className="relative w-24 h-24 shrink-0">
                  <div className={`absolute inset-0 rounded-full ${current.avatarGradient} opacity-20 blur-md animate-pulse`} />
                  <div className={`w-24 h-24 rounded-full ${current.avatarGradient} border border-white/15 p-1 flex items-center justify-center`}>
                    {/* Inner glowing core representation */}
                    <div className="w-full h-full rounded-full bg-brand-black flex items-center justify-center font-display font-bold text-xl text-white">
                      {current.author.split(" ").map(n => n[0]).join("")}
                    </div>
                  </div>
                  {/* Floating orbital node circle */}
                  <motion.div 
                    className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-neon-cyan border-2 border-brand-black"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                    style={{ transformOrigin: "-12px 12px" }}
                  />
                </div>

                {/* Testimony copy */}
                <div className="flex-1">
                  <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed italic mb-8">
                    "{current.quote}"
                  </p>

                  <div>
                    <h4 className="font-display font-bold text-lg text-white">
                      {current.author}
                    </h4>
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">
                      {current.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controllers */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center text-white hover:bg-white/5 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">
              0{activeIndex + 1} / 0{list.length}
            </span>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center text-white hover:bg-white/5 transition-all cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
