"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { education, skills, seminars, certificates, achievements } from "@/lib/data";
import CertificateCard from "@/components/CertificateCard";

const tabs = ["Education", "Skills", "Seminars & Certificates", "Achievements"] as const;
type DashboardTab = (typeof tabs)[number];

export default function ProfileDashboard() {
  const [activeTab, setActiveTab] = useState<DashboardTab>("Education");
  const [autoRotate, setAutoRotate] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!autoRotate || prefersReducedMotion) return;
    const interval = window.setInterval(() => {
      setActiveTab((current) => tabs[(tabs.indexOf(current) + 1) % tabs.length]);
    }, 3000);
    return () => window.clearInterval(interval);
  }, [autoRotate, prefersReducedMotion]);

  return (
    <section id="dashboard" className="profile-dashboard-section">
      <div className="container">
        <div className="dashboard-heading">
          <div>
            <span className="dashboard-eyebrow">PLAYER DATA / PROFILE DATABASE</span>
            <h2>Player Dashboard<span>.</span></h2>
          </div>
          <div className="dashboard-heading-controls">
            <span className="dashboard-status"><i /> DATA LOADED</span>
            <button
              type="button"
              className="dashboard-rotation-toggle"
              onClick={() => setAutoRotate((rotating) => !rotating)}
              aria-pressed={autoRotate && !prefersReducedMotion}
              disabled={Boolean(prefersReducedMotion)}
              title={prefersReducedMotion ? "Automatic switching is off because reduced motion is enabled" : undefined}
            >
              AUTO {autoRotate && !prefersReducedMotion ? "ON" : "OFF"}
            </button>
          </div>
        </div>

        <div className="dashboard-shell">
          <div className="dashboard-tabs" role="tablist" aria-label="Profile details">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                id={`tab-${index}`}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls="dashboard-panel"
                tabIndex={activeTab === tab ? 0 : -1}
                className={activeTab === tab ? "dashboard-tab active" : "dashboard-tab"}
                onKeyDown={(event) => {
                  const currentIndex = tabs.indexOf(activeTab);
                  let nextIndex = currentIndex;
                  if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabs.length;
                  else if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
                  else if (event.key === "Home") nextIndex = 0;
                  else if (event.key === "End") nextIndex = tabs.length - 1;
                  else return;
                  event.preventDefault();
                  setActiveTab(tabs[nextIndex]);
                  document.getElementById(`tab-${nextIndex}`)?.focus();
                }}
                onClick={() => setActiveTab(tab)}
              >
                <span className="tab-index">0{index + 1}</span>{tab}
              </button>
            ))}
          </div>

          <div id="dashboard-panel" className="dashboard-panel" role="tabpanel" aria-labelledby={`tab-${tabs.indexOf(activeTab)}`}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeTab}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
              >
            {activeTab === "Education" && (
              <div className="education-list">
                {education.map((item) => (
                  <article className="education-row" key={item.school}>
                    <span className="education-level">{item.level}</span>
                    <div><h3>{item.school}</h3><p>{item.detail}</p></div>
                    <span className="education-years">{item.years}</span>
                  </article>
                ))}
              </div>
            )}

            {activeTab === "Skills" && (
              <div className="dashboard-skills">
                {skills.map((group) => (
                  <article className="skill-entry" key={group.category}>
                    <h3>{group.category}</h3>
                    <div>{group.items.map((item) => <span className="dashboard-skill-chip" key={item}>{item}</span>)}</div>
                  </article>
                ))}
              </div>
            )}

            {activeTab === "Seminars & Certificates" && (
              <div className="dashboard-seminars">
                <div className="seminar-list">
                  {seminars.map((item) => <article className="seminar-entry" key={item.title}><span>{item.year} / SEMINAR</span><p>{item.title}</p></article>)}
                  {certificates.map((item) => <article className="seminar-entry" key={item.title}><span>{item.date} / CERTIFICATE</span><p>{item.title}</p><small>{item.issuer}</small></article>)}
                </div>
                {certificates.map((cert) => <CertificateCard key={cert.image} cert={cert} />)}
              </div>
            )}

            {activeTab === "Achievements" && (
              <div className="achievement-list">
                {achievements.map((item) => <article className="achievement-entry" key={item.period}><span className="achievement-icon">&#9733;</span><div><span>{item.period} / ACHIEVEMENT</span><p>{item.description}</p></div></article>)}
              </div>
            )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="dashboard-footer"><span>PROFILE MODULE</span><span>{String(tabs.indexOf(activeTab) + 1).padStart(2, "0")} / 04</span></div>
        </div>
      </div>
    </section>
  );
}
