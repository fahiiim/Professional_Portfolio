import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Sparkles,
  Award,
  Cpu,
  Layers,
  ChevronRight,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';
import sparktechLogo from '../../assets/sparktech-logo.jpg';

const sparktechRoles = [
  {
    title: 'Mid-Level AI Engineer',
    period: 'Jul 2026 - Present · 4 mos',
    badge: 'Present',
    location: 'Dhaka, Bangladesh · On-site',
    summary:
      'Stepped into a Mid-Level AI Engineer role, taking on greater ownership of designing, developing, and deploying AI-powered applications from concept to production. Work closely with clients, product teams, and developers to translate business requirements into scalable AI solutions.',
    responsibilities: [
      {
        title: 'End-to-End AI Engineering',
        desc: 'Build high-performance RAG systems, LLM-powered applications, OCR & document intelligence pipelines, NLP solutions, and computer vision applications using modern AI frameworks.',
      },
      {
        title: 'Production Quality & Optimization',
        desc: 'Focus on writing clean, production-ready code, optimizing vector retrieval and inference workflows, integrating RESTful APIs, and ensuring reliable cloud deployments.',
      },
      {
        title: 'Technical Leadership & Mentorship',
        desc: 'Contribute to solution architecture, participate in technical decision-making, mentor junior engineers, and collaborate directly with stakeholders to deliver impactful AI products.',
      },
    ],
    technologies: [
      'Python',
      'FastAPI',
      'LangChain',
      'OpenAI APIs',
      'AWS',
      'Pinecone',
      'FAISS',
      'PostgreSQL',
      'Docker',
      'Git',
      'REST APIs',
      'Solution Architecture',
    ],
  },
  {
    title: 'Jr. AI Engineer',
    period: 'Sep 2025 - Aug 2026 · 1 yr',
    badge: null,
    location: 'Dhaka, Bangladesh · On-site',
    summary:
      'Focused on ML/DL model optimization, pipeline construction, and shipping client-facing generative AI tools to accelerate core product delivery.',
    responsibilities: [
      {
        title: 'Model Training & MLOps',
        desc: 'Led design, training, and optimization of production ML/DL models; integrated Weights & Biases (W&B) experiment tracking, reducing model iteration cycle time by ~30%.',
      },
      {
        title: 'Client-Facing AI Pipelines',
        desc: 'Built and shipped NLP, OCR, Computer Vision, and RAG-based pipelines into 8+ client-facing applications, directly accelerating product delivery timelines.',
      },
      {
        title: 'Prompt Engineering & LLM Layers',
        desc: 'Engineered prompt engineering workflows and robust LLM integration layers using LangChain, significantly reducing manual data processing overhead.',
      },
    ],
    technologies: [
      'MLOps',
      'LangChain',
      'Weights & Biases (W&B)',
      'Computer Vision',
      'OCR',
      'NLP',
      'Prompt Engineering',
      'Deep Learning',
    ],
  },
  {
    title: 'Trainee AI Engineer',
    period: 'Sep 2025 - Nov 2025 · 3 mos',
    badge: null,
    location: 'Dhaka, Bangladesh · On-site',
    summary:
      'Prototyped foundational vector retrieval systems and automated backend data ingestion pipelines for specialized conversational AI applications.',
    responsibilities: [
      {
        title: 'Scalable RAG Architecture',
        desc: 'Designed scalable RAG system architectures using LangChain, FAISS/Pinecone vector databases, and FastAPI; achieved sub-2s query response times during prototyping.',
      },
      {
        title: 'Data Pipeline Automation',
        desc: 'Automated data pipeline workflows in collaboration with backend engineers, cutting data preprocessing time by ~40% for a legal chatbot project.',
      },
    ],
    technologies: [
      'Retrieval-Augmented Generation (RAG)',
      'FastAPI',
      'FAISS',
      'Pinecone',
      'Vector Databases',
      'Data Pipelines',
    ],
  },
];

const marsRoverExperience = {
  org: 'GUB Mars Rover Team',
  role: 'Software Engineer',
  period: 'Aug 2024 - Oct 2025 · 1 yr 3 mos',
  location: 'Dhaka, Bangladesh · Team CLADOS',
  achievement: '6th Worldwide & 1st in Asia · 2026 Anatolian Rover Challenge (Turkey)',
  summary:
    "Engineered hardware-facing software architectures and real-time communication systems for CLADOS, Green University of Bangladesh's flagship Mars rover competing on international planetary simulation tracks.",
  responsibilities: [
    {
      title: 'Hardware-Facing Software Systems',
      desc: "Developed and programmed embedded control systems for CLADOS, GUB's flagship planetary exploration rover designed for multi-terrain missions.",
    },
    {
      title: 'Telemetry & Ground Station Protocols',
      desc: 'Implemented custom communication protocols, real-time sensor telemetry streaming, and fault-tolerant link diagnostics between onboard MCUs and ground control.',
    },
    {
      title: 'Autonomous Navigation & Vision',
      desc: 'Assisted in sensory calibration, obstacle detection integration, and payload command execution in high-stakes rover competition conditions.',
    },
  ],
  technologies: [
    'Robotics Software',
    'Embedded Systems',
    'Python',
    'C/C++',
    'Hardware Interfacing',
    'Telemetry & Comm Protocols',
    'Sensor Integration',
    'Autonomous Systems',
  ],
};

export const ExperienceSection = ({ id = 'experience' }) => {
  return (
    <section id={id} className="border-b border-[var(--matcha-200)] bg-[var(--matcha-50)] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--matcha-300)] bg-[var(--matcha-100)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--matcha-800)]">
              <Briefcase className="h-3.5 w-3.5 text-[var(--matcha-700)]" />
              <span>Experience</span>
            </div>
            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Turning research prototypes into production-ready AI systems
            </h2>
            <p className="max-w-2xl text-base text-gray-600">
              Proven track record in deploying commercial AI systems, leading RAG architectures, and programming international competition-winning robotics software.
            </p>
          </div>

          {/* Cards Container */}
          <div className="space-y-10">
            {/* CARD 1: Sparktech Agency */}
            <div className="portfolio-card relative overflow-hidden rounded-none border p-6 transition-all duration-300 hover:shadow-lg sm:p-8">
              {/* Top Accent Gradient Bar */}
              <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[var(--matcha-500)] via-[var(--matcha-400)] to-[var(--matcha-200)]" />

              {/* Company Header */}
              <div className="flex flex-col gap-4 border-b border-[var(--matcha-200)] pb-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  {/* Brand Logo */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-none border border-[var(--matcha-300)] bg-white p-1.5 shadow-sm transition-transform duration-200 hover:scale-105">
                    <img
                      src={sparktechLogo}
                      alt="Sparktech Agency Logo"
                      className="h-full w-full object-contain rounded-none"
                    />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-2xl font-bold text-gray-900">Sparktech Agency</h3>
                      <a
                        href="https://www.linkedin.com/company/99339841/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium text-[var(--matcha-700)] hover:bg-[var(--matcha-200)] transition-colors"
                        title="View on LinkedIn"
                      >
                        <span>LinkedIn</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600">
                      <span className="font-medium text-gray-800">Full-time · 1 yr 2 mos</span>
                      <span className="hidden text-gray-300 sm:inline">•</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-gray-500" />
                        Dhaka, Bangladesh · On-site
                      </span>
                    </div>
                  </div>
                </div>

                {/* Growth indicator badge */}
                <div className="inline-flex items-center gap-1.5 self-start rounded-full border border-[var(--matcha-300)] bg-[var(--matcha-100)] px-3.5 py-1.5 text-xs font-semibold text-[var(--matcha-800)] sm:self-center">
                  <TrendingUp className="h-3.5 w-3.5 text-[var(--matcha-600)]" />
                  <span>3 Progressive Roles</span>
                </div>
              </div>

              {/* Roles Progression Timeline */}
              <div className="relative mt-8">
                {/* Vertical timeline line */}
                <span className="absolute left-[13px] top-4 bottom-6 hidden w-0.5 bg-gradient-to-b from-[var(--matcha-500)] via-[var(--matcha-300)] to-gray-200 sm:block" />

                <div className="space-y-10 sm:pl-9">
                  {sparktechRoles.map((role, idx) => (
                    <div key={role.title} className="relative group">
                      {/* Timeline dot */}
                      <span
                        className={`absolute -left-[28px] top-1.5 hidden h-3.5 w-3.5 rounded-full border-2 border-[var(--matcha-50)] transition-transform group-hover:scale-125 sm:block ${
                          idx === 0
                            ? 'bg-[var(--matcha-600)] shadow-[0_0_10px_var(--matcha-400)]'
                            : 'bg-[var(--matcha-400)]'
                        }`}
                      />

                      {/* Role Header */}
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-lg font-bold text-gray-900 group-hover:text-[var(--matcha-800)] transition-colors">
                            {role.title}
                          </h4>
                          {role.badge && (
                            <span className="inline-flex items-center rounded-full bg-[var(--matcha-600)] px-2.5 py-0.5 text-xs font-semibold text-white shadow-xs">
                              {role.badge}
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-semibold text-gray-500 sm:text-right">
                          {role.period}
                        </span>
                      </div>

                      {/* Location & summary */}
                      <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                        <MapPin className="h-3 w-3" />
                        <span>{role.location}</span>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-gray-700">
                        {role.summary}
                      </p>

                      {/* Key bullet points / responsibilities */}
                      <div className="mt-3.5 space-y-2">
                        {role.responsibilities.map((item) => (
                          <div key={item.title} className="flex items-start gap-2 text-sm">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--matcha-600)]" />
                            <p className="leading-relaxed text-gray-600">
                              <strong className="font-semibold text-gray-900">{item.title}: </strong>
                              {item.desc}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Technologies / Skills Pills */}
                      <div className="mt-4 flex flex-wrap items-center gap-1.5 pt-1">
                        <span className="text-xs font-medium text-gray-500 mr-1">Skills:</span>
                        {role.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-[var(--matcha-200)] bg-[var(--matcha-50)]/70 px-2 py-0.5 text-xs font-medium text-gray-700 hover:border-[var(--matcha-300)] transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Inner separator if not last */}
                      {idx !== sparktechRoles.length - 1 && (
                        <div className="mt-8 border-b border-dashed border-[var(--matcha-200)] sm:hidden" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CARD 2: GUB Mars Rover Team */}
            <div className="portfolio-card relative overflow-hidden rounded-none border p-6 transition-all duration-300 hover:shadow-lg sm:p-8">
              {/* Top Accent Gradient Bar */}
              <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-amber-600 via-[var(--matcha-500)] to-[var(--matcha-300)]" />

              {/* Organization Header */}
              <div className="flex flex-col gap-4 border-b border-[var(--matcha-200)] pb-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  {/* Rover / Robotics Badge */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-none border border-[var(--matcha-300)] bg-[var(--matcha-100)] text-[var(--matcha-700)] shadow-sm">
                    <Cpu className="h-7 w-7 text-[var(--matcha-700)]" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-2xl font-bold text-gray-900">{marsRoverExperience.org}</h3>
                      <span className="rounded-md border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-xs font-bold text-amber-800">
                        Robotics Subsystem
                      </span>
                    </div>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600">
                      <span className="font-semibold text-gray-900">{marsRoverExperience.role}</span>
                      <span className="hidden text-gray-300 sm:inline">•</span>
                      <span className="text-gray-700">{marsRoverExperience.period}</span>
                      <span className="hidden text-gray-300 sm:inline">•</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-gray-500" />
                        {marsRoverExperience.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Competition Award Ribbon */}
                <div className="inline-flex items-center gap-2 rounded-none border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 px-3.5 py-2 text-xs font-semibold text-amber-900 shadow-xs">
                  <Award className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>ARC 2026 Finalist</span>
                </div>
              </div>

              {/* Rover Content */}
              <div className="mt-6 space-y-5">
                {/* Highlight Banner */}
                <div className="flex items-center gap-3 rounded-none border border-amber-200/80 bg-amber-50/60 p-4 text-sm text-amber-950">
                  <Award className="h-5 w-5 text-amber-600 shrink-0" />
                  <p className="font-medium">
                    <strong className="font-bold text-amber-900">International Distinction: </strong>
                    {marsRoverExperience.achievement}
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-gray-700">
                  {marsRoverExperience.summary}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-2.5">
                  {marsRoverExperience.responsibilities.map((item) => (
                    <div key={item.title} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--matcha-600)]" />
                      <p className="leading-relaxed text-gray-600">
                        <strong className="font-semibold text-gray-900">{item.title}: </strong>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Technologies / Skills Pills */}
                <div className="pt-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-medium text-gray-500 mr-1">Technologies:</span>
                    {marsRoverExperience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-[var(--matcha-200)] bg-[var(--matcha-50)]/70 px-2 py-0.5 text-xs font-medium text-gray-700 hover:border-[var(--matcha-300)] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
