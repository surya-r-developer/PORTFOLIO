import { NextResponse } from 'next/server';

let cachedRepos: any[] = [];
let lastFetchTime = 0;
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes cache

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username') || 'surya-r-developer';

  const now = Date.now();
  if (cachedRepos.length > 0 && now - lastFetchTime < CACHE_TTL) {
    return NextResponse.json({ repos: cachedRepos, cached: true });
  }

  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=30`, {
      headers: {
        'User-Agent': 'SuryaR-Portfolio-App',
        Accept: 'application/vnd.github.v3+json',
      },
      next: { revalidate: 600 },
    });

    if (!res.ok) {
      if (cachedRepos.length > 0) {
        return NextResponse.json({ repos: cachedRepos, cached: true, warning: 'GitHub rate limited, returning cached data' });
      }
      return NextResponse.json({ repos: [], error: 'Unable to fetch GitHub repositories' }, { status: res.status });
    }

    const data = await res.json();
    const formattedRepos = data.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || 'No description provided.',
      language: repo.language || 'Code',
      stargazers_count: repo.stargazers_count || 0,
      forks_count: repo.forks_count || 0,
      html_url: repo.html_url,
      homepage: repo.homepage,
      updated_at: repo.updated_at,
    }));

    cachedRepos = formattedRepos;
    lastFetchTime = now;

    return NextResponse.json({ repos: formattedRepos, cached: false });
  } catch (error) {
    console.error('GitHub API error:', error);
    return NextResponse.json({ repos: cachedRepos, error: 'Failed to fetch repositories' });
  }
}
