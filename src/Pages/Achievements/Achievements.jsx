import React from 'react';
import { Trophy, Medal, Users } from 'lucide-react';

const recognitionGroups = [
  {
    title: 'Top Achievements',
    icon: Trophy,
    items: [
      ['Best Innovation Award', 'IDP-1 Project Showcase · Jan 2025 · ViolaShield'],
      ['1st Runner-Up', 'Comilla University Data Science Hackathon · Nov 2024'],
      ['6th Worldwide / 1st in Asia', '2026 Anatolian Rover Challenge · GUB Mars Rover Team'],
      ['3rd Runner-Up', 'University IT Olympiad · Oct 2024'],
      ['1st Runner-Up', 'Hult Prize Business Challenge · Mar 2022'],
    ],
  },
  {
    title: 'Hackathon Finalist',
    icon: Medal,
    items: [
      ['IUBAT Hackathon', 'Finalist · Dec 2024'],
      ['BUBT AI Competition', 'Finalist · Nov 2025'],
      ['NSU FutureBuilders AI Hackathon', 'Finalist · Dec 2025'],
    ],
  },
  {
    title: 'Leadership & Community',
    icon: Users,
    items: [
      ["BASIS Students' Forum - GUB Chapter", 'Event Coordinator → Executive Member → Enduring Member · 2023-Present'],
      ['GUB Computer Club', 'Information Secretary · 2023-2024 · Organized 5+ ML workshops for 200+ students'],
      ['GUB Robotics Society', 'Software Engineer · 2024'],
      ['ICPC Dhaka Regional', 'Technical Volunteer · 2023'],
    ],
  },
];

export const AchievementsSection = ({ id = 'achievements' }) => {
  return (
    <section id={id} className="border-b border-gray-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-600">
              Leadership & Recognition
            </p>
            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Competition results, community leadership, and technical service
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {recognitionGroups.map((group) => (
              <article key={group.title} className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-lg border border-gray-200 bg-white p-2">
                    <group.icon className="h-5 w-5 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{group.title}</h3>
                </div>
                <ul className="divide-y divide-gray-200">
                  {group.items.map(([title, detail]) => (
                    <li key={`${title}-${detail}`} className="py-3 first:pt-0 last:pb-0">
                      <p className="text-sm font-semibold text-gray-900">{title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-gray-600">{detail}</p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
