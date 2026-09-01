"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "6rem 6% 3rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow blobs */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(79,140,255,0.18), transparent 70%)",
          top: "-10%",
          left: "-10%",
          filter: "blur(20px)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(155,107,255,0.15), transparent 70%)",
          bottom: "-15%",
          right: "-10%",
          filter: "blur(20px)",
        }}
      />

      <motion.div
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
        style={{
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "var(--gradient)",
          backgroundSize: "200% 200%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2.6rem",
          fontWeight: 800,
          color: "#fff",
          marginBottom: "1.6rem",
          boxShadow: "0 0 60px rgba(79,140,255,0.4)",
        }}
      >
        {profile.initials}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
        style={{
          fontSize: "clamp(2.4rem, 6vw, 4rem)",
          fontWeight: 800,
          letterSpacing: 1,
          background: "var(--gradient)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          animation: "shine 6s linear infinite",
        }}
      >
        {profile.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.7, ease: "easeOut" }}
        style={{
          fontSize: "1.3rem",
          color: "var(--accent)",
          fontWeight: 600,
          margin: "0.5rem 0 1.4rem",
        }}
      >
        {profile.title}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
        style={{
          maxWidth: 760,
          color: "var(--muted)",
          textAlign: "justify",
          marginBottom: "2.2rem",
        }}
      >
        {profile.bio}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.7, ease: "easeOut" }}
        style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}
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
            color: "#fff",
            fontWeight: 700,
            boxShadow: "0 8px 24px rgba(79,140,255,0.35)",
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
    </section>
  );
}
