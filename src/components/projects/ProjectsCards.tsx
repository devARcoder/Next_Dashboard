"use client";

import { PenBox } from "lucide-react";
import React, { useEffect, useState } from "react";
import ProjectsSkeleton from "./ProjectsSkeleton";

type Repo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  createdAt: string;
  commits: number;
};

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

        const sorted = data.sort(
          (a: Repo, b: Repo) =>
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
        );

        setRepos(sorted);
      } catch (err) {
        console.error("Error fetching repos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <ProjectsSkeleton />;

  return (
    <div className="my-6">
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => {
          const language = repo.language || "Unknown";
          const colorClass =
            languageColors[language] || languageColors["Unknown"];
          const createdDate = new Date(
            repo.createdAt
          ).toLocaleDateString();

          const progress = Math.min(repo.commits, 100);

           const commitCount = Number(repo.commits) || 0;

        // 🎯 5 commits = 10%
        let progressValue = Math.floor((commitCount / 5) * 10);

        // ✅ Prevent NaN or negative
        if (!Number.isFinite(progressValue) || progressValue < 0) {
          progressValue = 0;
        }

        // ✅ Cap at 100%
        progressValue = Math.min(progressValue, 100);

        const isCompleted = progressValue === 100;

          return (
            <div
              key={repo.name}
              className="border border-[#0F172A] p-6 rounded-2xl bg-[#0F172A] 
              hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <span
                  className={`px-3 py-1 rounded-2xl text-xs font-semibold uppercase ${colorClass}`}
                >
                  {language}
                </span>

                <PenBox className="w-5 h-5 text-[#94A3B8]" />
              </div>

              {/* Title */}
              <h3 className="text-white text-xl font-semibold line-clamp-1">
                {repo.name}
              </h3>

              <p className="text-[#94A3B8] line-clamp-2 mt-2">
                {repo.description || "No description provided."}
              </p>

              {/* Stats Row */}
              <div className="flex items-center gap-4 text-xs text-[#94A3B8] mt-4">
                <span>Created: {createdDate}</span>
                <span>Commits: {repo.commits}</span>
              </div>

              {/* Progress */}
<div className="mt-5">
  <div className="flex justify-between items-center mb-1">
    <span className="text-[#94A3B8] text-sm">
      Progress
    </span>

    {isCompleted ? (
      <span className="text-green-500 font-semibold text-sm">
        Completed
      </span>
    ) : (
      <span className="text-white font-semibold text-sm">
        {progressValue}%
      </span>
    )}
  </div>

  <div className="h-3 rounded-full bg-black/20">
    <div
      className={`h-3 rounded-full transition-all duration-700 ${
        isCompleted ? "bg-green-500" : "bg-blue-700"
      }`}
      style={{ width: `${progressValue}%` }}
    />
  </div>
</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsCards;