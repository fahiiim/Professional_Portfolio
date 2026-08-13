import React from 'react';

const experienceData = [
  {
    title: 'Mid-Level AI Engineer',
    org: 'SparkTech Agency',
    period: 'July 2026 - Present',
    bullets: [
      'Promoted to lead a cross-functional team of 3-4 engineers, owning end-to-end system design, client communication, and delivery of 10+ production AI systems across RAG, OCR, NLP, and computer vision.',
      'Architected high-performance RAG pipelines with LangChain, FAISS, Pinecone, and FastAPI, optimizing vector retrieval and LLM orchestration to achieve sub-2-second latency.',
      'Built automated MLOps workflows with Weights & Biases and AWS, accelerating experimentation and streamlining CI/CD for production deployments.',
    ],
  },
  {
    title: 'Junior AI Engineer',
    org: 'SparkTech Agency',
    period: 'Sept 2025 - June 2026',
    bullets: [
      'Led the design, training, and optimization of ML and deep learning models for production environments.',
      'Developed and integrated NLP, OCR, computer vision, and RAG-based AI systems for client products.',
      'Collaborated with designers, backend engineers, and domain experts to deliver scalable, client-ready solutions.',
    ],
  },
  {
    title: 'Software Engineer',
    org: 'GUB Mars Rover Team',
    period: 'Aug 2024 - Oct 2025',
    bullets: [
      "Developed and programmed hardware-facing software systems for CLADOS, GUB's flagship Mars rover.",
      'The rover placed 6th worldwide and 1st in Asia at the 2026 Anatolian Rover Challenge.',
    ],
  },
];

export const ExperienceSection = ({ id = 'experience' }) => {
  return (
    <section id={id} className="border-b border-gray-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-600">
              Experience
            </p>
            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Turning research prototypes into production-ready AI systems
            </h2>
          </div>

          <div className="relative rounded-lg border border-gray-200 bg-gray-50 p-6 transition-shadow duration-300 hover:shadow-md sm:p-8">
            <span className="absolute left-6 top-8 hidden h-[88%] w-px bg-gradient-to-b from-gray-300 to-transparent sm:block" />
            <div className="space-y-10 sm:pl-10">
              {experienceData.map((item) => (
                <ExperienceItem key={`${item.title}-${item.org}`} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceItem = ({ title, org, period, bullets }) => (
  <div className="relative space-y-3">
    <span className="absolute -left-[22px] top-2 hidden h-3 w-3 rounded-full bg-gray-400 shadow-[0_0_12px_rgba(100,100,100,0.8)] sm:block" />
    <p className="text-xs font-semibold uppercase tracking-wide text-gray-600">{period}</p>
    <p className="text-lg font-semibold text-gray-900">
      {title} <span className="font-medium text-gray-600">· {org}</span>
    </p>
    <ul className="space-y-1.5 text-sm text-gray-600">
      {bullets.map((item) => (
        <li key={item} className="flex gap-2 leading-relaxed">
          <span aria-hidden="true">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ExperienceSection;
