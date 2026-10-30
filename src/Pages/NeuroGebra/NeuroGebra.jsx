import React, { useEffect, useState } from 'react';
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Cpu,
  ExternalLink,
  Eye,
  FileText,
  GraduationCap,
  Layers3,
  Maximize2,
  PenTool,
  Rocket,
  ShieldCheck,
  Sigma,
  Sparkles,
  X,
  Zap,
} from 'lucide-react';

const capabilityGroups = [
  {
    title: 'Mathematical Core',
    icon: Sigma,
    summary: 'Move from a formula to an executable, trainable object without losing the mathematics behind it.',
    points: [
      '285 verified expressions across 10 domains',
      'Symbolic analysis and NumPy-speed evaluation',
      'Trainable parameters and expression composition',
    ],
  },
  {
    title: 'Transparent Training',
    icon: Eye,
    summary: 'See what a network computes during both the forward and backward passes.',
    points: [
      'From-scratch autograd and computation graphs',
      'Layer formulas, gradient norms and activations',
      'Real matrix operations and analytical backpropagation',
    ],
  },
  {
    title: 'Diagnostics & Learning',
    icon: Activity,
    summary: 'Turn training behavior into explanations, warnings and practical recommendations.',
    points: [
      'NaN, divergence and gradient health detection',
      'Built-in explain() guidance and trainer tips',
      '100+ curated datasets with learning metadata',
    ],
  },
  {
    title: 'Ecosystem & Export',
    icon: Rocket,
    summary: 'Prototype transparently, then carry the work into established production workflows.',
    points: [
      'Bridges to PyTorch, TensorFlow and JAX',
      'JSON, CSV, HTML and Markdown reporting',
      'TensorBoard and Weights & Biases integration',
    ],
  },
];

const neuroGebraLinks = [
  { label: 'GitHub Repository', href: 'https://github.com/fahiiim/NeuroGebra' },
  { label: 'PyPI Package', href: 'https://pypi.org/project/neurogebra' },
  { label: 'Documentation', href: 'https://neurogebra.readthedocs.io' },
  { label: 'DOI (Zenodo)', href: 'https://zenodo.org/doi/10.5281/zenodo.18869365' },
];

const typoFormerCapabilities = [
  {
    title: 'Edge AI Performance',
    icon: Zap,
    summary: 'Achieves sub-10ms CPU inference using optimized INT8 ONNX runtimes inside keystroke budgets.',
    points: [
      'Executes inside 16.6ms 60 FPS display window (~8.7ms CPU latency)',
      'Quantized symmetric INT8 ONNX graphs (~130 MB footprint)',
      'High-throughput batch processing exceeding 51,000 tokens/sec',
    ],
  },
  {
    title: 'Privacy-First Architecture',
    icon: ShieldCheck,
    summary: 'Runs 100% locally with zero cloud dependency, telemetry, or external API calls.',
    points: [
      'Air-gapped offline inference on standard consumer laptop & desktop CPUs',
      'Zero remote keystroke logging or third-party telemetry',
      'Full data confidentiality for enterprise and sensitive writing',
    ],
  },
  {
    title: 'Dual-Task Intelligence',
    icon: PenTool,
    summary: 'Combines contextual autocomplete with non-autoregressive typo and grammar correction.',
    points: [
      'Dynamic causal triangular mask for instant top-K next-word logits',
      'Atomic edit-tagging (KEEP, DELETE, CASE, REPLACE, APPEND)',
      '99.2% clean sentence preservation eliminating hallucinated edits',
    ],
  },
  {
    title: 'Research & Deployment Stack',
    icon: Cpu,
    summary: 'Engineered from PyTorch training checkpoints through to a native desktop companion.',
    points: [
      'Gated Character-CNN highway + RoPE + GQA (12/4) + SwiGLU trunk',
      'Hosted open-weights on Hugging Face with 53k synthetic training pairs',
      'Native Windows desktop app (.NET 8 WPF) with glassmorphic caret overlay',
    ],
  },
];

const typoFormerLinks = [
  { label: 'GitHub Repository', href: 'https://github.com/fahiiim/TyPoTaKer' },
  { label: 'Hugging Face Model', href: 'https://huggingface.co/fahiiim/TypoFormer' },
  { label: 'Synthetic Dataset', href: 'https://huggingface.co/datasets/fahiiim/TypoFormer-Synthetic-Dataset' },
  { label: 'MIT License', href: 'https://github.com/fahiiim/TyPoTaKer/blob/main/LICENSE' },
];

const typoFormerTechs = [
  'PyTorch',
  'Transformer',
  'Character-CNN',
  'GQA (12/4)',
  'RoPE',
  'SwiGLU',
  'Pre-RMSNorm',
  'ONNX',
  'INT8 Quantization',
  '.NET 8 WPF',
];

const fastApiTopics = [
  'Architecture & project structure',
  'Databases, security & async execution',
  'Testing, deployment & observability',
  'Scalable AI backend patterns',
];

const publicAsset = (filename) => `${import.meta.env.BASE_URL}${filename}`;

const OpenSourceSection = ({ id = 'open-source' }) => {
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [isArchOpen, setIsArchOpen] = useState(false);

  useEffect(() => {
    if (!isPdfOpen && !isArchOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsPdfOpen(false);
        setIsArchOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isPdfOpen, isArchOpen]);

  return (
    <>
      <section id={id} className="border-b border-[var(--matcha-200)] bg-[var(--matcha-50)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="space-y-10">
            <header className="max-w-4xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--matcha-700)]">
                Open source portfolio
              </p>
              <h2 className="whitespace-nowrap text-[clamp(1.45rem,5vw,2.25rem)] font-bold leading-tight">
                Open Source Contribution
              </h2>
              <p className="max-w-3xl text-[15px] leading-7 text-gray-600">
                A collection of original open-source AI frameworks, neural architectures, technical handbooks, and developer tools built to advance edge intelligence and make complex engineering accessible.
              </p>
            </header>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* 1. NeuroGebra Card (Full Width) */}
              <NeuroGebraCard />

              {/* 2. TypoFormer Card (Full Width, Right Under NeuroGebra) */}
              <TypoFormerCard onOpenArch={() => setIsArchOpen(true)} />

              {/* 3. FastAPI Handbook Card */}
              <FastApiHandbookCard />

              {/* 4. Kubernetes Handbook Card */}
              <KubernetesHandbookCard onOpen={() => setIsPdfOpen(true)} />
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram Modal */}
      {isArchOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[var(--matcha-900)]/85 p-3 backdrop-blur-md sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="arch-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsArchOpen(false);
          }}
        >
          <div className="flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-[var(--matcha-200)] bg-white shadow-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-[var(--matcha-100)] bg-[var(--matcha-50)] px-4 py-3 sm:px-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--matcha-700)]">
                  Neural Architecture
                </p>
                <h2 id="arch-modal-title" className="mt-0.5 text-lg font-bold sm:text-xl">
                  TypoFormer: Full Internal Neural Architecture
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://huggingface.co/fahiiim/TypoFormer"
                  target="_blank"
                  rel="noreferrer"
                  className="hidden items-center gap-1.5 rounded-lg border border-[var(--matcha-300)] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--matcha-800)] hover:bg-[var(--matcha-100)] sm:inline-flex"
                >
                  <span>Hugging Face Hub</span>
                  <ExternalLink className="h-3.5 w-3.5 text-[var(--matcha-600)]" />
                </a>
                <button
                  type="button"
                  onClick={() => setIsArchOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--matcha-200)] bg-white text-[var(--matcha-800)] transition hover:bg-[var(--matcha-100)]"
                  aria-label="Close Architecture diagram viewer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-auto bg-gray-50 p-4 sm:p-8">
              <img
                src={publicAsset('typoformer-architecture.png')}
                alt="TypoFormer Neural Architecture Diagram"
                className="mx-auto block h-auto max-w-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
              />
            </div>
          </div>
        </div>
      )}

      {/* Kubernetes PDF Modal */}
      {isPdfOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[var(--matcha-900)]/80 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="kubernetes-pdf-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsPdfOpen(false);
          }}
        >
          <div className="flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-[var(--matcha-200)] bg-white shadow-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-[var(--matcha-100)] bg-[var(--matcha-50)] px-4 py-3 sm:px-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--matcha-700)]">Open source contribution</p>
                <h2 id="kubernetes-pdf-title" className="mt-1 text-lg font-bold sm:text-xl">The Kubernetes Handbook</h2>
              </div>
              <button
                type="button"
                onClick={() => setIsPdfOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--matcha-200)] bg-white text-[var(--matcha-800)] transition hover:bg-[var(--matcha-100)]"
                aria-label="Close Kubernetes Handbook viewer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <iframe
              title="The Kubernetes Handbook PDF"
              src={`${publicAsset('Kubernetes-handbook.pdf')}#view=FitH`}
              className="min-h-0 flex-1 bg-gray-100"
            />
          </div>
        </div>
      )}
    </>
  );
};

const NeuroGebraCard = () => (
  <article className="portfolio-card overflow-hidden rounded-2xl border shadow-sm lg:col-span-2">
    <div className="grid items-center gap-8 bg-[var(--matcha-50)]/70 p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--matcha-700)]">
          <Layers3 className="h-4 w-4" aria-hidden="true" />
          <span>Open-source framework</span>
        </div>
        <h3 className="mt-4 text-2xl font-bold sm:text-3xl">NeuroGebra</h3>
        <p className="mt-4 text-[15px] leading-7 text-gray-600">
          A Python-native symbolic-neural framework that connects mathematical expressions, numerical execution, transparent training and diagnostics in one learning-friendly toolkit.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ['9,000+', 'Global users'],
            ['285', 'Expressions'],
            ['100+', 'Datasets'],
            ['10', 'Domains'],
          ].map(([value, label]) => (
            <div key={label} className="portfolio-card rounded-xl border px-3 py-3 text-center">
              <p className="text-lg font-bold text-[var(--matcha-800)]">{value}</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--matcha-700)]">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-hidden rounded-xl border border-[var(--matcha-100)] bg-gradient-to-br from-[var(--matcha-100)] to-[var(--matcha-50)] p-5">
        <img src={publicAsset('neurogebra-logo.png')} alt="NeuroGebra logo" className="mx-auto block h-auto w-full max-w-xl" />
      </div>
    </div>

    <div className="border-t border-[var(--matcha-100)] bg-[var(--matcha-50)] px-6 py-6 sm:px-8">
      <div className="mb-5 flex items-center gap-2">
        <GraduationCap className="h-5 w-5 text-[var(--matcha-700)]" aria-hidden="true" />
        <h4 className="text-lg font-semibold">What makes it different</h4>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {capabilityGroups.map((group) => {
          const Icon = group.icon;
          return (
            <div key={group.title} className="portfolio-card rounded-xl border p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--matcha-200)] bg-[var(--matcha-50)] text-[var(--matcha-700)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h4 className="text-base font-semibold">{group.title}</h4>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">{group.summary}</p>
              <ul className="mt-4 space-y-2">
                {group.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm leading-5 text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[var(--matcha-600)]" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {neuroGebraLinks.map((link) => (
          <ExternalResourceLink key={link.label} {...link} />
        ))}
      </div>
    </div>
  </article>
);

const TypoFormerCard = ({ onOpenArch }) => (
  <article className="portfolio-card overflow-hidden rounded-2xl border shadow-sm lg:col-span-2">
    {/* Top Accent Gradient Bar */}
    <div className="h-1.5 w-full bg-gradient-to-r from-[var(--matcha-600)] via-[var(--matcha-400)] to-[var(--matcha-200)]" />

    <div className="grid items-center gap-8 bg-[var(--matcha-50)]/70 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--matcha-300)] bg-[var(--matcha-100)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--matcha-800)]">
            <Zap className="h-3.5 w-3.5 text-[var(--matcha-600)]" aria-hidden="true" />
            <span>Offline Edge AI Assistant</span>
          </div>
        </div>

        <h3 className="mt-4 text-2xl font-bold sm:text-3xl text-gray-900">
          TypoFormer
        </h3>

        <p className="mt-3 text-[15px] leading-7 text-gray-700 font-medium">
          An original character-aware hybrid Transformer built for real-time typing assistance, combining next-word autocomplete with non-autoregressive typo and grammar correction in a unified neural architecture.
        </p>

        {/* Metric Badges Grid */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ['~10ms', 'CPU Latency (INT8)'],
            ['94M', 'Parameters'],
            ['100%', 'Air-Gapped Offline'],
            ['99.2%', 'Clean Retention'],
          ].map(([value, label]) => (
            <div key={label} className="portfolio-card rounded-xl border px-3 py-3 text-center">
              <p className="text-lg font-bold text-[var(--matcha-800)]">{value}</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--matcha-700)]">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Logo & Architecture Diagram Preview Showcase */}
      <div className="space-y-4">
        {/* TypoFormer Logo Container */}
        <div className="overflow-hidden rounded-2xl border border-[var(--matcha-200)] bg-white p-6 shadow-xs transition-transform duration-300 hover:shadow-md">
          <img
            src={publicAsset('typoformer-logo.png')}
            alt="TypoFormer logo"
            className="mx-auto block h-auto w-full max-w-sm object-contain"
          />
        </div>

        {/* Architecture Diagram Interactive Trigger */}
        <button
          type="button"
          onClick={onOpenArch}
          className="group relative flex w-full items-center justify-between rounded-xl border border-[var(--matcha-300)] bg-gradient-to-r from-[var(--matcha-100)] to-[var(--matcha-50)] px-4 py-3 text-left transition hover:border-[var(--matcha-500)] hover:shadow-sm"
          aria-label="Inspect TypoFormer Neural Architecture Diagram"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--matcha-800)] text-white shadow-xs">
              <Cpu className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--matcha-800)]">
                Neural Architecture
              </p>
              <p className="text-xs text-gray-600">
                Click to inspect multi-task dual heads & GQA trunk
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--matcha-800)] group-hover:translate-x-0.5 transition-transform">
            <Maximize2 className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">View Diagram</span>
          </span>
        </button>
      </div>
    </div>

    {/* Pillars & Features */}
    <div className="border-t border-[var(--matcha-100)] bg-[var(--matcha-50)] px-6 py-6 sm:px-8">
      <div className="mb-5 flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-[var(--matcha-700)]" aria-hidden="true" />
        <h4 className="text-lg font-semibold text-gray-900">Key Architectural Highlights</h4>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {typoFormerCapabilities.map((group) => {
          const Icon = group.icon;
          return (
            <div key={group.title} className="portfolio-card rounded-xl border p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--matcha-200)] bg-[var(--matcha-50)] text-[var(--matcha-700)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h4 className="text-base font-semibold text-gray-900">{group.title}</h4>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">{group.summary}</p>
              <ul className="mt-3.5 space-y-2">
                {group.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm leading-5 text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[var(--matcha-600)]" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Core Technologies Pills */}
      <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-[var(--matcha-200)] pt-5">
        <span className="text-xs font-bold uppercase tracking-wider text-gray-600 mr-1">
          Core Technologies:
        </span>
        {typoFormerTechs.map((tech) => (
          <span
            key={tech}
            className="rounded-lg border border-[var(--matcha-300)] bg-white px-2.5 py-1 text-xs font-medium text-gray-800 shadow-2xs hover:border-[var(--matcha-500)] transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Direct Resource Links */}
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {typoFormerLinks.map((link) => (
          <ExternalResourceLink key={link.label} {...link} />
        ))}
      </div>
    </div>
  </article>
);

const FastApiHandbookCard = () => (
  <article className="portfolio-card flex h-full flex-col rounded-2xl border p-6 shadow-sm sm:p-8">
    <div className="flex items-start justify-between gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--matcha-800)] text-[var(--matcha-100)]">
        <Code2 className="h-6 w-6" aria-hidden="true" />
      </div>
      <span className="rounded-full bg-[var(--matcha-50)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--matcha-700)]">Backend handbook</span>
    </div>
    <h3 className="mt-6 text-2xl font-bold">FastAPI Is All You Need for Backend Development</h3>
    <p className="mt-4 text-sm leading-6 text-gray-600">
      A production-focused guide for building reliable Python services, from API foundations and data access to security, testing, deployment and AI backends.
    </p>
    <ul className="mt-6 space-y-3 border-t border-[var(--matcha-100)] pt-5">
      {fastApiTopics.map((topic) => (
        <li key={topic} className="flex items-start gap-2.5 text-sm text-gray-700">
          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[var(--matcha-600)]" aria-hidden="true" />
          <span>{topic}</span>
        </li>
      ))}
    </ul>
    <a
      href="https://github.com/fahiiim/FastAPI-is-All-You-Need-for-Backend-Development"
      target="_blank"
      rel="noreferrer"
      className="mt-auto inline-flex items-center justify-between gap-3 rounded-xl border border-[var(--matcha-300)] bg-[var(--matcha-50)] px-4 py-3 text-sm font-semibold text-[var(--matcha-800)] transition hover:border-[var(--matcha-600)] hover:bg-[var(--matcha-100)]"
    >
      <span>Explore the repository</span>
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </a>
  </article>
);

const KubernetesHandbookCard = ({ onOpen }) => (
  <article className="portfolio-card grid gap-6 rounded-2xl border p-6 shadow-sm sm:p-8 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:items-start">
    <button
      type="button"
      onClick={onOpen}
      className="group relative mx-auto block aspect-[3/4] w-full max-w-[18rem] min-w-0 overflow-hidden rounded-xl border border-[var(--matcha-200)] bg-[var(--matcha-50)] p-3 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--matcha-500)] focus:ring-offset-2"
      aria-label="Open The Kubernetes Handbook PDF"
    >
      <img src={publicAsset('kubernetes-handbook-cover.png')} alt="The Kubernetes Handbook cover" className="mx-auto block h-full w-full min-w-0 object-contain object-top transition duration-300 group-hover:scale-[1.02]" />
      <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-[var(--matcha-800)]/95 px-3 py-2 text-xs font-semibold text-white">
        <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
        Click to read full PDF
      </span>
    </button>
    <div className="flex min-w-0 flex-col lg:min-h-[24rem]">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--matcha-700)]">
        <BookOpen className="h-4 w-4" aria-hidden="true" />
        <span>DevOps handbook</span>
      </div>
      <h3 className="mt-4 text-2xl font-bold">The Kubernetes Handbook</h3>
      <p className="mt-4 text-sm leading-6 text-gray-600">
        A practical, beginner-to-advanced guide covering containers, architecture, workloads, networking, security, observability and production delivery.
      </p>
      <div className="mt-6 grid gap-3 border-t border-[var(--matcha-100)] pt-5 sm:grid-cols-2">
        {['Containers & workloads', 'Networking & storage', 'Security & observability', 'Helm, GitOps & CI/CD'].map((topic) => (
          <div key={topic} className="flex items-center gap-2 text-sm text-gray-700">
            <CheckCircle2 className="h-4 w-4 flex-none text-[var(--matcha-600)]" aria-hidden="true" />
            <span>{topic}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        <button
          type="button"
          onClick={onOpen}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--matcha-700)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--matcha-800)]"
        >
          <FileText className="h-4 w-4" aria-hidden="true" />
          Open inside portfolio
        </button>
        <a
          href="https://github.com/fahiiim/Kubernetes-handbook/blob/main/main.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-[var(--matcha-300)] px-4 py-3 text-sm font-semibold text-[var(--matcha-800)] transition hover:bg-[var(--matcha-50)]"
        >
          GitHub source
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </article>
);

const ExternalResourceLink = ({ label, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="portfolio-card group inline-flex items-center justify-between rounded-lg border px-4 py-3 text-sm font-medium text-[var(--matcha-800)] transition hover:bg-[var(--matcha-50)]"
  >
    <span>{label}</span>
    <ExternalLink className="h-4 w-4 text-[var(--matcha-600)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
  </a>
);

export { OpenSourceSection };
export default OpenSourceSection;
