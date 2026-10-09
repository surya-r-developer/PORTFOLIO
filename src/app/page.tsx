'use client';

import React from 'react';
import { initialPortfolioData as data } from '@/lib/initial-data';
import { Navbar } from '@/components/Navbar';
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
    <div className="relative min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans">
      <Navbar />
      <main>
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
      <Footer contact={data.contact} />
      <BackToTop />
    </div>
  );
}
