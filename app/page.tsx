import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import ProfileDashboard from "@/components/ProfileDashboard";
import { ScrollProgress } from "@/components/Animated";
import { profile } from "@/lib/data";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar name={profile.name} />
      <Hero />
      <main>
        <ProjectsSection />
        <ProfileDashboard />
        <section id="contact" className="contact-strip">
          <div className="container contact-strip-inner">
            <h2>Contact<span>.</span></h2>
            <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
            <a href={`tel:${profile.contact.phone}`}>{profile.contact.phone}</a>
            <span>{profile.contact.address}</span>
            <a href={profile.contact.github} target="_blank" rel="noopener noreferrer">GitHub &#8599;</a>
          </div>
        </section>
      </main>
      <footer>© {new Date().getFullYear()} {profile.name}. All rights reserved.</footer>
    </>
  );
}
