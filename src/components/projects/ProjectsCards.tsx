"use client";

import { PenBox } from "lucide-react";
import React, { useEffect, useState } from "react";

type Repo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  createdAt: string;
  commits: number;
};

// Map languages to colors (customize as needed)
const languageColors: Record<string, string> = {
  JavaScript: "bg-yellow-500 text-black",
  TypeScript: "bg-blue-600 text-white",
  Python: "bg-green-500 text-white",
  HTML: "bg-orange-500 text-white",
  CSS: "bg-blue-300 text-black",
  Unknown: "bg-gray-600 text-white",
};

const ProjectsCards = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("/api/github");
        const data = await res.json();

        // Sort newest first
        const sorted = data.sort(
          (a: Repo, b: Repo) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

        setRepos(sorted);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching repos:", err);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <p className="text-white">Loading projects...</p>;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map((repo, index) => {
        const language = repo.language || "Unknown";
        const colorClass = languageColors[language] || languageColors["Unknown"];
        const createdDate = new Date(repo.createdAt).toLocaleDateString();

        // Optional: Use commits to generate progress (or a fixed value)
        const progress = Math.min(repo.commits, 100); // max 100%

        return (
          <div
            key={repo.name}
            className="border border-[#0F172A] p-5 rounded-2xl bg-[#0F172A] hover:scale-[1.02] transition-transform relative"
          >
            {/* NEW badge for the first repo */}
            {index === 0 && (
              <span className="absolute top-7 right-40 px-2 py-0.5 bg-red-500 text-xs font-semibold rounded-full uppercase">
                NEW
              </span>
            )}

            {/* Header */}
            <div className="flex justify-between items-center">
              <h1
                className={`px-3 py-1 rounded-2xl text-xs font-semibold uppercase ${colorClass}`}
              >
                {language}
              </h1>
              <div className="p-2 rounded-xl">
                <PenBox className="w-5 h-5" />
              </div>
            </div>

            {/* Title & Description */}
            <div className="py-4">
              <h1 className="text-white text-2xl line-clamp-1 font-semibold">
                {repo.name}
              </h1>
              <p className="text-[#94A3B8] line-clamp-2">
                {repo.description || "No description provided."}
              </p>
              <p className="text-[#94A3B8] text-xs mt-2">
                Created on: {createdDate} | Commits: {repo.commits}
              </p>
            </div>

            {/* Progress */}
            <div>
              <div className="flex justify-between items-center py-1">
                <h1 className="text-[#94A3B8]">Progress</h1>
                <p className="text-white font-semibold">{progress}%</p>
              </div>

              <div className="h-3 rounded-full bg-black/20 flex items-center">
                <div
                  className="h-2 bg-blue-700 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsCards;