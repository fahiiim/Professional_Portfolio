import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const certificatesData = [
  {
    title: 'Working with Hugging Face',
    provider: 'DataCamp',
    date: 'Sep 2025',
    focus: 'Transformers · NLP · Open-source models',
  },
  {
    title: 'Developing LLM Applications with LangChain',
    provider: 'DataCamp',
    date: 'Sep 2025',
    focus: 'LangChain · RAG · LLM orchestration',
  },
];

export const CertificatesSection = ({ id = 'certificates' }) => {
  return (
    <section
      id={id}
      className="relative border-b border-emerald-500/20 bg-slate-950 py-16 sm:py-20"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-4xl px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.12 } },
          }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
              Certificates
            </p>
            <h2 className="max-w-2xl text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-emerald-300 sm:text-4xl">
              Continuous learning in modern AI tooling
            </h2>
            <p className="max-w-2xl text-sm text-slate-300 sm:text-[15px]">
              I invest in structured, hands-on learning to stay current with
              rapidly evolving AI tools—especially LLM ecosystems and
              production-grade workflows.
            </p>
          </motion.div>

          {/* Certificates */}
          <motion.div
            variants={fadeInUp}
            className="grid gap-5"
          >
            {certificatesData.map((cert) => (
              <motion.div
                key={cert.title}
                whileHover={{ y: -4 }}
                className="relative rounded-2xl border border-emerald-500/30 bg-slate-900/50 p-5 backdrop-blur-xl transition-shadow hover:shadow-[0_0_35px_-12px_rgba(16,185,129,0.35)]"
              >
                {/* icon */}
                <span className="absolute right-5 top-5 text-xl">🎓</span>

                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                  {cert.date}
                </p>

                <p className="mt-1 text-lg font-semibold text-slate-50">
                  {cert.title}
                </p>

                <p className="text-sm text-emerald-300">
                  {cert.provider}
                </p>

                <p className="mt-2 text-sm text-slate-300">
                  Focus: <span className="text-slate-200">{cert.focus}</span>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;
