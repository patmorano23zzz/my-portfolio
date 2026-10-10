"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { profile, projects } from "@/lib/data";

const keySkills = ["PHP", "JavaScript", "MySQL", "React", "Next.js"];
const portraitModes = [
  { name: "Coding", className: "coding", companion: "Ship it, Patrick!" },
  { name: "Debugging", className: "debugging", companion: "Found the bug!" },
  { name: "Powered up", className: "powered", companion: "Power level: MAX" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Hero() {
  const [modeIndex, setModeIndex] = useState(0);
  const [foundStar, setFoundStar] = useState(false);
  const [badges, setBadges] = useState<string[]>([]);
  const mode = portraitModes[modeIndex];
  const nextBadge = keySkills[badges.length];

  const collectBadge = () => {
    if (!nextBadge) return;
    setBadges((current) => [...current, nextBadge]);
  };

  return (
    <section id="about" className="hero-section">
      <div className="hero-grid">
        <motion.div className="hero-copy" initial="hidden" animate="show" transition={{ staggerChildren: 0.1 }}>
          <motion.div className="status-badge" variants={fadeUp}>
            <span className="status-dot" /> Available for opportunities
          </motion.div>
          <motion.p className="hero-kicker" variants={fadeUp}>PLAYER 01 <span>/</span> WEB DEVELOPER</motion.p>
          <motion.h1 variants={fadeUp}>{profile.name}</motion.h1>
          <motion.p className="hero-subtitle" variants={fadeUp}>{profile.title}</motion.p>
          <motion.p className="hero-education" variants={fadeUp}>PRMSU Sta. Cruz <span>/</span> BS Computer Science <span>/</span> 2023–Present</motion.p>
          <motion.p className="bio-text" variants={fadeUp}>
            Computer Science student building practical web systems, from adaptive learning tools to school attendance and records platforms. I focus on clear workflows, responsive interfaces, and reliable database-backed applications.
          </motion.p>
          <motion.div className="hero-highlights" variants={fadeUp}>
            <div className="highlight-line">
              <span className="highlight-label">TOOLKIT</span>
              <div className="quick-chips">{keySkills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </div>
            <div className="highlight-line">
              <span className="highlight-label">SELECTED BUILDS</span>
              <div className="quick-projects">
                {projects.map((project) => project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" key={project.title}>{project.title}<span aria-hidden="true"> &#8599;</span></a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div className="hero-actions" variants={fadeUp}>
            <a className="button-primary" href="#contact">Get in touch</a>
            <a className="button-secondary hero-email" href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
            <a className="button-secondary" href={profile.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </motion.div>
        </motion.div>

        <motion.aside className="arcade-card portrait-card" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} aria-label="Interactive profile portrait">
          <div className="arcade-topline"><span>PLAYER CARD</span><span>LVL 23 / WEB DEV</span></div>
          <div className={`photo-game mode-${mode.className}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="profile-photo" src="/photo.png" alt={profile.name} />

            <div className="pixel-sidekick" aria-hidden="true">
              <span className="sidekick-speech">{mode.companion}</span>
              <svg className="pixel-bot" viewBox="0 0 32 32" shapeRendering="crispEdges">
                <path d="M15 3h2v4h-2zM14 1h4v2h-4z" fill="#c8f169" />
                <path d="M8 8h16v13H8zM11 21h10v7H11zM7 23h4v3H7zM21 23h4v3h-4z" fill="#24272a" stroke="#c8f169" strokeWidth="2" />
                <path d="M11 12h3v3h-3zM18 12h3v3h-3z" fill="#c8f169" />
                <path d="M13 18h6v2h-6z" fill="#ff9d6c" />
                <path className="bot-arm" d="M24 13h3v2h-3zM26 10h2v4h-2z" fill="#ff9d6c" />
              </svg>
            </div>

            <button className={`secret-star${foundStar ? " found" : ""}`} type="button" onClick={() => setFoundStar(true)} aria-label={foundStar ? "Secret star found" : "Find the hidden star"}>
              {foundStar ? "FOUND!" : "✦"}
            </button>
            {foundStar && <span className="star-reward" role="status">Secret star found!</span>}
          </div>

          <div className="portrait-controls">
            <span className="portrait-control-label">PORTRAIT MODE</span>
            <button className="mode-switch" type="button" onClick={() => setModeIndex((current) => (current + 1) % portraitModes.length)} aria-label={`Change portrait mode. Current mode: ${mode.name}`}>
              <span>{mode.name}</span><span aria-hidden="true">&#8644;</span>
            </button>
          </div>

          <div className="badge-collection">
            <div className="badge-heading"><span>SKILL BADGES</span><span>{badges.length}/{keySkills.length}</span></div>
            <div className="badge-list" aria-live="polite">
              {badges.map((badge) => <span className="collected-badge" key={badge}>&#10003; {badge}</span>)}
              {badges.length < keySkills.length && <button type="button" className="collect-badge" onClick={collectBadge}>+ Collect {nextBadge} badge</button>}
              {badges.length === keySkills.length && <span className="collection-complete">Collection complete!</span>}
            </div>
          </div>
        </motion.aside>
      </div>
      <a href="#projects" className="scroll-cue">Explore <span className="arrow">&#8595;</span></a>
    </section>
  );
}
