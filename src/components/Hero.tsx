'use client';

import React, { useState } from 'react';
import { Profile, ContactInfo } from '@/types/portfolio';
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  ArrowRight,
} from 'lucide-react';

interface HeroProps {
  profile: Profile;
  contact: ContactInfo;
}

export const Hero: React.FC<HeroProps> = ({ profile, contact }) => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    if (!isHovering) setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[calc(100vh-3.5rem)] flex items-center justify-center pt-20 pb-16 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 dark:from-[#070b14] dark:via-[#090f1d] dark:to-[#070b14] transition-colors duration-300"
    >
      {/* 1. Engineering Grid Background with Radial Mask */}
      <div
        className="absolute inset-0 pointer-events-none select-none [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_20%,transparent_80%)]"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 h-full w-full stroke-slate-900/[0.04] dark:stroke-white/[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-grid-pattern"
              width="44"
              height="44"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 44V.5H44" fill="none" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#hero-grid-pattern)" />
        </svg>

        {/* Ambient Subtle Tech Dots Lattice */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(59,130,246,0.12)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(96,165,250,0.14)_1px,transparent_1px)] [background-size:22px_22px] opacity-60" />
      </div>

      {/* 2. Multi-layer Animated Ambient Gradient Mesh Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Top-Left Ambient Orb (Electric Blue / Indigo) */}
        <div className="absolute -top-24 left-1/4 -translate-x-1/2 w-96 sm:w-[580px] h-96 sm:h-[580px] bg-gradient-to-br from-blue-600/20 via-indigo-500/15 to-transparent rounded-full blur-3xl animate-pulse-glow" />

        {/* Center-Right Ambient Orb (Cyan / Sky) */}
        <div className="absolute top-1/4 -right-20 sm:right-8 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-gradient-to-bl from-cyan-400/15 via-blue-600/10 to-indigo-500/10 rounded-full blur-3xl animate-float" />

        {/* Bottom Ambient Orb (Violet / Purple Accent) */}
        <div className="absolute -bottom-16 left-1/3 w-72 sm:w-[460px] h-72 sm:h-[460px] bg-gradient-to-tr from-violet-600/10 via-blue-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* 3. Interactive Cursor Spotlight (Torch Glow) */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 ease-out hidden sm:block"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.08), transparent 60%)`,
        }}
        aria-hidden="true"
      />

      {/* 4. Main Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">

          {/* Profile Photo with Ambient Glow & Gradient Border */}
          {profile.profilePhotoUrl && (
            <div className="flex-shrink-0 group relative">
              {/* Outer soft ambient breathing halo */}
              <div
                className="absolute -inset-2 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-600 opacity-30 dark:opacity-40 blur-xl group-hover:opacity-60 transition duration-700 animate-pulse-glow"
                aria-hidden="true"
              />

              {/* Gradient border ring */}
              <div className="relative p-1 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-indigo-500 shadow-2xl shadow-blue-500/20 dark:shadow-cyan-500/20">
                <div className="p-1 rounded-full bg-white dark:bg-slate-900">
                  <img
                    src={profile.profilePhotoUrl}
                    alt={profile.name}
                    className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover shadow-inner"
                  />
                </div>
              </div>

              {/* Status Indicator Pill on Photo */}
              <div
                className="absolute bottom-1.5 right-1.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-700 shadow-md backdrop-blur-sm text-[11px] font-semibold text-slate-700 dark:text-slate-200"
                title="Available for Opportunities"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Active</span>
              </div>
            </div>
          )}

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-5">
            {/* Professional Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border border-blue-500/20 bg-blue-50/70 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 backdrop-blur-md shadow-sm shadow-blue-500/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>B.E. CSE Student @ BIT Sathyamangalam (&apos;29)</span>
            </div>

            {/* Main Greeting / Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-cyan-300 dark:to-indigo-300 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>

            {/* Primary Title with Tech Badge Vibe */}
            <div className="flex items-center justify-center md:justify-start gap-2">
              <p className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-cyan-400">
                {profile.primaryTitle}
              </p>
            </div>

            {/* Hero Bio */}
            <p className="text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed text-sm sm:text-base">
              {profile.heroIntro}
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap gap-3.5 pt-2 justify-center md:justify-start">
              <button
                onClick={() => scrollTo('projects')}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-200 text-sm font-semibold rounded-xl bg-white/70 dark:bg-slate-800/70 hover:bg-slate-100 dark:hover:bg-slate-800 backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links with Modern Glass Pills */}
            <div className="flex items-center gap-3 pt-3 justify-center md:justify-start">
              {contact.github && (
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                  aria-label="GitHub"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}

              {contact.linkedin && (
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                  aria-label="LinkedIn"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}

              {contact.leetcode && (
                <a
                  href={contact.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-500/50 hover:bg-amber-50/50 dark:hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                  aria-label="LeetCode"
                  title="LeetCode Profile"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                  </svg>
                </a>
              )}

              {contact.instagram && (
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:text-pink-500 hover:border-pink-500/50 hover:bg-pink-50/50 dark:hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                  aria-label="Instagram"
                  title="Instagram Profile"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}

              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                  aria-label="Email"
                  title="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 6. Smooth bottom fade to seamlessly blend into subsequent section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50/60 dark:from-slate-900/60 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
};
