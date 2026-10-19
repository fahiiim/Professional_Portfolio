
import React from 'react';
import {
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  Cloud,
  Code2,
  Database,
  Eye,
  Server,
  Workflow,
} from 'lucide-react';

const skillGroups = [
  {
    title: 'Languages & Developer Tools',
    icon: Code2,
    skills: [
      'Python', 'C++', 'Java', 'C', 'SQL',
      'Git', 'GitHub', 'Linux', 'Postman', 'Jupyter Notebook',
    ],
  },
  {
    title: 'Machine Learning & Deep Learning',
    icon: BrainCircuit,
    skills: [
      'PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn',
      'Pandas', 'NumPy', 'SciPy', 'Feature Engineering',
    ],
  },
  {
    title: 'Computer Vision & Explainability',
    icon: Eye,
    skills: [
      'OpenCV', 'YOLO', 'CNNs', 'Vision Transformers',
      'Swin Transformer', 'Image Segmentation',
      'Object Detection', 'XAI', 'Grad-CAM',
    ],
  },
  {
    title: 'Backend & API Engineering',
    icon: Server,
    skills: [
      'FastAPI', 'REST APIs', 'Pydantic', 'SQLAlchemy',
      'AsyncIO', 'Async / Concurrent Programming',
      'Microservices', 'PostgreSQL', 'Redis', 'Event-Driven Systems',
    ],
  },
  {
    title: 'Cloud & MLOps',
    icon: Cloud,
    skills: [
      'AWS EC2', 'AWS S3', 'AWS Lambda', 'AWS Textract',
      'AWS Bedrock', 'SageMaker', 'Google Cloud',
      'Docker', 'CI/CD', 'MLflow', 'Weights & Biases',
    ],
  },
  {
    title: 'Automation & Data Pipelines',
    icon: Workflow,
    skills: [
      'Workflow Automation', 'Web Scraping', 'Data Extraction',
      'OCR Pipelines', 'Document Processing', 'Speech-to-Text',
      'API Integration', 'AWS SQS', 'Logging', 'Observability',
    ],
  },
  {
    title: 'Data, Analytics & Monitoring',
    icon: ChartNoAxesCombined,
    skills: [
      'Matplotlib', 'Seaborn', 'Statistical Analysis',
      'Data Visualization', 'FAISS', 'Pinecone',
      'Jupyter', 'Google Colab', 'Kaggle', 'Grafana',
    ],
  },
];

const genAiSkills = [
  'LLMs',
  'RAG',
  'Agentic AI',
  'MCP',
  'LangChain',
  'Transformers',
  'PEFT',
  'LoRA',
  'OpenAI API',
  'Hugging Face',
  'Langfuse',
  'Sentiment Analysis',
  'Text Classification',
];

export const SkillsSection = ({ id = 'skills' }) => {
  return (
    <section
      id={id}
      className="border-b border-emerald-900/10 bg-[#f7f8f2]
        py-16 text-[#183b32] sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Section heading */}
        <div className="mb-10 max-w-3xl sm:mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-emerald-700" />
            <p className="text-xs font-semibold uppercase
              tracking-[0.24em] text-emerald-800">
              Skills & Toolkit
            </p>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight
            text-[#183b32] sm:text-4xl lg:text-5xl">
            Engineering across the AI stack.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7
            text-[#63766c] sm:text-base">
            From model experimentation to reliable, production-ready
            systems. My toolkit spans AI engineering, backend
            development, intelligent automation, and deployment.
          </p>
        </div>

        {/* Featured GenAI panel */}
        <div className="relative mb-5 overflow-hidden rounded-2xl
          bg-[#183b32] p-6 text-[#f7f8f2] shadow-sm
          sm:p-8">

          <div className="pointer-events-none absolute -right-12
            -top-16 h-48 w-48 rounded-full border
            border-white/10 sm:h-64 sm:w-64" />

          <div className="relative">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="mb-2 text-[10px] font-semibold
                  uppercase tracking-[0.2em] text-emerald-200/80">
                  Core specialization
                </p>

                <h3
                  className="!text-[#f7f8f2] text-xl font-semibold sm:text-2xl"
                  style={{ color: '#f7f8f2' }}
                >
                  Generative AI & Intelligent Systems
                </h3>
              </div>

              <BrainCircuit
                aria-hidden="true"
                className="h-7 w-7 shrink-0 text-emerald-200"
                strokeWidth={1.5}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {genAiSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-white/15
                    bg-white/[0.07] px-3 py-2 text-xs font-medium
                    text-[#f2f6ed] transition-colors
                    hover:border-emerald-200/50
                    hover:bg-white/[0.13]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Supporting skill groups */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="group rounded-2xl border
                  border-[#dce5d9] bg-white/70 p-5
                  transition-all duration-200
                  hover:border-[#a8c4ae]
                  hover:bg-white hover:shadow-md
                  sm:p-6"
              >
                <div className="mb-5 flex items-start
                  justify-between gap-4">
                  <h3 className="text-base font-semibold
                    tracking-tight text-[#244b3d] sm:text-lg">
                    {group.title}
                  </h3>

                  <div className="flex h-9 w-9 shrink-0
                    items-center justify-center rounded-lg
                    bg-[#eaf1e7] text-[#315c49]
                    transition-colors group-hover:bg-[#dcebd9]">
                    <Icon
                      aria-hidden="true"
                      className="h-[18px] w-[18px]"
                      strokeWidth={1.7}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center
                        rounded-md border border-[#e0e8dd]
                        bg-[#edf2e9] px-2.5 py-1.5
                        text-xs font-medium text-[#365447]
                        transition-colors
                        hover:border-[#b6cfb8]
                        hover:bg-[#e1ecdc]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing note */}
        <div className="mt-8 flex items-center gap-3
          border-t border-[#dce5d9] pt-5">
          <Bot
            aria-hidden="true"
            className="h-5 w-5 shrink-0 text-emerald-800"
            strokeWidth={1.6}
          />
          <p className="text-xs leading-6 text-[#63766c] sm:text-sm">
            Focused on building practical AI products, robust APIs,
            and maintainable production systems.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
