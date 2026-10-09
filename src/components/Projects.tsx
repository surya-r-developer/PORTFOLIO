'use client';

import React, { useState } from 'react';
import { Project } from '@/types/portfolio';
import { FolderGit2, ExternalLink, Github, Layers } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-16 bg-slate-50 dark:bg-slate-800/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Projects</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Featured software, tools, and web applications built by Surya R.
          </p>
        </div>

        {/* Category Filters */}
        {projects.length > 0 && categories.length > 2 && (
          <div className="flex flex-wrap gap-2 mb-8 text-xs font-medium">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  filter === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="p-8 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center space-y-3 max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Projects in progress
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
              New project showcases are currently being prepared. Check out my GitHub repositories below in the meantime!
            </p>
            <div className="pt-2">
              <a
                href="https://github.com/surya-r-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-medium bg-slate-900 text-white dark:bg-slate-700 hover:bg-slate-800 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Visit GitHub</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col justify-between hover:border-blue-500 transition-colors"
              >
                <div>
                  {project.image ? (
                    <div className="h-44 w-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-32 w-full bg-blue-50 dark:bg-slate-900 flex items-center justify-center text-blue-500">
                      <FolderGit2 className="w-8 h-8 opacity-70" />
                    </div>
                  )}

                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>{project.category}</span>
                      <span>{project.date}</span>
                    </div>

                    <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-[11px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between text-xs border-t border-slate-100 dark:border-slate-700/60 mt-4">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
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
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
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
