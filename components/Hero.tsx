"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const stats = [
  { value: "2023", label: "Started CS" },
  { value: "25+", label: "Projects built" },
  { value: "7+", label: "Tools & langs" },
  { value: "∞", label: "To learn" },
];

const terminalLines = [
  "> initializing portfolio.exe ... OK",
  "> loading skills: PHP · JS · MySQL ... OK",
  "> status: OPEN_TO_OPPORTUNITIES",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  // Typewriter effect cycling through terminal lines
  useEffect(() => {
    const line = terminalLines[lineIdx];
    if (charIdx < line.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 28);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIdx((i) => (i + 1) % terminalLines.length);
      setCharIdx(0);
    }, 2200);
    return () => clearTimeout(t);
  }, [charIdx, lineIdx]);

  const words = profile.name.split(" ");

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "6.5rem 6% 4.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="hero-grid">
        {/* Left: mission-control copy */}
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12, delayChildren: 0.2 }}
        >
          <motion.div className="status-badge" variants={fadeUp}>
            <span className="status-dot" />
            System online
          </motion.div>

          <motion.h1
            variants={fadeUp}
            style={{
              fontSize: "clamp(2.1rem, 6vw, 3.6rem)",
              fontWeight: 800,
              letterSpacing: 0.5,
              lineHeight: 1.12,
            }}
          >
            {words.map((word) => (
              <motion.span
                key={word}
                variants={{
                  hidden: { opacity: 0, y: 40, rotateX: -60 },
                  show: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: { duration: 0.7, ease: "easeOut" },
                  },
                }}
                style={{
                  display: "inline-block",
                  background: "var(--gradient)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  animation: "shine 6s linear infinite",
                  marginRight: "0.28em",
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "clamp(1rem, 2.6vw, 1.2rem)",
              color: "var(--accent)",
              fontWeight: 600,
            }}
          >
            {profile.title}
          </motion.p>

          <motion.div className="terminal-line" variants={fadeUp}>
            <span className="prompt">patrick@portfolio:~$</span>
            {terminalLines[lineIdx].slice(0, charIdx)}
            <span className="caret">&nbsp;</span>
          </motion.div>

          <motion.p
            className="bio-text"
            variants={fadeUp}
            style={{
              maxWidth: 640,
              color: "var(--muted)",
              textAlign: "justify",
              marginBottom: "2rem",
            }}
          >
            {profile.bio}
          </motion.p>

          <motion.div
            variants={fadeUp}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
              style={{
                padding: "0.85rem 2.2rem",
                borderRadius: 999,
                background: "var(--gradient)",
                backgroundSize: "200% auto",
                color: "#04070d",
                fontWeight: 700,
                boxShadow: "0 8px 24px rgba(34, 211, 238, 0.3)",
              }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
              style={{
                padding: "0.85rem 2.2rem",
                borderRadius: 999,
                border: "1px solid var(--border)",
                color: "var(--text)",
                fontWeight: 700,
                background: "var(--card)",
              }}
            >
              GitHub ↗
            </motion.a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            className="stats"
            style={{ justifyContent: "flex-start", marginTop: "2.4rem" }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {stats.map((s) => (
              <motion.div
                className="stat"
                key={s.label}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: "easeOut" },
                  },
                }}
                whileHover={{ y: -4 }}
                style={{ textAlign: "left" }}
              >
                <b>{s.value}</b>
                <span>{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: photo in JARVIS frame */}
        <motion.div
          className="photo-wrap"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
        >
          <div className="orbit orbit-1" />
          <div className="orbit orbit-2" />
          <motion.div
            className="photo-frame"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/photo.png" alt={profile.name} />
            <span className="photo-label">ID: PM-2023 · ONLINE</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bouncing scroll cue */}
      <a href="#education" className="scroll-cue">
        Scroll
        <span className="arrow">↓</span>
      </a>
    </section>
  );
}
