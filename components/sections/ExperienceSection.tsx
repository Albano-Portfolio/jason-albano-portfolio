"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, Building2 } from "lucide-react";
import { resumeData } from "@/data/resume";

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" style={{ padding: "128px 0", position: "relative" }} ref={ref}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} style={{ marginBottom: 64 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>05 — Experience</p>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3rem)", color: "#f0f9ff", marginBottom: 16 }}>
            18 Years, One <span className="gradient-text">Through Line</span>
          </h2>
          <div style={{ width: 64, height: 1, background: "linear-gradient(90deg, #06b6d4, transparent)" }} />
        </motion.div>

        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 15, top: 0, bottom: 0, width: 1, background: "linear-gradient(180deg, rgba(6,182,212,0.5), rgba(6,182,212,0.2), transparent)" }} />

          {resumeData.experience.map((exp, i) => (
            <motion.div key={exp.id} initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.08, duration: 0.6 }}
              style={{ position: "relative", paddingLeft: 56, marginBottom: 32 }}>
              <div style={{ position: "absolute", left: 0, top: 12, width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: exp.current ? "rgba(6,182,212,0.2)" : "#080f1f", border: exp.current ? "2px solid #06b6d4" : "2px solid #1e293b", boxShadow: exp.current ? "0 0 16px rgba(6,182,212,0.3)" : "none" }}>
                {exp.current
                  ? <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22d3ee", boxShadow: "0 0 8px #22d3ee", display: "inline-block" }} />
                  : <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#334155", display: "inline-block" }} />}
              </div>

              <div style={{ background: "rgba(8,15,31,0.7)", backdropFilter: "blur(20px)", borderRadius: 16, padding: "20px 24px", border: exp.current ? "1px solid rgba(6,182,212,0.2)" : "1px solid rgba(30,41,59,0.5)", transition: "border-color 0.3s" }}>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, marginBottom: 6 }}>
                    <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 16, color: "#f0f9ff" }}>{exp.title}</h3>
                    {exp.current && <span style={{ fontSize: 10, padding: "2px 8px", background: "rgba(6,182,212,0.12)", color: "#22d3ee", borderRadius: 4, fontFamily: "monospace", border: "1px solid rgba(6,182,212,0.25)" }}>Current</span>}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 16, fontSize: 12, color: "#475569" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Building2 size={11} color="rgba(6,182,212,0.5)" />{exp.company}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}><MapPin size={11} color="rgba(6,182,212,0.5)" />{exp.location}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Calendar size={11} color="rgba(6,182,212,0.5)" />{exp.period}</span>
                    <span style={{ color: "#334155" }}>· {exp.duration}</span>
                  </div>
                </div>
                <ul style={{ marginBottom: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                  {exp.highlights.map((h, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#64748b" }}>
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(6,182,212,0.5)", flexShrink: 0, marginTop: 6 }} />{h}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {exp.tech.map((t) => (
                    <span key={t} style={{ fontSize: 10, padding: "2px 8px", background: "rgba(13,24,41,0.8)", color: "#64748b", borderRadius: 6, fontFamily: "monospace", border: "1px solid rgba(30,41,59,0.5)" }}>{t}</span>
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
