import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const achievementsData = [
  {
    title: '1st Runner-Up',
    event: 'Comilla University Data Science Hackathon',
    year: 'Nov 2024',
    highlight: true,
  },
  {
    title: 'Best Innovation Award',
    event: 'IDP-1 Project Showcase',
    year: 'Jan 2025',
    highlight: true,
  },
  {
    title: '3rd Runner-Up',
    event: 'University IT Olympiad',
    year: 'Oct 2024',
  },
  {
    title: '1st Runner-Up',
    event: 'Hult Prize Business Challenge',
    year: 'Mar 2022',
  },
  {
    title: 'Finalist',
    event: 'IUBAT, BUBT, NSU AI Hackathons',
    year: '2024 – 2025',
  },
];

export const AchievementsSection = ({ id = 'achievements' }) => {
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
              Achievements
            </p>
            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-emerald-300 sm:text-4xl">
              Competitive recognition & innovation milestones
            </h2>
            <p className="max-w-2xl text-sm text-slate-300 sm:text-[15px]">
              I actively participate in hackathons and innovation programs to
              validate ideas, collaborate under pressure, and deliver impactful
              AI solutions.
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid gap-5 sm:grid-cols-2"
          >
            {achievementsData.map((item, index) => (
              <motion.div
                key={`${item.title}-${item.event}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`group relative overflow-hidden rounded-2xl border p-5 backdrop-blur-xl transition-all
                  ${
                    item.highlight
                      ? 'border-emerald-400/40 bg-gradient-to-br from-emerald-400/15 to-emerald-400/5 shadow-[0_0_35px_-12px_rgba(16,185,129,0.45)] hover:shadow-[0_0_50px_-10px_rgba(201,217,139,0.6)] hover:border-[#C9D98B]/60'
                      : 'border-emerald-500/25 bg-gradient-to-br from-slate-900/70 to-slate-950/70 hover:shadow-[0_0_40px_-12px_rgba(201,217,139,0.5)] hover:border-[#C9D98B]/50'
                  }
                `}
              >
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9D98B]/0 to-transparent opacity-0 transition-all duration-500 group-hover:from-[#C9D98B]/10 group-hover:opacity-100" />
                
                {/* Trophy indicator */}
                <motion.div 
                  className="absolute right-4 top-4"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.title.includes('1st') || item.title.includes('Best') ? (
                    <Trophy className="w-6 h-6 text-[#C9D98B] stroke-[2] fill-[#C9D98B]/20 transition-all group-hover:fill-[#C9D98B]/30" />
                  ) : item.title.includes('3rd') ? (
                    <Award className="w-6 h-6 text-[#C9D98B] stroke-[2] transition-all group-hover:scale-110" />
                  ) : (
                    <Medal className="w-6 h-6 text-[#C9D98B] stroke-[2] transition-all group-hover:scale-110" />
                  )}
                </motion.div>

                <p className="relative text-xs font-semibold uppercase tracking-wide text-emerald-300 transition-colors group-hover:text-[#C9D98B]">
                  {item.year}
                </p>

                <p className="relative mt-1 text-lg font-semibold text-slate-50 transition-colors group-hover:text-[#C9D98B]">
                  {item.title}
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  {item.event}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
