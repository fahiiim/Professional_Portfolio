import React from 'react';
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
  SiAmazon,
  SiMlflow,
  SiDvc
} from 'react-icons/si';

// Tech stack icon mapping
const techIcons = {
  'PyTorch': SiPytorch,
  'YOLOv8': SiPytorch,
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
  'MLflow': SiMlflow,
  'DVC': SiDvc,
  'TensorFlow': SiTensorflow,
  'FastAPI': SiFastapi,
  'AWS': SiAmazon,
  'GCP': SiGooglecloud,
};

const projectsData = [
  {
    title: 'ViolaShield - Smart Traffic Violation Detection',
    company: 'Computer Vision',
    period: '2024',
    description:
      'Awarded as Best Project. Intelligent violation detection system using YOLOv8 for license plate recognition, vehicle detection, and non-helmet biker detection with automated fine generation.',
    results: [
      'YOLOv8-based detection pipeline',
      'Automated license plate recognition',
      'Email notification system integration',
    ],
    tech: ['PyTorch', 'YOLOv8', 'OpenAI API'],
    image: 'https://images.unsplash.com/photo-1713623311317-d3c43a4be4cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWNjaWRlbnR8ZW58MHx8MHx8fDA%3D',
    link: 'https://drive.google.com/file/d/1VOHJBoVYmbouGIb7So12CcpkfN3KCWNn/view',
    linkLabel: 'View Promo',
  },
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
    image: 'https://images.unsplash.com/photo-1676312754401-d97fe43c2c4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGVybWF0b2xvZ3l8ZW58MHx8MHx8fDA%3D',
    link: 'https://github.com/fahiiim',
    linkLabel: 'View Source',
  },
  {
    title: 'RAG-Based Legal Chatbot for Michigan State',
    company: 'LegalTech AI',
    period: '2024',
    description:
      'Retrieval-Augmented-Generation system for Michigan State and Federal Law of USA with advanced NLP for article/section-wise chunking and query processing.',
    results: [
      'RAG architecture with FAISS vectorstore',
      'Article/Section-wise chunking',
      'Sub-2 second response time',
    ],
    tech: ['LangChain', 'FAISS', 'OpenAI API'],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop',
    link: 'https://github.com/fahiiim/Legal-Chatbot',
    linkLabel: 'View Source',
  },
  {
    title: 'Cattle Breed Classification & XAI',
    company: 'Computer Vision',
    period: '2024',
    description:
      'High-performance cow breed classification with rich explainability using Grad-CAM, t-SNE/PCA, and feature visualization.',
    results: [
      '95.19% accuracy (EfficientNet-B3, ResNet50)',
      'Grad-CAM explainability visualizations',
      'Feature importance analysis',
    ],
    tech: ['PyTorch', 'XAI', 'Keras'],
    image: 'https://images.unsplash.com/photo-1552025157-25e1e33e1a0d?w=800&h=600&fit=crop',
    link: 'https://github.com/fahiiim/Cattle-Breed-Classification-and-Enhance-Explainability-with-XAI/tree/main',
    linkLabel: 'View Source',
  },
  {
    title: 'Route Processing from Documents & Images',
    company: 'Smart Transportation',
    period: '2023',
    description:
      'OCR-based RIGHT ROUTE application module using Amazon Textract and OpenAI for permit document processing and voice-based route extraction.',
    results: [
      'Amazon Textract OCR integration',
      'Google Cloud Speech-to-Text for voice routes',
      'Automated route mapping on Google Maps',
    ],
    tech: ['AWS', 'OpenAI API', 'GCP'],
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&h=600&fit=crop',
    link: 'https://github.com/fahiiim/Right-Route-App-OCR-Module',
    linkLabel: 'View Source',
  },
  {
    title: 'SMS Spam Classification - Solicitor Stopper',
    company: 'CyberSecurity AI',
    period: '2023',
    description:
      'Text classification model for mobile device using DistillBERT achieving 99.19% accuracy with 8-bit quantization and structured pruning.',
    results: [
      '99.19% spam detection accuracy',
      '8-bit quantization support',
      'Structured pruning with minimal loss',
    ],
    tech: ['Keras', 'NLP', 'Scikit-learn'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    link: 'https://github.com/fahiiim/Advanced-SMS-SPAM-Classification-STI-Client-Project',
    linkLabel: 'View Source',
  },
  {
    title: 'Fine-Tuning Large Language Models',
    company: 'NLP Research',
    period: '2024',
    description:
      'LLM fine-tuning using LoRA/PEFT techniques with T5 model achieving 90%+ accuracy on IMDB dataset.',
    results: [
      '90%+ accuracy on IMDB dataset',
      'LoRA parameter-efficient tuning',
      'Production-ready model deployment',
    ],
    tech: ['Keras', 'OpenAI API', 'PyTorch'],
    image: 'https://images.unsplash.com/photo-1620712014215-7b16992b4c1e?w=800&h=600&fit=crop',
    link: 'https://github.com/fahiiim/Large-Language-Model-Fine-Tuning',
    linkLabel: 'View Source',
  },
  {
    title: 'End-to-End Kidney Disease Classification (MLflow + DVC)',
    company: 'MLOps Pipeline',
    period: '2024',
    description:
      'Production-style MLOps project for kidney disease image classification with experiment tracking and dataset/model versioning.',
    results: [
      'Integrated MLflow for experiment tracking',
      'Used DVC for reproducible data and model versioning',
      'Built an end-to-end training and evaluation workflow',
    ],
    tech: ['MLflow', 'DVC', 'TensorFlow'],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
    link: 'https://github.com/fahiiim/end-to-end-kidney-disease-classification-MLflow-DVC',
    linkLabel: 'View Source',
  },
];

export const ProjectsSection = ({ id = 'projects' }) => {
  return (
    <section
      id={id}
      className="border-b border-gray-200 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-600">
              Projects
            </p>
            <h2 className="max-w-3xl text-3xl font-bold text-gray-900 sm:text-4xl">
              Featured case studies & real-world AI systems
            </h2>
            <p className="max-w-2xl text-sm text-gray-600 sm:text-[15px]">
              A selection of projects spanning computer vision, NLP, LLMs, and
              production-grade ML pipelines.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            {projectsData.map((project) => (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-gray-50 transition-all hover:border-gray-300 hover:shadow-md"
              >
                <div className="p-5 sm:p-6">
                  {/* Header */}
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider sm:text-xs">
                        <span className="text-gray-700">{project.company}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500">{project.period}</span>
                      </div>
                      
                      <h3 className="text-base font-bold leading-tight text-gray-900 transition-colors sm:text-lg group-hover:text-gray-700">
                        {project.title}
                      </h3>
                    </div>

                    {/* Image - Small on mobile, larger on desktop */}
                    <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border border-gray-300 bg-gray-100 sm:h-20 sm:w-32">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                    </div>
                  </div>

                  <p className="mb-3 text-xs text-gray-600 sm:text-sm">
                    {project.description}
                  </p>

                  {/* Results - Compact */}
                  <div className="mb-3 space-y-1.5">
                    {project.results.slice(0, 3).map((result, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-gray-400 stroke-[2.5] sm:h-4 sm:w-4" />
                        <span className="text-xs text-gray-600">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Footer: Tech + Button */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 pt-3">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => {
                        const IconComponent = techIcons[tech] || SiPython; // Fallback to Python icon
                        return (
                          <div
                            key={tech}
                            className="group/tech relative"
                            title={tech} // Tooltip showing tech name on hover
                          >
                            <div className="flex items-center justify-center rounded-lg border border-gray-300 bg-white p-2 transition-all hover:border-gray-400 hover:bg-gray-100 hover:shadow-sm">
                              <IconComponent className="h-5 w-5 text-gray-600 transition-colors group-hover/tech:text-gray-700" />
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-1.5 rounded-lg bg-black px-3 py-1.5 text-xs font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-md"
                    >
                      {project.linkLabel ?? 'View Source'}
                      <ArrowUpRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
