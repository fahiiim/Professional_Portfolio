import React from 'react';
import { motion as Motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const ContactSection = ({ id = 'contact' }) => {
  return (
    <section
      id={id}
      className="relative border-b border-emerald-500/20 bg-slate-950 py-20"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_65%)]" />

      <div className="relative mx-auto max-w-4xl px-4 lg:px-8">
        <Motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.12 } },
          }}
          className="space-y-14"
        >
          {/* Header */}
          <Motion.div variants={fadeInUp} className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
              Contact
            </p>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-emerald-300 sm:text-4xl">
              Let’s build meaningful AI systems together
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-[15px]">
              Open to AI engineering roles, research collaborations, and impactful
              projects in Medical AI, NLP, RAG systems, and Computer Vision.
            </p>
          </Motion.div>

          {/* Main Card */}
          <Motion.div
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-emerald-500/30 bg-slate-900/55 p-8 backdrop-blur-xl shadow-[0_0_50px_-12px_rgba(16,185,129,0.45)]"
          >
            {/* Primary CTA */}
            <div className="mb-8 space-y-2 text-center">
              <p className="text-sm text-slate-300">
                Best way to reach me
              </p>
              <a
                href="mailto:fahimsarker0805@gmail.com"
                className="inline-block text-lg font-semibold text-emerald-300 hover:underline"
              >
                fahimsarker0805@gmail.com
              </a>
              <p className="text-xs text-slate-400">
                I usually reply within 24 hours
              </p>
            </div>

            {/* Contact Details */}
            <div className="mb-8 grid gap-4 text-sm text-slate-200 sm:grid-cols-2">
              <ContactItem
                label="Phone"
                value="+880 1400 530 058"
                href="tel:+8801400530058"
                icon="📞"
              />
              <ContactItem
                label="Preferred"
                value="Email / LinkedIn"
                icon="⭐"
              />
            </div>

            {/* Social Links */}
            <div className="grid gap-4 sm:grid-cols-2">
              <SocialLink
                name="LinkedIn"
                handle="/fahim153"
                href="https://linkedin.com/in/fahim153"
              />
              <SocialLink
                name="GitHub"
                handle="/fahiiim"
                href="https://github.com/fahiiim"
              />
              <SocialLink
                name="Kaggle"
                handle="/fahimsarker"
                href="https://kaggle.com/fahimsarker"
              />
            
            </div>
          </Motion.div>

          {/* Closing line */}
          <Motion.p
            variants={fadeInUp}
            className="text-center text-xs text-slate-400"
          >
            Always open to thoughtful conversations, ambitious ideas, and real-world impact.
          </Motion.p>
        </Motion.div>
      </div>
    </section>
  );
};

const ContactItem = ({ label, value, href, icon }) => (
  <div className="flex items-center gap-3 rounded-xl border border-emerald-500/25 bg-slate-950/60 px-4 py-3">
    <span className="text-lg">{icon}</span>
    <div>
      <p className="text-xs uppercase tracking-wide text-emerald-300">
        {label}
      </p>
      {href ? (
        <a href={href} className="text-sm hover:underline">
          {value}
        </a>
      ) : (
        <p className="text-sm">{value}</p>
      )}
    </div>
  </div>
);

const SocialLink = ({ name, handle, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex items-center justify-between rounded-xl border border-emerald-500/30 bg-slate-950/60 px-5 py-4 transition hover:border-emerald-400 hover:shadow-[0_0_25px_-10px_rgba(16,185,129,0.35)]"
  >
    <span className="font-medium">{name}</span>
    <span className="text-xs text-emerald-300">{handle}</span>
  </a>
);

export default ContactSection;
