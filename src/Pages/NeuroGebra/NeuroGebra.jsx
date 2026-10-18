import React, { useEffect, useState } from 'react';
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Code2,
  ExternalLink,
  Eye,
  FileText,
  GraduationCap,
  Layers3,
  Maximize2,
  Rocket,
  Sigma,
  X,
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

const fastApiTopics = [
  'Architecture & project structure',
  'Databases, security & async execution',
  'Testing, deployment & observability',
  'Scalable AI backend patterns',
];

const publicAsset = (filename) => `${import.meta.env.BASE_URL}${filename}`;

const OpenSourceSection = ({ id = 'open-source' }) => {
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  useEffect(() => {
    if (!isPdfOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsPdfOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isPdfOpen]);

  return (
    <>
      <section id={id} className="border-b border-[var(--matcha-200)] bg-[var(--matcha-50)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="space-y-10">
            <header className="max-w-4xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--matcha-700)]">
                Open source portfolio
              </p>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Open Source Contribution
              </h2>
              <p className="max-w-3xl text-[15px] leading-7 text-gray-600">
                A collection of open-source work, technical handbooks and learning resources built to make complex engineering systems easier to understand and use.
              </p>
            </header>

            <div className="grid gap-6 lg:grid-cols-2">
              <NeuroGebraCard />
              <FastApiHandbookCard />
              <KubernetesHandbookCard onOpen={() => setIsPdfOpen(true)} />
            </div>
          </div>
        </div>
      </section>

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
