// src/components/GitHubFeed.tsx
export const revalidate = 3600; // cache for 1 hour to avoid rate limits

import { getTopRepos } from "@/lib/github";

export default async function GitHubFeed() {
  const repos = await getTopRepos("ducatiman007", 6);

  if (!repos.length) return null;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {repos.map(repo => (
        <article key={repo.id} className="card p-6 hover:-translate-y-[2px] transition-transform">
          <div className="shine" />
          <h3 className="text-lg font-semibold">{repo.name}</h3>
          <p className="opacity-80 mt-2">{repo.description || "No description"}</p>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm opacity-85">
            {repo.language ? <span>{repo.language}</span> : null}
            <span>★ {repo.stargazers_count}</span>
            <span>Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
          </div>
          <div className="mt-4">
            <a className="btn" href={repo.html_url} target="_blank" rel="noreferrer">View on GitHub</a>
          </div>
        </article>
      ))}
    </div>
  );
}
