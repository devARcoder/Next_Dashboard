"use client"

import React, { useState } from "react"
import { Check, GitCommit } from "lucide-react"

const RecentTasksCard = ({
  title,
  stateTitle,
  stateColor,
  time
}: {
  title: string
  stateTitle: string
  stateColor: string
  time?: string
}) => {

  const [isCompleted, setIsCompleted] = useState(false)

  return (
    <div className={`group flex justify-between items-center gap-4 
      bg-gradient-to from-[#1E293B] to-[#0F172A] 
      hover:from-[#1E293B]/80 hover:to-[#0F172A]/80
      p-5 rounded-2xl my-4 transition-all duration-300 
      border border-[#1E293B] hover:border-[#334155]`}>

      {/* Left Section */}
      <div className="flex items-start gap-4">

        {/* Checkbox */}
        <label className="relative flex items-center cursor-pointer mt-1">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => setIsCompleted(!isCompleted)}
            className="sr-only"
          />

          <div
            className={`w-6 h-6 flex items-center justify-center 
            rounded-full border-2 transition-all duration-300
            ${isCompleted
              ? "bg-green-500 border-green-500 scale-110"
              : "border-[#334155] bg-transparent group-hover:border-indigo-400"
            }`}
          >
            <Check
              size={14}
              className={`transition-all duration-300
                ${isCompleted ? "opacity-100 scale-100 text-white" : "opacity-0 scale-50"}
              `}
            />
          </div>
        </label>

        {/* Commit Content */}
        <div>
          <div className="flex items-center gap-2">

            <GitCommit size={16} className="text-indigo-400" />

            <h1
              className={`text-base md:text-lg line-clamp-1 font-semibold transition-all duration-200
              ${isCompleted
                ? "line-through text-gray-500"
                : "text-white group-hover:text-indigo-400"
              }`}
            >
              {title}
            </h1>
          </div>

          <div className="flex items-center gap-3 mt-2">

            {/* Repo Badge */}
            <p className={`${stateColor} px-2 py-1 rounded-xl text-xs font-medium`}>
              {stateTitle}
            </p>

            {/* Time */}
            {time && (
              <span className="text-xs text-gray-500">
                {time}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Right Glow Effect */}
      <div className="w-2 h-2 rounded-full bg-indigo-500 opacity-0 
        group-hover:opacity-100 transition-all duration-300 blur-sm">
      </div>

    </div>
  )
}

export default RecentTasksCard