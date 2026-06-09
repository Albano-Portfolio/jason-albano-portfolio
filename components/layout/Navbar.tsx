"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Activity } from "lucide-react";

const navLinks = [
  { href: "about", label: "About" },
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "experience", label: "Experience" },
  { href: "certifications", label: "Certs" },
  { href: "contact", label: "Contact" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      for (const link of [...navLinks].reverse()) {
        const el = document.getElementById(link.href);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(link.href);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          padding: scrolled ? "12px 0" : "20px 0",
          background: scrolled ? "rgba(8,15,31,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(6,182,212,0.1)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer" }}>
            <div style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", background: "#0d1829", borderRadius: 8, border: "1px solid rgba(6,182,212,0.3)" }}>
              <Activity size={16} color="#22d3ee" />
            </div>
            <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 18 }}>
              <span className="gradient-text">Jason</span>
              <span style={{ color: "#64748b", fontSize: 14, fontFamily: "JetBrains Mono, monospace", marginLeft: 4 }}>Albano</span>
            </span>
          </button>

          <nav style={{ display: "flex", gap: 4 }} className="hidden-mobile">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  padding: "8px 16px", borderRadius: 10, border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500,
                  background: active === link.href ? "rgba(6,182,212,0.1)" : "transparent",
                  color: active === link.href ? "#22d3ee" : "#94a3b8",
                  transition: "all 0.2s",
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div style={{ display: "flex", gap: 12, alignItems: "center" }} className="hidden-mobile">
            <a
              href="/resume/Jason-Albano-Resume.pdf"
              download
              style={{
                display: "flex", alignItems: "center", gap: 8, padding: "8px 16px",
                border: "1px solid rgba(6,182,212,0.3)", borderRadius: 10, color: "#22d3ee",
                textDecoration: "none", fontSize: 14, fontWeight: 500,
                background: "transparent", transition: "all 0.2s",
              }}
            >
              <Download size={14} /> Resume
            </a>
            <button
              onClick={() => scrollTo("contact")}
              style={{
                padding: "8px 16px", background: "#06b6d4", color: "#050a15",
                border: "none", borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer",
              }}
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#94a3b8", display: "none" }}
            className="show-mobile"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{ position: "fixed", inset: 0, zIndex: 40, background: "rgba(0,0,0,0.6)" }}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 50,
                width: 280, background: "rgba(8,15,31,0.98)",
                borderLeft: "1px solid rgba(6,182,212,0.1)",
                display: "flex", flexDirection: "column",
                padding: "80px 24px 32px",
              }}
            >
              <button
                onClick={() => setMobileOpen(false)}
                style={{ position: "absolute", top: 20, right: 20, background: "none", border: "none", cursor: "pointer", color: "#94a3b8" }}
              >
                <X size={20} />
              </button>
              <nav style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => { scrollTo(link.href); setMobileOpen(false); }}
                    style={{
                      textAlign: "left", padding: "12px 16px", borderRadius: 10,
                      background: "none", border: "none", cursor: "pointer",
                      color: "#cbd5e1", fontSize: 16, fontWeight: 500,
                    }}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a
                  href="/resume/Jason-Albano-Resume.pdf"
                  download
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    padding: "12px", border: "1px solid rgba(6,182,212,0.3)", borderRadius: 10,
                    color: "#22d3ee", textDecoration: "none", fontSize: 14,
                  }}
                >
                  <Download size={14} /> Download Resume
                </a>
                <button
                  onClick={() => { scrollTo("contact"); setMobileOpen(false); }}
                  style={{
                    padding: "12px", background: "#06b6d4", color: "#050a15",
                    border: "none", borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer",
                  }}
                >
                  Contact Me
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </>
  );
}
