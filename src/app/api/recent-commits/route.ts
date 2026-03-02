import { NextResponse } from "next/server";

const username = "devARcoder";

export async function GET() {
  try {
    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?sort=created&direction=desc&per_page=5`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        next: { revalidate: 600 },
      }
    );

    if (!repoRes.ok) {
      return NextResponse.json([]);
    }

    const repos = await repoRes.json();

    let allCommits: any[] = [];

    for (const repo of repos) {
      const commitRes = await fetch(
        `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=3`,
        {
          headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          },
        }
      );

      // ✅ Skip if repo has no commits or request fails
      if (!commitRes.ok) continue;

      const commits = await commitRes.json();

      if (!Array.isArray(commits)) continue;

      commits.forEach((commit: any) => {
        if (!commit?.sha) return;

        allCommits.push({
          id: commit.sha,
          message: commit.commit?.message || "No message",
          repoName: repo.name,
          date: commit.commit?.author?.date || new Date().toISOString(),
        });
      });
    }

    // Sort newest first
    allCommits.sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return NextResponse.json(allCommits.slice(0, 3));
  } catch (error) {
    console.error("Commit API error:", error);
    return NextResponse.json([]);
  }
}