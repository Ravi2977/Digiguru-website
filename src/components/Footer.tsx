import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Twitter, Instagram, Github, Linkedin, Send, Sparkles } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-black border-t border-white/5 pt-24 pb-12 px-6 md:px-12 lg:px-24 z-10 overflow-hidden">
      {/* Wave animation simulation using overlapping rotating visual panels */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          className="relative block w-full h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-brand-dark opacity-40"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-start relative z-10">
        {/* Branding Area */}
        <div className="md:col-span-5 flex flex-col items-start">
          <div className="flex items-center gap-2 mb-6 cursor-pointer">
            <span className="font-display font-black text-2xl tracking-[0.3em] text-white">
              Digiguru
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
          </div>

          <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm mb-8">
            An award-winning 3D Digital Marketing Agency creating high-fidelity interactive browser experiences that define the visual standard for luxury brands.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/5 bg-white/2 flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-all cursor-pointer"
            >
              <Twitter className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/5 bg-white/2 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-glow hover:shadow-[0_0_15px_rgba(189,0,255,0.25)] transition-all cursor-pointer"
            >
              <Instagram className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/5 bg-white/2 flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-all cursor-pointer"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/5 bg-white/2 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-glow hover:shadow-[0_0_15px_rgba(189,0,255,0.25)] transition-all cursor-pointer"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>

        {/* Directory Links */}
        <div className="md:col-span-3 grid grid-cols-2 gap-8">
          {/* Index 1 */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 font-semibold">
              Corporate
            </span>
            <a href="#hero" className="text-xs text-gray-400 hover:text-white hover:underline transition-all">Home</a>
            <a href="#about" className="text-xs text-gray-400 hover:text-white hover:underline transition-all">About</a>
            <a href="#services" className="text-xs text-gray-400 hover:text-white hover:underline transition-all">Services</a>
            <a href="#portfolio" className="text-xs text-gray-400 hover:text-white hover:underline transition-all">Showcase</a>
          </div>

          {/* Index 2 */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 font-semibold">
              Insights
            </span>
            <a href="#why-choose-us" className="text-xs text-gray-400 hover:text-white hover:underline transition-all">Why Us</a>
            <a href="#faq" className="text-xs text-gray-400 hover:text-white hover:underline transition-all">FAQ</a>
            <a href="#contact" className="text-xs text-gray-400 hover:text-white hover:underline transition-all">Inquire</a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="md:col-span-4 flex flex-col items-start w-full">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 font-semibold mb-4">
            Telemetry Stream / Newsletter
          </span>
          <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
            Subscribe to receive premium code updates, Draco asset presets, and WebGL design metrics directly in your box.
          </p>

          <div className="w-full relative">
            <AnimatePresence mode="wait">
              {subscribed ? (
                <motion.div
                  key="sub"
                  className="flex items-center gap-2 p-4 rounded-xl bg-neon-cyan/5 border border-neon-cyan/20 text-neon-cyan text-xs font-mono"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Logged in dispatch stream!</span>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubscribe} className="w-full flex">
                  <input
                    type="email"
                    required
                    placeholder="e.g. helena@rostova.io"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/5 rounded-l-xl focus:border-neon-cyan focus:outline-none text-white text-xs font-light transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 bg-gradient-to-r from-electric-blue to-purple-glow rounded-r-xl text-white hover:scale-105 transition-all flex items-center justify-center cursor-pointer border-l border-white/10"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Copyright stamp */}
      <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
        <span>© {currentYear} Digiguru Labs Ltd. All coordinates reserved.</span>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-white transition-colors">Coordinates policy</a>
          <a href="#services" className="hover:text-white transition-colors">Draco permissions</a>
        </div>
      </div>
    </footer>
  );
}
