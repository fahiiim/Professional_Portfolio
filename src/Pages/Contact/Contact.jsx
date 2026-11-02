import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Copy,
  Check,
  MapPin,
  Sparkles,
  ArrowUpRight,
  Clock,
  Send,
  MessageCircle,
} from 'lucide-react';
import {
  SiLinkedin,
  SiGithub,
  SiKaggle,
  SiFacebook,
  SiInstagram,
  SiWhatsapp,
} from 'react-icons/si';

export const ContactSection = ({ id = 'contact' }) => {
  const [copied, setCopied] = useState(false);

  const emailAddress = 'fahimsarker0805@gmail.com';
  const phoneNumber = '+880 1400 530 058';
  const whatsappNumber = '8801400530058';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      handle: 'linkedin.com/in/fahim153',
      href: 'https://linkedin.com/in/fahim153',
      tag: 'Professional Network',
      icon: SiLinkedin,
      brandColor: '#0A66C2',
      hoverBorder: 'hover:border-[#0A66C2]/60 hover:shadow-[#0A66C2]/10',
      badgeBg: 'bg-[#0A66C2]/10 text-[#0A66C2]',
    },
    {
      name: 'GitHub',
      handle: 'github.com/fahiiim',
      href: 'https://github.com/fahiiim',
      tag: 'Code & Open Source',
      icon: SiGithub,
      brandColor: '#24292E',
      hoverBorder: 'hover:border-gray-800/60 hover:shadow-gray-900/10',
      badgeBg: 'bg-gray-800/10 text-gray-800',
    },
    {
      name: 'Kaggle',
      handle: 'kaggle.com/fahimsarker',
      href: 'https://kaggle.com/fahimsarker',
      tag: 'Notebooks & Datasets',
      icon: SiKaggle,
      brandColor: '#20BEFF',
      hoverBorder: 'hover:border-[#20BEFF]/60 hover:shadow-[#20BEFF]/10',
      badgeBg: 'bg-[#20BEFF]/10 text-[#0288d1]',
    },
    {
      name: 'Facebook',
      handle: 'facebook.com/FahimSarkerMridul',
      href: 'https://www.facebook.com/FahimSarkerMridul',
      tag: 'Social & Community',
      icon: SiFacebook,
      brandColor: '#1877F2',
      hoverBorder: 'hover:border-[#1877F2]/60 hover:shadow-[#1877F2]/10',
      badgeBg: 'bg-[#1877F2]/10 text-[#1877F2]',
    },
    {
      name: 'Instagram',
      handle: '@fahimerican',
      href: 'https://www.instagram.com/fahimerican',
      tag: 'Personal & Lifestyle',
      icon: SiInstagram,
      brandColor: '#E4405F',
      hoverBorder: 'hover:border-[#E4405F]/60 hover:shadow-[#E4405F]/10',
      badgeBg: 'bg-[#E4405F]/10 text-[#E4405F]',
    },
  ];

  return (
    <section
      id={id}
      className="border-b border-[var(--matcha-200)] bg-[var(--matcha-50)] py-20"
    >
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="space-y-10">
          {/* Section Header */}
          <div className="space-y-4 text-center">
            {/* Live Availability Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50/80 px-3.5 py-1 text-xs font-semibold text-emerald-800 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Available for AI Engineering Roles & Collaborations
            </div>

            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Let’s build meaningful AI systems together
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-[15px]">
              Open to AI engineering roles, research collaborations, and impactful
              projects in Medical AI, NLP, RAG systems, and Computer Vision.
            </p>
          </div>

          {/* MAIN CATCHY CONTACT CARD (Roundness 0) */}
          <div className="portfolio-card relative overflow-hidden rounded-none border-2 border-[var(--matcha-300)] p-6 shadow-md transition-all duration-300 hover:shadow-xl sm:p-10">
            {/* Top decorative gradient glow bar */}
            <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-emerald-500 via-[var(--matcha-400)] to-[var(--matcha-800)]" />

            <div className="space-y-8">
              {/* HERO SPOTLIGHT: Email & Quick Contact (Roundness 0) */}
              <div className="relative overflow-hidden rounded-none border border-[var(--matcha-200)] bg-white/80 p-6 text-center shadow-xs backdrop-blur-xs transition sm:p-8">
                {/* Subtle corner badge */}
                <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[var(--matcha-300)] bg-[var(--matcha-100)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--matcha-900)]">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                  Best Way to Reach Me
                </div>

                {/* Email Display */}
                <div className="my-2">
                  <a
                    href={`mailto:${emailAddress}?subject=Inquiry%20regarding%20AI%20Engineering%20Role%20/%20Collaboration`}
                    className="group inline-flex items-center gap-2 text-xl font-bold text-gray-900 transition hover:text-[var(--matcha-800)] sm:text-2xl md:text-3xl"
                  >
                    <Mail className="h-6 w-6 text-[var(--matcha-700)] transition group-hover:scale-110 sm:h-7 sm:w-7" />
                    <span className="underline decoration-[var(--matcha-300)] underline-offset-4 group-hover:decoration-[var(--matcha-600)]">
                      {emailAddress}
                    </span>
                  </a>
                </div>

                {/* Response SLA */}
                <p className="mt-2 flex items-center justify-center gap-1.5 text-xs text-gray-500">
                  <Clock className="h-3.5 w-3.5 text-emerald-600" />
                  Fast response guaranteed · Usually within 24 hours
                </p>

                {/* Action Buttons: Send Email & Copy Email */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`mailto:${emailAddress}?subject=Inquiry%20regarding%20AI%20Engineering%20Role%20/%20Collaboration`}
                    className="inline-flex items-center gap-2 rounded-md bg-[var(--matcha-800)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:scale-[1.02] hover:bg-[var(--matcha-900)] hover:shadow-md"
                  >
                    <Send className="h-4 w-4" />
                    Send an Email
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className={`inline-flex items-center gap-2 rounded-md border px-4 py-2.5 text-sm font-semibold transition-all hover:scale-[1.02] ${
                      copied
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-800 shadow-xs'
                        : 'border-[var(--matcha-300)] bg-white text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-emerald-600 animate-in zoom-in" />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 text-gray-600" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* THREE QUICK CONTACT CHANNELS (Roundness 0) */}
              <div className="grid gap-4 sm:grid-cols-3">
                {/* Email Channel */}
                <div className="group rounded-none border border-[var(--matcha-200)] bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--matcha-400)] hover:bg-white hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-none bg-[var(--matcha-100)] text-[var(--matcha-800)] transition group-hover:scale-105 group-hover:bg-[var(--matcha-800)] group-hover:text-white">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                        Primary Email
                      </p>
                      <a
                        href={`mailto:${emailAddress}`}
                        className="block truncate text-sm font-bold text-gray-900 transition hover:text-[var(--matcha-800)]"
                        title={emailAddress}
                      >
                        {emailAddress}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone & WhatsApp Channel */}
                <div className="group rounded-none border border-[var(--matcha-200)] bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-white hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-none bg-emerald-100 text-emerald-800 transition group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                          Phone & WhatsApp
                        </p>
                        <a
                          href={`https://wa.me/${whatsappNumber}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 hover:underline"
                        >
                          <SiWhatsapp className="h-2.5 w-2.5" /> WhatsApp
                        </a>
                      </div>
                      <a
                        href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                        className="block truncate text-sm font-bold text-gray-900 transition hover:text-emerald-700"
                      >
                        {phoneNumber}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location & Remote */}
                <div className="group rounded-none border border-[var(--matcha-200)] bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--matcha-400)] hover:bg-white hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-none bg-[var(--matcha-100)] text-[var(--matcha-800)] transition group-hover:scale-105 group-hover:bg-[var(--matcha-800)] group-hover:text-white">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                        Location & Timezone
                      </p>
                      <p className="truncate text-sm font-bold text-gray-900">
                        Dhaka, Bangladesh · UTC+6
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SOCIAL & DEVELOPER PROFILES (Roundness 0) */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-600">
                    Connect Across Platforms
                  </h3>
                  <span className="text-xs text-gray-500">
                    5 Active Profiles
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`group relative flex items-center justify-between rounded-none border border-[var(--matcha-200)] bg-white/75 p-3.5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md ${item.hoverBorder}`}
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          {/* Brand Icon */}
                          <div
                            className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-none transition-transform duration-200 group-hover:scale-110 ${item.badgeBg}`}
                          >
                            <Icon className="h-4.5 w-4.5" />
                          </div>

                          {/* Info */}
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="truncate text-sm font-bold text-gray-900">
                                {item.name}
                              </span>
                            </div>
                            <p className="truncate text-xs text-gray-500">
                              {item.handle}
                            </p>
                          </div>
                        </div>

                        {/* Hover Arrow */}
                        <div className="flex-shrink-0 pl-2">
                          <ArrowUpRight className="h-4 w-4 text-gray-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gray-900" />
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Note */}
          <div className="text-center">
            <p className="inline-flex items-center gap-2 text-xs font-medium text-gray-600">
              <MessageCircle className="h-4 w-4 text-emerald-600" />
              Always open to thoughtful conversations, ambitious ideas, and real-world impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
