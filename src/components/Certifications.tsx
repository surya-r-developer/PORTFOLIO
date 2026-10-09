'use client';

import React from 'react';
import { Certification } from '@/types/portfolio';
import { ShieldCheck, ExternalLink, Award } from 'lucide-react';

interface CertificationsProps {
  certifications: Certification[];
}

export const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <section id="certifications" className="py-20 relative bg-slate-100/50 dark:bg-navy-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-600 dark:text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-sans">
            Technical course certificates and verified industry credentials earned by Surya R.
          </p>
        </div>

        {/* Content or Empty State */}
        {certifications.length === 0 ? (
          <div className="max-w-xl mx-auto p-10 rounded-2xl bg-white dark:bg-navy-850 border border-slate-200 dark:border-electric-500/20 shadow-md text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto">
              <Award className="w-8 h-8 animate-pulse" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
              Certifications will appear here as added
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm font-sans leading-relaxed">
              Technical certifications and course verifications are currently being compiled. Add certifications anytime via the admin dashboard.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-white dark:bg-navy-850 border border-slate-200 dark:border-electric-500/20 shadow-sm hover:shadow-lg hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-xs text-slate-400">
                    <span className="font-semibold text-electric-600 dark:text-cyan-400">
                      {cert.issuingOrganization}
                    </span>
                    <span>{cert.issueDate}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    {cert.description}
                  </p>
                </div>

                {cert.verificationUrl && (
                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-electric-600 dark:text-cyan-300 hover:underline font-semibold"
                    >
                      <span>Verify Credential</span>
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
