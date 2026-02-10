import React from 'react';
import { motion as Motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

const badge = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1 },
};

export const SkillsSection = ({ id = 'skills' }) => {
  return (
    <section
      id={id}
      className="relative border-b border-emerald-500/20 bg-slate-950 py-16 sm:py-20"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        <Motion.div
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
          <Motion.div variants={fadeInUp} className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
              Skills
            </p>
            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-emerald-300 sm:text-4xl">
              Full-stack AI, ML & MLOps toolkit
            </h2>
            <p className="max-w-2xl text-sm text-slate-300 sm:text-[15px]">
              I work across the entire AI lifecycle — from data and modeling to
              evaluation, deployment, and scalable production systems.
            </p>
          </Motion.div>

          {/* Skill Grid */}
          <Motion.div
            variants={fadeInUp}
            className="grid gap-6 sm:grid-cols-2"
          >
            <SkillCard
              title="Programming & Development"
              skills={[
                'Python', 'C', 'C++', 'Java', 'JavaScript', 'TypeScript',
                'SQL', 'R', 'MATLAB', 'Scala', 'Go',
                'Flask', 'Git', 'Linux',
              ]}
            />

            <SkillCard
              title="Machine Learning & AI"
              skills={[
                'Scikit-learn', 'TensorFlow', 'Keras', 'PyTorch',
                'HuggingFace', 'XGBoost', 'Feature Engineering',
                'MLOps', 'OpenAI', 'LangChain', 'LangGraph',
              ]}
            />

            <SkillCard
              title="Computer Vision"
              skills={[
                'CNN', 'Vision Transformers', 'OpenCV', 'YOLO',
                'MediaPipe', 'Detectron2', 'Image Segmentation',
                'MIRNet', 'Swin Transformer',
              ]}
            />

            <SkillCard
              title="NLP & LLMs"
              skills={[
                'NLTK', 'spaCy', 'BERT', 'GPT',
                'Transformers', 'RAG',
                'LoRA', 'QLoRA', 'Text Classification',
              ]}
            />

            <SkillCard
              title="Cloud & Deployment"
              skills={[
                'AWS', 'Google Cloud', 'Azure',
                'SageMaker', 'Docker', 'Kubernetes', 'MLflow',
              ]}
            />

            <SkillCard
              title="Data Science & Tools"
              skills={[
                'Pandas', 'NumPy', 'Matplotlib', 'Seaborn',
                'Tableau', 'Power BI', 'Jupyter',
                'Google Colab', 'Kaggle', 'LaTeX',
                'Roboflow', 'PyCharm',
              ]}
            />

            <SkillCard
              title="Databases & Big Data"
              skills={[
                'PostgreSQL', 'MongoDB', 'Redis',
                'Hadoop', 'Spark', 'Elasticsearch',
              ]}
            />

            <SkillCard
              title="Vector Databases"
              skills={[
                'ChromaDB', 'Pinecone', 'FAISS',
              ]}
            />
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, skills }) => (
  <Motion.div
    whileHover={{ y: -4 }}
    className="rounded-2xl border border-emerald-500/30 bg-slate-900/50 p-5 backdrop-blur-xl transition-shadow hover:shadow-[0_0_40px_-12px_rgba(16,185,129,0.35)]"
  >
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
      {title}
    </p>

    <Motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-4 flex flex-wrap gap-2"
    >
      {skills.map((skill) => (
        <Motion.span
          key={skill}
          variants={badge}
          whileHover={{ scale: 1.08 }}
          className="cursor-default rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200"
        >
          {skill}
        </Motion.span>
      ))}
    </Motion.div>
  </Motion.div>
);

export default SkillsSection;
