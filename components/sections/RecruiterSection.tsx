"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Bot, User, Loader2, Sparkles } from "lucide-react";
import { resumeData } from "@/data/resume";

interface Message { role: "user" | "assistant"; content: string; }

const suggested = [
  "What is Jason's experience level?",
  "What Databricks experience does he have?",
  "What AI tools does he use?",
  "What healthcare domains does he cover?",
  "Is he open to new opportunities?",
];

function getAnswer(q: string): string {
  const lq = q.toLowerCase();
  if (lq.includes("experience") || lq.includes("background") || lq.includes("career")) return resumeData.recruiterQA[0].answer;
  if (lq.includes("databricks")) return resumeData.recruiterQA[1].answer;
  if (lq.includes("ai") || lq.includes("tool") || lq.includes("copilot") || lq.includes("cursor")) return resumeData.recruiterQA[2].answer;
  if (lq.includes("healthcare") || lq.includes("domain") || lq.includes("claims") || lq.includes("hedis")) return resumeData.recruiterQA[3].answer;
  if (lq.includes("visualization") || lq.includes("tableau") || lq.includes("power bi")) return resumeData.recruiterQA[4].answer;
  if (lq.includes("available") || lq.includes("open") || lq.includes("opportunit") || lq.includes("consulting")) return resumeData.recruiterQA[5].answer;
  if (lq.includes("certif")) return "Jason holds four active certifications: Databricks Certified Data Analyst Associate (Aug 2024), Tableau Desktop Specialist (Jul 2024), SnowPro Core (May 2026), and Microsoft Certified AI Business Professional (May 2026). He also holds university AI credentials from Stanford and Vanderbilt.";
  if (lq.includes("skill") || lq.includes("python") || lq.includes("sql") || lq.includes("stack")) return "Jason's stack spans Databricks (certified), Tableau (certified), Snowflake (certified), SQL, Python, SAS, Power BI, Looker, Altair Analytics Workbench, Databricks Genie, Microsoft Copilot, Cursor AI, AWS, and Azure.";
  if (lq.includes("cigna") || lq.includes("current")) return "Jason has been at The Cigna Group in Nashville since August 2017 — over 7 years — as a Business Analytics Advisor and Senior Healthcare Data Analyst. He is the analytics SME for Total Medical Cost, claims analytics, and quality reporting.";
  if (lq.includes("location") || lq.includes("nashville") || lq.includes("remote")) return "Jason is based in Nashville, Tennessee. He is open to Nashville-area roles, hybrid arrangements, and select remote opportunities with the right organization.";
  return "Jason brings 18+ years of healthcare analytics expertise, active certifications in Databricks, Tableau, Snowflake, and Microsoft AI, and hands-on experience with AI-enabled analytics at The Cigna Group. Feel free to ask about his specific skills, projects, certifications, or connect with him directly on LinkedIn.";
}

export default function RecruiterSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const bottomRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", content: "Hi! I'm an AI assistant with Jason Albano's full professional background loaded. Ask me anything about his experience, skills, certifications, projects, or availability." }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const send = async (text?: string) => {
    const q = text || input.trim();
    if (!q) return;
    setMessages((p) => [...p, { role: "user", content: q }]);
    setInput("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700 + Math.random() * 500));
    setMessages((p) => [...p, { role: "assistant", content: getAnswer(q) }]);
    setLoading(false);
  };

  return (
    <section id="ai-recruiter" style={{ padding: "128px 0", position: "relative" }} ref={ref}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} style={{ marginBottom: 48, textAlign: "center" }}>
          <p className="section-label" style={{ marginBottom: 12, display: "flex", justifyContent: "center" }}>07 — AI Recruiter Assistant</p>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3rem)", color: "#f0f9ff", marginBottom: 16 }}>
            Ask Me About <span className="gradient-text">Jason</span>
          </h2>
          <div style={{ width: 64, height: 1, background: "linear-gradient(90deg, transparent, #06b6d4, transparent)", margin: "0 auto 16px" }} />
          <p style={{ color: "#64748b", fontSize: 16, maxWidth: 500, margin: "0 auto" }}>An AI assistant trained on Jason&apos;s complete professional background for your screening process.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 }}
          style={{ background: "rgba(8,15,31,0.7)", backdropFilter: "blur(20px)", borderRadius: 20, border: "1px solid rgba(6,182,212,0.15)", overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", borderBottom: "1px solid rgba(6,182,212,0.1)", background: "rgba(13,24,41,0.5)" }}>
            <div style={{ position: "relative" }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(6,182,212,0.12)", border: "1px solid rgba(6,182,212,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Bot size={16} color="#22d3ee" />
              </div>
              <span style={{ position: "absolute", top: -2, right: -2, width: 10, height: 10, borderRadius: "50%", background: "#22c55e", border: "2px solid #080f1f" }} />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500, color: "#f0f9ff" }}>Jason&apos;s Profile Assistant</div>
              <div style={{ fontSize: 11, color: "#475569", display: "flex", alignItems: "center", gap: 4 }}><Sparkles size={10} color="#22d3ee" /> AI-Powered · Resume Data Loaded</div>
            </div>
          </div>

          <div style={{ height: 320, overflowY: "auto", padding: "20px", display: "flex", flexDirection: "column", gap: 16 }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: "flex", gap: 10, justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
                {msg.role === "assistant" && (
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(6,182,212,0.12)", border: "1px solid rgba(6,182,212,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <Bot size={13} color="#22d3ee" />
                  </div>
                )}
                <div style={{
                  maxWidth: "80%", borderRadius: 16, padding: "10px 14px", fontSize: 13, lineHeight: 1.6,
                  background: msg.role === "user" ? "rgba(6,182,212,0.12)" : "rgba(13,24,41,0.6)",
                  border: msg.role === "user" ? "1px solid rgba(6,182,212,0.25)" : "1px solid rgba(30,41,59,0.5)",
                  color: msg.role === "user" ? "#bae6fd" : "#94a3b8",
                  borderTopRightRadius: msg.role === "user" ? 4 : 16,
                  borderTopLeftRadius: msg.role === "assistant" ? 4 : 16,
                }}>{msg.content}</div>
                {msg.role === "user" && (
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(51,65,85,0.5)", border: "1px solid rgba(51,65,85,0.5)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <User size={13} color="#64748b" />
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(6,182,212,0.12)", border: "1px solid rgba(6,182,212,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Bot size={13} color="#22d3ee" />
                </div>
                <div style={{ borderRadius: 16, borderTopLeftRadius: 4, padding: "10px 14px", background: "rgba(13,24,41,0.6)", border: "1px solid rgba(30,41,59,0.5)" }}>
                  <Loader2 size={14} color="#22d3ee" style={{ animation: "spin 1s linear infinite" }} />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {messages.length === 1 && (
            <div style={{ padding: "0 20px 16px" }}>
              <p style={{ fontSize: 11, color: "#334155", fontFamily: "monospace", marginBottom: 8 }}>Suggested:</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {suggested.map((q) => (
                  <button key={q} onClick={() => send(q)} style={{ fontSize: 11, padding: "6px 12px", border: "1px solid rgba(30,41,59,0.5)", color: "#64748b", background: "none", borderRadius: 999, cursor: "pointer" }}>{q}</button>
                ))}
              </div>
            </div>
          )}

          <div style={{ padding: "16px", borderTop: "1px solid rgba(6,182,212,0.1)", background: "rgba(13,24,41,0.4)", display: "flex", gap: 10 }}>
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
              placeholder="Ask about Jason's skills, experience, or availability..."
              style={{ flex: 1, background: "rgba(13,24,41,0.6)", border: "1px solid rgba(30,41,59,0.5)", borderRadius: 12, padding: "10px 16px", fontSize: 13, color: "#cbd5e1", outline: "none" }} />
            <button onClick={() => send()} disabled={!input.trim() || loading}
              style={{ padding: "10px 16px", background: "#06b6d4", color: "#050a15", border: "none", borderRadius: 12, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 500, opacity: (!input.trim() || loading) ? 0.5 : 1 }}>
              <Send size={14} />
            </button>
          </div>
        </motion.div>
      </div>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
