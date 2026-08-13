import React from 'react';

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

export default AboutSection;
