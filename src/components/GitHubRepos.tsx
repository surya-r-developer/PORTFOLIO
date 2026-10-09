'use client';

import React, { useEffect, useState } from 'react';
import { GitHubRepo } from '@/types/portfolio';
import { Github, Star, GitFork, ExternalLink, Code2, RefreshCw } from 'lucide-react';

interface GitHubReposProps {
  featuredRepoNames: string[];
}

export const GitHubRepos: React.FC<GitHubReposProps> = ({ featuredRepoNames }) => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        setLoading(true);
        const res = await fetch('/api/github?username=surya-r-developer');
        const data = await res.json();
        if (data.repos) {
          setRepos(data.repos);
        } else {
          setError(data.error || 'Failed to fetch repositories');
        }
      } catch (err) {
        setError('GitHub API temporarily unavailable');
      } finally {
        setLoading(false);
      }
    }
    fetchGitHubData();
  }, []);

  // Filter repositories based on admin featured selection or show top repos if none explicitly selected
  const displayedRepos =
    featuredRepoNames && featuredRepoNames.length > 0
      ? repos.filter((r) => featuredRepoNames.includes(r.name))
      : repos.slice(0, 6);

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-600 dark:text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
            <Github className="w-3.5 h-3.5" />
            <span>GitHub Repositories (@surya-r-developer)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Code <span className="text-gradient">Repositories</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-sans">
            Hand-selected public open-source code repositories fetched dynamically from GitHub.
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-3 font-mono text-xs text-slate-400">
            <RefreshCw className="w-6 h-6 animate-spin text-cyan-400" />
            <span>Fetching live GitHub data for surya-r-developer...</span>
          </div>
        ) : error && repos.length === 0 ? (
          <div className="max-w-md mx-auto p-6 rounded-2xl bg-white dark:bg-navy-850 border border-slate-200 dark:border-electric-500/20 text-center font-mono text-xs text-slate-400 space-y-2">
            <p>GitHub information is temporarily unavailable.</p>
            <a
              href="https://github.com/surya-r-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline inline-flex items-center gap-1"
            >
              <span>View directly on GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedRepos.map((repo) => (
              <div
                key={repo.id}
                className="p-6 rounded-2xl bg-white dark:bg-navy-850 border border-slate-200 dark:border-electric-500/20 shadow-sm hover:shadow-lg hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Code2 className="w-5 h-5 text-electric-500 dark:text-cyan-400" />
                    <span className="px-2.5 py-0.5 rounded bg-slate-100 dark:bg-navy-950 font-mono text-[11px] text-slate-600 dark:text-slate-300">
                      {repo.language}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white group-hover:text-electric-600 dark:group-hover:text-cyan-300 transition-colors">
                    {repo.name}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans line-clamp-3">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between font-mono text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5 text-cyan-400" />
                      {repo.forks_count}
                    </span>
                  </div>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-electric-600 dark:text-cyan-300 hover:underline font-semibold"
                  >
                    <span>Repo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
