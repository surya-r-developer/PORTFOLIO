'use client';

import React from 'react';
import { Achievement } from '@/types/portfolio';
import { Award, ExternalLink, Sparkles, Trophy } from 'lucide-react';

interface AchievementsProps {
  achievements: Achievement[];
}

export const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-600 dark:text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-sans">
            Recognitions, hackathons, and academic milestones achieved by Surya R.
          </p>
        </div>

        {/* Content or Empty State */}
        {achievements.length === 0 ? (
          <div className="max-w-xl mx-auto p-10 rounded-2xl bg-white dark:bg-navy-850 border border-slate-200 dark:border-electric-500/20 shadow-md text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto">
              <Award className="w-8 h-8 animate-pulse" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
              Achievements showcase coming soon
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm font-sans leading-relaxed">
              Academic honors, coding competitions, and hackathon achievements will be published here as Surya R progresses through his CSE program.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-white dark:bg-navy-850 border border-slate-200 dark:border-electric-500/20 shadow-sm hover:shadow-lg hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-xs text-electric-600 dark:text-cyan-400">
                    <span>{item.organization}</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
                {item.link && (
                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-electric-600 dark:text-cyan-400 hover:underline"
                    >
                      <span>View Achievement Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
