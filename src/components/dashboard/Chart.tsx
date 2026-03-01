"use client";

import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  ResponsiveContainer,
} from "recharts";

type RepoChartData = {
  name: string;
  commits: number;
  createdAt: string;
};

const Chart = () => {
  const [data, setData] = useState<RepoChartData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("/api/github"); // ✅ Use your API route
        const repoData: RepoChartData[] = await res.json();

        // Optional: Sort newest repo first
        const sorted = repoData.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

        setData(sorted);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch repo data:", error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <p className="text-white">Loading GitHub analytics...</p>;

  if (!data.length) return <p className="text-gray-400">No repositories found.</p>;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorCommits" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#7C5CFF" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#7C5CFF" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />

        <XAxis dataKey="name" stroke="#94A3B8" />

        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const repo = payload[0].payload;
              return (
                <div className="bg-[#1E293B] p-4 rounded-xl text-white shadow-lg">
                  <p className="font-semibold">{repo.name}</p>
                  <p>Total Commits: {repo.commits}</p>
                  <p>
                    Created: {new Date(repo.createdAt).toLocaleDateString()}
                  </p>
                </div>
              );
            }
            return null;
          }}
        />

        <Area
          type="monotone"
          dataKey="commits"
          stroke="#7C5CFF"
          fill="url(#colorCommits)"
          strokeWidth={2}
          activeDot={{ r: 6 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;