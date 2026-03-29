import React from 'react';
import {
  Brain,
  Sigma,
  BookOpenCheck,
  Rocket,
  ExternalLink,
  Sparkles,
  Search,
  Activity,
  Workflow,
  Eye,
  GitBranch,
  Library,
} from 'lucide-react';

const uniqueFeatures = [
  {
    title: 'Searchable executable formula repository',
    description:
      '285 verified expressions across 10 domains, searchable by name, category, or keyword as symbolic, numerical, and educational objects.',
    icon: Search,
  },
  {
    title: 'Symbolic + numerical + trainable in one object',
    description:
      'Each expression supports SymPy analytics, NumPy-speed evaluation, and trainable parameters optimized with SGD or Adam.',
    icon: Sigma,
  },
  {
    title: 'Training Observatory transparency',
    description:
      'Layer-by-layer forward and backward formulas, gradient norms, weight distributions, and activation statistics in color-coded logs.',
    icon: Eye,
  },
  {
    title: 'Observatory Pro diagnostics engine',
    description:
      'Adaptive logging, health warnings, epoch summarization, tiered logs, interactive dashboard, and reproducibility fingerprinting.',
    icon: Activity,
  },
  {
    title: 'Real forward and backward computation',
    description:
      'Performs true matrix multiplications, He initialization, NumPy activations, and analytical backpropagation through layers.',
    icon: Workflow,
  },
  {
    title: 'From-scratch autograd engine',
    description:
      'Build and inspect computation graphs while gradients propagate through Value and Tensor objects for transparent learning.',
    icon: GitBranch,
  },
  {
    title: 'Expression composition and arithmetic',
    description:
      'Compose custom losses and hybrid activations using arithmetic operators and function composition from the existing library.',
    icon: Brain,
  },
  {
    title: '100+ curated datasets with metadata',
    description:
      'Datasets include difficulty, use cases, sample counts, descriptions, and consistent NumPy outputs for education and benchmarking.',
    icon: Library,
  },
  {
    title: 'Framework bridges for deployment',
    description:
      'Prototype in NeuroGebra and export to PyTorch, TensorFlow, or JAX with minimal friction for production pipelines.',
    icon: Rocket,
  },
  {
    title: 'Educational explain layer everywhere',
    description:
      'Expressions, layers, and operations include explain() plus guided tutorials and trainer tips for faster understanding.',
    icon: BookOpenCheck,
  },
  {
    title: 'Smart health diagnostics',
    description:
      'Detects NaN/Inf, overfitting, underfitting, exploding or vanishing gradients, dead neurons, and divergence with recommendations.',
    icon: Sparkles,
  },
  {
    title: 'Multi-format export system',
    description:
      'Exports logs and reports to JSON, CSV, HTML, and Markdown with optional TensorBoard and Weights & Biases integration.',
    icon: Rocket,
  },
];

const projectLinks = [
  {
    label: 'GitHub Repository',
    href: 'https://github.com/fahiiim/NeuroGebra',
  },
  {
    label: 'PyPI Package',
    href: 'https://pypi.org/project/neurogebra',
  },
  {
    label: 'Documentation',
    href: 'https://neurogebra.readthedocs.io',
  },
  {
    label: 'DOI (Zenodo)',
    href: 'https://zenodo.org/doi/10.5281/zenodo.18869365',
  },
];

const NeuroGebraSection = ({ id = 'neurogebra' }) => {
  return (
    <section
      id={id}
      className="border-b border-gray-200 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-600">
              NeuroGebra
            </p>
            <h2 className="max-w-4xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              A flagship framework I authored to make deep learning mathematically transparent, executable, and internationally useful.
            </h2>
            <p className="max-w-3xl text-sm text-gray-600 sm:text-[15px]">
              NeuroGebra combines capabilities that do not exist together in one tool today: symbolic mathematics, numerical execution, trainability, diagnostics, education, and deployment bridges.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-gray-700">
              <Sparkles className="h-4 w-4" />
              Unique Features
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {uniqueFeatures.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-sm"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <item.icon className="h-4 w-4 text-gray-700" />
                    <h3 className="text-sm font-semibold text-gray-900">{index + 1}. {item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-700">
                Positioning and Why It Matters
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                NeuroGebra is designed to complement TensorFlow and PyTorch, not compete with them. Those frameworks are industry standards for large-scale GPU/TPU training, deployment, and high-throughput research workflows.
              </p>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                NeuroGebra focuses on a different layer of the ecosystem: a searchable, executable, and trainable mathematical knowledge base for modern AI. It unifies symbolic formulas, numerical evaluation, educational explanations, and built-in diagnostics in one place.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                In practice, it sits closer to tools like Mathematica or manual SymPy workflows, but with stronger ML curation, Python-native ergonomics, and transparency features built specifically for model builders and learners.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {projectLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-between rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-900 transition hover:border-gray-400 hover:bg-gray-50"
              >
                <span>{link.label}</span>
                <ExternalLink className="h-4 w-4 text-gray-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuroGebraSection;