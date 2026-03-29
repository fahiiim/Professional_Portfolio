import React from 'react';

export const ExperienceSection = ({ id = 'experience' }) => {
  return (
    <section
      id={id}
      className="border-b border-gray-200 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-600">
              Experience
            </p>
            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Turning research prototypes into production-ready AI systems
            </h2>
          </div>

          {/* Experience Card */}
          <div
            className="relative rounded-lg border border-gray-200 bg-gray-50 p-6 sm:p-8 transition-shadow duration-300 hover:shadow-md"
          >
            {/* timeline line */}
            <span className="absolute left-6 top-8 hidden h-[85%] w-px bg-gradient-to-b from-gray-300 to-transparent sm:block" />

            <div className="space-y-10 sm:pl-10">
              <ExperienceItem
                title="Junior AI Engineer"
                org="SparkTech Agency"
                period="Nov 2025 — Present"
                bullets={[
                  'Lead design, training, and optimization of ML/DL models for production environments.',
                  'Develop and integrate NLP, OCR, Computer Vision, and RAG-based AI systems.',
                  'Collaborate with cross-functional teams to deliver scalable, client-ready solutions.',
                ]}
              />

              <ExperienceItem
                title="Trainee AI Engineer"
                org="SparkTech Agency"
                period="Sep 2025 — Nov 2025"
                bullets={[
                  'Assisted in training, validating, and deploying machine learning models.',
                  'Supported AI prototyping, experimentation, and data pipeline automation.',
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceItem = ({ title, org, period, bullets }) => (
  <div className="relative space-y-3">
    {/* timeline dot */}
    <span className="absolute -left-[22px] top-2 hidden h-3 w-3 rounded-full bg-gray-400 shadow-[0_0_12px_rgba(100,100,100,0.8)] sm:block" />

    <p className="text-xs font-semibold uppercase tracking-wide text-gray-600">
      {period}
    </p>

    <p className="text-lg font-semibold text-gray-900">
      {title}{' '}
      <span className="text-gray-600 font-medium">· {org}</span>
    </p>

    <ul className="space-y-1.5 text-sm text-gray-600">
      {bullets.map((item) => (
        <li key={item} className="leading-relaxed">
          • {item}
        </li>
      ))}
    </ul>
  </div>
);

export default ExperienceSection;
