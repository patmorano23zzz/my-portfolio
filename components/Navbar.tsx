"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#contact", label: "Contact" },
];

type Theme = "dark" | "light";

export default function Navbar({ name }: { name: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    try {
      const savedTheme = window.localStorage.getItem("portfolio-theme");
      const initialTheme = savedTheme === "light" ? "light" : "dark";
      setTheme(initialTheme);
      document.documentElement.dataset.theme = initialTheme;
    } catch {
      document.documentElement.dataset.theme = "dark";
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    try {
      window.localStorage.setItem("portfolio-theme", nextTheme);
    } catch {
      // The theme still changes for this visit when storage is unavailable.
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav link of the section in view
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: scrolled ? "0.65rem 6%" : "0.8rem 6%",
          background: "var(--nav-bg)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid var(--border)",
          boxShadow: "0 5px 20px rgba(0, 0, 0, 0.16)",
          transition: "padding 0.3s ease, background 0.3s ease, border 0.3s ease",
        }}
      >
        <a
          href="#about"
          style={{
            fontWeight: 700,
            letterSpacing: 1,
            color: "var(--text)",
            fontSize: "0.95rem",
          }}
        >
          {name}
        </a>

        <ul
          className="nav-links"
          style={{
            display: "flex",
            gap: "1.6rem",
            listStyle: "none",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link${active === link.href ? " active" : ""}`}
                style={{ fontSize: "0.9rem" }}
                aria-current={active === link.href ? "true" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
          <span aria-hidden="true">{theme === "dark" ? "☼" : "☾"}</span>
          <span className="theme-toggle-label">{theme === "dark" ? "Light" : "Dark"}</span>
        </button>

        <button
          className={`hamburger${open ? " open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 90,
              background: "var(--nav-bg)",
              backdropFilter: "blur(16px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.4rem",
            }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i, duration: 0.35, ease: "easeOut" }}
                style={{
                  color: "var(--text)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  padding: "0.5rem 1rem",
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <button className="theme-toggle mobile-theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
              <span aria-hidden="true">{theme === "dark" ? "☼" : "☾"}</span>
              <span>{theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
