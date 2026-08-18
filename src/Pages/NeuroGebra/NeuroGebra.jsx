import React from 'react';
import {
  Activity,
  CheckCircle2,
  ExternalLink,
  Eye,
  GraduationCap,
  Rocket,
  Sigma,
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

const projectLinks = [
  { label: 'GitHub Repository', href: 'https://github.com/fahiiim/NeuroGebra' },
  { label: 'PyPI Package', href: 'https://pypi.org/project/neurogebra' },
  { label: 'Documentation', href: 'https://neurogebra.readthedocs.io' },
  { label: 'DOI (Zenodo)', href: 'https://zenodo.org/doi/10.5281/zenodo.18869365' },
];

const NeuroGebraSection = ({ id = 'neurogebra' }) => {
  return (
    <section id={id} className="border-b border-gray-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="space-y-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-600">
                NeuroGebra
              </p>
              <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Deep learning mathematics you can inspect, execute and train.
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-gray-600">
                <strong className="font-semibold text-gray-900">Adopted by 8,000+ students and researchers worldwide,</strong>{' '}
                NeuroGebra brings symbolic mathematics, numerical execution, model training, diagnostics and education into one Python-native framework.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-50 via-white to-cyan-50 px-6 py-8 shadow-sm">
              <img
                src="/neurogebra-logo.png"
                alt="NeuroGebra"
                className="mx-auto block h-auto w-full max-w-xl"
              />
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 lg:grid-cols-4">
            {[
              ['8,000+', 'Global users'],
              ['285', 'Verified expressions'],
              ['100+', 'Curated datasets'],
              ['10', 'Mathematical domains'],
            ].map(([value, label]) => (
              <div key={label} className="bg-gray-50 px-5 py-5 text-center">
                <dt className="text-2xl font-bold text-gray-900">{value}</dt>
                <dd className="mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</dd>
              </div>
            ))}
          </dl>

          <div>
            <div className="mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-teal-700" />
              <h3 className="text-lg font-semibold text-gray-900">What makes it different</h3>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {capabilityGroups.map((group) => (
                <article key={group.title} className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-teal-100 bg-teal-50 text-teal-700">
                      {React.createElement(group.icon, { 'aria-hidden': true, className: 'h-5 w-5' })}
                    </div>
                    <h3 className="text-base font-semibold text-gray-900">{group.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{group.summary}</p>
                  <ul className="mt-4 space-y-2.5">
                    {group.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm leading-5 text-gray-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-teal-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-5 rounded-xl border border-gray-200 bg-white p-6 sm:p-8 lg:grid-cols-[0.35fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-700">Why it matters</p>
              <p className="mt-2 text-lg font-semibold text-gray-900">Transparency before scale</p>
            </div>
            <div className="space-y-3 text-sm leading-6 text-gray-600">
              <p>
                NeuroGebra complements PyTorch and TensorFlow rather than competing with them. Those frameworks excel at large-scale training and deployment; NeuroGebra focuses on making the mathematics, computation and training behavior understandable.
              </p>
              <p>
                It offers a Python-native bridge between symbolic tools such as SymPy and practical machine-learning workflows, helping learners and model builders understand a system before moving it into production.
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
                className="group inline-flex items-center justify-between rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-900 transition hover:border-teal-300 hover:bg-teal-50"
              >
                <span>{link.label}</span>
                <ExternalLink className="h-4 w-4 text-gray-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-700" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuroGebraSection;
