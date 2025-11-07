export type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
  updated_at: string;
};

export async function getTopRepos(username: string, limit = 6): Promise<Repo[]> {
  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
    headers: { "Accept": "application/vnd.github+json" },
    cache: "no-store",
  });
  if (!res.ok) return [];
  const data = (await res.json()) as Repo[];
  const filtered = data.filter(r => !r.fork);
  filtered.sort((a, b) => {
    // sort by stars, then recent update
    if (b.stargazers_count !== a.stargazers_count) {
      return b.stargazers_count - a.stargazers_count;
    }
    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
  });
  return filtered.slice(0, limit);
}
