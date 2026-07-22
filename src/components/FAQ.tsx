import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const list = [
    {
      q: "What is an immersive 3D experience, and why does my brand need it?",
      a: "An immersive 3D experience utilizes advanced WebGL to render interactable 3D environments, custom materials, and shaders directly in the client browser. It replaces static templates with responsive virtual worlds, keeping users engaged up to 360% longer and dramatically amplifying luxury brand authority.",
    },
    {
      q: "Will interactive 3D elements run smoothly on standard mobile devices?",
      a: "Absolutely. We heavily optimize all models using Draco compression algorithms, vertex reductions, and GPU instancing. We write highly performant render loops that bypass CPU bounds, ensuring a flawless, eye-safe 60 FPS on everything from standard smartphones to ultra-wide desktop monitors.",
    },
    {
      q: "Do you integrate external databases and authentication systems?",
      a: "Yes. For multi-user or transactional systems, we integrate relational Cloud SQL (PostgreSQL) databases or Firebase Auth and Firestore. We build secure backend proxy routes inside our Express service layer to guard all third-party credentials and keep your data safe.",
    },
    {
      q: "Can you implement custom Generative AI or Gemini API features?",
      a: "Yes. We are experts in implementing server-side @google/genai SDK integrations. We can build intelligent chatbots, real-time image analyzers, smart text summarizers, or automated workflows that utilize Gemini models securely without ever exposing keys to the browser.",
    },
    {
      q: "How long does a typical custom immersive project take?",
      a: "A typical high-fidelity landing stage or Essential campaign takes between 3 to 5 weeks. Elite interactive portals with multiple custom shaders and customized asset libraries usually range from 6 to 10 weeks, following our structured chronological process blueprint.",
    },
  ];

  return (
    <section
      id="faq"
      className="relative min-h-screen w-full py-24 md:py-36 px-6 md:px-12 lg:px-24 z-10 flex flex-col justify-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-neon-cyan">08 / Common Queries</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter text-white mt-4">
            Curated Insights.
          </h2>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {list.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className="interactive-hover rounded-2xl bg-brand-dark/40 border border-white/5 overflow-hidden transition-all duration-300"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center gap-6 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className="w-5 h-5 text-neon-cyan shrink-0" />
                    <span className="font-display font-semibold text-base md:text-lg text-white">
                      {item.q}
                    </span>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-500 shrink-0"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Accordion Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/5">
                        <p className="text-sm text-gray-400 font-light leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
