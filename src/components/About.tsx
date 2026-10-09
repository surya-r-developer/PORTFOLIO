'use client';

import React from 'react';
import { Profile } from '@/types/portfolio';
import { GraduationCap, Target, MapPin, Compass, Sparkles, BookOpen, Code, Award } from 'lucide-react';

interface AboutProps {
  profile: Profile;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <section id="about" className="py-20 relative bg-slate-100/50 dark:bg-navy-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-600 dark:text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Personal Profile & Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            About <span className="text-gradient">Surya R</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-sans">
            A look into my academic background, technical focus, and growth mindset as a Computer Science & Engineering student.
          </p>
        </div>

        {/* Top Bio Card */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl glass-card relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-electric-500 dark:text-cyan-400" />
            <span>Developer Journey & Vision</span>
          </h3>
          <p className="text-slate-700 dark:text-slate-300 font-sans leading-relaxed text-base sm:text-lg">
            {profile.aboutBio}
          </p>
        </div>

        {/* Key Information Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1: Education */}
          <div className="p-6 rounded-2xl bg-white dark:bg-navy-850 border border-slate-200 dark:border-electric-500/20 shadow-sm hover:border-electric-500/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-electric-500/10 text-electric-600 dark:text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-1">Education</h4>
            <h5 className="font-display font-bold text-slate-900 dark:text-white text-base leading-snug">
              B.E. CSE
            </h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{profile.college}</p>
            <div className="mt-3 inline-block px-2.5 py-1 rounded bg-slate-100 dark:bg-navy-800 text-[11px] font-mono text-electric-600 dark:text-cyan-300 font-semibold">
              Expected Grad: {profile.expectedGraduation}
            </div>
          </div>

          {/* Card 2: Focus Area */}
          <div className="p-6 rounded-2xl bg-white dark:bg-navy-850 border border-slate-200 dark:border-electric-500/20 shadow-sm hover:border-electric-500/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Code className="w-6 h-6" />
            </div>
            <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-1">Core Focus</h4>
            <h5 className="font-display font-bold text-slate-900 dark:text-white text-base leading-snug">
              Software Engineering
            </h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{profile.focusArea}</p>
          </div>

          {/* Card 3: Location */}
          <div className="p-6 rounded-2xl bg-white dark:bg-navy-850 border border-slate-200 dark:border-electric-500/20 shadow-sm hover:border-electric-500/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-1">Location</h4>
            <h5 className="font-display font-bold text-slate-900 dark:text-white text-base leading-snug">
              {profile.location}
            </h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Sathyamangalam / Erode Region</p>
          </div>

          {/* Card 4: Career Goal */}
          <div className="p-6 rounded-2xl bg-white dark:bg-navy-850 border border-slate-200 dark:border-electric-500/20 shadow-sm hover:border-electric-500/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-1">Career Goal</h4>
            <h5 className="font-display font-bold text-slate-900 dark:text-white text-base leading-snug">
              Full-Stack Developer
            </h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{profile.careerGoal}</p>
          </div>
        </div>

        {/* Compact Visual Academic Timeline */}
        <div className="p-8 rounded-2xl bg-white dark:bg-navy-950 border border-slate-200 dark:border-electric-500/20 shadow-md">
          <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Compass className="w-5 h-5 text-electric-500 dark:text-cyan-400" />
            <span>Academic Timeline Milestone</span>
          </h4>

          <div className="relative border-l-2 border-slate-300 dark:border-electric-500/30 ml-4 pl-6 space-y-8">
            {/* Milestone 1 */}
            <div className="relative group">
              <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-white dark:ring-navy-950" />
              <div className="font-mono text-xs text-electric-600 dark:text-cyan-400 font-bold mb-1">
                2025 - 2029
              </div>
              <h5 className="font-display font-bold text-slate-900 dark:text-white text-base">
                B.E. Computer Science and Engineering
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Bannari Amman Institute of Technology, Sathyamangalam. Mastering fundamental algorithms, programming constructs, and modern software paradigms.
              </p>
            </div>

            {/* Milestone 2 */}
            <div className="relative group">
              <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-electric-500 ring-4 ring-white dark:ring-navy-950" />
              <div className="font-mono text-xs text-electric-600 dark:text-cyan-400 font-bold mb-1">
                CURRENT EXPLORATIONS
              </div>
              <h5 className="font-display font-bold text-slate-900 dark:text-white text-base">
                Full-Stack Systems & Open Source Tools
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Building personal web applications using C, Python, JavaScript, and Git workflow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
