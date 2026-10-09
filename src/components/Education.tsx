'use client';

import React from 'react';
import { EducationInfo } from '@/types/portfolio';
import { GraduationCap, MapPin, Calendar, CheckCircle2, Building2 } from 'lucide-react';

interface EducationProps {
  education: EducationInfo;
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-600 dark:text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Higher <span className="text-gradient">Education</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-sans">
            Formal undergraduate computer science degree and institutional details.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-white dark:bg-navy-850 border border-slate-200 dark:border-electric-500/20 shadow-xl relative overflow-hidden">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-electric-600/10 via-cyan-400/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* College Badge & Logo Icon */}
            <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-electric-600 to-cyan-400 text-white flex items-center justify-center shadow-lg mb-4">
                <Building2 className="w-10 h-10" />
              </div>
              <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
                ACADEMIC INSTITUTION
              </span>
              <h4 className="font-display font-bold text-base text-slate-900 dark:text-white mt-1">
                BIT Sathyamangalam
              </h4>
              <div className="mt-3 px-3 py-1 rounded-full bg-electric-500/10 text-electric-600 dark:text-cyan-300 font-mono text-xs font-semibold">
                Class of 2029
              </div>
            </div>

            {/* Main Degree Info */}
            <div className="lg:col-span-8 space-y-4">
              <div>
                <span className="inline-block px-3 py-1 rounded bg-slate-100 dark:bg-navy-900 font-mono text-xs text-electric-600 dark:text-cyan-400 font-semibold mb-2">
                  UNDERGRADUATE DEGREE
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                  {education.degree}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-electric-500" />
                  <span>{education.college}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>{education.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>Expected Graduation: {education.expectedGraduation}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <h5 className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                  Academic Focus & Activities
                </h5>
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  {education.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
