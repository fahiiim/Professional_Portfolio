import React from 'react';
import { motion as Motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ParticlesBackground from '../../components/ParticlesBackground';
import AnimatedCounter from '../../components/AnimatedCounter';
import { 
  SiPytorch, 
  SiTensorflow, 
  SiOpenai, 
  SiScikitlearn,
  SiDocker
} from 'react-icons/si';
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
      <section className="relative min-h-screen overflow-hidden border-b border-emerald-500/25 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950">
        {/* Particles Background */}
        <ParticlesBackground />
        
        {/* Decorative stars/sparkles */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-20 left-[15%] h-1 w-1 rounded-full bg-[#C9D98B] animate-pulse" />
          <div className="absolute top-32 right-[20%] h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-[25%] left-[10%] h-2 w-2 rotate-45 bg-gradient-to-br from-emerald-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-[15%] right-[15%] h-8 w-8 rotate-12">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-transparent" 
                 style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
          </div>
          <div className="absolute bottom-[30%] right-[25%] h-6 w-6 rotate-45">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C9D98B]/40 to-transparent" 
                 style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
          </div>
          <div className="absolute top-[40%] right-[10%] h-0.5 w-0.5 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-4 py-20 text-center">
          <Motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {/* Avatar */}
            <Motion.div
              variants={fadeInUp}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-[#C9D98B]/30 bg-gradient-to-br from-slate-800 to-slate-900 p-1 shadow-lg shadow-[#C9D98B]/20">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 text-4xl">
                    👨‍💻
                  </div>
                </div>
                {/* Green availability dot */}
                <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full border-4 border-slate-950 bg-emerald-400" />
              </div>
            </Motion.div>

            {/* Availability Badge */}
            <Motion.div
              variants={fadeInUp}
              className="flex justify-center"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-slate-900/70 px-4 py-2 text-sm font-medium text-emerald-200 shadow-lg shadow-emerald-500/20 backdrop-blur-xl">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for opportunities</span>
              </div>
            </Motion.div>

            {/* Main Heading */}
            <Motion.h1
              variants={fadeInUp}
              className="text-balance text-4xl font-bold leading-tight text-slate-50 sm:text-5xl lg:text-6xl"
            >
              Welcome to
              <br />
              my digital humble abode
            </Motion.h1>

            {/* Subheading */}
            <Motion.p
              variants={fadeInUp}
              className="mx-auto max-w-2xl text-base text-slate-400 sm:text-lg"
            >
              I'm an{' '}
              <span className="font-semibold inline-block text-[#C9D98B]">
                <TypeAnimation
                  sequence={[
                    'AI Engineer',
                    2000,
                    'ML Researcher',
                    2000,
                    'Problem Solver',
                    2000,
                    'Innovation Builder',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
              <br />
              My interest lies in AI engineering and user experience.
            </Motion.p>

            {/* CTA Buttons */}
            <Motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-50 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <span>👋</span>
                Let's talk
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-6 py-3 text-base font-semibold text-slate-200 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#C9D98B]/40 hover:shadow-md"
              >
                Get Template
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </Motion.div>
          </Motion.div>
        </div>

        {/* Tech Stack Logos Section */}
        <div className="relative border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-xl">
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mx-auto max-w-6xl px-4 py-12"
          >
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-40 grayscale transition hover:opacity-60 sm:gap-12 lg:gap-16">
              {/* Using react-icons for tech logos */}
              <div className="flex items-center gap-2">
                <SiPytorch className="h-8 w-8 text-slate-400" />
                <span className="text-sm font-semibold text-slate-400">PyTorch</span>
              </div>
              <div className="flex items-center gap-2">
                <SiTensorflow className="h-8 w-8 text-slate-400" />
                <span className="text-sm font-semibold text-slate-400">TensorFlow</span>
              </div>
              <div className="flex items-center gap-2">
                <SiOpenai className="h-8 w-8 text-slate-400" />
                <span className="text-sm font-semibold text-slate-400">OpenAI</span>
              </div>
              <div className="flex items-center gap-2">
                <SiScikitlearn className="h-8 w-8 text-slate-400" />
                <span className="text-sm font-semibold text-slate-400">Scikit-Learn</span>
              </div>
              <div className="flex items-center gap-2">
                <SiDocker className="h-8 w-8 text-slate-400" />
                <span className="text-sm font-semibold text-slate-400">Docker</span>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative border-b border-emerald-500/20 bg-slate-950 py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            <div className="group relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-slate-900/50 to-slate-950/50 p-6 backdrop-blur-xl transition-all hover:border-emerald-400/50 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.4)]">
              <div className="relative z-10">
                <div className="text-4xl font-bold text-[#C9D98B]">
                  <AnimatedCounter end={15} suffix="+" />
                </div>
                <p className="mt-2 text-sm text-slate-300">AI Projects</p>
              </div>
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#C9D98B]/5 blur-2xl transition-all group-hover:bg-[#C9D98B]/10" />
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-slate-900/50 to-slate-950/50 p-6 backdrop-blur-xl transition-all hover:border-emerald-400/50 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.4)]">
              <div className="relative z-10">
                <div className="text-4xl font-bold text-[#C9D98B]">
                  <AnimatedCounter end={96} suffix="%" />
                </div>
                <p className="mt-2 text-sm text-slate-300">Model Accuracy</p>
              </div>
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#C9D98B]/5 blur-2xl transition-all group-hover:bg-[#C9D98B]/10" />
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-slate-900/50 to-slate-950/50 p-6 backdrop-blur-xl transition-all hover:border-emerald-400/50 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.4)]">
              <div className="relative z-10">
                <div className="text-4xl font-bold text-[#C9D98B]">
                  <AnimatedCounter end={5} suffix="+" />
                </div>
                <p className="mt-2 text-sm text-slate-300">Hackathon Wins</p>
              </div>
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#C9D98B]/5 blur-2xl transition-all group-hover:bg-[#C9D98B]/10" />
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-slate-900/50 to-slate-950/50 p-6 backdrop-blur-xl transition-all hover:border-emerald-400/50 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.4)]">
              <div className="relative z-10">
                <div className="text-4xl font-bold text-[#C9D98B]">
                  <AnimatedCounter end={20} suffix="+" />
                </div>
                <p className="mt-2 text-sm text-slate-300">Technologies</p>
              </div>
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#C9D98B]/5 blur-2xl transition-all group-hover:bg-[#C9D98B]/10" />
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
    </main>
  );
};

export default Home;
