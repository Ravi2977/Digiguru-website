import { motion } from "motion/react";
import { Gauge, Milestone, Eye, Award, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: <Gauge className="w-5 h-5 text-neon-cyan" />,
      title: "60 FPS Render Speed",
      desc: "Our interactive WebGL elements are optimized down to raw buffers and matrix manipulations, avoiding performance lags entirely.",
    },
    {
      icon: <Eye className="w-5 h-5 text-purple-glow" />,
      title: "Award-winning UX",
      desc: "We follow elite design guidelines to craft immersive paths that delight stakeholders and convert customers immediately.",
    },
    {
      icon: <Milestone className="w-5 h-5 text-electric-blue" />,
      title: "Strategic Blueprinting",
      desc: "Every line of code and pixel layout maps directly to corporate conversion metrics and marketing KPI outcomes.",
    },
    {
      icon: <Award className="w-5 h-5 text-neon-cyan" />,
      title: "Enterprise Durability",
      desc: "Fully typed codebases, high security parameters, and containerized deployments ensure pristine operation.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative min-h-screen w-full py-24 md:py-36 px-6 md:px-12 lg:px-24 z-10 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left column: Narrative & Features */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className="font-mono text-xs uppercase tracking-widest text-neon-cyan">05 / Competitive Edge</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter text-white mt-4 mb-6">
            Engineered For Superiority.
          </h2>
          <p className="text-gray-400 font-light leading-relaxed mb-10 max-w-lg">
            We don't build standard commercial websites. We engineer high-performance visual portals that immediately establish authority, elevate brand status, and captivate client attention.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                className="interactive-hover p-6 rounded-2xl bg-brand-dark/40 border border-white/5 hover:bg-brand-dark/60 hover:border-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 mb-4">
                  {p.icon}
                </div>
                <h3 className="font-display font-semibold text-base text-white mb-2">{p.title}</h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right column: Interactive Infographic panel */}
        <div className="lg:col-span-6 flex justify-center">
          <motion.div
            className="w-full max-w-lg p-8 rounded-3xl bg-brand-dark/50 border border-white/5 relative overflow-hidden flex flex-col gap-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/2 to-transparent pointer-events-none" />

            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-neon-cyan" />
                <span className="font-mono text-xs uppercase tracking-widest text-white font-semibold">
                  Performance Diagnostic
                </span>
              </div>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                Real-Time Benchmark
              </span>
            </div>

            {/* Simulated 3D interactive diagram with columns that expand */}
            <div className="flex flex-col gap-5 py-4">
              {/* Stat Row 1 */}
              <div>
                <div className="flex justify-between text-xs font-mono uppercase tracking-wider mb-2">
                  <span className="text-gray-400">Average Agency Loading Speed</span>
                  <span className="text-gray-500">4.2 Seconds</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gray-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                  />
                </div>
              </div>

              {/* Stat Row 2 */}
              <div>
                <div className="flex justify-between text-xs font-mono uppercase tracking-wider mb-2">
                  <span className="text-white font-medium">Digiguru WebGL Delivery</span>
                  <span className="text-neon-cyan font-bold">0.45 Seconds</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden shadow-[0_0_10px_rgba(0,240,255,0.15)]">
                  <motion.div
                    className="h-full bg-gradient-to-r from-electric-blue to-neon-cyan rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "15%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                  />
                </div>
              </div>

              {/* Separation line */}
              <div className="border-t border-white/5 my-2" />

              {/* Stat Row 3 */}
              <div>
                <div className="flex justify-between text-xs font-mono uppercase tracking-wider mb-2">
                  <span className="text-white font-medium">User Engagement Duration</span>
                  <span className="text-purple-glow font-bold">360% Gain</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden shadow-[0_0_10px_rgba(189,0,255,0.15)]">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-glow to-neon-cyan rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                  />
                </div>
              </div>
            </div>

            {/* Quick dashboard summary metrics */}
            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4 mt-2">
              <div className="p-4 rounded-xl bg-brand-dark/60 border border-white/5">
                <div className="font-display font-extrabold text-2xl text-neon-cyan">60fps</div>
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-1">
                  GPU Render Rate
                </div>
              </div>
              <div className="p-4 rounded-xl bg-brand-dark/60 border border-white/5">
                <div className="font-display font-extrabold text-2xl text-purple-glow">99.9%</div>
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-1">
                  Mobile Responsive
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
