"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, TrendingDown, Users, Bot, MessageSquare, Award, Brain, Activity } from "lucide-react";
import { resumeData } from "@/data/resume";

const iconMap: Record<string, typeof Activity> = { Shield, TrendingDown, Users, Bot, MessageSquare, Award, Brain, Activity };

export default function UseCasesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="usecases" style={{ padding: "128px 0", position: "relative" }} ref={ref}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} style={{ marginBottom: 64 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>04 — AI Healthcare Use Cases</p>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3rem)", color: "#f0f9ff", marginBottom: 16 }}>
            Where AI Meets <span className="gradient-text">Healthcare Analytics</span>
          </h2>
          <div style={{ width: 64, height: 1, background: "linear-gradient(90deg, #06b6d4, transparent)" }} />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
          {resumeData.useCases.map((uc, i) => {
            const Icon = iconMap[uc.icon] || Activity;
            return (
              <motion.div key={uc.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.07, duration: 0.5 }}
                style={{ background: "rgba(8,15,31,0.7)", backdropFilter: "blur(20px)", borderRadius: 20, padding: "20px", border: "1px solid rgba(6,182,212,0.1)", cursor: "default", transition: "all 0.3s" }}
                whileHover={{ y: -4, borderColor: "rgba(6,182,212,0.25)" }}>
                <div style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(13,24,41,0.8)", borderRadius: 12, border: "1px solid rgba(6,182,212,0.2)", marginBottom: 16 }}>
                  <Icon size={16} color="#22d3ee" />
                </div>
                <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 14, color: "#f0f9ff", marginBottom: 8, lineHeight: 1.3 }}>{uc.title}</h3>
                <p style={{ color: "#475569", fontSize: 12, lineHeight: 1.6, marginBottom: 16 }}>{uc.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {uc.tech.map((t) => (
                    <span key={t} style={{ fontSize: 10, padding: "2px 8px", background: "rgba(20,184,166,0.08)", color: "rgba(94,234,212,0.7)", borderRadius: 6, fontFamily: "monospace", border: "1px solid rgba(20,184,166,0.12)" }}>{t}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
