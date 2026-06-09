"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { resumeData } from "@/data/resume";

const categories = [
  { key: "analytics", label: "Analytics & Data" },
  { key: "visualization", label: "Visualization" },
  { key: "ai", label: "AI & Automation" },
  { key: "cloud", label: "Cloud Platforms" },
  { key: "healthcare", label: "Healthcare" },
];

const techStack = ["Databricks","Tableau","Power BI","Snowflake","Python","SQL","SAS","Azure","AWS","Copilot","Cursor AI","Looker","MLflow","AutoML","Delta Lake","PySpark","SSRS","SSAS"];

function SkillBar({ name, level, badge, index }: { name: string; level: number; badge?: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: "#e2e8f0", fontSize: 14, fontWeight: 500 }}>{name}</span>
          {badge && <span style={{ fontSize: 10, padding: "2px 6px", background: "rgba(6,182,212,0.12)", color: "#22d3ee", borderRadius: 4, fontFamily: "monospace", border: "1px solid rgba(6,182,212,0.2)" }}>{badge}</span>}
        </div>
        <span style={{ fontSize: 12, color: "#475569", fontFamily: "monospace" }}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay: index * 0.06 + 0.2, duration: 1.2, ease: "easeOut" }} />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [active, setActive] = useState("analytics");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const skills = resumeData.skills[active as keyof typeof resumeData.skills] || [];

  return (
    <section id="skills" style={{ padding: "128px 0", position: "relative" }} ref={ref}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} style={{ marginBottom: 64 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>02 — Skills & Technologies</p>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3rem)", color: "#f0f9ff", marginBottom: 16 }}>
            Full-Stack <span className="gradient-text">Analytics Toolkit</span>
          </h2>
          <div style={{ width: 64, height: 1, background: "linear-gradient(90deg, #06b6d4, transparent)" }} />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 40 }} className="skills-grid">
          <div>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
              style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
              {categories.map((cat) => (
                <button key={cat.key} onClick={() => setActive(cat.key)}
                  style={{
                    padding: "8px 16px", borderRadius: 10, fontSize: 13, fontWeight: 500, cursor: "pointer", transition: "all 0.2s",
                    background: active === cat.key ? "rgba(6,182,212,0.12)" : "transparent",
                    border: active === cat.key ? "1px solid rgba(6,182,212,0.4)" : "1px solid rgba(100,116,139,0.3)",
                    color: active === cat.key ? "#22d3ee" : "#64748b",
                  }}>
                  {cat.label}
                </button>
              ))}
            </motion.div>

            <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
              className="glass" style={{ borderRadius: 16, padding: "24px" }}>
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} badge={"badge" in skill ? skill.badge : undefined} index={i} />
              ))}
            </motion.div>
          </div>

          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}
              className="glass" style={{ borderRadius: 16, padding: "24px", marginBottom: 16 }}>
              <p style={{ fontFamily: "monospace", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(6,182,212,0.5)", marginBottom: 20 }}>Technology Stack</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                {techStack.map((tech, i) => (
                  <motion.div key={tech} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.25 + i * 0.03 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 6px", background: "rgba(13,24,41,0.6)", borderRadius: 10, border: "1px solid rgba(100,116,139,0.2)", cursor: "default", transition: "all 0.2s" }}>
                    <span style={{ fontSize: 10, fontFamily: "monospace", fontWeight: 700, color: "#94a3b8" }}>{tech.length > 7 ? tech.slice(0,6)+"…" : tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.35 }}
              className="glass" style={{ borderRadius: 16, padding: "24px" }}>
              <p style={{ fontFamily: "monospace", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(6,182,212,0.5)", marginBottom: 16 }}>Domain Expertise</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Claims Analytics","HEDIS","Total Medical Cost","Provider Analytics","FWA Detection","Utilization Mgmt","CMS Reporting","Prior Auth","Population Health","RAG / LLMs"].map((tag) => (
                  <span key={tag} style={{ fontSize: 11, padding: "4px 10px", background: "rgba(20,184,166,0.08)", color: "rgba(94,234,212,0.7)", borderRadius: 8, border: "1px solid rgba(20,184,166,0.15)", fontFamily: "monospace" }}>{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.skills-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
