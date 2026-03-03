"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

const RecentTasksCard = ({
  title,
  stateTitle,
  stateColor,
  time,
  date,
}: {
  title: string;
  stateTitle: string;
  stateColor: string;
  time?: string;
  date?: string;
}) => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className=" group my-4 w-full max-w-md mx-auto">
      {/* Floating Time & Date */}
      {(time || date) && (
        <div className=" flex items-center justify-center gap-2 bg-[#1E293B] px-3 py-1 border border-[#334155] text-xs text-gray-400 shadow-md">
          {time && <span>{time}</span>}
          {time && date && <span>|</span>}
          {date && <span>{date}</span>}
        </div>
      )}
      {/* Card */}
      <div
        className={`flex flex-col items-center justify-center gap-1 
          bg-gradient-to from-[#1E293B] to-[#0F172A] 
          hover:from-[#1E293B]/80 hover:to-[#0F172A]/80
          p-4 transition-all duration-300 
          border border-[#1E293B] hover:border-[#334155] shadow-sm`}
      >
        <h1
          className={`text-base md:text-lg font-semibold line-clamp-1 transition-all duration-200
            ${isCompleted ? "line-through text-gray-500" : "text-white group-hover:text-indigo-400"}`}
        >
          {title}
        </h1>

        <p className={`${stateColor} mt-1 px-3 py-1 rounded-xl text-xs font-medium w-fit`}>
          {stateTitle}
        </p>
      </div>
    </div>
  );
};

export default RecentTasksCard;