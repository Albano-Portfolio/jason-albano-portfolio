"use client";
import { Github, Linkedin, Mail, MapPin, Activity } from "lucide-react";

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer style={{ borderTop: "1px solid rgba(6,182,212,0.1)", background: "rgba(5,10,21,0.9)", padding: "64px 0 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", background: "#0d1829", borderRadius: 8, border: "1px solid rgba(6,182,212,0.3)" }}>
                <Activity size={16} color="#22d3ee" />
              </div>
              <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}>
                <span className="gradient-text">Jason</span>
                <span style={{ color: "#64748b", fontSize: 13, fontFamily: "monospace", marginLeft: 4 }}>Albano</span>
              </span>
            </div>
            <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7, maxWidth: 280 }}>
              Senior Healthcare Data Analyst & AI Analytics Professional. Transforming complex healthcare data into strategic intelligence.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 16, color: "#475569", fontSize: 13 }}>
              <MapPin size={13} color="rgba(6,182,212,0.5)" /> Nashville, Tennessee
            </div>
          </div>
          <div>
            <h3 style={{ fontFamily: "monospace", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(6,182,212,0.5)", marginBottom: 20 }}>Navigation</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {["about","skills","projects","experience","certifications","contact"].map(id => (
                <button key={id} onClick={() => scrollTo(id)} style={{ textAlign: "left", background: "none", border: "none", cursor: "pointer", color: "#64748b", fontSize: 14, textTransform: "capitalize" }}>
                  {id}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 style={{ fontFamily: "monospace", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(6,182,212,0.5)", marginBottom: 20 }}>Connect</h3>
            {[
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jasonalbano/" },
              { icon: Github, label: "GitHub", href: "https://github.com/Albano-Portfolio" },
              { icon: Mail, label: "Email", href: "mailto:Japi782004@yahoo.com" },
            ].map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 12, color: "#64748b", textDecoration: "none", fontSize: 14, marginBottom: 16 }}>
                <div style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", background: "#0d1829", borderRadius: 8, border: "1px solid rgba(100,116,139,0.3)" }}>
                  <Icon size={14} />
                </div>
                {label}
              </a>
            ))}
          </div>
        </div>
        <div style={{ paddingTop: 32, borderTop: "1px solid rgba(6,182,212,0.08)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "#334155", fontSize: 12 }}>© {new Date().getFullYear()} Jason L. Albano. All rights reserved.</p>
          <p style={{ color: "#1e293b", fontSize: 12, fontFamily: "monospace" }}>Senior Healthcare Data Analyst · Nashville, TN</p>
        </div>
      </div>
    </footer>
  );
}
