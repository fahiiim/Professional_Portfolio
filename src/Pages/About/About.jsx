import React from 'react';
import { BriefcaseBusiness, Layers3, Rocket, Users } from 'lucide-react';

export const AboutSection = ({ id = 'about' }) => {
  return (
    <section id={id} className="border-b border-gray-200 bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-600">
              About
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Engineering production AI from architecture to delivery.
            </h2>

            <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm sm:p-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-700">
                Professional Snapshot
              </h3>
              <dl className="mt-5 divide-y divide-gray-200">
                <SnapshotItem
                  icon={BriefcaseBusiness}
                  label="Current role"
                  value="Mid-Level AI Engineer · SparkTech Agency"
                />
                <SnapshotItem
                  icon={Layers3}
                  label="Core scope"
                  value="AI systems, backend APIs, automation & MLOps"
                />
                <SnapshotItem
                  icon={Rocket}
                  label="Production delivery"
                  value="10+ AI systems across RAG, OCR, NLP & CV"
                />
                <SnapshotItem
                  icon={Users}
                  label="Open-source reach"
                  value="8,000+ NeuroGebra users worldwide"
                />
              </dl>
            </div>
          </div>

          <div className="space-y-6 text-[15px] leading-7 text-gray-600">
            <p className="text-lg leading-8 text-gray-800">
              I am a Mid-Level AI Engineer and Python Developer building reliable AI products across generative AI, NLP, OCR, computer vision, and retrieval-augmented generation.
            </p>
            <p>
              At SparkTech Agency, I lead a cross-functional team of 3-4 engineers and own system design, client communication, and delivery. My work includes more than 10 production AI systems, from document-processing workflows to legal assistants and high-performance RAG pipelines.
            </p>
            <p>
              I design retrieval and orchestration systems with LangChain, FAISS, Pinecone, and FastAPI, and build automated experimentation and deployment workflows with Weights & Biases and AWS. I focus on keeping production systems fast, scalable, and dependable under real workloads.
            </p>
            <p>
              Beyond client work, I created NeuroGebra, an open-source symbolic-neural framework adopted by 8,000+ students and researchers worldwide. I also contributed software to the GUB Mars Rover Team and have led technical workshops for more than 200 students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const SnapshotItem = ({ icon, label, value }) => (
  <div className="flex gap-3 py-4 first:pt-0 last:pb-0">
    <div className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600">
      {React.createElement(icon, { 'aria-hidden': true, className: 'h-4 w-4' })}
    </div>
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</dt>
      <dd className="mt-1 text-sm font-medium leading-5 text-gray-900">{value}</dd>
    </div>
  </div>
);

export default AboutSection;
