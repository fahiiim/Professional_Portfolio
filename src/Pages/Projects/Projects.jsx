import React from 'react';
import { ArrowUpRight, BriefcaseBusiness, CheckCircle2, ExternalLink, FlaskConical } from 'lucide-react';
import {
  SiDvc,
  SiKeras,
  SiMlflow,
  SiOpenai,
  SiPython,
  SiPytorch,
  SiScikitlearn,
  SiTensorflow,
} from 'react-icons/si';

const liveProjects = [
  {
    title: 'Right Route App',
    href: 'https://getrightroute.app/',
    action: 'Open Live App',
    actionStyle: 'bg-emerald-600 hover:bg-emerald-700',
    tech: ['AWS', 'FastAPI', 'OpenAI', 'NLP', 'AWS Textract'],
    image: 'https://private-user-images.githubusercontent.com/84550909/637309758-1af46ae1-1b92-401f-bdab-03ce3e1dc2ba.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODcwMzEzMTQsIm5iZiI6MTc4NzAzMTAxNCwicGF0aCI6Ii84NDU1MDkwOS82MzczMDk3NTgtMWFmNDZhZTEtMWI5Mi00MDFmLWJkYWItMDNjZTNlMWRjMmJhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA4MTglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwODE4VDA1MzAxNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQ1YzY0ZjkwNTQwY2NkZDI1ODgyYzkzMmQwZjQ3NWQyYmYzNTkxZWYwMjY2MDAwMjJhZTc0Yzg3NWVmYzg3MzImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.vRs4XdTY1XKAqBWsc7Z2nmXPG1qxKxXt_eBABfcHr1k',
    description: 'AI-powered U.S. route-processing platform that automatically extracts route information from permit documents using AWS Textract, OpenAI, NLP and FastAPI.',
    noteLabel: 'Contribution',
    note: 'System architecture and the end-to-end AI route-processing pipeline.',
  },
  {
    title: 'CaseZys: The USA Legal RAG Assistant',
    href: 'https://casezys.com/',
    action: 'Open Live App',
    actionStyle: 'bg-violet-600 hover:bg-violet-700',
    tech: ['LangChain', 'FAISS', 'FastAPI', 'OpenAI'],
    image: 'https://github.com/user-attachments/assets/fe12c12d-f36b-4e3f-a4ad-dd8ea019749e',
    description: 'Production-grade legal assistant for U.S. Federal and Michigan State law, powered by semantic retrieval, article-level indexing and LLM-based reasoning.',
    noteLabel: 'Performance',
    note: 'Optimized retrieval and orchestration for sub-2-second responses.',
  },
  {
    title: 'Quranity',
    href: 'https://quranity.app/en',
    action: 'Open Live App',
    actionStyle: 'bg-violet-600 hover:bg-violet-700',
    tech: ['LangChain', 'FAISS', 'FastAPI', 'OpenAI'],
    image: 'https://github.com/user-attachments/assets/b7fb680a-7cdd-42ab-aad3-a5d9ddbec8dd',
    description: 'Muslim AI that provides context-aware answers to spiritual questions using integrated AI and reliable source material.',
    noteLabel: 'Role',
    note: 'R&D lead responsible for system feasibility testing and cloud architecture.',
  },
  {
    title: 'AI Risk-Based Intake & Automation Platform',
    action: 'Production System',
    actionStyle: 'bg-emerald-600',
    tech: ['AWS', 'FastAPI', 'OpenAI', 'WhatsApp', 'Telegram', 'Google Calendar', 'CI/CD'],
    image: 'https://github.com/user-attachments/assets/edc37193-c735-4845-81c9-856ec8df5d19',
    description: 'Production AI platform that processes WhatsApp and Outlook requests, analyzes text and images, detects missing information, classifies risk and routes work for automated or human-assisted action.',
    noteLabel: 'System scope',
    note: 'Multichannel intake, risk classification, scheduling and intelligent workflow routing.',
  },
  {
    title: 'Daily Storybook AI',
    href: 'https://github.com/fahiiim/Case-Study-of-Daily-Storybook-App/blob/main/AI%20Storybook%20%26%20Fitness%20Platform%20-%20Case%20Study.pdf',
    action: 'Read Case Study',
    actionStyle: 'bg-blue-600 hover:bg-blue-700',
    status: 'Currently in Apple App Store TestFlight',
    tech: ['FastAPI', 'Microservices', 'AWS', 'PostgreSQL', 'Redis', 'Docker', 'ECS', 'SQS', 'S3', 'Bedrock', 'EC2', 'CI/CD'],
    image: 'https://github.com/user-attachments/assets/64078c44-6cc4-4f3e-a443-164164c23dc6',
    description: 'Scalable event-driven backend for an AI-powered fitness storybook platform built with FastAPI, PostgreSQL, Redis, Docker and AWS services.',
    noteLabel: 'Architecture',
    note: 'Heavy AI workloads were decoupled from the main API to eliminate timeouts and improve reliability.',
    featured: true,
  },
];

const personalProjects = [
  {
    title: 'ViolaShield - Smart Traffic Violation Detection',
    category: 'Computer Vision',
    context: 'Integrated Design Project',
    description: 'Best Innovation Award-winning traffic violation system using YOLOv8 for license plates, vehicle detection and non-helmet rider detection.',
    results: ['YOLOv8 detection pipeline', 'Automated license plate recognition', 'Automated fine and email workflow'],
    tech: ['PyTorch', 'YOLOv8', 'OpenAI API'],
    image: 'https://images.unsplash.com/photo-1713623311317-d3c43a4be4cf?w=900&auto=format&fit=crop&q=80',
    link: 'https://drive.google.com/file/d/1VOHJBoVYmbouGIb7So12CcpkfN3KCWNn/view',
    linkLabel: 'View Promo',
  },
  {
    title: 'Skin Cancer Classification with Swin Transformer & XAI',
    category: 'Medical AI Research',
    context: 'Thesis Work',
    description: 'Clinically guided explainable-AI framework achieving 96% accuracy for skin cancer classification.',
    results: ['96% classification accuracy', 'Swin Transformer architecture', 'Explainable clinical predictions'],
    tech: ['Swin Transformer', 'PyTorch', 'XAI'],
    image: 'https://images.unsplash.com/photo-1676312754401-d97fe43c2c4b?w=900&auto=format&fit=crop&q=80',
    link: 'https://github.com/fahiiim',
    linkLabel: 'View Source',
  },
  {
    title: 'Cattle Breed Classification & XAI',
    category: 'Computer Vision',
    context: 'Research Project',
    description: 'High-performance cattle breed classification with Grad-CAM, t-SNE/PCA and feature-level explainability.',
    results: ['95.19% classification accuracy', 'Grad-CAM visual explanations', 'Feature importance analysis'],
    tech: ['PyTorch', 'XAI', 'Keras'],
    image: 'https://images.unsplash.com/photo-1596733430284-f7437764b1a9?w=900&auto=format&fit=crop&q=80',
    link: 'https://github.com/fahiiim/Cattle-Breed-Classification-and-Enhance-Explainability-with-XAI/tree/main',
    linkLabel: 'View Source',
  },
  {
    title: 'Fine-Tuning Large Language Models',
    category: 'NLP Research',
    context: 'Research Project',
    description: 'Parameter-efficient LLM fine-tuning using LoRA and PEFT with a T5 model on the IMDB dataset.',
    results: ['90%+ evaluation accuracy', 'LoRA parameter-efficient tuning', 'Reproducible training workflow'],
    tech: ['Keras', 'OpenAI API', 'PyTorch'],
    image: 'https://media.istockphoto.com/id/2213677534/photo/large-language-model-with-ai-technology-user-working-on-laptop-in-llm-data-performrange.webp?a=1&b=1&s=612x612&w=0',
    link: 'https://github.com/fahiiim/Large-Language-Model-Fine-Tuning',
    linkLabel: 'View Source',
  },
  {
    title: 'End-to-End Kidney Disease Classification',
    category: 'MLOps Pipeline',
    context: 'Production-Grade Workflow',
    description: 'Reproducible medical-image classification workflow with experiment tracking and dataset/model versioning.',
    results: ['MLflow experiment tracking', 'DVC data and model versioning', 'End-to-end evaluation workflow'],
    tech: ['MLflow', 'DVC', 'TensorFlow'],
    image: 'https://images.unsplash.com/photo-1559757175-053139280de2?w=900&auto=format&fit=crop&q=80',
    link: 'https://github.com/fahiiim/end-to-end-kidney-disease-classification-MLflow-DVC',
    linkLabel: 'View Source',
  },
];

const badgeStyles = [
  'border-slate-700 bg-slate-800 text-white',
  'border-teal-600 bg-teal-600 text-white',
  'border-blue-600 bg-blue-600 text-white',
  'border-violet-600 bg-violet-600 text-white',
  'border-amber-500 bg-amber-500 text-slate-950',
  'border-emerald-600 bg-emerald-600 text-white',
];

const personalTechIcons = {
  PyTorch: SiPytorch,
  YOLOv8: SiPytorch,
  'OpenAI API': SiOpenai,
  'Swin Transformer': SiPytorch,
  XAI: SiTensorflow,
  Keras: SiKeras,
  MLflow: SiMlflow,
  DVC: SiDvc,
  TensorFlow: SiTensorflow,
};

export const ProjectsSection = ({ id = 'projects' }) => {
  return (
    <section id={id} className="border-b border-gray-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="space-y-16">
          <header className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-600">Projects</p>
            <h2 className="max-w-4xl text-3xl font-bold text-gray-900 sm:text-4xl">
              Production client systems and selected technical builds
            </h2>
            <p className="max-w-3xl text-sm leading-6 text-gray-600 sm:text-[15px]">
              Live AI products delivered for real users, followed by personal projects exploring computer vision, medical AI, NLP and MLOps.
            </p>
          </header>

          <section aria-labelledby="live-client-projects" className="space-y-6">
            <SubsectionHeading
              id="live-client-projects"
              icon={BriefcaseBusiness}
              eyebrow="Deployed work"
              title="Live Client Projects"
              description="Applications and production systems serving real operational workflows."
            />
            <div className="grid gap-5 lg:grid-cols-2">
              {liveProjects.map((project) => (
                <LiveProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>

          <section aria-labelledby="personal-projects" className="space-y-6">
            <SubsectionHeading
              id="personal-projects"
              icon={FlaskConical}
              eyebrow="Research & experimentation"
              title="Personal Projects"
              description="Independent work focused on model quality, explainability and reproducible engineering."
            />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {personalProjects.map((project) => (
                <PersonalProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

const SubsectionHeading = ({ id, icon, eyebrow, title, description }) => (
  <div className="flex flex-col justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-end">
    <div>
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
        {React.createElement(icon, { 'aria-hidden': true, className: 'h-4 w-4' })}
        <span>{eyebrow}</span>
      </div>
      <h3 id={id} className="mt-2 text-2xl font-bold text-gray-900">{title}</h3>
    </div>
    <p className="max-w-xl text-sm leading-6 text-gray-600 sm:text-right">{description}</p>
  </div>
);

const LiveProjectCard = ({ project }) => (
  <article className={`overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm ${project.featured ? 'lg:col-span-2' : ''}`}>
    <div className="p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          {project.status && <p className="mb-1 text-xs italic text-gray-500">{project.status}</p>}
          <h4 className="text-xl font-bold leading-tight text-gray-900">
            {project.href ? (
              <a href={project.href} target="_blank" rel="noreferrer" className="underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900">
                {project.title}
              </a>
            ) : project.title}
          </h4>
        </div>
        {project.href ? (
          <a href={project.href} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 rounded px-3 py-2 text-xs font-bold uppercase tracking-wide text-white transition ${project.actionStyle}`}>
            {project.action}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        ) : (
          <span className={`inline-flex items-center rounded px-3 py-2 text-xs font-bold uppercase tracking-wide text-white ${project.actionStyle}`}>
            {project.action}
          </span>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((tech, index) => (
          <span key={tech} className={`border px-2 py-1 font-mono text-[11px] font-semibold ${badgeStyles[index % badgeStyles.length]}`}>
            {tech}
          </span>
        ))}
      </div>
    </div>

    <div className={`flex items-center justify-center border-y border-gray-200 bg-gray-50 p-4 ${project.featured ? 'h-72 sm:h-96' : 'h-56 sm:h-64'}`}>
      <img src={project.image} alt={`${project.title} application preview`} loading="lazy" className="h-full w-full object-contain" />
    </div>

    <div className="space-y-4 p-5 sm:p-6">
      <p className="text-sm leading-6 text-gray-700">{project.description}</p>
      <p className="border-l-2 border-gray-900 pl-3 text-sm leading-6 text-gray-600">
        <strong className="font-semibold text-gray-900">{project.noteLabel}:</strong> {project.note}
      </p>
    </div>
  </article>
);

const PersonalProjectCard = ({ project }) => (
  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 transition hover:-translate-y-1 hover:shadow-lg">
    <div className="relative h-44 overflow-hidden bg-gray-200">
      <img src={project.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
      <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gray-800">
        {project.category}
      </span>
    </div>

    <div className="flex flex-1 flex-col p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{project.context}</p>
      <h4 className="mt-2 text-lg font-bold leading-snug text-gray-900">{project.title}</h4>
      <p className="mt-3 text-sm leading-6 text-gray-600">{project.description}</p>

      <ul className="mt-4 space-y-2">
        {project.results.map((result) => (
          <li key={result} className="flex items-start gap-2 text-xs leading-5 text-gray-600">
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-none text-gray-500" />
            <span>{result}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-gray-200 pt-5">
        <div className="flex gap-2">
          {project.tech.map((tech) => {
            const icon = personalTechIcons[tech] || SiPython;
            return (
              <span key={tech} title={tech} aria-label={tech} role="img" className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600">
                {React.createElement(icon, { 'aria-hidden': true, className: 'h-4.5 w-4.5' })}
              </span>
            );
          })}
        </div>
        <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-900 hover:underline">
          {project.linkLabel}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  </article>
);

export default ProjectsSection;
