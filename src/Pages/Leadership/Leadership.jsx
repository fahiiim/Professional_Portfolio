import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const rolesData = [
  {
    role: 'Information Secretary',
    org: 'GUB Computer Club',
    period: '2023 — 2024',
    icon: '📣',
  },
  {
    role: 'Software Engineer',
    org: 'GUB Robotics Club',
    period: '2024',
    icon: '🤖',
  },
  {
    role: 'Event Coordinator',
    org: 'BASIS Students’ Forum',
    period: '2023 — Present',
    icon: '🗓️',
  },
  {
    role: 'Technical Volunteer',
    org: 'ICPC Dhaka Regional',
    period: '2023',
    icon: '💻',
  },
];

export const LeadershipSection = ({ id = 'leadership' }) => {
  return (
    <section
      id={id}
      className="relative border-b border-emerald-500/20 bg-slate-950 py-16 sm:py-20"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.12 } },
          }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
              Leadership & Community
            </p>
            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-emerald-300 sm:text-4xl">
              Building communities around technology & problem-solving
            </h2>
            <p className="max-w-2xl text-sm text-slate-300 sm:text-[15px]">
              I enjoy creating spaces where students and practitioners can
              collaborate, experiment, and ship impactful projects through
              clubs, events, and competitions.
            </p>
          </motion.div>

          {/* Roles Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid gap-5 sm:grid-cols-2"
          >
            {rolesData.map((item) => (
              <motion.div
                key={`${item.role}-${item.org}`}
                whileHover={{ y: -4 }}
                className="relative rounded-2xl border border-emerald-500/30 bg-slate-900/50 p-5 backdrop-blur-xl transition-shadow hover:shadow-[0_0_35px_-12px_rgba(16,185,129,0.35)]"
              >
                {/* icon */}
                <span className="absolute right-4 top-4 text-xl">
                  {item.icon}
                </span>

                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                  {item.period}
                </p>

                <p className="mt-1 text-lg font-semibold text-slate-50">
                  {item.role}
                </p>

                <p className="text-sm text-slate-300">
                  {item.org}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;
