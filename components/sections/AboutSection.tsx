"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { resumeData } from "@/data/resume";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const strengths = ["Healthcare Claims Analytics","AI-Enabled Workflow Automation","Executive Dashboard Development","Cross-Functional Analytics Leadership","Data Governance & Quality","Provider Network Analytics","Fraud, Waste & Abuse Detection","Databricks Lakehouse Architecture"];

  return (
    <section id="about" style={{ padding: "128px 0", position: "relative" }} ref={ref}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} style={{ marginBottom: 64 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>01 — About</p>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3rem)", color: "#f0f9ff", marginBottom: 16 }}>
            18 Years of Healthcare <span className="gradient-text">Intelligence</span>
          </h2>
          <div style={{ width: 64, height: 1, background: "linear-gradient(90deg, #06b6d4, transparent)" }} />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="about-grid">
          <div>
            {[
              "I'm a Senior Healthcare Data Analyst and Business Intelligence professional with over 18 years of experience turning the most complex healthcare data challenges into clear, actionable intelligence. My career has spanned every major layer of the healthcare analytics stack — from data warehouse foundations at HealthSpring and Ardent Health, through enterprise BI at UnitedHealth Group and MedSolutions, to today's AI-enabled analytics leadership at The Cigna Group.",
              "At Cigna, I serve as the analytics SME for Total Medical Cost, claims analytics, provider performance, and quality reporting — leveraging Databricks, Tableau, Power BI, SQL, and Python to build the dashboards and models that inform strategic decisions.",
              "In recent years I've leaned deeply into AI — using Databricks Genie, Microsoft Copilot, and Cursor AI to accelerate reporting, automate documentation, and build intelligent analytics workflows. I hold active certifications from Databricks, Tableau, Snowflake, and Microsoft, plus AI credentials from Stanford, Vanderbilt, and Johns Hopkins.",
            ].map((p, i) => (
              <motion.p key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 + i * 0.1 }}
                style={{ color: "#94a3b8", fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>{p}</motion.p>
            ))}

            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}
              style={{ display: "flex", flexWrap: "wrap", gap: 20, marginTop: 8, marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#64748b", fontSize: 14 }}>
                <MapPin size={14} color="rgba(6,182,212,0.6)" /> Nashville, Tennessee
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#64748b", fontSize: 14 }}>
                <Briefcase size={14} color="rgba(6,182,212,0.6)" /> The Cigna Group · 2017–Present
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}>
              <p style={{ fontFamily: "monospace", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(6,182,212,0.5)", marginBottom: 16 }}>Education</p>
              {resumeData.education.map((e, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
                  <GraduationCap size={15} color={i === 0 ? "#f87171" : i === 1 ? "#fbbf24" : "#60a5fa"} style={{ marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <div style={{ color: "#e2e8f0", fontSize: 14, fontWeight: 500 }}>{e.degree}</div>
                    <div style={{ color: "#475569", fontSize: 12 }}>{e.institution}{e.year ? ` · ${e.year}` : ""}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
              {resumeData.stats.map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 + i * 0.08 }}
                  className="glass" style={{ borderRadius: 16, padding: "24px", textAlign: "center" }}>
                  <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 28, marginBottom: 4 }} className="gradient-text">{stat.value}</div>
                  <div style={{ fontSize: 11, color: "#475569", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}
              className="glass" style={{ borderRadius: 16, padding: "24px" }}>
              <p style={{ fontFamily: "monospace", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(6,182,212,0.5)", marginBottom: 20 }}>Core Strengths</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {strengths.map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.55 + i * 0.05 }}
                    style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#94a3b8" }}>
                    <CheckCircle2 size={13} color="#06b6d4" style={{ marginTop: 2, flexShrink: 0 }} /> {s}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
