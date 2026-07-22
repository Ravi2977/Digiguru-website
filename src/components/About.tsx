import { motion } from "motion/react";
import { Eye, Shield, Target } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Target className="w-5 h-5 text-neon-cyan" />,
      title: "Our Mission",
      desc: "To pioneer high-fidelity immersive interactive web experiences that break the boundaries of modern digital branding.",
    },
    {
      icon: <Eye className="w-5 h-5 text-purple-glow" />,
      title: "Our Vision",
      desc: "An internet where brands do not merely list features, but create living, breathing 3D digital realities for their audiences.",
    },
    {
      icon: <Shield className="w-5 h-5 text-electric-blue" />,
      title: "Core Values",
      desc: "Hyper-attention to detail, extreme performance optimizations, aesthetic clarity, and pushing creative boundaries.",
    },
  ];

  const milestones = [
    { year: "2024", title: "Genesis", desc: "Digiguru was founded by creative technologists focused on 3D browser graphics." },
    { year: "2025", title: "Expansion", desc: "Acquired first Fortune-500 enterprise luxury clients, delivering custom-engineered WebGL experiences." },
    { year: "2026", title: "Apex", desc: "Named Top Immersive Creative Agency worldwide, with a team pushing real-time shader boundaries." },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full py-24 md:py-36 px-6 md:px-12 lg:px-24 z-10 flex items-center"
    >
      {/* Grid background overlay for tech feeling */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/2 to-transparent pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">
        {/* Left Column: Narrative & Values */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs uppercase tracking-widest text-electric-blue">01 / Aesthetics & Precision</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter text-white mt-4 mb-6">
              Engineering Sensory Masterpieces.
            </h2>
            <p className="text-gray-400 font-light leading-relaxed mb-10 max-w-lg">
              We operate at the convergence of high-end design and state-of-the-art WebGL engineering. 
              Our creations are not templates—they are bespoke interactive installations custom-built to tell deep stories and captivate attention.
            </p>
          </motion.div>

          {/* Pillars List (Mission, Vision, Values) */}
          <div className="flex flex-col gap-6 max-w-lg">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="interactive-hover flex gap-5 p-5 rounded-2xl bg-brand-dark/40 border border-white/5 hover:border-white/10 hover:bg-brand-dark/60 transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-white mb-1">{v.title}</h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Timeline & Interactive Spacer for Glass Sculpture */}
        <div className="flex flex-col justify-center relative min-h-[400px]">
          {/* Note: The background 3D liquid morphing glass sculpture is rendered center/right behind this column */}
          
          <div className="relative pl-8 md:pl-12 border-l border-white/10 flex flex-col gap-12 z-10">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                {/* Milestone Node Dot */}
                <div className="absolute -left-[37px] md:-left-[53px] top-1.5 w-4 h-4 rounded-full bg-brand-black border-2 border-neon-cyan flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-ping" />
                </div>

                <div className="interactive-hover p-6 rounded-2xl bg-brand-dark/30 border border-white/5 hover:bg-white/5 transition-all">
                  <span className="font-mono text-xs font-bold text-neon-cyan uppercase tracking-widest">{m.year}</span>
                  <h4 className="font-display font-semibold text-lg text-white mt-1 mb-2">{m.title}</h4>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
