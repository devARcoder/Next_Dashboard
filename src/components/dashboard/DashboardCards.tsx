"use client";

import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Folder, GitPullRequest, Code, Calendar } from "lucide-react";

type RepoData = {
  name: string;
  commits: number;
  language: string | null;
  createdAt: string;
};

const DashboardCards = () => {
  const [repos, setRepos] = useState<RepoData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("/api/github");
        const data = await res.json();
        setRepos(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setRepos([]);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Skeleton Loader
  if (loading)
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-9 py-9">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="border border-[#1d2842] bg-[#0F172A] rounded-xl p-6 h-40 animate-pulse"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
              <div className="w-12 h-6 bg-gray-700 rounded-md"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              <div className="h-6 bg-gray-700 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    );

  // Total Projects
  const totalProjects = repos.length;

  // Most commits in a repo
  const mostCommits = repos.reduce(
    (max, repo) => (repo.commits > max ? repo.commits : max),
    0
  );

  // Most used language
  const languageCount: Record<string, number> = {};
  repos.forEach((repo) => {
    const lang = repo.language || "Unknown";
    languageCount[lang] = (languageCount[lang] || 0) + 1;
  });
  let mostLanguage = "N/A";
  let mostLanguageNumber = 0;
  for (const [lang, count] of Object.entries(languageCount)) {
    if (count > mostLanguageNumber) {
      mostLanguageNumber = count;
      mostLanguage = lang;
    }
  }

  // Recently created repos (last 30 days)
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const recentRepos = repos.filter(
    (repo) => new Date(repo.createdAt) >= thirtyDaysAgo
  ).length;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-9 py-9">
      <Card
        className="bg-yellow-700 text-white"
        icon={<Folder />}
        percent=""
        name="Total Projects"
        number={totalProjects}
        colorName="text-yellow-500"
      />
      <Card
        className="bg-purple-700 text-white"
        icon={<GitPullRequest />}
        percent=""
        name="Most Commits"
        number={mostCommits}
        colorName="text-purple-500"
      />
      <Card
        className="bg-green-700 text-white"
        icon={<Code />}
        percent=""
        name={`Most Language: ${mostLanguage}`}
        number={mostLanguageNumber}
        colorName="text-green-500"
      />
      <Card
        className="bg-blue-700 text-white"
        icon={<Calendar />}
        percent=""
        name="New Repos (30 Days)"
        number={recentRepos}
        colorName="text-blue-500"
      />
    </div>
  );
};

export default DashboardCards;