import { NextResponse } from "next/server";

const username = "devARcoder";

export async function GET() {
  try {
    // 1️⃣ Get latest 3 repos
    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?sort=created&direction=desc&per_page=3`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        next: { revalidate: 3600 },
      }
    );

    const repos = await repoRes.json();

    // 2️⃣ Get commit count for each repo
    const reposWithCommits = await Promise.all(
      repos.map(async (repo: any) => {
        const commitRes = await fetch(
          `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1`,
          {
            headers: {
              Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            },
          }
        );

        // GitHub sends total count in headers
        const linkHeader = commitRes.headers.get("link");

        let commitCount = 0;

        if (linkHeader && linkHeader.includes('rel="last"')) {
          const match = linkHeader.match(/page=(\d+)>; rel="last"/);
          if (match) {
            commitCount = parseInt(match[1]);
          }
        } else {
          const commits = await commitRes.json();
          commitCount = commits.length;
        }

        return {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          commitCount,
        };
      })
    );

    return NextResponse.json(reposWithCommits);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch repositories" },
      { status: 500 }
    );
  }
}