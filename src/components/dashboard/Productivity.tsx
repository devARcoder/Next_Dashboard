"use client";

import { useState } from "react";
import { ChevronDown, GitGraph, TrendingUp } from "lucide-react";
import Chart from "./Chart";

const ProductivityCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Last 7 Days");

  const options = [
    "Last 7 Days",
    "Last 30 Days",
    "Last 3 Months",
    "This Year",
  ];

  return (
    <div className="relative w-full h-80 lg:h-full border border-[#0F172A] px-5 pb-20 rounded-2xl bg-[#0F172A]">
      
      {/* Header */}
      <div className="flex justify-between items-center py-6">
        <h1 className="text-2xl text-white">Productivity Trends</h1>

        <TrendingUp />
      </div>

      {/* Chart */}
      <Chart />
    </div>
  );
};

export default ProductivityCard;