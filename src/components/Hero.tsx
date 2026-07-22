import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  const stats = [
    { value: "48+", label: "Global Brands" },
    { value: "14+", label: "Awwwards Won" },
    { value: "99.2%", label: "Client Success" },
    { value: "32M+", label: "Target Audience Reach" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-36 pb-12 px-6 md:px-12 lg:px-24 z-10 overflow-hidden"
    >
      {/* Decorative Radial Overlay */}
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-brand-black/40 to-brand-black pointer-events-none -z-10" />

      {/* Main Copy Area */}
      <div className="flex-1 flex flex-col justify-center items-start max-w-5xl">
        <motion.div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-blue/10 border border-electric-blue/30 text-neon-cyan text-xs font-mono tracking-widest uppercase mb-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          The Vanguard of 3D Marketing
        </motion.div>

        {/* Cinematic Animated Headline */}
        <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-none uppercase tracking-tighter text-white mb-8">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            >
              We Shape The
            </motion.span>
          </span>
          <span className="block overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-electric-blue to-purple-glow">
            <motion.span
              className="block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            >
              Digital Future.
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="text-gray-400 text-base md:text-lg lg:text-xl max-w-2xl font-light mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Digiguru is a high-end 3D digital marketing and immersive experience design agency. 
          We engineer high-fidelity, interactive web environments that capture audience minds and elevate luxury brand presence.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
        >
          <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="interactive-hover px-8 py-4 rounded-full bg-gradient-to-r from-electric-blue to-purple-glow text-white font-mono text-xs font-bold uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_30px_rgba(189,0,255,0.45)] transition-all cursor-pointer"
          >
            Explore Immersive Services
          </button>
          
          <button
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            className="interactive-hover px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-mono text-xs font-bold uppercase tracking-widest transition-all cursor-pointer"
          >
            Showcase
          </button>
        </motion.div>
      </div>

      {/* Footer statistics dashboard & Scroll Indicator */}
      <div className="mt-16 flex flex-col md:flex-row justify-between items-end gap-8 border-t border-white/5 pt-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-6 w-full md:w-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 + i * 0.1 }}
            >
              <span className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-gray-500 mt-1">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Scroll down mouse indicator */}
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer self-center md:self-auto text-gray-500 hover:text-white transition-colors"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <span className="text-[10px] font-mono uppercase tracking-widest">Scroll to Begin</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-neon-cyan" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
