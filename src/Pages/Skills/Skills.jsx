import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Code, Brain, Eye, Cloud, BarChart3, Database, Layers, MessageSquare } from 'lucide-react';

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
              icon={Code}
              skills={[
                'Python', 'C', 'C++', 'Java', 'JavaScript', 'TypeScript',
                'SQL', 'R', 'MATLAB', 'Scala', 'Go',
                'Flask', 'Git', 'Linux',
              ]}
            />

            <SkillCard
              title="Machine Learning & AI"
              icon={Brain}
              skills={[
                'Scikit-learn', 'TensorFlow', 'Keras', 'PyTorch',
                'HuggingFace', 'XGBoost', 'Feature Engineering',
                'MLOps', 'OpenAI', 'LangChain', 'LangGraph',
              ]}
            />

            <SkillCard
              title="Computer Vision"
              icon={Eye}
              skills={[
                'CNN', 'Vision Transformers', 'OpenCV', 'YOLO',
                'MediaPipe', 'Detectron2', 'Image Segmentation',
                'MIRNet', 'Swin Transformer',
              ]}
            />

            <SkillCard
              title="NLP & LLMs"
              icon={MessageSquare}
              skills={[
                'NLTK', 'spaCy', 'BERT', 'GPT',
                'Transformers', 'RAG',
                'LoRA', 'QLoRA', 'Text Classification',
              ]}
            />

            <SkillCard
              title="Cloud & Deployment"
              icon={Cloud}
              skills={[
                'AWS', 'Google Cloud', 'Azure',
                'SageMaker', 'Docker', 'Kubernetes', 'MLflow',
              ]}
            />

            <SkillCard
              title="Data Science & Tools"
              icon={BarChart3}
              skills={[
                'Pandas', 'NumPy', 'Matplotlib', 'Seaborn',
                'Tableau', 'Power BI', 'Jupyter',
                'Google Colab', 'Kaggle', 'LaTeX',
                'Roboflow', 'PyCharm',
              ]}
            />

            <SkillCard
              title="Databases & Big Data"
              icon={Database}
              skills={[
                'PostgreSQL', 'MongoDB', 'Redis',
                'Hadoop', 'Spark', 'Elasticsearch',
              ]}
            />

            <SkillCard
              title="Vector Databases"
              icon={Layers}
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

const SkillCard = ({ title, skills, icon: Icon }) => (
  <Motion.div
    whileHover={{ y: -4, scale: 1.02 }}
    className="group relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-slate-900/70 to-slate-950/70 p-5 backdrop-blur-xl transition-all hover:border-[#C9D98B]/50 hover:shadow-[0_0_40px_-12px_rgba(201,217,139,0.5)]"
  >
    {/* Animated background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#C9D98B]/0 to-[#C9D98B]/0 transition-all duration-500 group-hover:from-[#C9D98B]/5 group-hover:to-transparent" />
    
    <div className="relative flex items-center justify-between mb-4">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300 group-hover:text-[#C9D98B] transition-colors">
        {title}
      </p>
      {Icon && (
        <Motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
          <Icon className="w-5 h-5 text-[#C9D98B] stroke-[2]" />
        </Motion.div>
      )}
    </div>

    <Motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative mt-4 flex flex-wrap gap-2"
    >
      {skills.map((skill) => (
        <Motion.span
          key={skill}
          variants={badge}
          whileHover={{ scale: 1.1, y: -2 }}
          className="cursor-default rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200 transition-all hover:border-[#C9D98B]/50 hover:bg-[#C9D98B]/20 hover:text-[#C9D98B] hover:shadow-lg"
        >
          {skill}
        </Motion.span>
      ))}
    </Motion.div>
  </Motion.div>
);

export default SkillsSection;
