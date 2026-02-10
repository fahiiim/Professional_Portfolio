import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const ExperienceSection = ({ id = 'experience' }) => {
  return (
    <section
      id={id}
      className="relative border-b border-emerald-500/20 bg-slate-950 py-16 sm:py-20"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
              Experience
            </p>
            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-emerald-300 sm:text-4xl">
              Turning research prototypes into production-ready AI systems
            </h2>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            className="relative rounded-2xl border border-emerald-500/30 bg-slate-900/50 p-6 sm:p-8 backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_0_40px_-12px_rgba(16,185,129,0.35)]"
          >
            {/* timeline line */}
            <span className="absolute left-6 top-8 hidden h-[85%] w-px bg-gradient-to-b from-emerald-500/60 to-transparent sm:block" />

            <div className="space-y-10 sm:pl-10">
              <ExperienceItem
                title="Junior AI Engineer"
                org="SparkTech Agency"
                period="Nov 2025 — Present"
                bullets={[
                  'Lead design, training, and optimization of ML/DL models for production environments.',
                  'Develop and integrate NLP, OCR, Computer Vision, and RAG-based AI systems.',
                  'Collaborate with cross-functional teams to deliver scalable, client-ready solutions.',
                ]}
              />

              <ExperienceItem
                title="Trainee AI Engineer"
                org="SparkTech Agency"
                period="Sep 2025 — Nov 2025"
                bullets={[
                  'Assisted in training, validating, and deploying machine learning models.',
                  'Supported AI prototyping, experimentation, and data pipeline automation.',
                ]}
              />

              <ExperienceItem
                title="Executive Member"
                org="BASIS Students’ Forum – GUB Chapter"
                period="Oct 2023 — Sep 2025"
                bullets={[
                  'Organized technical workshops and AI-focused community events.',
                  'Built a collaborative environment for students exploring AI & ML technologies.',
                ]}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ExperienceItem = ({ title, org, period, bullets }) => (
  <div className="relative space-y-3">
    {/* timeline dot */}
    <span className="absolute -left-[22px] top-2 hidden h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)] sm:block" />

    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
      {period}
    </p>

    <p className="text-lg font-semibold text-slate-50">
      {title}{' '}
      <span className="text-emerald-300 font-medium">· {org}</span>
    </p>

    <ul className="space-y-1.5 text-sm text-slate-300">
      {bullets.map((item) => (
        <li key={item} className="leading-relaxed">
          • {item}
        </li>
      ))}
    </ul>
  </div>
);

export default ExperienceSection;
