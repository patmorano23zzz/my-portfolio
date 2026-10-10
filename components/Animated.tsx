"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useCallback, type ReactNode } from "react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 34, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

/* Gradient scroll progress bar */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

export function AnimatedSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} style={{ padding: "2.4rem 0" }}>
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="section-eyebrow">/</span>
          <h2 className="section-title">{title}</h2>
        </motion.div>
        <motion.div
          className="grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

/* Card with cursor-following glow + tilt lift */
export function AnimatedCard({ children }: { children: ReactNode }) {
  const onMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty(
      "--mx",
      `${e.clientX - rect.left}px`
    );
    e.currentTarget.style.setProperty(
      "--my",
      `${e.clientY - rect.top}px`
    );
  }, []);

  return (
    <motion.div
      className="card"
      variants={item}
      onMouseMove={onMove}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.99 }}
    >
      {children}
    </motion.div>
  );
}

/* Infinite scrolling skills ticker (pauses on hover) */
export function SkillsMarquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {doubled.map((label, i) => (
          <span className="marquee-item" key={`${label}-${i}`}>
            {label} <span style={{ color: "var(--accent-2)" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

