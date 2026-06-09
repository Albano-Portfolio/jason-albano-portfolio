"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { resumeData } from "@/data/resume";
import type { Project } from "@/types";

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
        <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          style={{ width: "100%", maxWidth: 600, background: "#080f1f", border: "1px solid rgba(6,182,212,0.2)", borderRadius: 20, overflow: "hidden" }}>
          <div style={{ padding: "24px", borderBottom: "1px solid rgba(6,182,212,0.1)", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <p className="section-label" style={{ marginBottom: 8 }}>{project.category}</p>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 20, color: "#f0f9ff" }}>{project.title}</h3>
            </div>
            <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "#64748b", padding: 8 }}><X size={18} /></button>
          </div>
          <div style={{ padding: "24px", maxHeight: "60vh", overflowY: "auto", display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <p style={{ fontFamily: "monospace", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "#475569", marginBottom: 8 }}>Overview</p>
              <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.7 }}>{project.description}</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[["Problem", project.problem, "rgba(239,68,68,0.08)", "rgba(239,68,68,0.2)", "rgba(252,165,165,0.6)"],
                ["Solution", project.solution, "rgba(34,197,94,0.08)", "rgba(34,197,94,0.2)", "rgba(134,239,172,0.6)"]].map(([label, text, bg, border, labelColor]) => (
                <div key={label as string} style={{ background: bg as string, border: `1px solid ${border}`, borderRadius: 12, padding: 16 }}>
                  <p style={{ fontFamily: "monospace", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: labelColor as string, marginBottom: 8 }}>{label as string}</p>
                  <p style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.6 }}>{text as string}</p>
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(6,182,212,0.06)", border: "1px solid rgba(6,182,212,0.15)", borderRadius: 12, padding: 16 }}>
              <p style={{ fontFamily: "monospace", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(6,182,212,0.6)", marginBottom: 8 }}>Business Impact</p>
              <p style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.6 }}>{project.impact}</p>
            </div>
            <div>
              <p style={{ fontFamily: "monospace", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "#475569", marginBottom: 12 }}>Technologies</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {project.tech.map((t) => (
                  <span key={t} style={{ fontSize: 12, padding: "4px 10px", background: "rgba(6,182,212,0.1)", color: "#22d3ee", borderRadius: 8, border: "1px solid rgba(6,182,212,0.2)", fontFamily: "monospace" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [selected, setSelected] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: index * 0.1, duration: 0.6 }}
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        onClick={() => setSelected(true)}
        style={{
          background: "rgba(8,15,31,0.7)", backdropFilter: "blur(20px)", borderRadius: 20,
          border: hovered ? "1px solid rgba(6,182,212,0.3)" : "1px solid rgba(6,182,212,0.1)",
          overflow: "hidden", cursor: "pointer",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          transition: "all 0.3s ease",
          boxShadow: hovered ? "0 20px 40px rgba(0,0,0,0.4)" : "none",
        }}>
        <div style={{ height: 140, background: "rgba(13,24,41,0.8)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
          <div style={{ width: 60, height: 60, borderRadius: "50%", border: "1px solid rgba(6,182,212,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "monospace", fontWeight: 800, fontSize: 18, color: "rgba(6,182,212,0.5)" }}>{project.category.slice(0,2).toUpperCase()}</span>
          </div>
          <div style={{ position: "absolute", top: 12, left: 12 }}>
            <span style={{ fontSize: 10, padding: "4px 10px", background: "rgba(5,10,21,0.8)", color: "#22d3ee", borderRadius: 999, border: "1px solid rgba(6,182,212,0.25)", fontFamily: "monospace" }}>{project.category}</span>
          </div>
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, rgba(8,15,31,${hovered ? 0.9 : 0.5}), transparent)`, transition: "all 0.3s" }} />
        </div>
        <div style={{ padding: "20px" }}>
          <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 15, color: "#f0f9ff", marginBottom: 8, lineHeight: 1.3 }}>{project.title}</h3>
          <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.6, marginBottom: 16, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{project.description}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
            {project.tech.slice(0, 3).map((t) => (
              <span key={t} style={{ fontSize: 10, padding: "2px 8px", background: "rgba(6,182,212,0.08)", color: "rgba(34,211,238,0.6)", borderRadius: 6, fontFamily: "monospace", border: "1px solid rgba(6,182,212,0.12)" }}>{t}</span>
            ))}
            {project.tech.length > 3 && <span style={{ fontSize: 10, color: "#475569", fontFamily: "monospace" }}>+{project.tech.length - 3}</span>}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: hovered ? "#22d3ee" : "rgba(6,182,212,0.5)", fontFamily: "monospace", transition: "color 0.2s" }}>
            View Details <ArrowRight size={12} style={{ transform: hovered ? "translateX(4px)" : "translateX(0)", transition: "transform 0.2s" }} />
          </div>
        </div>
      </motion.div>
      {selected && <Modal project={project} onClose={() => setSelected(false)} />}
    </>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);
  const featured = resumeData.projects.filter((p) => p.featured);
  const others = resumeData.projects.filter((p) => !p.featured);

  return (
    <section id="projects" style={{ padding: "128px 0", position: "relative" }} ref={ref}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} style={{ marginBottom: 64 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>03 — Featured Projects</p>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3rem)", color: "#f0f9ff", marginBottom: 16 }}>
            Analytics That <span className="gradient-text">Move the Needle</span>
          </h2>
          <div style={{ width: 64, height: 1, background: "linear-gradient(90deg, #06b6d4, transparent)", marginBottom: 16 }} />
          <p style={{ color: "#64748b", fontSize: 16, maxWidth: 560 }}>Click any card to explore the full problem, solution, and business impact.</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 24, marginBottom: 24 }}>
          {featured.map((p, i) => <ProjectCard key={p.id} project={p as Project} index={i} />)}
        </div>

        <AnimatePresence>
          {showAll && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 24, marginBottom: 24, overflow: "hidden" }}>
              {others.map((p, i) => <ProjectCard key={p.id} project={p as Project} index={i} />)}
            </motion.div>
          )}
        </AnimatePresence>

        {!showAll && others.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }} style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={() => setShowAll(true)}
              style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 24px", border: "1px solid rgba(6,182,212,0.3)", color: "#22d3ee", background: "none", borderRadius: 12, fontSize: 14, fontWeight: 500, cursor: "pointer" }}>
              View All Projects <ArrowRight size={16} />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
