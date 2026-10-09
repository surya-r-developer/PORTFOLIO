'use client';

import React from 'react';
import { Certification } from '@/types/portfolio';
import { ShieldCheck, ExternalLink } from 'lucide-react';

interface CertificationsProps {
  certifications: Certification[];
}

export const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <section id="certifications" className="py-16 bg-slate-50 dark:bg-slate-800/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Certifications</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Technical course certificates and verified industry credentials.
          </p>
        </div>

        {/* Content or Empty State */}
        {certifications.length === 0 ? (
          <div className="p-8 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center space-y-2 max-w-lg mx-auto">
            <ShieldCheck className="w-8 h-8 text-blue-500 mx-auto" />
            <h3 className="font-medium text-slate-900 dark:text-white text-sm">
              Certifications will appear here
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs">
              Technical certifications and credentials are being added.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-medium text-blue-600 dark:text-blue-400">
                      {cert.issuingOrganization}
                    </span>
                    <span>{cert.issueDate}</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {cert.verificationUrl && (
                  <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-700">
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      <span>Verify</span>
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
