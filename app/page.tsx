import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import {
  AnimatedSection,
  AnimatedCard,
  ScrollProgress,
  SkillsMarquee,
} from "@/components/Animated";
import {
  profile,
  education,
  skills,
  experience,
  seminars,
  certificates,
  achievements,
} from "@/lib/data";
import CertificateCard from "@/components/CertificateCard";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar name={profile.name} />
      <Hero />

      {/* Scrolling skills ticker */}
      <SkillsMarquee items={skills.flatMap((s) => s.items)} />

      <ProjectsSection />

      <main>
        <AnimatedSection id="education" title="Education">
          {education.map((edu) => (
            <AnimatedCard key={edu.school}>
              <span className="tag">{edu.level}</span>
              <h3>{edu.school}</h3>
              <p style={{ color: "var(--muted)" }}>{edu.detail}</p>
              <span className="years">{edu.years}</span>
            </AnimatedCard>
          ))}
        </AnimatedSection>

        <AnimatedSection id="skills" title="Skills">
          {skills.map((group) => (
            <AnimatedCard key={group.category}>
              <h3>{group.category}</h3>
              <div>
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </AnimatedCard>
          ))}
        </AnimatedSection>

        <AnimatedSection id="experience" title="Work Experience">
          {experience.map((exp) => (
            <AnimatedCard key={exp.place}>
              <h3>{exp.place}</h3>
              <p style={{ color: "var(--muted)" }}>{exp.description}</p>
            </AnimatedCard>
          ))}
        </AnimatedSection>

        <AnimatedSection id="seminars" title="Seminars & Certificates">
          <div className="seminar-cert-row">
            <div className="seminar-cert-text">
              {seminars.map((sem) => (
                <AnimatedCard key={sem.title}>
                  <span className="tag">{sem.year}</span>
                  <p style={{ color: "var(--muted)" }}>{sem.title}</p>
                </AnimatedCard>
              ))}
              {certificates.map((cert) => (
                <AnimatedCard key={cert.title}>
                  <span className="tag">Certificate of Participation</span>
                  <p style={{ color: "var(--muted)" }}>{cert.title}</p>
                  <p className="cert-meta">
                    🏫 {cert.issuer}
                    <br />
                    📅 Given this {cert.date}
                  </p>
                </AnimatedCard>
              ))}
            </div>
            {certificates.map((cert) => (
              <CertificateCard key={cert.image} cert={cert} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="achievements" title="Achievements">
          {achievements.map((ach) => (
            <AnimatedCard key={ach.period}>
              <span className="tag">{ach.period}</span>
              <p style={{ color: "var(--muted)" }}>{ach.description}</p>
            </AnimatedCard>
          ))}
        </AnimatedSection>

        <AnimatedSection id="contact" title="Contact">
          <AnimatedCard>
            <ul>
              <li>📞 {profile.contact.phone}</li>
              <li>
                ✉️{" "}
                <a href={`mailto:${profile.contact.email}`}>
                  {profile.contact.email}
                </a>
              </li>
              <li>📍 {profile.contact.address}</li>
              <li>
                🌐{" "}
                <a href={profile.contact.github} target="_blank" rel="noopener noreferrer">
                  {profile.contact.github}
                </a>
              </li>
            </ul>
          </AnimatedCard>
        </AnimatedSection>
      </main>

      <footer>
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </footer>
    </>
  );
}
