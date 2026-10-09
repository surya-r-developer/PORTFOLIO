'use client';

import React from 'react';
import { FileText, Download, Eye, Clock } from 'lucide-react';

interface ResumeProps {
  resumeUrl: string;
}

export const Resume: React.FC<ResumeProps> = ({ resumeUrl }) => {
  return (
    <section id="resume" className="py-16 bg-slate-50 dark:bg-slate-800/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Resume</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            View or download the official resume for Surya R.
          </p>
        </div>

        {/* Resume Card */}
        <div className="p-8 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 max-w-xl mx-auto text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto">
            <FileText className="w-6 h-6" />
          </div>

          <div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">
              Surya R - Developer Resume
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              B.E. CSE | Bannari Amman Institute of Technology ('29)
            </p>
          </div>

          {resumeUrl ? (
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Resume</span>
              </a>

              <a
                href={resumeUrl}
                download="Surya_R_Resume.pdf"
                className="px-4 py-2 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 pt-2">
              <Clock className="w-4 h-4" />
              <span>Resume PDF upload in progress</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
