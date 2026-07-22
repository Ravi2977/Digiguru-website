import { useState } from "react";
import { motion } from "motion/react";
import { Cpu, Server, Database, Globe, Layers, Compass, Code, Figma as FigmaIcon } from "lucide-react";

interface TechnologiesProps {
  onTechHover: (index: number | null) => void;
}

export default function Technologies({ onTechHover }: TechnologiesProps) {
  const [activeTechIndex, setActiveTechIndex] = useState<number | null>(null);

  const technologies = [
    { name: "React", category: "Frontend", desc: "Interactive, state-driven visual components.", icon: <Code className="w-4 h-4 text-neon-cyan" /> },
    { name: "Java", category: "Backend Core", desc: "Enterprise performance and type-safe robustness.", icon: <Cpu className="w-4 h-4 text-purple-glow" /> },
    { name: "Spring Boot", category: "Backend Framework", desc: "Scalable, secure, enterprise-grade APIs.", icon: <Server className="w-4 h-4 text-electric-blue" /> },
    { name: "Node.js", category: "Realtime Server", desc: "Event-driven asynchronous services.", icon: <Globe className="w-4 h-4 text-neon-cyan" /> },
    { name: "MongoDB", category: "NoSQL DB", desc: "Flexible, document-based cloud storage.", icon: <Database className="w-4 h-4 text-purple-glow" /> },
    { name: "MySQL", category: "Relational DB", desc: "Strictly relational transactional security.", icon: <Database className="w-4 h-4 text-electric-blue" /> },
    { name: "AWS", category: "Cloud Ingress", desc: "Global elastic scaling and static delivery.", icon: <Layers className="w-4 h-4 text-neon-cyan" /> },
    { name: "Docker", category: "Virtualization", desc: "Reliable containerization and deployments.", icon: <Compass className="w-4 h-4 text-purple-glow" /> },
    { name: "Tailwind", category: "Styling", desc: "Utility-first rapid visual design systems.", icon: <Code className="w-4 h-4 text-electric-blue" /> },
    { name: "Figma", category: "UI/UX Design", desc: "Bespoke high-fidelity interface prototypes.", icon: <FigmaIcon className="w-4 h-4 text-neon-cyan" /> },
  ];

  const handleMouseEnter = (index: number) => {
    setActiveTechIndex(index);
    onTechHover(index);
  };

  const handleMouseLeave = () => {
    setActiveTechIndex(null);
    onTechHover(null);
  };

  return (
    <section
      id="tech"
      className="relative min-h-screen w-full py-24 md:py-36 px-6 md:px-12 lg:px-24 z-10 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Descriptions */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <span className="font-mono text-xs uppercase tracking-widest text-purple-glow">04 / Stack Integration</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter text-white mt-4 mb-6">
            Holographic Ecosystem.
          </h2>
          <p className="text-gray-400 font-light leading-relaxed mb-10 max-w-md">
            Our engineering stack is chosen for maximum responsiveness and modularity. 
            Hover over any technical tier to highlight and track its corresponding holographic 3D orbital beacon rotating in our background digital system.
          </p>

          {/* Expanded detail box for hovered technology */}
          <div className="min-h-[140px] p-6 rounded-2xl bg-brand-dark/55 border border-white/5 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 to-transparent pointer-events-none" />
            {activeTechIndex !== null ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  {technologies[activeTechIndex].icon}
                  <span className="font-display font-bold text-lg text-white">
                    {technologies[activeTechIndex].name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-gray-500 uppercase tracking-widest">
                    {technologies[activeTechIndex].category}
                  </span>
                </div>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {technologies[activeTechIndex].desc}
                </p>
              </motion.div>
            ) : (
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest text-center animate-pulse">
                [ Hover on technology to track beacon ]
              </p>
            )}
          </div>
        </div>

        {/* Right Column: Circular Floating Grid of Icons */}
        <div className="lg:col-span-7 flex justify-center items-center relative py-12">
          {/* We lay out tech items in an elegant visual list/compact grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full max-w-lg z-10">
            {technologies.map((tech, i) => {
              const isHovered = activeTechIndex === i;
              return (
                <div
                  key={i}
                  className={`group p-5 rounded-2xl bg-brand-dark/40 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isHovered
                      ? "border-neon-cyan bg-brand-dark/70 shadow-[0_0_20px_rgba(0,240,255,0.15)]"
                      : "border-white/5 hover:border-white/10 hover:bg-brand-dark/50"
                  }`}
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 group-hover:scale-105 transition-transform">
                      {tech.icon}
                    </div>
                    <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                      {tech.category}
                    </span>
                  </div>

                  <div className="font-display font-semibold text-base text-white group-hover:text-neon-cyan transition-colors">
                    {tech.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
