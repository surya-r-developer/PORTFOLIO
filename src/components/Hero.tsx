'use client';

import React, { useState } from 'react';
import { Profile, ContactInfo } from '@/types/portfolio';
import { ArrowRight, Download, Mail, Terminal, Sparkles, CheckCircle2, ShieldCheck, User } from 'lucide-react';

interface HeroProps {
  profile: Profile;
  contact: ContactInfo;
}

export const Hero: React.FC<HeroProps> = ({ profile, contact }) => {
  const [activeTab, setActiveTab] = useState<'sys' | 'bio' | 'stack'>('sys');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    if (profile.resumeUrl) {
      window.open(profile.resumeUrl, '_blank');
    } else {
      scrollTo('resume');
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-electric-600/20 via-cyan-400/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Text & Information */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/70 dark:bg-navy-850/80 border border-slate-300 dark:border-electric-500/30 text-slate-800 dark:text-cyan-300 font-mono text-xs shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>B.E. CSE Student @ Bannari Amman Institute of Technology ('29)</span>
            </div>

            {/* Title / Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-none">
                HI, I'M <span className="text-gradient">{profile.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-mono text-electric-600 dark:text-cyan-400 font-medium">
                {profile.primaryTitle}
              </p>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-sans max-w-2xl leading-relaxed">
              {profile.heroIntro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3.5 rounded-xl font-mono text-sm font-semibold bg-gradient-to-r from-electric-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-electric-500/25 transition-all duration-300 flex items-center gap-2 group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleDownloadResume}
                className="px-6 py-3.5 rounded-xl font-mono text-sm font-semibold bg-slate-200 dark:bg-navy-800 border border-slate-300 dark:border-electric-500/30 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-navy-700 transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-electric-500 dark:text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3.5 rounded-xl font-mono text-sm font-semibold border border-electric-500/40 text-electric-600 dark:text-cyan-300 hover:bg-electric-500/10 transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Key Quick Badges */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-6 font-mono text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Student Portfolio</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Open for Tech Collaborations</span>
              </div>
            </div>
          </div>

          {/* Right Column: Distinctive Interactive HUD & Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-electric-600 to-cyan-400 rounded-3xl opacity-30 blur-lg animate-pulse-glow" />

              <div className="relative rounded-2xl bg-navy-900 border border-electric-500/30 text-slate-200 p-5 shadow-2xl overflow-hidden">
                {/* HUD Header Bar */}
                <div className="flex items-center justify-between border-b border-electric-500/20 pb-3 mb-4 font-mono text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-cyan-400 font-bold">surya_r.sys</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-electric-900/60 border border-electric-500/30 text-electric-300">
                    STATUS: ACTIVE
                  </span>
                </div>

                {/* Profile Photo Placeholder with Tech Overlay */}
                <div className="relative mb-5 flex items-center justify-center p-4 bg-navy-950/80 rounded-xl border border-electric-500/20">
                  {profile.profilePhotoUrl ? (
                    <img
                      src={profile.profilePhotoUrl}
                      alt={profile.name}
                      className="w-32 h-32 rounded-full object-cover border-2 border-cyan-400 shadow-md"
                    />
                  ) : (
                    <div className="relative w-32 h-32 rounded-full bg-gradient-to-tr from-navy-800 to-electric-900 border-2 border-cyan-400/60 flex flex-col items-center justify-center text-cyan-300 shadow-inner group">
                      <User className="w-12 h-12 text-cyan-400 mb-1" />
                      <span className="font-mono text-[10px] tracking-wider text-slate-400 uppercase">
                        Surya R
                      </span>
                      <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-ping opacity-25 pointer-events-none" />
                    </div>
                  )}

                  {/* Corner HUD Badges */}
                  <div className="absolute top-2 right-2 px-2 py-1 bg-navy-900/90 rounded border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
                    BIT_CSE_2029
                  </div>
                </div>

                {/* Interactive HUD Tabs */}
                <div className="flex gap-2 mb-3 bg-navy-950 p-1 rounded-lg border border-electric-500/20 font-mono text-xs">
                  <button
                    onClick={() => setActiveTab('sys')}
                    className={`flex-1 py-1.5 rounded transition-colors ${
                      activeTab === 'sys'
                        ? 'bg-electric-600 text-white font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    System Log
                  </button>
                  <button
                    onClick={() => setActiveTab('bio')}
                    className={`flex-1 py-1.5 rounded transition-colors ${
                      activeTab === 'bio'
                        ? 'bg-electric-600 text-white font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Academic Info
                  </button>
                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`flex-1 py-1.5 rounded transition-colors ${
                      activeTab === 'stack'
                        ? 'bg-electric-600 text-white font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Primary Tools
                  </button>
                </div>

                {/* HUD Content Area */}
                <div className="font-mono text-xs bg-navy-950 p-3.5 rounded-xl border border-slate-800 min-h-[140px] leading-relaxed">
                  {activeTab === 'sys' && (
                    <div className="space-y-1.5 text-slate-300">
                      <div className="text-cyan-400 font-bold">// STUDENT_PROFILE_INIT</div>
                      <div>
                        <span className="text-electric-400">const</span> developer ={' '}
                        <span className="text-amber-300">"{profile.name}"</span>;
                      </div>
                      <div>
                        <span className="text-electric-400">const</span> institute ={' '}
                        <span className="text-amber-300">"BIT Sathyamangalam"</span>;
                      </div>
                      <div>
                        <span className="text-electric-400">const</span> focus = [
                          <span className="text-emerald-300">"C"</span>,{' '}
                          <span className="text-emerald-300">"Python"</span>,{' '}
                          <span className="text-emerald-300">"Web Tech"</span>
                        ];
                      </div>
                      <div className="pt-2 text-slate-400 text-[11px] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Ready to build scalable software applications.</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'bio' && (
                    <div className="space-y-2 text-slate-300">
                      <div>
                        <span className="text-slate-500">Degree:</span>{' '}
                        <span className="text-white font-semibold">{profile.degree}</span>
                      </div>
                      <div>
                        <span className="text-slate-500">College:</span>{' '}
                        <span className="text-cyan-300">{profile.college}</span>
                      </div>
                      <div>
                        <span className="text-slate-500">Expected Grad:</span>{' '}
                        <span className="text-amber-400">{profile.expectedGraduation}</span>
                      </div>
                      <div>
                        <span className="text-slate-500">Location:</span>{' '}
                        <span className="text-emerald-300">{profile.location}</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'stack' && (
                    <div className="space-y-2">
                      <div className="text-slate-400 font-bold text-[11px] uppercase tracking-wider">
                        Current Core Skillset:
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {['C', 'Python', 'HTML5', 'CSS3', 'Git', 'GitHub', 'UI/UX'].map((st) => (
                          <span
                            key={st}
                            className="px-2 py-1 rounded bg-electric-950 border border-electric-500/30 text-cyan-300 text-[11px]"
                          >
                            {st}
                          </span>
                        ))}
                      </div>
                      <div className="text-slate-500 text-[10px] pt-1">
                        All skills are dynamic & updated via CMS.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
