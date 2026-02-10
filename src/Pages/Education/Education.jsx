import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const EducationSection = ({ id = 'education' }) => {
  return (
    <section
      id={id}
      className="relative border-b border-emerald-500/20 bg-slate-950 py-16 sm:py-20"
    >
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="space-y-10"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
              Education
            </p>
            <h2 className="max-w-2xl text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-emerald-300 sm:text-4xl">
              Building a strong foundation in Computer Science & AI
            </h2>
          </motion.div>

          {/* Card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-slate-900/50 p-6 backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_0_40px_-12px_rgba(16,185,129,0.35)]"
          >
            {/* left accent bar */}
            <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-400 to-emerald-600" />

            <div className="space-y-8 pl-4">
              {/* University */}
              <div>
                <p className="text-lg font-semibold text-slate-50">
                  B.Sc. in Computer Science & Engineering
                </p>
                <p className="text-sm text-emerald-300">
                  Green University of Bangladesh · Dhaka
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                  2022 — Present
                </p>

                <ul className="mt-4 space-y-1.5 text-sm text-slate-300">
                  <li>• CGPA: <span className="text-slate-100">3.25 / 4.00</span></li>
                  <li>• Specialization: AI & Machine Learning</li>
                  <li>
                    • Research: Medical AI, XAI, NLP, Computer Vision
                  </li>
                </ul>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-emerald-500/40 to-transparent" />

              {/* College */}
              <div>
                <p className="text-lg font-semibold text-slate-50">
                  Higher Secondary Certificate (Science)
                </p>
                <p className="text-sm text-emerald-300">
                  Govt. Adamjeenagar MW College · Narayanganj
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                  2018 — 2020
                </p>

                <p className="mt-3 text-sm text-slate-300">
                  GPA: <span className="text-slate-100">4.25 / 5.00</span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
