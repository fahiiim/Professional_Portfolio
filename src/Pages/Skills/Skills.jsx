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
  'border-violet-200 bg-violet-50 text-violet-800',
  'border-cyan-200 bg-cyan-50 text-cyan-800',
  'border-emerald-200 bg-emerald-50 text-emerald-800',
  'border-amber-200 bg-amber-50 text-amber-800',
  'border-blue-200 bg-blue-50 text-blue-800',
  'border-rose-200 bg-rose-50 text-rose-800',
];

export const SkillsSection = ({ id = 'skills' }) => {
  return (
    <section id={id} className="border-b border-gray-200 bg-white py-16 text-gray-900 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-600">
            Skills
          </p>
          <h2 className="mt-5 max-w-4xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI, backend, automation & production engineering
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-[15px]">
            I build complete AI products across modeling, backend APIs, automation and web scraping, data pipelines, cloud infrastructure, and production deployment.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-200 shadow-sm sm:grid sm:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <SkillPanel key={group.title} group={group} groupIndex={groupIndex} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillPanel = ({ group, groupIndex }) => (
  <article className="border-b border-gray-200 bg-gray-50 p-5 last:border-b-0 sm:min-h-44 sm:border-r sm:[&:nth-child(even)]:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:p-6">
    <div className="mb-5 flex items-center justify-between gap-4">
      <h3 className="rounded bg-gray-200 px-2 py-1 font-mono text-xs font-bold uppercase tracking-wide text-gray-800">
        // {group.title}
      </h3>
      {React.createElement(group.icon, {
        'aria-hidden': true,
        className: 'h-5 w-5 flex-none text-gray-500',
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
