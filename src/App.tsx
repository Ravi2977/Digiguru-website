import { useState, useEffect } from "react";
import ThreeCanvas from "./components/ThreeCanvas";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number | null>(null);
  const [hoveredTechIndex, setHoveredTechIndex] = useState<number | null>(null);

  // Set up advanced IntersectionObserver to map scroll coordinates to the 3D Canvas
  useEffect(() => {
    const sections = document.querySelectorAll(".section-tracker");
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -40% 0px", // Targets viewport focus center
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const indexAttr = entry.target.getAttribute("data-section-index");
          if (indexAttr !== null) {
            setActiveSection(parseInt(indexAttr, 10));
          }
        }
      });
    }, observerOptions);

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative bg-brand-black min-h-screen selection:bg-neon-cyan/30 select-none">
      {/* 1. Custom Interactive Glow Trail Cursor */}
      <CustomCursor />

      {/* 2. High-Performance Background WebGL Canvas (Fixed behind layout) */}
      <ThreeCanvas
        activeSection={activeSection}
        selectedServiceIndex={selectedServiceIndex}
        hoveredTechIndex={hoveredTechIndex}
      />

      {/* 3. Luxury Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* 4. Scrollable HTML Layout Overlay (Relative layer above 3D WebGL scene) */}
      <main className="relative z-10 w-full overflow-hidden">
        {/* Section 0: Hero */}
        <div className="section-tracker" data-section-index={0}>
          <Hero />
        </div>

        {/* Section 1: About */}
        <div className="section-tracker" data-section-index={1}>
          <About />
        </div>

        {/* Section 2: Services */}
        <div className="section-tracker" data-section-index={2}>
          <Services onServiceHover={setSelectedServiceIndex} />
        </div>

        {/* Section 3: Portfolio Showcase */}
        <div className="section-tracker" data-section-index={3}>
          <Portfolio />
        </div>

        {/* Section 4: Technologies Orbit Core */}
        <div className="section-tracker" data-section-index={4}>
          <Technologies onTechHover={setHoveredTechIndex} />
        </div>

        {/* Section 5: Why Choose Us */}
        <div className="section-tracker" data-section-index={5}>
          <WhyChooseUs />
        </div>

        {/* Section 6: Testimonials */}
        <div className="section-tracker" data-section-index={6}>
          <Testimonials />
        </div>

        {/* Section 7: Process Roadmap */}
        <div className="section-tracker" data-section-index={7}>
          <Process />
        </div>

        {/* Section 8: Curated FAQ */}
        <div className="section-tracker" data-section-index={8}>
          <FAQ />
        </div>

        {/* Section 9: Secure Contact */}
        <div className="section-tracker" data-section-index={9}>
          <Contact />
        </div>

        {/* Section 10: Global Footer */}
        <div className="section-tracker" data-section-index={10}>
          <Footer />
        </div>
      </main>
    </div>
  );
}
