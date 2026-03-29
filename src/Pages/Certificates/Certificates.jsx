import React from 'react';
import { GraduationCap } from 'lucide-react';

const certificatesData = [
  {
    title: 'Deep Learning Specialization',
    provider: 'Kaggle',
    date: '2025',
    focus: 'Deep learning foundations · CNNs · Sequence models',
  },
  {
    title: 'Large Language Models Concepts',
    provider: 'DataCamp',
    date: '2024',
    focus: 'LLM fundamentals · Prompting · Generative AI workflows',
  },
  {
    title: 'AI+ Prompt Engineer Level 1',
    provider: 'AI CERTs',
    date: '2025',
    focus: 'Prompt design · Prompt evaluation · Applied AI use cases',
  },
  {
    title: 'Supervised Learning with Scikit-Learn',
    provider: 'DataCamp',
    date: '2024',
    focus: 'Classification · Regression · Model evaluation',
  },
  {
    title: 'Deep Neural Networks with PyTorch',
    provider: 'DataCamp',
    date: '2025',
    focus: 'PyTorch training loops · Optimization · Neural architectures',
  },
];

export const CertificatesSection = ({ id = 'certificates' }) => {
  return (
    <section
      id={id}
      className="border-b border-gray-200 bg-white py-16 sm:py-20"
    >

      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-600">
              Certificates
            </p>
            <h2 className="max-w-2xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Continuous learning in modern AI tooling
            </h2>
            <p className="max-w-2xl text-sm text-gray-600 sm:text-[15px]">
              I invest in structured, hands-on learning to stay current with
              rapidly evolving AI tools—especially LLM ecosystems and
              production-grade workflows.
            </p>
          </div>

          {/* Certificates */}
          <div
            className="grid gap-5"
          >
            {certificatesData.map((cert, index) => (
              <div
                key={cert.title}
                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-gray-50 p-5 transition-all hover:border-gray-300 hover:shadow-md"
              >
                {/* icon */}
                <div className="absolute right-5 top-5">
                  <GraduationCap className="w-6 h-6 text-gray-600 stroke-[2]" />
                </div>

                <p className="relative text-xs font-semibold uppercase tracking-wide text-gray-600 transition-colors group-hover:text-gray-700">
                  {cert.date}
                </p>

                <p className="relative mt-1 text-lg font-semibold text-gray-900 transition-colors group-hover:text-gray-800">
                  {cert.title}
                </p>

                <p className="relative text-sm text-gray-600 transition-colors group-hover:text-gray-700">
                  {cert.provider}
                </p>

                <p className="relative mt-2 text-sm text-gray-600">
                  Focus: <span className="text-gray-900 group-hover:text-gray-800 transition-colors">{cert.focus}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
