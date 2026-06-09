"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Sparkles } from "lucide-react";

const roles = ["Healthcare Data Analyst","AI Analytics Expert","Databricks Specialist","BI Engineer","Data Storyteller"];

const badges = [
  { label: "Databricks Certified", bg: "rgba(255,54,33,0.15)", border: "rgba(255,54,33,0.3)", color: "#fca5a5" },
  { label: "Tableau Specialist",   bg: "rgba(31,119,180,0.15)", border: "rgba(31,119,180,0.3)", color: "#93c5fd" },
  { label: "SnowPro Core",         bg: "rgba(41,181,232,0.15)", border: "rgba(41,181,232,0.3)", color: "#7dd3fc" },
  { label: "Microsoft AI Pro",     bg: "rgba(0,120,212,0.15)",  border: "rgba(0,120,212,0.3)",  color: "#a5b4fc" },
  { label: "Stanford AI/Health",   bg: "rgba(20,184,166,0.15)", border: "rgba(20,184,166,0.3)", color: "#5eead4" },
];

function DataVizGraphic() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Outer glow */}
      <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)" }} />

      {/* Orbit rings */}
      <div style={{ position: "absolute", width: 380, height: 380, borderRadius: "50%", border: "1px solid rgba(6,182,212,0.2)", animation: "spin1 20s linear infinite" }} />
      <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(20,184,166,0.15)", animation: "spin2 15s linear infinite reverse" }} />
      <div style={{ position: "absolute", width: 220, height: 220, borderRadius: "50%", border: "1px solid rgba(14,165,233,0.2)", animation: "spin1 10s linear infinite" }} />

      {/* Orbit dots */}
      {[0,60,120,180,240,300].map((deg, i) => (
        <div key={i} style={{
          position: "absolute", width: 380, height: 380,
          animation: `spin1 20s linear infinite`,
          animationDelay: `${-i * 3.3}s`,
        }}>
          <div style={{
            position: "absolute", top: -4, left: "50%", transform: "translateX(-50%)",
            width: 8, height: 8, borderRadius: "50%",
            background: i % 2 === 0 ? "#22d3ee" : "#14b8a6",
            boxShadow: `0 0 8px ${i % 2 === 0 ? "#22d3ee" : "#14b8a6"}`,
          }} />
        </div>
      ))}

      {[0,72,144,216,288].map((deg, i) => (
        <div key={i} style={{
          position: "absolute", width: 300, height: 300,
          animation: `spin2 15s linear infinite reverse`,
          animationDelay: `${-i * 3}s`,
        }}>
          <div style={{
            position: "absolute", top: -3, left: "50%", transform: "translateX(-50%)",
            width: 6, height: 6, borderRadius: "50%",
            background: "#0ea5e9",
            boxShadow: "0 0 6px #0ea5e9",
          }} />
        </div>
      ))}

      {/* Center sphere */}
      <div style={{
        width: 130, height: 130, borderRadius: "50%", position: "relative",
        background: "radial-gradient(circle at 35% 35%, #0891b2, #0e7490, #164e63)",
        boxShadow: "0 0 40px rgba(6,182,212,0.4), 0 0 80px rgba(6,182,212,0.15)",
        animation: "pulse 3s ease-in-out infinite",
      }}>
        <div style={{
          position: "absolute", top: "15%", left: "20%", width: "35%", height: "20%",
          borderRadius: "50%", background: "rgba(255,255,255,0.15)",
          transform: "rotate(-30deg)",
        }} />
        <div style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          border: "1px solid rgba(6,182,212,0.5)",
        }} />
      </div>

      {/* Floating data nodes */}
      {[
        { top: "10%", left: "15%", size: 10, color: "#22d3ee", delay: "0s" },
        { top: "20%", right: "10%", size: 8, color: "#14b8a6", delay: "0.5s" },
        { top: "70%", left: "8%", size: 12, color: "#0ea5e9", delay: "1s" },
        { top: "75%", right: "12%", size: 8, color: "#22d3ee", delay: "1.5s" },
        { top: "45%", left: "5%", size: 6, color: "#14b8a6", delay: "2s" },
        { top: "50%", right: "5%", size: 10, color: "#0ea5e9", delay: "0.8s" },
      ].map((node, i) => (
        <div key={i} style={{
          position: "absolute",
          top: node.top, left: "left" in node ? String(node.left) : undefined, right: "right" in node ? String(node.right) : undefined,
          width: node.size, height: node.size,
          borderRadius: "50%", background: node.color,
          boxShadow: `0 0 ${node.size}px ${node.color}`,
          animation: `float ${2.5 + i * 0.4}s ease-in-out infinite`,
          animationDelay: node.delay,
        }} />
      ))}

      {/* Connection lines SVG */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.2 }}>
        <line x1="15%" y1="10%" x2="50%" y2="50%" stroke="#06b6d4" strokeWidth="1" />
        <line x1="85%" y1="20%" x2="50%" y2="50%" stroke="#14b8a6" strokeWidth="1" />
        <line x1="8%" y1="70%" x2="50%" y2="50%" stroke="#06b6d4" strokeWidth="1" />
        <line x1="88%" y1="75%" x2="50%" y2="50%" stroke="#0ea5e9" strokeWidth="1" />
      </svg>

      <style>{`
        @keyframes spin1 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin2 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100% { box-shadow: 0 0 40px rgba(6,182,212,0.4), 0 0 80px rgba(6,182,212,0.15); } 50% { box-shadow: 0 0 60px rgba(6,182,212,0.6), 0 0 100px rgba(6,182,212,0.25); } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
      `}</style>
    </div>
  );
}

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let t: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < current.length) {
        t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        t = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setRoleIndex((p) => (p + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(t);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", paddingTop: 80, overflow: "hidden" }}>
      <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.4 }} aria-hidden="true" />
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 800, height: 600, background: "radial-gradient(ellipse, rgba(6,182,212,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", minHeight: "85vh" }} className="hero-grid">

          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 12px", background: "rgba(6,182,212,0.08)", border: "1px solid rgba(6,182,212,0.2)", borderRadius: 999, marginBottom: 32 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22d3ee", boxShadow: "0 0 8px #22d3ee", display: "inline-block" }} />
              <span style={{ fontSize: 12, fontFamily: "monospace", color: "#22d3ee" }}>Available for Senior Roles & Consulting</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
              style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem,5vw,4.5rem)", lineHeight: 0.95, letterSpacing: "-0.02em", marginBottom: 16 }}>
              <span style={{ color: "#f0f9ff" }}>Jason</span><br />
              <span className="gradient-text">Albano</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              style={{ fontSize: 18, fontFamily: "monospace", color: "#cbd5e1", marginBottom: 24, height: 32 }}>
              <span style={{ color: "#22d3ee" }}>{"// "}</span>
              <span className="cursor-blink">{displayed}</span>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              style={{ color: "#94a3b8", fontSize: 17, lineHeight: 1.7, maxWidth: 480, marginBottom: 32 }}>
              18+ years transforming complex healthcare data into strategic intelligence. Expert in{" "}
              <span style={{ color: "#22d3ee" }}>Databricks</span>,{" "}
              <span style={{ color: "#5eead4" }}>AI-enabled analytics</span>, and enterprise BI.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 40 }}>
              <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 24px", background: "#06b6d4", color: "#050a15", border: "none", borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                <Sparkles size={16} /> View Projects
              </button>
              <a href="/Jason-Albano-Resume.pdf" download
                style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 24px", border: "1px solid rgba(6,182,212,0.35)", color: "#22d3ee", borderRadius: 12, fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
                <Download size={16} /> Download Resume
              </a>
              <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                style={{ padding: "12px 24px", border: "1px solid rgba(100,116,139,0.4)", color: "#cbd5e1", background: "none", borderRadius: 12, fontSize: 14, fontWeight: 500, cursor: "pointer" }}>
                Contact Me
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <a href="https://www.linkedin.com/in/jasonalbano/" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 6, color: "#64748b", textDecoration: "none", fontSize: 14 }}>
                <Linkedin size={16} /> LinkedIn
              </a>
              <div style={{ width: 1, height: 16, background: "#1e293b" }} />
              <a href="https://github.com/Albano-Portfolio" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 6, color: "#64748b", textDecoration: "none", fontSize: 14 }}>
                <Github size={16} /> GitHub
              </a>
              <div style={{ width: 1, height: 16, background: "#1e293b" }} />
              <span style={{ color: "#475569", fontSize: 14 }}>Nashville, TN</span>
            </motion.div>
          </div>

          {/* Right — CSS Animation (no WebGL) */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }}
            style={{ position: "relative", height: 600 }}>
            <DataVizGraphic />

            <div style={{ position: "absolute", top: 24, right: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {badges.slice(0, 3).map((b, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 + i * 0.1 }}
                  style={{ padding: "6px 12px", borderRadius: 999, fontSize: 11, fontFamily: "monospace", background: b.bg, border: `1px solid ${b.border}`, color: b.color, whiteSpace: "nowrap" }}>
                  {b.label}
                </motion.div>
              ))}
            </div>
            <div style={{ position: "absolute", bottom: 80, left: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {badges.slice(3).map((b, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 + i * 0.1 }}
                  style={{ padding: "6px 12px", borderRadius: 999, fontSize: 11, fontFamily: "monospace", background: b.bg, border: `1px solid ${b.border}`, color: b.color, whiteSpace: "nowrap" }}>
                  {b.label}
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }}
              style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 32, background: "rgba(8,15,31,0.8)", backdropFilter: "blur(20px)", border: "1px solid rgba(6,182,212,0.12)", borderRadius: 16, padding: "16px 32px", whiteSpace: "nowrap" }}>
              {[["18+","Years Exp"],["40+","Clients"],["50+","Reports Auto"],["4","Certs"]].map(([val, label]) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 22 }} className="gradient-text">{val}</div>
                  <div style={{ fontSize: 11, color: "#475569", fontFamily: "monospace" }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", color: "#475569" }}>
        <span style={{ fontSize: 11, fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.15em" }}>Scroll</span>
        <ArrowDown size={16} />
      </motion.button>

      <style>{`@media(max-width:768px){.hero-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
