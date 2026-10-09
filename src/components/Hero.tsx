'use client';

import React from 'react';
import { Profile, ContactInfo } from '@/types/portfolio';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  profile: Profile;
  contact: ContactInfo;
}

export const Hero: React.FC<HeroProps> = ({ profile, contact }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-14 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Photo */}
          {profile.profilePhotoUrl && (
            <div className="flex-shrink-0">
              <img
                src={profile.profilePhotoUrl}
                alt={profile.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
              />
            </div>
          )}

          {/* Text */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              B.E. CSE Student @ BIT Sathyamangalam ('29)
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Hi, I'm {profile.name}
            </h1>
            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
              {profile.primaryTitle}
            </p>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
              {profile.heroIntro}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-2 justify-center md:justify-start">
              <button
                onClick={() => scrollTo('projects')}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-5 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2 justify-center md:justify-start">
              {contact.github && (
                <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              )}
              {contact.linkedin && (
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {contact.email && (
                <a href={`mailto:${contact.email}`} className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-16">
          <button onClick={() => scrollTo('about')} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors" aria-label="Scroll down">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
