/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const badge = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1 },
};

const projectsData = [
  {
    title: 'Skin Cancer Classification with Swin Transformer & XAI',
    period: '2024',
    description:
      'Clinically guided explainable AI framework achieving 96% accuracy for skin cancer detection.',
    bullets: [
      'Hybrid attention design aligned with dermatologist workflows.',
      'Integrated XAI visualizations for transparent predictions.',
      'Built with PyTorch and Swin Transformer.',
    ],
    tech: ['Swin Transformer', 'PyTorch', 'XAI'],
  },
  {
    title: 'RAG-Based Legal Chatbot',
    period: '2024',
    description:
      'Document-aware chatbot that retrieves and summarizes legal clauses with grounded answers.',
    bullets: [
      'RAG pipeline optimized for legal document structure.',
      'Latency and relevance tuned for real-time UX.',
      'API-based deployment for client integration.',
    ],
    tech: ['LangChain', 'FAISS', 'OpenAI API'],
  },
  {
    title: 'Bidirectional LSTM on IMDB Sentiment Analysis',
    period: '2023',
    description:
      'Deep learning model for binary sentiment classification on IMDB movie reviews.',
    bullets: [
      'Custom preprocessing and tokenization.',
      'Regularization and early stopping.',
    ],
    tech: ['Keras', 'BiLSTM', 'NLP'],
  },
  {
    title: 'OCR & Voice Module for Route App',
    period: '2023',
    description:
      'AI modules for permit text extraction and voice-based route input.',
    bullets: [
      'OCR tuned for real-world permit images.',
      'Bangla/English speech recognition.',
    ],
    tech: ['Tesseract', 'Speech Recognition', 'Flask'],
  },
  {
    title: 'Advanced SMS Spam Classification',
    period: '2023',
    description:
      'Real-time fraud detection pipeline deployed for a production client.',
    bullets: [
      'Text feature engineering and ensemble modeling.',
      'MLOps pipeline for monitoring and retraining.',
    ],
    tech: ['Scikit-learn', 'NLP', 'MLOps'],
  },
];

export const ProjectsSection = ({ id = 'projects' }) => {
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
            show: { opacity: 1, transition: { staggerChildren: 0.12 } },
          }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
              Projects
            </p>
            <h2 className="max-w-3xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-emerald-300 sm:text-4xl">
              Featured case studies & real-world AI systems
            </h2>
            <p className="max-w-2xl text-sm text-slate-300 sm:text-[15px]">
              A selection of projects spanning computer vision, NLP, LLMs, and
              production-grade ML pipelines.
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid gap-6 md:grid-cols-2"
          >
            {projectsData.map((project) => (
              <motion.article
                key={project.title}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-emerald-500/30 bg-slate-900/50 p-6 backdrop-blur-xl transition-shadow hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.4)]"
              >
                {/* Top meta */}
                <div className="flex items-center justify-between text-xs">
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 font-semibold text-emerald-300">
                    {project.period}
                  </span>
                  <span className="uppercase tracking-[0.18em] text-emerald-300/70">
                    Case Study
                  </span>
                </div>

                {/* Content */}
                <div className="mt-4 space-y-3">
                  <h3 className="text-lg font-semibold text-slate-50">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300">
                    {project.description}
                  </p>

                  <ul className="space-y-1.5 text-sm text-slate-300">
                    {project.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                </div>

                {/* Tech badges */}
                <motion.div
                  initial="hidden"
                  animate="show"
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {project.tech.map((t) => (
                    <motion.span
                      key={t}
                      variants={badge}
                      whileHover={{ scale: 1.08 }}
                      className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200"
                    >
                      {t}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Footer */}
                <div className="mt-4 text-xs text-slate-400">
                  End-to-end ownership
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
