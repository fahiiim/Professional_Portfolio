import React from 'react';
import {
  Bot,
  BrainCircuit,
  CloudCog,
  Code2,
  Database,
  Eye,
  MessageSquareText,
  Server,
} from 'lucide-react';

const skillGroups = [
  {
    title: 'Languages & Core Tools',
    icon: Code2,
    skills: ['Python', 'Java', 'C', 'SQL', 'Git', 'GitHub', 'Linux', 'Postman'],
  },
  {
    title: 'ML & AI Frameworks',
    icon: BrainCircuit,
    skills: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'Hugging Face', 'Feature Engineering', 'XAI'],
  },
  {
    title: 'Computer Vision',
    icon: Eye,
    skills: ['OpenCV', 'YOLO', 'Vision Transformers', 'CNNs', 'Image Segmentation', 'Object Detection', 'Swin Transformer', 'Grad-CAM'],
  },
  {
    title: 'Generative AI & NLP',
    icon: MessageSquareText,
    skills: ['LLMs', 'LangChain', 'RAG', 'Transformers', 'PEFT', 'LoRA', 'OpenAI API', 'Sentiment Analysis', 'Text Classification'],
  },
  {
    title: 'Backend & APIs',
    icon: Server,
    skills: ['FastAPI', 'REST APIs', 'PostgreSQL', 'Microservices', 'Event-Driven Systems', 'API Integration', 'AWS SQS'],
  },
  {
    title: 'Automation & Scraping',
    icon: Bot,
    skills: ['Web Scraping', 'Workflow Automation', 'Data Extraction', 'OCR Pipelines', 'AWS Textract', 'Document Processing', 'Speech-to-Text'],
  },
  {
    title: 'MLOps, Cloud & Deployment',
    icon: CloudCog,
    skills: ['Docker', 'CI/CD', 'MLflow', 'Weights & Biases', 'AWS EC2', 'AWS S3', 'AWS ECS', 'AWS Bedrock', 'SageMaker', 'Google Cloud'],
  },
  {
    title: 'Data & Vector Systems',
    icon: Database,
    skills: ['Pandas', 'NumPy', 'SciPy', 'Matplotlib', 'Seaborn', 'Statistical Analysis', 'Data Visualization', 'FAISS', 'Pinecone', 'Jupyter', 'Google Colab', 'Kaggle'],
  },
];

const badgeStyles = [
  'border-violet-400/35 bg-violet-400/15 text-violet-100',
  'border-cyan-400/35 bg-cyan-400/15 text-cyan-100',
  'border-emerald-400/35 bg-emerald-400/15 text-emerald-100',
  'border-amber-400/35 bg-amber-400/15 text-amber-100',
  'border-blue-400/35 bg-blue-400/15 text-blue-100',
  'border-rose-400/35 bg-rose-400/15 text-rose-100',
];

export const SkillsSection = ({ id = 'skills' }) => {
  return (
    <section id={id} className="border-b border-slate-800 bg-[#0d1117] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12">
          <p className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-violet-400">
            <span aria-hidden="true" className="mr-2 inline-block h-3 w-3 bg-violet-500" />
            Tech Stack & Skills
          </p>
          <h2 className="mt-5 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl">
            AI, backend, automation & production engineering
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-400 sm:text-[15px]">
            I build complete AI products across modeling, backend APIs, automation and web scraping, data pipelines, cloud infrastructure, and production deployment.
          </p>
        </div>

        <div className="overflow-hidden border border-slate-700 bg-slate-800 sm:grid sm:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <SkillPanel key={group.title} group={group} groupIndex={groupIndex} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillPanel = ({ group, groupIndex }) => (
  <article className="border-b border-slate-700 bg-[#0d1117] p-5 last:border-b-0 sm:min-h-44 sm:border-r sm:[&:nth-child(even)]:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:p-6">
    <div className="mb-5 flex items-center justify-between gap-4">
      <h3 className="rounded bg-slate-800 px-2 py-1 font-mono text-xs font-bold uppercase tracking-wide text-slate-100">
        // {group.title}
      </h3>
      {React.createElement(group.icon, {
        'aria-hidden': true,
        className: 'h-5 w-5 flex-none text-slate-500',
      })}
    </div>
    <div className="flex flex-wrap gap-2">
      {group.skills.map((skill, skillIndex) => (
        <span
          key={skill}
          className={`border px-2.5 py-1 font-mono text-xs font-semibold transition-transform hover:-translate-y-0.5 ${badgeStyles[(groupIndex + skillIndex) % badgeStyles.length]}`}
        >
          {skill}
        </span>
      ))}
    </div>
  </article>
);

export default SkillsSection;
