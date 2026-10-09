'use client';

import React from 'react';
import { BrandLogo } from './BrandLogo';
import { ContactInfo } from '@/types/portfolio';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

interface FooterProps {
  contact: ContactInfo;
}

export const Footer: React.FC<FooterProps> = ({ contact }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-slate-900 dark:bg-navy-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          {/* Brand Logo & Info */}
          <div className="space-y-2 text-center md:text-left">
            <BrandLogo size="md" />
            <p className="text-xs font-mono text-slate-400">
              Aspiring Software Developer | CSE Student @ BIT Sathyamangalam ('29)
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {contact.github && (
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-navy-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {contact.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-navy-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {contact.instagram && (
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-navy-900 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-400 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            )}
            {contact.leetcode && (
              <a
                href={contact.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-navy-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-400 transition-all"
                aria-label="LeetCode"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
              </a>
            )}
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="p-2.5 rounded-xl bg-navy-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <p>© {currentYear} Surya R. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with Next.js, TypeScript & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
