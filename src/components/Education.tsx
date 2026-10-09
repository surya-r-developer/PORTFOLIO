'use client';

import React from 'react';
import { EducationInfo } from '@/types/portfolio';
import { GraduationCap, MapPin, Calendar, CheckCircle2, Building2 } from 'lucide-react';

interface EducationProps {
  education: EducationInfo;
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Education</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Academic qualifications and institution details.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="p-6 sm:p-8 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-14 h-14 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-7 h-7" />
            </div>

            <div className="flex-1 space-y-3">
              <div>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Undergraduate Degree
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  {education.degree}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-slate-400" />
                  <span className="font-medium text-slate-800 dark:text-slate-200">{education.college}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>{education.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span>Class of {education.expectedGraduation}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-700 space-y-2">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Academic Focus
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {education.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
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
