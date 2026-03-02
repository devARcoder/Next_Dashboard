"use client";

import { useEffect, useState } from "react";
import RecentTasksCard from "./RecentTasksCard";
import { GitCommit, Github, PlusSquare } from "lucide-react";
import RecentCommitsSkeleton from "./RecentCommitsSkeleton";

interface Commit {
  id: string;
  message: string;
  repoName: string;
  date: string;
}

export default function RecentCommits() {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const res = await fetch("/api/recent-commits");
        const data = await res.json();
        setCommits(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch commits", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();
  }, []);

  if (loading) {
    return (
      <RecentCommitsSkeleton />
    );
  }

  if (!commits.length) {
    return (
      <div className="text-gray-400 text-center py-6 border border-[#0F172A] rounded-xl bg-[#0F172A]">
        No recent commits found.
      </div>
    );
  }

  return (
    <div className="border border-[#0F172A] p-5 rounded-xl bg-[#0F172A]">
        <div className="heading flex justify-between items-center pb-3">
        <h1 className='text-2xl text-[#FFFFFF] font-semibold'>Recent Commits</h1>
        <Github className='text-[#5048E5]' />
      </div>
      {commits.map((commit) => (
        <RecentTasksCard
          key={commit.id}
          title={`${commit.message}`}
          stateTitle={commit.repoName}
          stateColor="bg-indigo-500/10 text-indigo-400"
        />
      ))}
    </div>
  );
}