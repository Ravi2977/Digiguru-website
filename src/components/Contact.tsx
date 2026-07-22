import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquareCode, Sparkles } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tier: "immersive",
    scope: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitting(true);
    // Simulate luxury API response dispatch
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({ name: "", email: "", tier: "immersive", scope: "" });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full py-24 md:py-36 px-6 md:px-12 lg:px-24 z-10 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Form & Form handlers */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className="font-mono text-xs uppercase tracking-widest text-neon-cyan">09 / Secure Ingress</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter text-white mt-4 mb-6">
            Initiate Project.
          </h2>
          <p className="text-gray-400 font-light leading-relaxed mb-10 max-w-md">
            Deploy your design metrics directly to our dispatcher desk. Our senior engineers formulate blueprints within 24 hours.
          </p>

          <div className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden">
            {/* Success Notification */}
            <AnimatePresence>
              {success && (
                <motion.div
                  className="absolute inset-0 bg-brand-black/95 backdrop-blur-md z-20 flex flex-col items-center justify-center text-center p-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="w-16 h-16 rounded-full bg-neon-cyan/10 border border-neon-cyan flex items-center justify-center mb-6">
                    <Sparkles className="w-8 h-8 text-neon-cyan animate-spin" />
                  </div>
                  <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight mb-2">
                    Transmission Dispatched
                  </h3>
                  <p className="text-sm text-gray-400 max-w-xs leading-relaxed mb-8">
                    Your parameters have been logged. A project architect will initiate communication shortly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="px-6 py-2 rounded-full border border-white/10 hover:border-white/30 text-xs font-mono text-white"
                  >
                    Send Another Stream
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                  Your Identity / Brand Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dominic Thorne / Aether Group"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/5 focus:border-neon-cyan focus:outline-none text-white text-sm font-light transition-colors"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                  Electronic Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. dominic@aether.io"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/5 focus:border-neon-cyan focus:outline-none text-white text-sm font-light transition-colors"
                />
              </div>

              {/* Select Tier */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                  Preferred Project Tier
                </label>
                <select
                  value={formData.tier}
                  onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-brand-dark border border-white/5 focus:border-neon-cyan focus:outline-none text-white text-sm font-light transition-colors cursor-pointer"
                >
                  <option value="essential">Digiguru Essential Suite</option>
                  <option value="immersive">Digiguru Immersive Suite</option>
                  <option value="signature">Digiguru Signature Suite</option>
                  <option value="custom">Enterprise Custom — Custom Scope</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                  Brief Project Objectives
                </label>
                <textarea
                  rows={4}
                  placeholder="Detail your goals, timelines, and preferred 3D visual elements..."
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/5 focus:border-neon-cyan focus:outline-none text-white text-sm font-light transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="interactive-hover w-full py-4 rounded-xl bg-gradient-to-r from-electric-blue to-purple-glow text-white font-mono text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(189,0,255,0.35)] hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{submitting ? "Establishing Uplink..." : "Dispatch Parameters"}</span>
                <Send className="w-4.5 h-4.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Global Locations & Interactive Map Radar & WhatsApp */}
        <div className="lg:col-span-6 flex flex-col gap-10">
          {/* Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-brand-dark/45 border border-white/5">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2">
                Direct Dispatch
              </span>
              <a
                href="mailto:dispatch@Digiguru3d.io"
                className="flex items-center gap-2 text-white font-display font-medium text-base hover:text-neon-cyan transition-colors"
              >
                <Mail className="w-4 h-4 text-neon-cyan" />
                dispatch@Digiguru3d.io
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-brand-dark/45 border border-white/5">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2">
                Hotline Telemetry
              </span>
              <a
                href="tel:+18008678393"
                className="flex items-center gap-2 text-white font-display font-medium text-base hover:text-purple-glow transition-colors"
              >
                <Phone className="w-4 h-4 text-purple-glow" />
                +1 (800) Digiguru-3D
              </a>
            </div>
          </div>

          {/* Interactive Radar Location Map Placeholder */}
          <div className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col justify-between aspect-video relative overflow-hidden">
            {/* Concentric rotating radar circles to represent interactive map coordinates */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 rounded-full flex items-center justify-center pointer-events-none">
              <div className="w-36 h-36 border border-neon-cyan/10 rounded-full flex items-center justify-center">
                <div className="w-24 h-24 border border-purple-glow/10 rounded-full flex items-center justify-center" />
              </div>
            </div>

            {/* Simulated blinking radar sweeping beam */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent to-neon-cyan/40 origin-left pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            />

            <div className="flex justify-between items-start z-10">
              <div>
                <span className="text-[9px] font-mono text-neon-cyan uppercase tracking-widest">
                  Location Grid
                </span>
                <h4 className="font-display font-bold text-lg text-white mt-1">
                  Global Coordinate Hub
                </h4>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] font-mono text-gray-400">
                <MapPin className="w-3 h-3 text-neon-cyan" />
                <span>SF, CA & Tokyo, JP</span>
              </div>
            </div>

            {/* Radar Coordinates pointer */}
            <div className="absolute top-[40%] left-[55%] z-10 flex flex-col items-center gap-1 pointer-events-none">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-neon-cyan" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-neon-cyan animate-ping" />
              </div>
              <span className="px-2 py-0.5 rounded-md bg-brand-black/85 text-[8px] font-mono text-white border border-white/5">
                Digiguru_CENTRAL
              </span>
            </div>

            <div className="flex justify-between items-end text-[9px] font-mono text-gray-500 tracking-widest uppercase z-10">
              <span>LAT: 35.6762° N</span>
              <span>LONG: 139.6503° E</span>
            </div>
          </div>

          {/* WhatsApp Direct CTA Link */}
          <a
            href="https://wa.me/18008678393"
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-hover p-6 rounded-2xl bg-emerald-500/5 hover:bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/40 flex items-center justify-between transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shrink-0">
                <MessageSquareCode className="w-6 h-6 text-emerald-400 group-hover:scale-105 transition-transform" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-white text-base">
                  Direct WhatsApp Telemetry
                </h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed mt-0.5">
                  Establish instant conversational secure link with a product lead.
                </p>
              </div>
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold group-hover:translate-x-1 transition-transform">
              Connect
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
