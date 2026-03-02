import { NextResponse } from "next/server";

const username = "devARcoder";

export async function GET() {
  try {
    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        
        next: { revalidate: 3600 },
      }
      
    );
    

    const repos = await repoRes.json();

    

    if (!Array.isArray(repos)) {
      return NextResponse.json([], { status: 200 });
    }

    const repoData = await Promise.all(
      repos.map(async (repo: any) => {
        const commitRes = await fetch(
          `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1`,
          {
            headers: {
              Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            },
          }
        );

        const linkHeader = commitRes.headers.get("Link");
        let commitCount = 0;

        if (linkHeader && linkHeader.includes('rel="last"')) {
          const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
          if (match) commitCount = parseInt(match[1]);
        } else {
          const commits = await commitRes.json();
          commitCount = Array.isArray(commits) ? commits.length : 0;
        }

        return {
          name: repo.name,
          commits: commitCount,
          language: repo.language,
          createdAt: repo.created_at,
        };
      })
    );

    return NextResponse.json(repoData);
  } catch (error) {
    console.error(error);
    return NextResponse.json([], { status: 500 });
  }
}