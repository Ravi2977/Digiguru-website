import { motion } from "motion/react";
import { Compass, Hammer, Sparkles, ShieldCheck, Rocket } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      icon: <Compass className="w-5 h-5 text-neon-cyan" />,
      title: "Discover & Strategize",
      desc: "We research brand codes, construct thematic maps, and formulate an architectural blueprint specifically tailored to maximize sensory impact.",
      details: ["User Journey Blueprints", "3D Moodboards", "Conversion Strategies"],
    },
    {
      num: "02",
      icon: <Hammer className="w-5 h-5 text-purple-glow" />,
      title: "3D Art & Prototyping",
      desc: "Our creative directors build wireframes, compile custom GLSL shaders, and sculpt lightweight 3D assets optimized for WebGL browser environments.",
      details: ["Procedural Sculpting", "Shader Prototyping", "Aesthetic Testing"],
    },
    {
      num: "03",
      icon: <Sparkles className="w-5 h-5 text-electric-blue" />,
      title: "High-Fidelity Engineering",
      desc: "We build the interactive experience using React, Vite, Tailwind, and custom Three.js pipelines. Performance is hard-coded at 60 FPS.",
      details: ["Responsive Flex Grid", "Matrix Transformations", "Event Bus Binding"],
    },
    {
      num: "04",
      icon: <ShieldCheck className="w-5 h-5 text-neon-cyan" />,
      title: "Audit & Optimization",
      desc: "Every asset is compressed under Draco algorithms. We run extensive stress tests across tablet and mobile screens to assure flawless fluidity.",
      details: ["60 FPS Stress Testing", "Draco Compression", "Accessibility Auditing"],
    },
    {
      num: "05",
      icon: <Rocket className="w-5 h-5 text-purple-glow" />,
      title: "Launch & Scale",
      desc: "Deploying via global CDN architectures. We integrate serverless telemetry and semantic SEO pathways to ensure your virtual portals gain rapid momentum.",
      details: ["Global CDN Routing", "Semantic SEO Setup", "Scale Telemetry"],
    },
  ];

  return (
    <section
      id="process"
      className="relative min-h-screen w-full py-24 md:py-36 px-6 md:px-12 lg:px-24 z-10 flex flex-col justify-center"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Title block */}
        <div className="text-center mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-neon-cyan">07 / Delivery Roadmap</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter text-white mt-4">
            Our Creative Process.
          </h2>
        </div>

        {/* Vertical connected timeline */}
        <div className="relative border-l border-white/5 pl-8 md:pl-16 ml-4 md:ml-12 flex flex-col gap-16">
          {/* Glowing continuous line overlay */}
          <div className="absolute left-0 top-4 bottom-4 w-[1px] bg-gradient-to-b from-neon-cyan via-purple-glow to-electric-blue" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              {/* Pulsing indicator node dot */}
              <div className="absolute -left-[41px] md:-left-[73px] top-1.5 w-6 h-6 rounded-full bg-brand-black border border-white/10 flex items-center justify-center">
                <div className="text-[10px] font-mono text-white font-bold">{step.num}</div>
              </div>

              {/* Floating holographic panel */}
              <div className="interactive-hover glass-card p-8 rounded-3xl border border-white/5 hover:border-white/10 hover:bg-brand-dark/50 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 shrink-0">
                      {step.icon}
                    </div>
                    <h3 className="font-display font-bold text-xl text-white">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Sub deliverables side details */}
                <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-6 flex flex-col gap-2 shrink-0">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-1">
                    Deliverables
                  </span>
                  {step.details.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-mono text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
