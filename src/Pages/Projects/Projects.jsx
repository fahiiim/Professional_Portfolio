/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { 
  SiPytorch, 
  SiTensorflow, 
  SiOpenai, 
  SiKeras, 
  SiFlask, 
  SiScikitlearn,
  SiPython,
  SiFastapi,
  SiNumpy,
  SiDocker,
  SiGooglecloud,
  SiAmazon
} from 'react-icons/si';

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Tech stack icon mapping
const techIcons = {
  'PyTorch': SiPytorch,
  'Swin Transformer': SiPytorch, // Using PyTorch icon as fallback
  'XAI': SiTensorflow, // Using TensorFlow as AI framework fallback
  'LangChain': SiPython, // Using Python as fallback
  'FAISS': SiNumpy, // Using NumPy for vector operations
  'OpenAI API': SiOpenai,
  'Keras': SiKeras,
  'BiLSTM': SiTensorflow,
  'NLP': SiPython,
  'Tesseract': SiPython,
  'Speech Recognition': SiGooglecloud, // Google Cloud has speech APIs
  'Flask': SiFlask,
  'Scikit-learn': SiScikitlearn,
  'MLOps': SiDocker,
  'TensorFlow': SiTensorflow,
  'FastAPI': SiFastapi,
  'AWS': SiAmazon,
};

const projectsData = [
  {
    title: 'Skin Cancer Classification with Swin Transformer & XAI',
    company: 'Medical AI Research',
    period: '2024',
    description:
      'Clinically guided explainable AI framework achieving 96% accuracy for skin cancer detection.',
    results: [
      'Achieved 96% classification accuracy',
      'Reduced diagnosis time by 40%',
      'Deployed in 3 clinical settings',
    ],
    tech: ['Swin Transformer', 'PyTorch', 'XAI'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
  },
  {
    title: 'RAG-Based Legal Chatbot',
    company: 'LegalTech AI',
    period: '2024',
    description:
      'Document-aware chatbot that retrieves and summarizes legal clauses with grounded answers.',
    results: [
      'Response time under 2 seconds',
      'Accuracy improved by 45%',
      'Serving 1000+ daily queries',
    ],
    tech: ['LangChain', 'FAISS', 'OpenAI API'],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop',
  },
  {
    title: 'Bidirectional LSTM Sentiment Analysis',
    company: 'NLP Research',
    period: '2023',
    description:
      'Deep learning model for binary sentiment classification on IMDB movie reviews.',
    results: [
      '92% accuracy on test set',
      'Real-time inference capability',
      'Published research paper',
    ],
    tech: ['Keras', 'BiLSTM', 'NLP'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
  {
    title: 'OCR & Voice Module for Route App',
    company: 'Smart Transportation',
    period: '2023',
    description:
      'AI modules for permit text extraction and voice-based route input.',
    results: [
      '95% OCR accuracy on permits',
      'Bilingual voice recognition',
      'Integrated into production app',
    ],
    tech: ['Tesseract', 'Speech Recognition', 'Flask'],
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&h=600&fit=crop',
  },
  {
    title: 'Advanced SMS Spam Classification',
    company: 'CyberSecurity AI',
    period: '2023',
    description:
      'Real-time fraud detection pipeline deployed for a production client.',
    results: [
      '98.5% spam detection rate',
      'Zero false positives in production',
      'Processing 10K+ messages daily',
    ],
    tech: ['Scikit-learn', 'NLP', 'MLOps'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
  },
];

export const ProjectsSection = ({ id = 'projects' }) => {
  return (
    <section
      id={id}
      className="relative border-b border-emerald-500/20 bg-slate-950 py-16 sm:py-20"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
              Projects
            </p>
            <h2 className="max-w-3xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-emerald-300 sm:text-4xl">
              Featured case studies & real-world AI systems
            </h2>
            <p className="max-w-2xl text-sm text-slate-300 sm:text-[15px]">
              A selection of projects spanning computer vision, NLP, LLMs, and
              production-grade ML pipelines.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            {projectsData.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -3 }}
                className="group relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl transition-all hover:border-[#C9D98B]/40 hover:shadow-[0_0_40px_-15px_rgba(201,217,139,0.4)]"
              >
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9D98B]/0 to-transparent opacity-0 transition-all duration-500 group-hover:from-[#C9D98B]/5 group-hover:opacity-100" />
                
                <div className="relative p-5 sm:p-6">
                  {/* Header */}
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider sm:text-xs">
                        <span className="text-[#C9D98B]">{project.company}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400">{project.period}</span>
                      </div>
                      
                      <h3 className="text-base font-bold leading-tight text-slate-50 transition-colors sm:text-lg group-hover:text-[#C9D98B]">
                        {project.title}
                      </h3>
                    </div>

                    {/* Image - Small on mobile, larger on desktop */}
                    <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border border-emerald-500/20 bg-slate-900 sm:h-20 sm:w-32">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
                    </div>
                  </div>

                  <p className="mb-3 text-xs text-slate-300 sm:text-sm">
                    {project.description}
                  </p>

                  {/* Results - Compact */}
                  <div className="mb-3 space-y-1.5">
                    {project.results.slice(0, 3).map((result, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#C9D98B] stroke-[2.5] sm:h-4 sm:w-4" />
                        <span className="text-xs text-slate-400">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Footer: Tech + Button */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800/50 pt-3">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => {
                        const IconComponent = techIcons[tech] || SiPython; // Fallback to Python icon
                        return (
                          <div
                            key={tech}
                            className="group/tech relative"
                            title={tech} // Tooltip showing tech name on hover
                          >
                            <div className="flex items-center justify-center rounded-lg border border-emerald-400/20 bg-slate-900/60 p-2 transition-all hover:border-[#C9D98B]/60 hover:bg-slate-800/80 hover:shadow-[0_0_15px_rgba(201,217,139,0.3)]">
                              <IconComponent className="h-5 w-5 text-slate-300 transition-colors group-hover/tech:text-[#C9D98B]" />
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <motion.button
                      whileHover={{ x: 3 }}
                      className="group/btn inline-flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-950 transition-all hover:bg-[#C9D98B] hover:shadow-md"
                    >
                      View
                      <ArrowUpRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
