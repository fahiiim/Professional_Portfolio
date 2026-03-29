import React from 'react';
import { Phone, Star } from 'lucide-react';

export const ContactSection = ({ id = 'contact' }) => {
  return (
    <section
      id={id}
      className="border-b border-gray-200 bg-white py-20"
    >

      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div className="space-y-14">
          {/* Header */}
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-600">
              Contact
            </p>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Let’s build meaningful AI systems together
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-[15px]">
              Open to AI engineering roles, research collaborations, and impactful
              projects in Medical AI, NLP, RAG systems, and Computer Vision.
            </p>
          </div>

          {/* Main Card */}
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 shadow-sm">
            <div className="mb-8 space-y-2 text-center">
              <p className="text-sm text-gray-600">
                Best way to reach me
              </p>
              <a
                href="mailto:fahimsarker0805@gmail.com"
                className="inline-block text-lg font-semibold text-gray-900 hover:underline"
              >
                fahimsarker0805@gmail.com
              </a>
              <p className="text-xs text-gray-500">
                I usually reply within 24 hours
              </p>
            </div>

            {/* Contact Details */}
            <div className="mb-8 grid gap-4 text-sm text-gray-600 sm:grid-cols-2">
              <ContactItem
                label="Phone"
                value="+880 1400 530 058"
                href="tel:+8801400530058"
                icon={Phone}
              />
              <ContactItem
                label="Preferred"
                value="Email / LinkedIn"
                icon={Star}
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
          </div>

          {/* Closing line */}
          <p
            className="text-center text-xs text-gray-600"
          >
            Always open to thoughtful conversations, ambitious ideas, and real-world impact.
          </p>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ label, value, href, icon: Icon }) => (
  <div className="flex items-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3">
    <Icon className="w-5 h-5 text-gray-600 stroke-[2]" />
    <div>
      <p className="text-xs uppercase tracking-wide text-gray-600">
        {label}
      </p>
      {href ? (
        <a href={href} className="text-sm text-gray-900 hover:text-gray-700 hover:underline">
          {value}
        </a>
      ) : (
        <p className="text-sm text-gray-900">{value}</p>
      )}
    </div>
  </div>
);

const SocialLink = ({ name, handle, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex items-center justify-between rounded-lg border border-gray-300 bg-white px-5 py-4 transition hover:border-gray-400 hover:shadow-md"
  >
    <span className="font-medium text-gray-900">{name}</span>
    <span className="text-xs text-gray-600">{handle}</span>
  </a>
);

export default ContactSection;
