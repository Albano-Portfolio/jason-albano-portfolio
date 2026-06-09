"use client";

import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import UseCasesSection from "@/components/sections/UseCasesSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import RecruiterSection from "@/components/sections/RecruiterSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  useEffect(() => {
    // Prevent the browser from restoring previous scroll position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Force start at the top
    window.scrollTo(0, 0);

    let cleanup: (() => void) | undefined;
    const initLenis = async () => {
      const LenisModule = await import("lenis");
      const Lenis = LenisModule.default;
      const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
      // Make sure Lenis itself starts at the top
      lenis.scrollTo(0, { immediate: true });
      const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
      cleanup = () => lenis.destroy();
    };
    initLenis();
    return () => { if (cleanup) cleanup(); };
  }, []);

  return (
    <main style={{ position: "relative", overflow: "hidden" }}>
      <div
        aria-hidden="true"
        style={{
          position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        }}
      >
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: 900, height: 600,
          background: "radial-gradient(ellipse, rgba(6,182,212,0.07) 0%, transparent 70%)",
        }} />
      </div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <UseCasesSection />
      <ExperienceSection />
      <CertificationsSection />
      <RecruiterSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
