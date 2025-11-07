// app/page.tsx

// Data
import { education, certificates } from "@/data/profile";
import { projects } from "@/data/projects";

// Components
import Image from "next/image";
import Header from "@/components/Header";
import Button from "@/components/Button";
import SocialLinks from "@/components/SocialLinks";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import GitHubFeed from "@/components/GitHubFeed"; // ✅ Added this

export default function Home() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="section pt-24" id="home">
        <div className="grid md:grid-cols-[auto,1fr] items-center gap-8">
          <div className="flex md:block justify-center">
            <div className="avatar-wrap">
              <Image
                src="/profile.jpeg"
                alt="Manoj"
                width={180}
                height={180}
                className="avatar"
                priority
              />
            </div>
          </div>

          <div>
            <p className="uppercase tracking-[0.25em] text-gold/85 text-xs md:text-sm">
              Full-Stack Developer
            </p>
            <h1 className="mt-3 text-[clamp(32px,5vw,56px)] font-extrabold leading-tight">
              Building refined web experiences with <span className="text-gold">elegance</span>.
            </h1>
            <p className="mt-4 opacity-85 max-w-2xl">
              I craft premium, performant UIs with React & Next.js, powered by Firebase / MongoDB.
              Focused on smooth motion, clarity, and clean code.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="#projects" variant="primary">View Projects</Button>
              <Button href="mailto:manojkumarleo891@gmail.com">Hire Me</Button>
              <Button href="/Manoj_Kumar_Resume.pdf">Download Resume</Button>
            </div>

            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>

      {/* SEPARATOR */}
      <div className="section !py-0"><div className="hr-gold" /></div>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2 className="section-title">Featured Projects</h2>
        <p className="opacity-80 mt-2">Add or remove projects by editing <code>src/data/projects.ts</code>.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((p, idx) => <ProjectCard key={idx} p={p} />)}
        </div>
      </section>

      {/* ✅ GITHUB SECTION */}
      <section id="github" className="section">
        <h2 className="section-title">GitHub Highlights</h2>
        <p className="opacity-80 mt-2">Top repositories from my GitHub profile.</p>

        <div className="mt-8">
          {/* @ts-expect-error Async Server Component */}
          <GitHubFeed />
        </div>
      </section>

      {/* ===== EDUCATION ===== */}
      <section id="education" className="section">
        <h2 className="section-title">Education</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {education.map((ed, i) => (
            <article key={i} className="card p-6 hover:-translate-y-[2px] transition-transform">
              <div className="shine" />
              <h3 className="text-lg font-semibold">{ed.degree}</h3>
              <p className="opacity-85 mt-1">{ed.college}</p>
              {ed.notes && <p className="opacity-70 mt-2 text-sm">{ed.notes}</p>}
            </article>
          ))}
        </div>
      </section>

      {/* ===== CERTIFICATES ===== */}
      <section id="certificates" className="section">
        <h2 className="section-title">Certificates</h2>
        <div className="mt-6 card p-6">
          <div className="shine" />
          <ul className="grid gap-3 sm:grid-cols-2">
            {certificates.map((c, i) => (
              <li key={i} className="flex items-center gap-3">
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ background: "var(--color-gold)" }}
                />
                <span className="opacity-90">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2 className="section-title">About</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <div className="shine" />
            <p className="opacity-85">
              MSc Computer Science. I design and develop end-to-end experiences with React, Next.js,
              Tailwind, Firebase, and MongoDB. I value accessibility, performance, and thoughtful motion.
            </p>
          </div>

          <div className="card p-6">
            <div className="shine" />
            <ul className="grid grid-cols-2 gap-3 text-sm opacity-90">
              <li>React / Next.js</li>
              <li>Tailwind v4</li>
              <li>Firebase / Auth</li>
              <li>MongoDB / Mongoose</li>
              <li>API Routes</li>
              <li>Vercel / CI</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section pb-24">
        <h2 className="section-title">Contact</h2>
        <div className="card p-6 mt-4">
          <div className="shine" />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
