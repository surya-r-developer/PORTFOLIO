'use client';

import React, { useState } from 'react';
import { Project } from '@/types/portfolio';
import { FolderGit2, ExternalLink, Github, Sparkles, Layers } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 relative bg-slate-100/50 dark:bg-navy-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-600 dark:text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Developer Laboratory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-sans">
            Software initiatives, lab experiments, and web applications created by Surya R.
          </p>
        </div>

        {/* Category Filters (Only if projects exist) */}
        {projects.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl transition-all ${
                  filter === cat
                    ? 'bg-electric-600 text-white font-semibold shadow-md shadow-electric-600/20'
                    : 'bg-white dark:bg-navy-850 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-electric-500/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid or Polished Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="max-w-xl mx-auto p-10 rounded-2xl bg-white dark:bg-navy-850 border border-slate-200 dark:border-electric-500/20 shadow-md text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-electric-500/10 text-electric-600 dark:text-cyan-400 flex items-center justify-center mx-auto">
              <Layers className="w-8 h-8 animate-pulse" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
              Projects are currently being crafted
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm font-sans leading-relaxed">
              Surya R is actively building exciting software initiatives and algorithms. New projects will appear here as soon as they are added via the admin dashboard. Check back soon!
            </p>
            <div className="pt-2">
              <a
                href="https://github.com/surya-r-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-semibold bg-slate-900 text-white dark:bg-navy-950 border border-slate-800 hover:border-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Visit GitHub Profile</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl bg-white dark:bg-navy-850 border border-slate-200 dark:border-electric-500/20 shadow-sm hover:shadow-xl hover:border-cyan-400/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Image / Thumbnail */}
                  <div className="relative h-48 w-full bg-slate-100 dark:bg-navy-950 overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-navy-900 to-electric-950 text-cyan-400 p-4 font-mono text-xs text-center">
                        <FolderGit2 className="w-10 h-10 mb-2 opacity-60" />
                        <span>{project.title}</span>
                      </div>
                    )}
                    {project.featured && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-cyan-400 text-navy-950 font-mono text-[10px] font-bold uppercase tracking-wider shadow-md">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>{project.category}</span>
                      <span>{project.date}</span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white group-hover:text-electric-600 dark:group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed line-clamp-3 font-sans">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded bg-slate-100 dark:bg-navy-950 text-slate-700 dark:text-cyan-300 font-mono text-[11px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Links */}
                <div className="p-6 pt-0 flex items-center justify-between font-mono text-xs border-t border-slate-100 dark:border-slate-800/80 mt-4">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-electric-600 dark:hover:text-cyan-300 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  ) : (
                    <span />
                  )}

                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-electric-600 dark:text-cyan-400 hover:underline font-semibold"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
