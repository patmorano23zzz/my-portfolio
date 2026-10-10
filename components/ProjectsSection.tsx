"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({});

  return (
    <section id="projects" style={{ padding: "1.8rem 0" }}>
      <div className="container">
        <motion.div
          className="projects-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="projects-title">
            Projects<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
          <p className="projects-note">REAL SYSTEMS BUILT FOR REAL USERS —{"\n"}LIVE AND DEPLOYED.</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        >
          {projects.map((project, i) => {
            const expanded = Boolean(expandedProjects[project.title]);
            return (
              <motion.div
                key={project.title}
                className={`project-row${expanded ? " is-expanded" : ""}`}
                variants={{
                  hidden: { opacity: 0, y: 34 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}
              >
                <span className="project-num">{String(i + 1).padStart(2, "0")}</span>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p className={expanded ? "project-description expanded" : "project-description"}>{project.description}</p>
                  <small>{project.period}</small>
                  <button
                    className="project-more"
                    type="button"
                    aria-expanded={expanded}
                    aria-label={`${expanded ? "Show less" : "Show more"} details for ${project.title}`}
                    onClick={() => setExpandedProjects((current) => ({ ...current, [project.title]: !current[project.title] }))}
                  >
                    {expanded ? "Less" : "More"}
                  </button>
                </div>
                <span className="project-category">{project.category}</span>
                <span className="project-actions">
                  {project.url && (
                    <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer">
                      Live site <span className="arrow-glyph">&#8599;</span>
                    </a>
                  )}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
