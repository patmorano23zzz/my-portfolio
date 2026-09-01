import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { AnimatedSection, AnimatedCard } from "@/components/Animated";
import {
  profile,
  education,
  skills,
  experience,
  seminars,
  achievements,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <Navbar name={profile.name} />
      <Hero />

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
              <ul>
                {group.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
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

        <AnimatedSection id="seminars" title="Seminars & Trainings">
          {seminars.map((sem) => (
            <AnimatedCard key={sem.title}>
              <span className="tag">{sem.year}</span>
              <p style={{ color: "var(--muted)" }}>{sem.title}</p>
            </AnimatedCard>
          ))}
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
