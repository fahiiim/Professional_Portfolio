import React from 'react';
import { motion as Motion } from 'framer-motion';
import { AboutSection } from '../About/About';
import { EducationSection } from '../Education/Education';
import { ExperienceSection } from '../Experience/Experience';
import { SkillsSection } from '../Skills/Skills';
import { ProjectsSection } from '../Projects/Projects';
import { AchievementsSection } from '../Achievements/Achievements';
import { LeadershipSection } from '../Leadership/Leadership';
import { CertificatesSection } from '../Certificates/Certificates';
import { ContactSection } from '../Contact/Contact';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const Home = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-emerald-500/25 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950">
        {/* Glow rings */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />
          <div className="absolute -top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full border border-emerald-500/25" />
          <div className="absolute top-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full border border-emerald-500/15" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-20 pt-16 sm:pt-20 md:flex-row md:items-center md:gap-16 lg:px-8 lg:pt-24">
          {/* LEFT */}
          <Motion.div
            className="flex-1 space-y-6"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {/* Collaboration pill */}
            <Motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-slate-950/70 px-3 py-1 text-xs font-medium text-emerald-200 shadow-lg shadow-emerald-500/20"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-emerald-200" />
              <span>Available for AI projects & collaborations</span>
            </Motion.div>

            {/* Headline */}
            <Motion.h1
              variants={fadeInUp}
              className="text-balance text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl lg:text-5xl"
            >
              Welcome to my digital humble abode.
            </Motion.h1>

            {/* Intro */}
            <Motion.p
              variants={fadeInUp}
              className="max-w-xl text-sm text-slate-300 sm:text-base"
            >
              I’m{' '}
              <span className="font-semibold text-emerald-300">
                Md. Fahim Sarker Mridul
              </span>
              , an{' '}
              <span className="font-semibold">AI Engineer & AI/ML Researcher</span>{' '}
              specializing in Medical AI, XAI, NLP, and Computer Vision — turning
              research into human-centered, production-ready intelligence.
            </Motion.p>

            {/* Meta */}
            <Motion.div
              variants={fadeInUp}
              className="grid gap-4 text-xs text-slate-300 sm:grid-cols-2 sm:text-sm"
            >
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Current Role
                </p>
                <p>Junior AI Engineer · SparkTech Agency, Dhaka</p>
              </div>
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Focus Areas
                </p>
                <p>Medical AI · LLMs & RAG · XAI · NLP · Computer Vision</p>
              </div>
            </Motion.div>

            {/* CTA */}
            <Motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Let's Talk
              </a>
              <a
                href="github.com/fahiiim"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-emerald-400/60 bg-slate-950/60 px-5 py-2.5 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/10 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                View Github Profile
              </a>
            </Motion.div>

            {/* Contacts */}
            <Motion.div
              variants={fadeInUp}
              className="grid gap-2 pt-4 text-xs text-slate-300 sm:text-sm"
            >
              <p className="font-medium text-slate-200">📍 Dhaka, Bangladesh</p>
              <div className="flex flex-wrap gap-x-6 gap-y-1">
                <a
                  href="mailto:fahimsarker0805@gmail.com"
                  className="hover:text-emerald-200"
                >
                  📧 fahimsarker0805@gmail.com
                </a>
                <a href="tel:+8801400530058" className="hover:text-emerald-200">
                  📞 +880 1400 530 058
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-xs sm:text-sm">
                <a
                  href="https://linkedin.com/in/fahim153"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-200"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/fahiiim"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-200"
                >
                  GitHub
                </a>
                <a
                  href="https://kaggle.com/fahimsarker"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-200"
                >
                  Kaggle
                </a>
              </div>
            </Motion.div>
          </Motion.div>

          {/* RIGHT VISUAL */}
          <Motion.div
  variants={fadeInUp}
  initial="hidden"
  animate="show"
  transition={{ delay: 0.25, duration: 0.7 }}
  className="relative mt-6 flex flex-1 items-center justify-center md:mt-0"
>
  <div className="relative h-64 w-64 max-w-sm rounded-3xl border border-emerald-400/40 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/40 p-4 shadow-[0_0_80px_rgba(16,185,129,0.45)] sm:h-72 sm:w-72 lg:h-80 lg:w-80">
    <div className="absolute inset-4 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.22),transparent_55%),radial-gradient(circle_at_bottom,rgba(56,189,248,0.2),transparent_55%)]" />
    <div className="relative flex h-full flex-col justify-between p-4">
      <div className="space-y-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-200">
          AI Engineer & Researcher
        </p>
        <p className="text-sm text-slate-200">
          Building intelligent, explainable AI systems for real-world impact. Focused on Medical AI, RAG, and production-ready CV/NLP.
        </p>
      </div>
      <div className="space-y-3 text-xs text-slate-200">
        <p className="font-semibold text-emerald-200">Tech Stack</p>
        <p>PyTorch · TensorFlow · HuggingFace · LangChain · RAG</p>
        <p>OpenCV · YOLO · Swin Transformer · BERT · MLflow</p>
      </div>
      <div className="flex items-center justify-between text-[11px] text-slate-400">
        <span>Medical AI · Explainable AI · Computer Vision · NLP</span>
        <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-[10px] font-semibold text-emerald-200">
          Jr AI Engineer @ SparkTech
        </span>
      </div>
    </div>
  </div>
</Motion.div>
        </div>
      </section>

      {/* Sections */}
      <AboutSection id="about" />
      <EducationSection id="education" />
      <ExperienceSection id="experience" />
      <SkillsSection id="skills" />
      <ProjectsSection id="projects" />
      <AchievementsSection id="achievements" />
      <LeadershipSection id="leadership" />
      <CertificatesSection id="certificates" />
      <ContactSection id="contact" />

      {/* Footer */}
      <footer className="border-t border-emerald-500/20 bg-slate-950 pb-16 pt-10 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8 text-center">
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} Md. Fahim Sarker Mridul · Crafted with
            React, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </footer>

      {/* Back to top */}
      <a
        href="#"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-emerald-400/70 px-3 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition"
      >
        ↑ Top
      </a>
    </main>
  );
};

export default Home;
