'use client';

import React from 'react';
import { FileText, Download, Eye, Sparkles, CheckCircle2, Clock } from 'lucide-react';

interface ResumeProps {
  resumeUrl: string;
}

export const Resume: React.FC<ResumeProps> = ({ resumeUrl }) => {
  return (
    <section id="resume" className="py-20 relative bg-slate-100/50 dark:bg-navy-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-600 dark:text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Official <span className="text-gradient">Resume</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-sans">
            Download or inspect the official PDF resume for Surya R.
          </p>
        </div>

        {/* Resume Card */}
        <div className="max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl bg-white dark:bg-navy-850 border border-slate-200 dark:border-electric-500/20 shadow-xl text-center space-y-6">
          <div className="w-20 h-20 rounded-2xl bg-electric-500/10 text-electric-600 dark:text-cyan-400 flex items-center justify-center mx-auto shadow-md">
            <FileText className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
              Surya R - Engineering Resume
            </h3>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
              B.E. Computer Science & Engineering | BIT Sathyamangalam ('29)
            </p>
          </div>

          {resumeUrl ? (
            <div className="space-y-4 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Resume Document Available (PDF)</span>
              </div>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl font-mono text-sm font-semibold bg-electric-600 hover:bg-electric-500 text-white transition-colors flex items-center gap-2 shadow-lg shadow-electric-600/20"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Resume</span>
                </a>

                <a
                  href={resumeUrl}
                  download="Surya_R_Resume.pdf"
                  className="px-6 py-3 rounded-xl font-mono text-sm font-semibold bg-slate-100 dark:bg-navy-950 border border-slate-300 dark:border-electric-500/30 text-slate-800 dark:text-cyan-300 hover:bg-slate-200 dark:hover:bg-navy-900 transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-3 pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>Resume PDF Upload Pending</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-sans max-w-md mx-auto">
                Surya R's resume is currently being finalized. The resume PDF can be uploaded directly via the Admin Dashboard.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
