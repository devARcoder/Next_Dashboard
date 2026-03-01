"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
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

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-[#1E293B] text-sm rounded-lg hover:bg-[#334155] transition"
          >
            {selected}
            <ChevronDown
              size={16}
              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-[#1E293B] rounded-lg shadow-lg border border-white/10 overflow-hidden z-50">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelected(option);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm transition ${
                    selected === option
                      ? "bg-[#334155] text-white"
                      : "text-gray-300 hover:bg-[#334155] hover:text-white"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Chart */}
      <Chart />
    </div>
  );
};

export default ProductivityCard;