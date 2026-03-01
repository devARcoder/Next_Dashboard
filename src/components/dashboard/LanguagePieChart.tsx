"use client";

import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

type Repo = {
  id: number;
  language: string | null;
};

type LanguageData = {
  name: string;
  value: number;
};

/* 🎨 Realistic GitHub Language Colors */
const languageColors: Record<string, string> = {
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Python: "#3776AB",
  HTML: "#E34F26",
  CSS: "#1572B6",
  Java: "#B07219",
  C: "#555555",
  "C++": "#F34B7D",
  PHP: "#777BB4",
  Go: "#00ADD8",
  Rust: "#DEA584",
  Unknown: "#64748B", // slate fallback
};

const LanguagePieChart = () => {
  const [data, setData] = useState<LanguageData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/devARcoder/repos")
      .then((res) => res.json())
      .then((repos: Repo[]) => {
        const languageCount: Record<string, number> = {};

        repos.forEach((repo) => {
          const lang = repo.language || "Unknown";
          languageCount[lang] = (languageCount[lang] || 0) + 1;
        });

        const formattedData = Object.entries(languageCount).map(
          ([name, value]) => ({
            name,
            value,
          })
        );

        setData(formattedData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-white">Loading chart...</p>;

  return (
    <div className="bg-[#0F172A] p-6 rounded-2xl h-[80vh]">
      <h2 className="text-white text-xl font-semibold mb-4">
        Language Distribution
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={130}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  languageColors[entry.name] || languageColors["Unknown"]
                }
              />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "none",
              borderRadius: "12px",
              color: "black",
            }}
          />

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LanguagePieChart;