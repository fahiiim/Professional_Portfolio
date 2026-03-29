import React from 'react';

export const EducationSection = ({ id = 'education' }) => {
  return (
    <section
      id={id}
      className="border-b border-gray-200 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="space-y-10">
          {/* Header */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-600">
              Education
            </p>
            <h2 className="max-w-2xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Building a strong foundation in Computer Science & AI
            </h2>
          </div>

          {/* Card */}
          <div
            className="relative overflow-hidden rounded-lg border border-gray-200 bg-gray-50 p-6 transition-shadow duration-300 hover:shadow-md"
          >
            {/* left accent bar */}
            <span className="absolute left-0 top-0 h-full w-1 bg-gray-400" />

            <div className="space-y-8 pl-4">
              {/* University */}
              <div>
                <p className="text-lg font-semibold text-gray-900">
                  B.Sc. in Computer Science & Engineering
                </p>
                <p className="text-sm text-gray-600">
                  Green University of Bangladesh · Dhaka
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-gray-500">
                  2022 — 2026
                </p>

                <ul className="mt-4 space-y-1.5 text-sm text-gray-600">
                  <li>• CGPA: <span className="text-gray-900">3.30 / 4.00</span></li>
                  <li>• Specialization: AI & Machine Learning</li>
                  <li>
                    • Research: Medical AI, XAI, NLP, Computer Vision
                  </li>
                </ul>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-gray-300 to-transparent" />

              {/* College */}
              <div>
                <p className="text-lg font-semibold text-gray-900">
                  Higher Secondary Certificate (Science)
                </p>
                <p className="text-sm text-gray-600">
                  Govt. Adamjeenagar MW College · Narayanganj
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-gray-500">
                  2018 — 2020
                </p>

                <p className="mt-3 text-sm text-gray-600">
                  GPA: <span className="text-gray-900">4.25 / 5.00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
