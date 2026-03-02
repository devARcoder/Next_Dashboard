"use client";

import { TrendingUp } from "lucide-react";
import Chart from "./Chart";

const ProductivityCard = () => {
  return (
    <div className="relative w-full h-80 lg:h-full border border-[#0F172A] px-5 pb-20 rounded-2xl bg-[#0F172A]">
      
      {/* Header */}
      <div className="flex justify-between items-center py-6">
        <h1 className="text-2xl text-white font-semibold">Products Activities</h1>

        <TrendingUp />
      </div>

      {/* Chart */}
      <Chart />
    </div>
  );
};

export default ProductivityCard;