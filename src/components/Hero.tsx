'use client';

import React from 'react';
import { Profile, ContactInfo } from '@/types/portfolio';
import { ArrowDown, Github, Linkedin, Instagram, Mail } from 'lucide-react';

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
    <section id="home" className="min-h-screen flex items-center pt-14 bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Photo */}
          {profile.profilePhotoUrl && (
            <div className="flex-shrink-0">
              <img
                src={profile.profilePhotoUrl}
                alt={profile.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-slate-200 dark:border-slate-700 shadow-sm"
              />
            </div>
          )}

          {/* Text */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              B.E. CSE Student @ BIT Sathyamangalam ('29)
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              Hi, I'm {profile.name}
            </h1>
            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
              {profile.primaryTitle}
            </p>
            <p className="text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              {profile.heroIntro}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-2 justify-center md:justify-start">
              <button
                onClick={() => scrollTo('projects')}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-5 py-2.5 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2 justify-center md:justify-start">
              {contact.github && (
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {contact.linkedin && (
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {contact.leetcode && (
                <a
                  href={contact.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-amber-500 transition-colors"
                  aria-label="LeetCode"
                  title="LeetCode"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                  </svg>
                </a>
              )}
              {contact.instagram && (
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-pink-500 transition-colors"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Email"
                  title="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-16">
          <button onClick={() => scrollTo('about')} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors" aria-label="Scroll down">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
