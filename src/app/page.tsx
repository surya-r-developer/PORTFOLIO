'use client';

import React from 'react';
import { initialPortfolioData as data } from '@/lib/initial-data';
import { Navbar } from '@/components/Navbar';
import { CustomCursor } from '@/components/CustomCursor';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Achievements } from '@/components/Achievements';
import { Certifications } from '@/components/Certifications';
import { Education } from '@/components/Education';
import { Resume } from '@/components/Resume';
import { GitHubRepos } from '@/components/GitHubRepos';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-white transition-colors duration-300">
      {/* Custom Futuristic Desktop Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10 space-y-4">
        <Hero profile={data.profile} contact={data.contact} />
        <About profile={data.profile} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Achievements achievements={data.achievements} />
        <Certifications certifications={data.certifications} />
        <Education education={data.education} />
        <Resume resumeUrl={data.profile.resumeUrl} />
        <GitHubRepos featuredRepoNames={data.featuredGitHubRepos} />
        <Contact contact={data.contact} />
      </main>

      {/* Footer & Back To Top Floating Action */}
      <Footer contact={data.contact} />
      <BackToTop />
    </div>
  );
}
