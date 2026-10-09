'use client';

import React from 'react';
import { Achievement } from '@/types/portfolio';
import { Award, ExternalLink } from 'lucide-react';

interface AchievementsProps {
  achievements: Achievement[];
}

export const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <section id="achievements" className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Achievements</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Recognitions, academic honors, and milestones.
          </p>
        </div>

        {/* Content or Empty State */}
        {achievements.length === 0 ? (
          <div className="p-8 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-center space-y-2 max-w-lg mx-auto">
            <Award className="w-8 h-8 text-blue-500 mx-auto" />
            <h3 className="font-medium text-slate-900 dark:text-white text-sm">
              Achievements showcase coming soon
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs">
              Academic honors, coding competitions, and hackathons will be published here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-blue-600 dark:text-blue-400">
                    <span className="font-medium">{item.organization}</span>
                    <span className="text-slate-400">{item.date}</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {item.link && (
                  <div className="pt-3 mt-3 border-t border-slate-200 dark:border-slate-700">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="w-3 h-3" />
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
