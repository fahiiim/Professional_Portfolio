import React from 'react';
import { MapPin, Briefcase, Zap, BookOpen } from 'lucide-react';

export const AboutSection = ({ id = 'about' }) => {
  return (
    <section
      id={id}
      className="border-b border-gray-200 bg-white py-20"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="space-y-10">
          {/* Header */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-600">
              About
            </p>
            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Building AI systems that are accurate, explainable, and trusted by humans.
            </h2>
            <p className="max-w-2xl text-sm text-gray-600 sm:text-[15px]">
              I'm an AI Engineer working at the intersection of research and
              production—focused on Medical AI, Explainable AI (XAI), NLP, and
              Computer Vision. My work emphasizes transparency, reliability, and real-world usability.
            </p>
          </div>

          {/* Content */}
          <div className="grid gap-10 lg:grid-cols-[1.6fr_minmax(0,1fr)]">
            {/* Narrative */}
            <div className="space-y-5 text-sm leading-relaxed text-gray-600 sm:text-[15px]">
              <p>
                I’ve worked hands-on with LLMs, RAG pipelines, and production-grade
                ML systems—taking ideas from early prototypes to deployed
                solutions. My projects range from hybrid attention frameworks
                for skin cancer classification to document-aware chatbots and
                multimodal AI workflows.
              </p>
              <p>
                Currently, I work as a <span className="text-gray-900 font-medium">
                Junior AI Engineer at SparkTech Agency</span>, where I lead AI
                integration efforts for client products. I collaborate closely
                with designers, backend engineers, and domain experts to ensure
                models align with real user needs and business constraints.
              </p>
              <p>
                Outside of client work, I actively contribute to open-source,
                mentor students through hackathons and workshops, and explore
                ways to make advanced models more interpretable, fair, and
                accessible.
              </p>
            </div>

            {/* Snapshot Card */}
            <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-900">
                Quick Snapshot
              </h3>
              <dl className="space-y-5">
                <SnapshotRow 
                  icon={MapPin}
                  label="Location" 
                  value="Dhaka, Bangladesh" 
                />
                <SnapshotRow
                  icon={Briefcase}
                  label="Current role"
                  value="Junior AI Engineer · SparkTech Agency"
                />
                <SnapshotRow
                  icon={Zap}
                  label="Focus areas"
                  value="Medical AI, XAI, NLP, Computer Vision, RAG, LLMs"
                />
                <SnapshotRow
                  icon={BookOpen}
                  label="Currently learning"
                  value="Advanced LLM applications, scalable MLOps, multimodal reasoning"
                />
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SnapshotRow = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-3">
    <Icon className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
    <div className="flex-1">
      <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</dt>
      <dd className="text-sm text-gray-900 font-medium mt-1">{value}</dd>
    </div>
  </div>
);

export default AboutSection;
