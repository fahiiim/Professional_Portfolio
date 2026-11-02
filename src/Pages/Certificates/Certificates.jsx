import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Maximize2,
  X,
  Eye,
} from 'lucide-react';
import { SiHackerrank } from 'react-icons/si';
import hackerRankCertImg from '../../assets/hackerrank-software-engineer-certificate.png';

const hackerRankCertification = {
  title: 'HackerRank Certified Software Engineer',
  role: 'Software Engineer',
  provider: 'HackerRank',
  issueDate: '04 Aug, 2026',
  credentialId: '23731BA77521',
  verifyUrl: 'https://www.hackerrank.com/certificates/23731ba77521',
  iframeUrl: 'https://www.hackerrank.com/certificates/iframe/23731ba77521',
  focus: 'Software Engineer Role Certification · Problem Solving · Data Structures & Algorithms · Software Engineering Standards',
};

const certificatesData = [
  {
    title: 'Deep Learning Specialization',
    provider: 'Kaggle',
    date: '2025',
    focus: 'Deep learning foundations · CNNs · Sequence models',
  },
  {
    title: 'Large Language Models Concepts',
    provider: 'DataCamp',
    date: '2024',
    focus: 'LLM fundamentals · Prompting · Generative AI workflows',
  },
  {
    title: 'AI+ Prompt Engineer Level 1',
    provider: 'AI CERTs',
    date: '2025',
    focus: 'Prompt design · Prompt evaluation · Applied AI use cases',
  },
  {
    title: 'Supervised Learning with Scikit-Learn',
    provider: 'DataCamp',
    date: '2024',
    focus: 'Classification · Regression · Model evaluation',
  },
  {
    title: 'Deep Neural Networks with PyTorch',
    provider: 'DataCamp',
    date: '2025',
    focus: 'PyTorch training loops · Optimization · Neural architectures',
  },
];

export const CertificatesSection = ({ id = 'certificates' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState('image'); // 'image' | 'iframe'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section
      id={id}
      className="border-b border-[var(--matcha-200)] bg-[var(--matcha-50)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-600">
              Certificates
            </p>
            <h2 className="max-w-2xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Continuous learning in modern AI tooling
            </h2>
            <p className="max-w-2xl text-sm text-gray-600 sm:text-[15px]">
              I invest in structured, hands-on learning to stay current with
              rapidly evolving AI tools—especially LLM ecosystems and
              production-grade workflows.
            </p>
          </div>

          {/* Certificates List */}
          <div className="grid gap-5">
            {/* TOP CARD: HackerRank Certified Software Engineer (Roundness 0) */}
            <div className="portfolio-card group relative overflow-hidden rounded-none border p-5 transition-all hover:shadow-md">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                {/* Left: Certificate Details */}
                <div className="flex-1 space-y-2 pr-0 sm:pr-4">
                  {/* Badge & Date row */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2EC866]/40 bg-[#2EC866]/15 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                      <SiHackerrank className="h-3.5 w-3.5 text-[#2EC866]" />
                      HackerRank Certified
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-[var(--matcha-200)] bg-[var(--matcha-100)] px-2.5 py-0.5 text-xs font-semibold text-[var(--matcha-900)]">
                      <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                      Role Certified
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                      {hackerRankCertification.issueDate}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-gray-800 sm:text-xl">
                    {hackerRankCertification.title}
                  </h3>

                  {/* Provider & Credential ID */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-600">
                    <span className="font-medium">{hackerRankCertification.provider}</span>
                    <span className="text-gray-400">·</span>
                    <span className="font-mono text-xs">
                      ID: <span className="font-semibold text-gray-800">{hackerRankCertification.credentialId}</span>
                    </span>
                  </div>

                  {/* Focus */}
                  <p className="text-sm text-gray-600">
                    Focus:{' '}
                    <span className="text-gray-900 transition-colors group-hover:text-gray-800">
                      {hackerRankCertification.focus}
                    </span>
                  </p>

                  {/* Action links */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center gap-1.5 rounded-md bg-[var(--matcha-800)] px-3 py-1.5 text-xs font-semibold text-white shadow-xs transition hover:bg-[var(--matcha-900)]"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      View Certificate
                    </button>
                    <a
                      href={hackerRankCertification.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-[var(--matcha-300)] bg-white/70 px-3 py-1.5 text-xs font-semibold text-gray-800 transition hover:bg-white hover:text-black"
                    >
                      <ShieldCheck className="h-3.5 w-3.5 text-[#2EC866]" />
                      Verify on HackerRank
                      <ExternalLink className="h-3 w-3 opacity-70" />
                    </a>
                  </div>
                </div>

                {/* Right: Small Certificate Preview Thumbnail (Roundness 0) */}
                <div className="flex sm:justify-end">
                  <div
                    onClick={() => setIsModalOpen(true)}
                    className="group/thumb relative w-44 sm:w-48 md:w-52 flex-shrink-0 cursor-pointer overflow-hidden rounded-none border-2 border-[var(--matcha-300)] bg-white p-1 shadow-xs transition-all duration-200 hover:scale-[1.03] hover:border-emerald-600 hover:shadow-md"
                    title="Click to view full certificate"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setIsModalOpen(true);
                      }
                    }}
                  >
                    <img
                      src={hackerRankCertImg}
                      alt="HackerRank Certified Software Engineer Thumbnail"
                      className="aspect-[4/3] w-full rounded-none object-contain bg-white"
                      loading="lazy"
                    />

                    {/* Hover overlay hint */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center rounded-none bg-black/45 opacity-0 backdrop-blur-[0.5px] transition-opacity duration-200 group-hover/thumb:opacity-100">
                      <Maximize2 className="h-5 w-5 text-white drop-shadow mb-0.5" />
                      <span className="text-[11px] font-semibold text-white drop-shadow">
                        Click to enlarge
                      </span>
                    </div>

                    {/* Small tag badge */}
                    <div className="absolute bottom-1.5 right-1.5 flex items-center gap-1 rounded bg-black/70 px-1.5 py-0.5 text-[9px] font-medium text-white transition-opacity group-hover/thumb:opacity-0">
                      <Maximize2 className="h-2.5 w-2.5" /> Preview
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Certificates (Roundness 0) */}
            {certificatesData.map((cert) => (
              <div
                key={cert.title}
                className="portfolio-card group relative overflow-hidden rounded-none border p-5 transition-all hover:shadow-md"
              >
                {/* icon */}
                <div className="absolute right-5 top-5">
                  <GraduationCap className="h-6 w-6 text-gray-600 stroke-[2]" />
                </div>

                <p className="relative text-xs font-semibold uppercase tracking-wide text-gray-600 transition-colors group-hover:text-gray-700">
                  {cert.date}
                </p>

                <p className="relative mt-1 text-lg font-semibold text-gray-900 transition-colors group-hover:text-gray-800">
                  {cert.title}
                </p>

                <p className="relative text-sm text-gray-600 transition-colors group-hover:text-gray-700">
                  {cert.provider}
                </p>

                <p className="relative mt-2 text-sm text-gray-600">
                  Focus:{' '}
                  <span className="text-gray-900 transition-colors group-hover:text-gray-800">
                    {cert.focus}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enlarged Certificate Lightbox Modal (Roundness 0) */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-6 backdrop-blur-xs"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-h-[95vh] w-full max-w-4xl overflow-hidden rounded-none border border-[var(--matcha-200)] bg-[var(--matcha-50)] p-4 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--matcha-200)] pb-3">
              <div className="flex items-center gap-3">
                <div className="rounded-none bg-[#2EC866]/15 p-2 text-[#2EC866]">
                  <SiHackerrank className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                    {hackerRankCertification.title}
                  </h3>
                  <p className="text-xs text-gray-600">
                    Credential ID:{' '}
                    <span className="font-mono font-medium text-gray-900">
                      {hackerRankCertification.credentialId}
                    </span>{' '}
                    · Earned {hackerRankCertification.issueDate}
                  </p>
                </div>
              </div>

              {/* Modal Controls: Switch View, Verify, Close */}
              <div className="flex items-center gap-2">
                <div className="inline-flex rounded-none border border-[var(--matcha-200)] bg-white p-0.5 text-xs">
                  <button
                    type="button"
                    onClick={() => setModalTab('image')}
                    className={`rounded-none px-2.5 py-1 font-medium transition ${
                      modalTab === 'image'
                        ? 'bg-[var(--matcha-800)] text-white shadow-xs'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    HD Image
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalTab('iframe')}
                    className={`rounded-none px-2.5 py-1 font-medium transition ${
                      modalTab === 'iframe'
                        ? 'bg-[var(--matcha-800)] text-white shadow-xs'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Live Embed
                  </button>
                </div>

                <a
                  href={hackerRankCertification.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 rounded-none bg-[var(--matcha-800)] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[var(--matcha-900)]"
                >
                  Verify
                  <ExternalLink className="h-3 w-3" />
                </a>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-none border border-gray-300 bg-white p-1.5 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Modal Certificate View */}
            <div className="max-h-[75vh] overflow-auto rounded-none bg-white p-2 shadow-inner">
              {modalTab === 'image' ? (
                <img
                  src={hackerRankCertImg}
                  alt="HackerRank Certified Software Engineer Certificate"
                  className="mx-auto h-auto w-full object-contain"
                />
              ) : (
                <div className="relative w-full">
                  <iframe
                    src={hackerRankCertification.iframeUrl}
                    title="HackerRank Certified Software Engineer Certificate"
                    className="h-[520px] w-full border-0 sm:h-[600px]"
                    loading="lazy"
                    allow="clipboard-write"
                  />
                  <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50 px-3 py-2 text-xs text-gray-500">
                    <span>HackerRank Official Certificate Iframe</span>
                    <a
                      href={hackerRankCertification.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[var(--matcha-800)] hover:underline"
                    >
                      Open in HackerRank ↗
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;
