import React from 'react';
import { Trophy, Award, Medal } from 'lucide-react';

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
      className="border-b border-gray-200 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-600">
              Achievements
            </p>
            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Competitive recognition & innovation milestones
            </h2>
            <p className="max-w-2xl text-sm text-gray-600 sm:text-[15px]">
              I actively participate in hackathons and innovation programs to
              validate ideas, collaborate under pressure, and deliver impactful
              AI solutions.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            {achievementsData.map((item, index) => (
              <div
                key={`${item.title}-${item.event}`}
                className={`group relative overflow-hidden rounded-lg border p-5 transition-all
                  ${
                    item.highlight
                      ? 'border-gray-300 bg-blue-50 hover:shadow-md hover:border-gray-400'
                      : 'border-gray-200 bg-gray-50 hover:shadow-md hover:border-gray-300'
                  }
                `}
              >
                {/* Trophy indicator */}
                <div className="absolute right-4 top-4">
                  {item.title.includes('1st') || item.title.includes('Best') ? (
                    <Trophy className="w-6 h-6 text-gray-600 stroke-[2] fill-gray-100" />
                  ) : item.title.includes('3rd') ? (
                    <Award className="w-6 h-6 text-gray-600 stroke-[2]" />
                  ) : (
                    <Medal className="w-6 h-6 text-gray-600 stroke-[2]" />
                  )}
                </div>

                <p className="relative text-xs font-semibold uppercase tracking-wide text-gray-600 transition-colors group-hover:text-gray-700">
                  {item.year}
                </p>

                <p className="relative mt-1 text-lg font-semibold text-gray-900 transition-colors group-hover:text-gray-800">
                  {item.title}
                </p>

                <p className="mt-1 text-sm text-gray-600">
                  {item.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
