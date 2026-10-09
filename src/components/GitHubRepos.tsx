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

  const displayedRepos =
    featuredRepoNames && featuredRepoNames.length > 0
      ? repos.filter((r) => featuredRepoNames.includes(r.name))
      : repos.slice(0, 6);

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">GitHub Repositories</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Public open-source repositories from @surya-r-developer.
            </p>
          </div>
          <a
            href="https://github.com/surya-r-developer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 font-medium hover:underline self-start sm:self-auto"
          >
            <Github className="w-4 h-4" />
            <span>View all on GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex items-center justify-center py-12 gap-2 text-xs text-slate-400">
            <RefreshCw className="w-4 h-4 animate-spin text-blue-500" />
            <span>Fetching repositories...</span>
          </div>
        ) : error && repos.length === 0 ? (
          <div className="p-6 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center text-xs text-slate-500 max-w-md mx-auto">
            <p className="mb-2">Repositories temporarily unavailable.</p>
            <a
              href="https://github.com/surya-r-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
            >
              <span>View directly on GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedRepos.map((repo) => (
              <div
                key={repo.id}
                className="p-5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col justify-between hover:border-blue-500 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Code2 className="w-4 h-4 text-blue-500" />
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-900 text-slate-700 dark:text-slate-300">
                      {repo.language || 'Code'}
                    </span>
                  </div>

                  <h3 className="font-semibold text-sm text-slate-900 dark:text-white">
                    {repo.name}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                    {repo.description || 'No description provided.'}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5 text-slate-400" />
                      {repo.forks_count}
                    </span>
                  </div>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium inline-flex items-center gap-1"
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
