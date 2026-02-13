import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Bot, Calendar, Code2 } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const rolesData = [
  {
    role: 'Information Secretary',
    org: 'GUB Computer Club',
    period: '2023 — 2024',
    icon: Megaphone,
  },
  {
    role: 'Software Engineer',
    org: 'GUB Robotics Club',
    period: '2024',
    icon: Bot,
  },
  {
    role: 'Event Coordinator',
    org: 'BASIS Students’ Forum',
    period: '2023 — Present',
    icon: Calendar,
  },
  {
    role: 'Technical Volunteer',
    org: 'ICPC Dhaka Regional',
    period: '2023',
    icon: Code2,
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
            {rolesData.map((item, index) => (
              <motion.div
                key={`${item.role}-${item.org}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-slate-900/70 to-slate-950/70 p-5 backdrop-blur-xl transition-all hover:border-[#C9D98B]/50 hover:shadow-[0_0_40px_-12px_rgba(201,217,139,0.5)]"
              >
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9D98B]/0 to-transparent opacity-0 transition-all duration-500 group-hover:from-[#C9D98B]/10 group-hover:opacity-100" />
                
                {/* icon */}
                <motion.div 
                  className="absolute right-4 top-4"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-6 h-6 text-[#C9D98B] stroke-[2]" />
                </motion.div>

                <p className="relative text-xs font-semibold uppercase tracking-wide text-emerald-300 transition-colors group-hover:text-[#C9D98B]">
                  {item.period}
                </p>

                <p className="relative mt-1 text-lg font-semibold text-slate-50 transition-colors group-hover:text-[#C9D98B]">
                  {item.role}
                </p>

                <p className="relative text-sm text-slate-300">
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
