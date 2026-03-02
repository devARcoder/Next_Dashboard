import { NextResponse } from "next/server";

const username = "devARcoder";

export async function GET() {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 600 },
    });

    if (!res.ok) return NextResponse.json([], { status: res.status });

    const data = await res.json();

    // Only return name and html_url for search
    const repos = data.map((repo: any) => ({
      name: repo.name,
      url: repo.html_url,
    }));

    return NextResponse.json(repos);
  } catch (err) {
    console.error("GitHub repos API error:", err);
    return NextResponse.json([], { status: 500 });
  }
}