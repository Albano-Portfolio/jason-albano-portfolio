"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BadgeCheck, Award } from "lucide-react";
import { resumeData } from "@/data/resume";

export default function CertificationsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" style={{ padding: "128px 0", position: "relative" }} ref={ref}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} style={{ marginBottom: 64 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>06 — Certifications</p>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3rem)", color: "#f0f9ff", marginBottom: 16 }}>
            Certified Across <span className="gradient-text">Every Platform</span>
          </h2>
          <div style={{ width: 64, height: 1, background: "linear-gradient(90deg, #06b6d4, transparent)" }} />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 20, marginBottom: 48 }}>
          {resumeData.certifications.map((cert, i) => (
            <motion.div key={cert.name} initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{ background: "rgba(8,15,31,0.7)", backdropFilter: "blur(20px)", borderRadius: 20, padding: "24px", border: "1px solid rgba(6,182,212,0.1)", position: "relative", overflow: "hidden", transition: "all 0.3s", cursor: "default" }}
              whileHover={{ y: -4, borderColor: "rgba(6,182,212,0.3)" }}>
              <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, borderRadius: "50%", background: cert.color, opacity: 0.08, filter: "blur(20px)" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "monospace", fontWeight: 800, fontSize: 13, color: "white", background: `${cert.color}25`, border: `1px solid ${cert.color}40` }}>
                  {cert.abbr}
                </div>
                <BadgeCheck size={18} color="rgba(6,182,212,0.5)" />
              </div>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 14, color: "#f0f9ff", marginBottom: 6, lineHeight: 1.4 }}>{cert.name}</h3>
              <p style={{ color: "#475569", fontSize: 12, marginBottom: 4 }}>{cert.issuer}</p>
              <p style={{ color: "#334155", fontSize: 11, fontFamily: "monospace" }}>{cert.date}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }}
          style={{ background: "rgba(8,15,31,0.7)", backdropFilter: "blur(20px)", borderRadius: 20, padding: "32px", border: "1px solid rgba(6,182,212,0.1)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <Award size={18} color="#22d3ee" />
            <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 16, color: "#f0f9ff" }}>Professional Development & Continuing Education</h3>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 10 }}>
            {resumeData.professionalDev.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.45 + i * 0.02 }}
                style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12, color: "#475569", lineHeight: 1.5 }}>
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(6,182,212,0.4)", flexShrink: 0, marginTop: 6 }} />{item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
