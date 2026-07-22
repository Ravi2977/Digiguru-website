import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface NavbarProps {
  activeSection: number;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const sections = [
    { label: "Hero", index: 0, id: "hero" },
    { label: "About", index: 1, id: "about" },
    { label: "Services", index: 2, id: "services" },
    { label: "Work", index: 3, id: "portfolio" },
    { label: "Tech", index: 4, id: "tech" },
    { label: "Process", index: 7, id: "process" },
    { label: "Contact", index: 9, id: "contact" },
  ];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-40 px-6 py-4 md:px-12 flex justify-between items-center bg-gradient-to-b from-brand-black/90 to-transparent backdrop-blur-xs"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Brand Logo */}
      <div 
        onClick={() => handleScrollTo("hero")}
        className="flex items-center gap-2 cursor-pointer group"
      >
        <span className="font-display font-black text-xl md:text-2xl tracking-[0.3em] text-white group-hover:text-neon-cyan transition-colors duration-300">
          Digiguru
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan group-hover:bg-purple-glow animate-pulse transition-colors" />
      </div>

      {/* Navigation Bookmarks */}
      <nav className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-dark/40 border border-white/5 backdrop-blur-md">
        {sections.map((sec) => {
          // Check if section is active (approx match for section indices)
          const isActive = 
            (sec.id === "hero" && activeSection === 0) ||
            (sec.id === "about" && activeSection === 1) ||
            (sec.id === "services" && activeSection === 2) ||
            (sec.id === "portfolio" && activeSection === 3) ||
            (sec.id === "tech" && activeSection === 4) ||
            (sec.id === "process" && activeSection === 7) ||
            (sec.id === "contact" && activeSection >= 9);

          return (
            <button
              key={sec.id}
              onClick={() => handleScrollTo(sec.id)}
              className="relative px-4 py-1.5 text-xs font-mono uppercase tracking-widest cursor-pointer transition-colors"
            >
              <span className={`relative z-10 transition-colors duration-300 ${isActive ? "text-white font-medium" : "text-gray-400 hover:text-white"}`}>
                {sec.label}
              </span>
              {isActive && (
                <motion.span
                  className="absolute inset-0 bg-white/5 border-b border-neon-cyan rounded-full"
                  layoutId="activeNavBackground"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* CTA Trigger */}
      <button
        onClick={() => handleScrollTo("contact")}
        className="relative overflow-hidden group px-5 py-2.5 rounded-full bg-white text-brand-black text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer hover:bg-neon-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
      >
        <span className="relative z-10 flex items-center gap-1">
          Inquire <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300" />
        </span>
      </button>
    </motion.header>
  );
}
