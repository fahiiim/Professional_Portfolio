import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

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
            {certificatesData.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-slate-900/70 to-slate-950/70 p-5 backdrop-blur-xl transition-all hover:border-[#C9D98B]/50 hover:shadow-[0_0_40px_-12px_rgba(201,217,139,0.5)]"
              >
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9D98B]/0 to-transparent opacity-0 transition-all duration-500 group-hover:from-[#C9D98B]/10 group-hover:opacity-100" />
                
                {/* icon */}
                <motion.div 
                  className="absolute right-5 top-5"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <GraduationCap className="w-6 h-6 text-[#C9D98B] stroke-[2]" />
                </motion.div>

                <p className="relative text-xs font-semibold uppercase tracking-wide text-emerald-300 transition-colors group-hover:text-[#C9D98B]">
                  {cert.date}
                </p>

                <p className="relative mt-1 text-lg font-semibold text-slate-50 transition-colors group-hover:text-[#C9D98B]">
                  {cert.title}
                </p>

                <p className="relative text-sm text-emerald-300 transition-colors group-hover:text-[#C9D98B]">
                  {cert.provider}
                </p>

                <p className="relative mt-2 text-sm text-slate-300">
                  Focus: <span className="text-slate-200 group-hover:text-[#C9D98B] transition-colors">{cert.focus}</span>
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
