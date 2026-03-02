import { NextResponse } from "next/server";

const username = "devARcoder";

export async function GET() {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 600 },
    });

    if (!res.ok) return NextResponse.json({}, { status: res.status });

    const data = await res.json();
    return NextResponse.json({
      avatar_url: data.avatar_url,
      name: data.name,
      login: data.login,
      html_url: data.html_url,
    });
  } catch (err) {
    console.error("GitHub user API error:", err);
    return NextResponse.json({}, { status: 500 });
  }
}