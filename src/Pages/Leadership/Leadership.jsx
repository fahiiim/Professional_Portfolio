import React from 'react';
import { Megaphone, Bot, Calendar, Code2 } from 'lucide-react';

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
      className="border-b border-gray-200 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-600">
              Leadership & Community
            </p>
            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Building communities around technology & problem-solving
            </h2>
            <p className="max-w-2xl text-sm text-gray-600 sm:text-[15px]">
              I enjoy creating spaces where students and practitioners can
              collaborate, experiment, and ship impactful projects through
              clubs, events, and competitions.
            </p>
          </div>

          {/* Roles Grid */}
          <div
            className="grid gap-5 sm:grid-cols-2"
          >
            {rolesData.map((item, index) => (
              <div
                key={`${item.role}-${item.org}`}
                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-gray-50 p-5 transition-all hover:border-gray-300 hover:shadow-md"
              >
                {/* icon */}
                <div className="absolute right-4 top-4">
                  <item.icon className="w-6 h-6 text-gray-600 stroke-[2]" />
                </div>

                <p className="relative text-xs font-semibold uppercase tracking-wide text-gray-600 transition-colors group-hover:text-gray-700">
                  {item.period}
                </p>

                <p className="relative mt-1 text-lg font-semibold text-gray-900 transition-colors group-hover:text-gray-800">
                  {item.role}
                </p>

                <p className="relative text-sm text-gray-600">
                  {item.org}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
