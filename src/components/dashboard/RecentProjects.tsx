"use client";

import { useEffect, useState } from "react";
import ProjectsCard from "./ProjectsCard";
import { Boxes } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  commitCount?: number;
}

export default function RecentProjects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("/api/recent-projects");
        const data = await res.json();
        setRepos(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch repos:", error);
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="text-white text-center py-10">
        Loading recent projects...
      </div>
    );
  }

  if (!repos.length) {
    return (
      <div className="text-[#94A3B8] text-center py-10">
        No recent projects found.
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {repos.map((repo) => {
        // ✅ Safe commit count
        const commitCount = Number(repo.commitCount) || 0;

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
          <ProjectsCard
            key={repo.id}
            icon={<Boxes size={20} />}
            stateHeading={isCompleted ? "Completed" : "On Track"}
            title={repo.name}
            desc={repo.description || "No description provided"}
            progressPercent={`${progressValue}%`}
            textColor={
              isCompleted
                ? "text-green-400 bg-green-400/10"
                : "text-[#6366F1] bg-[#6366F1]/10"
            }
            iconColor={
              isCompleted ? "text-green-400" : "text-[#6366F1]"
            }
            iconBgColor={
              isCompleted ? "bg-green-400/10" : "bg-[#6366F1]/10"
            }
          />
        );
      })}
    </div>
  );
}