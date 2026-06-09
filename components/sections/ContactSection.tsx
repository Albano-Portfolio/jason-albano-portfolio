"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send, MapPin, Mail, Linkedin, Github, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(20, "Message must be at least 20 characters").max(1000),
});
type FormData = z.infer<typeof schema>;

const inputStyle = { width: "100%", background: "rgba(13,24,41,0.6)", border: "1px solid rgba(30,41,59,0.6)", borderRadius: 12, padding: "10px 16px", fontSize: 13, color: "#cbd5e1", outline: "none", boxSizing: "border-box" as const };
const labelStyle = { display: "block", fontSize: 11, fontFamily: "monospace", color: "#475569", marginBottom: 6 };
const errorStyle = { color: "#f87171", fontSize: 11, marginTop: 4 };

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, watch, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) });
  const msgLen = watch("message")?.length || 0;

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1200));
    console.log(data);
    setSubmitted(true);
    toast.success("Message sent! Jason will be in touch soon.");
    reset();
  };

  const contacts = [
    { icon: MapPin, label: "Location", value: "Nashville, Tennessee", href: null },
    { icon: Mail, label: "Email", value: "Japi782004@yahoo.com", href: "mailto:Japi782004@yahoo.com" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/jasonalbano", href: "https://www.linkedin.com/in/jasonalbano/" },
    { icon: Github, label: "GitHub", value: "github.com/Albano-Portfolio", href: "https://github.com/Albano-Portfolio" },
  ];

  return (
    <section id="contact" style={{ padding: "128px 0", position: "relative" }} ref={ref}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} style={{ marginBottom: 64 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>08 — Get In Touch</p>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3rem)", color: "#f0f9ff", marginBottom: 16 }}>
            {"Let's Build Something "}<span className="gradient-text">Intelligent</span>
          </h2>
          <div style={{ width: 64, height: 1, background: "linear-gradient(90deg, #06b6d4, transparent)" }} />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: 48 }} className="contact-grid">
          <div>
            {contacts.map(({ icon: Icon, label, value, href }, i) => (
              <motion.div key={label} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 + i * 0.08 }}
                style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(13,24,41,0.8)", border: "1px solid rgba(30,41,59,0.6)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={15} color="#64748b" />
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "#334155", fontFamily: "monospace", marginBottom: 2 }}>{label}</div>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ color: "#94a3b8", fontSize: 13, textDecoration: "none" }}>{value}</a>
                  ) : (
                    <span style={{ color: "#94a3b8", fontSize: 13 }}>{value}</span>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }}
              style={{ background: "rgba(8,15,31,0.7)", backdropFilter: "blur(20px)", borderRadius: 16, padding: "20px", border: "1px solid rgba(6,182,212,0.1)" }}>
              <p style={{ fontFamily: "monospace", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(6,182,212,0.5)", marginBottom: 16 }}>Open To</p>
              {["Senior Healthcare Data Analyst","Analytics Manager / Director","Healthcare BI Engineer","AI Analytics Consultant","Data Product Manager"].map((role) => (
                <div key={role} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#64748b", marginBottom: 10 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(6,182,212,0.6)", flexShrink: 0 }} />{role}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  style={{ background: "rgba(8,15,31,0.7)", backdropFilter: "blur(20px)", borderRadius: 20, border: "1px solid rgba(6,182,212,0.2)", padding: "64px 32px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                  <CheckCircle2 size={56} color="#22d3ee" style={{ marginBottom: 24 }} />
                  <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 24, color: "#f0f9ff", marginBottom: 12 }}>Message Sent!</h3>
                  <p style={{ color: "#64748b", marginBottom: 24 }}>Thanks for reaching out. Jason will respond shortly.</p>
                  <button onClick={() => setSubmitted(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "#22d3ee", fontSize: 14 }}>Send another message →</button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit(onSubmit)}
                  style={{ background: "rgba(8,15,31,0.7)", backdropFilter: "blur(20px)", borderRadius: 20, border: "1px solid rgba(6,182,212,0.1)", padding: "28px", display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
                    <div>
                      <label style={labelStyle}>Your Name *</label>
                      <input {...register("name")} placeholder="Jane Smith" style={inputStyle} />
                      {errors.name && <p style={errorStyle}>{errors.name.message}</p>}
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input {...register("email")} type="email" placeholder="jane@company.com" style={inputStyle} />
                      {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Company</label>
                    <input {...register("company")} placeholder="Acme Health Systems" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Subject *</label>
                    <input {...register("subject")} placeholder="Senior Analytics Role at Acme Health" style={inputStyle} />
                    {errors.subject && <p style={errorStyle}>{errors.subject.message}</p>}
                  </div>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <label style={labelStyle}>Message *</label>
                      <span style={{ fontSize: 11, color: "#334155", fontFamily: "monospace" }}>{msgLen}/1000</span>
                    </div>
                    <textarea {...register("message")} rows={5} placeholder="Tell Jason about the opportunity..." style={{ ...inputStyle, resize: "none" }} />
                    {errors.message && <p style={errorStyle}>{errors.message.message}</p>}
                  </div>
                  <button type="submit" disabled={isSubmitting}
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px", background: "#06b6d4", color: "#050a15", border: "none", borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: isSubmitting ? "not-allowed" : "pointer", opacity: isSubmitting ? 0.7 : 1 }}>
                    {isSubmitting ? <><span style={{ width: 14, height: 14, border: "2px solid rgba(5,10,21,0.3)", borderTopColor: "#050a15", borderRadius: "50%", animation: "spin 1s linear infinite" }} /> Sending...</> : <><Send size={15} /> Send Message</>}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){.contact-grid{grid-template-columns:1fr !important;} .form-row{grid-template-columns:1fr !important;}}
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
