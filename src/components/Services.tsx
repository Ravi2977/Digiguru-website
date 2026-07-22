import { motion } from "motion/react";
import { Laptop, Search, Share2, Award, Cpu, BarChart3, ArrowRight } from "lucide-react";

interface ServicesProps {
  onServiceHover: (index: number | null) => void;
}

export default function Services({ onServiceHover }: ServicesProps) {
  const servicesList = [
    {
      icon: <Laptop className="w-6 h-6 text-neon-cyan" />,
      title: "Web Development",
      desc: "Custom high-performance WebGL & 3D browser ecosystems engineered with precision, running at a fluid 60FPS.",
      color: "border-neon-cyan/30 hovered:shadow-[0_0_20px_rgba(0,240,255,0.25)]",
    },
    {
      icon: <Search className="w-6 h-6 text-purple-glow" />,
      title: "Semantic SEO",
      desc: "Algorithmic discovery engineering and search architecture optimized to ensure high-luxury visibility.",
      color: "border-purple-glow/30 hovered:shadow-[0_0_20px_rgba(189,0,255,0.25)]",
    },
    {
      icon: <Share2 className="w-6 h-6 text-electric-blue" />,
      title: "Social Experience",
      desc: "Stunning, high-conversion organic narratives and virtual community assets crafted specifically for high-end platforms.",
      color: "border-electric-blue/30 hovered:shadow-[0_0_20px_rgba(0,76,255,0.25)]",
    },
    {
      icon: <Award className="w-6 h-6 text-neon-cyan" />,
      title: "Brand Identity",
      desc: "Visual luxury architecture, responsive typography, custom design assets, and immersive motion design blueprints.",
      color: "border-neon-cyan/30 hovered:shadow-[0_0_20px_rgba(0,240,255,0.25)]",
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-glow" />,
      title: "AI & Automation",
      desc: "Custom neural integrations, smart customer flows, and intelligent back-office automations that optimize scale.",
      color: "border-purple-glow/30 hovered:shadow-[0_0_20px_rgba(189,0,255,0.25)]",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-electric-blue" />,
      title: "CRM & Insights",
      desc: "Dynamic dashboards and client retention systems designed to maximize engagement and long-term customer values.",
      color: "border-electric-blue/30 hovered:shadow-[0_0_20px_rgba(0,76,255,0.25)]",
    },
  ];

  return (
    <section
      id="services"
      className="relative min-h-screen w-full py-24 md:py-36 px-6 md:px-12 lg:px-24 z-10 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-purple-glow">02 / Integrated Solutions</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter text-white mt-4">
              Premium Capabilities.
            </h2>
          </div>
          <p className="text-gray-400 font-light max-w-md text-sm md:text-base leading-relaxed">
            Hover over any capability panel to bring its custom-rendered interactive 3D digital model into focus.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, i) => (
            <motion.div
              key={i}
              className={`group relative p-8 rounded-3xl bg-brand-dark/40 border border-white/5 hover:bg-brand-dark/70 hover:border-white/10 transition-all duration-300 flex flex-col justify-between min-h-[300px] cursor-pointer`}
              onMouseEnter={() => onServiceHover(i)}
              onMouseLeave={() => onServiceHover(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/2 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300 mb-8">
                  {service.icon}
                </div>

                <h3 className="font-display font-semibold text-xl text-white mb-3 group-hover:text-neon-cyan transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Read More Arrow */}
              <div className="mt-8 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">
                <span>Configure Suite</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
