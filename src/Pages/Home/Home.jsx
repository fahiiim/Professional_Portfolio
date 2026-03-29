import React from 'react';
import { motion as Motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ParticlesBackground from '../../components/ParticlesBackground';
import AnimatedCounter from '../../components/AnimatedCounter';
import { 
  SiPytorch, 
  SiTensorflow, 
  SiOpenai, 
  SiScikitlearn,
  SiDocker,
  SiKeras,
  SiPostgresql,
  SiPandas,
  SiNumpy
} from 'react-icons/si';
import { Database, Zap, Package } from 'lucide-react';
import { AboutSection } from '../About/About';
import { EducationSection } from '../Education/Education';
import { ExperienceSection } from '../Experience/Experience';
import { SkillsSection } from '../Skills/Skills';
import { ProjectsSection } from '../Projects/Projects';
import NeuroGebraSection from '../NeuroGebra/NeuroGebra';
import { AchievementsSection } from '../Achievements/Achievements';
import { LeadershipSection } from '../Leadership/Leadership';
import { CertificatesSection } from '../Certificates/Certificates';
import { ContactSection } from '../Contact/Contact';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

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
            AI Engineer | ML Researcher | Problem Solver
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

      {/* Tech Stack Section */}
      <section className="border-b border-gray-200 bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-gray-600 mb-8">Tech Stack</p>
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-70">
            <div className="flex items-center gap-2">
              <SiPytorch className="h-7 w-7 text-gray-600" />
              <span className="text-xs font-semibold text-gray-600">PyTorch</span>
            </div>
            <div className="flex items-center gap-2">
              <SiTensorflow className="h-7 w-7 text-gray-600" />
              <span className="text-xs font-semibold text-gray-600">TensorFlow</span>
            </div>
            <div className="flex items-center gap-2">
              <SiKeras className="h-7 w-7 text-gray-600" />
              <span className="text-xs font-semibold text-gray-600">Keras</span>
            </div>
            <div className="flex items-center gap-2">
              <SiOpenai className="h-7 w-7 text-gray-600" />
              <span className="text-xs font-semibold text-gray-600">OpenAI</span>
            </div>
            <div className="flex items-center gap-2">
              <SiScikitlearn className="h-7 w-7 text-gray-600" />
              <span className="text-xs font-semibold text-gray-600">Scikit-Learn</span>
            </div>
            <div className="flex items-center gap-2">
              <SiPandas className="h-7 w-7 text-gray-600" />
              <span className="text-xs font-semibold text-gray-600">Pandas</span>
            </div>
            <div className="flex items-center gap-2">
              <SiNumpy className="h-7 w-7 text-gray-600" />
              <span className="text-xs font-semibold text-gray-600">NumPy</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-7 w-7 text-gray-600" />
              <span className="text-xs font-semibold text-gray-600">LangChain</span>
            </div>
            <div className="flex items-center gap-2">
              <Package className="h-7 w-7 text-gray-600" />
              <span className="text-xs font-semibold text-gray-600">LangGraph</span>
            </div>
            <div className="flex items-center gap-2">
              <SiDocker className="h-7 w-7 text-gray-600" />
              <span className="text-xs font-semibold text-gray-600">Docker</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <AboutSection id="about" />
      <EducationSection id="education" />
      <ExperienceSection id="experience" />
      <SkillsSection id="skills" />
      <ProjectsSection id="projects" />
      <NeuroGebraSection id="neurogebra" />
      <AchievementsSection id="achievements" />
      <LeadershipSection id="leadership" />
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
