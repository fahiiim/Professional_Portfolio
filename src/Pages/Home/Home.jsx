import React from 'react';
import {
  SiDocker,
  SiFastapi,
  SiKeras,
  SiLangchain,
  SiNumpy,
  SiOpenai,
  SiPandas,
  SiPytorch,
  SiScikitlearn,
  SiTensorflow,
} from 'react-icons/si';
import { AboutSection } from '../About/About';
import { EducationSection } from '../Education/Education';
import { ExperienceSection } from '../Experience/Experience';
import { SkillsSection } from '../Skills/Skills';
import { ProjectsSection } from '../Projects/Projects';
import NeuroGebraSection from '../NeuroGebra/NeuroGebra';
import { AchievementsSection } from '../Achievements/Achievements';
import { CertificatesSection } from '../Certificates/Certificates';
import { ContactSection } from '../Contact/Contact';

const Home = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="border-b border-gray-200 bg-white py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Md. Fahim Sarker Mridul
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Mid-Level AI Engineer | Python Developer | Building Production AI Systems
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Building production-grade AI systems focused on Medical AI, Explainable AI, NLP, and Computer Vision.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 border-2 border-black text-black font-semibold rounded-lg hover:bg-gray-50 transition"
            >
              View Projects
            </a>
            <a
              href="/Fahim_Sarker_CV.pdf"
              download
              className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-black hover:bg-gray-50 transition"
            >
              Download CV
            </a>
          </div>
        </div>

      </section>

      {/* Technology Strip */}
      <section aria-label="Core technologies" className="overflow-x-auto border-b border-gray-200 bg-gray-50 py-10">
        <div className="mx-auto flex min-w-[1120px] max-w-[1280px] flex-nowrap items-center justify-between gap-6 px-8 lg:px-12">
          {[
            [SiPytorch, 'PyTorch'],
            [SiTensorflow, 'TensorFlow'],
            [SiKeras, 'Keras'],
            [SiOpenai, 'OpenAI'],
            [SiScikitlearn, 'Scikit-Learn'],
            [SiPandas, 'Pandas'],
            [SiNumpy, 'NumPy'],
            [SiLangchain, 'LangChain'],
            [SiFastapi, 'FastAPI'],
            [SiDocker, 'Docker'],
          ].map(([icon, label]) => (
            <div key={label} className="flex items-center gap-2.5 text-gray-500 transition-colors hover:text-gray-800">
              {React.createElement(icon, { 'aria-hidden': true, className: 'h-9 w-9 flex-none' })}
              <span className="text-sm font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Sections */}
      <AboutSection id="about" />

      {/* Selected Impact */}
      <section aria-labelledby="impact-heading" className="border-b border-gray-200 bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p id="impact-heading" className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.3em] text-gray-600">
            Selected Impact
          </p>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 sm:grid-cols-3 lg:grid-cols-5">
            {[
              ['10+', 'Production AI Systems Shipped'],
              ['8,000+', 'NeuroGebra Users'],
              ['96%', 'Clinical Model Accuracy'],
              ['<2s', 'RAG Latency'],
              ['6th', 'Worldwide - Rover Challenge'],
            ].map(([value, label]) => (
              <div key={label} className="bg-white px-4 py-5 text-center">
                <p className="text-2xl font-bold text-gray-900">{value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gray-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EducationSection id="education" />
      <ExperienceSection id="experience" />
      <SkillsSection id="skills" />
      <ProjectsSection id="projects" />
      <NeuroGebraSection id="neurogebra" />
      <AchievementsSection id="achievements" />
      <CertificatesSection id="certificates" />
      <ContactSection id="contact" />

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="mx-auto max-w-6xl px-4 lg:px-8 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Md. Fahim Sarker Mridul · All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
