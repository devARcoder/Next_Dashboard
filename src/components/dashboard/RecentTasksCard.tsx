"use client"
import React, { useState } from "react"
import { Check } from "lucide-react"

const RecentTasksCard = ({
  title,
  stateTitle,
  stateColor
}: {
  title: string
  stateTitle: string
  stateColor: string
}) => {

  const [isCompleted, setIsCompleted] = useState(false)

  return (
    <div className='flex gap-4 items-center bg-[#1E293B] p-5 rounded-2xl my-4 transition-all'>

      {/* Custom Checkbox */}
      <label className="relative flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => setIsCompleted(!isCompleted)}
          className="sr-only"
        />

        <div
          className={`w-6 h-6 flex items-center justify-center 
          rounded-full border-2 transition-all duration-200
          ${isCompleted
            ? "bg-[#1E293B] border-[#334155]"
            : "border-[#334155] bg-transparent"
          }`}
        >
          <Check
            size={14}
            className={`transition-all duration-200
              ${isCompleted ? "opacity-100 scale-100 text-white" : "opacity-0 scale-50"}
            `}
          />
        </div>
      </label>

      {/* Task Content */}
      <div>
        <h1
          className={`text-lg font-semibold transition-all duration-200
          ${isCompleted ? "line-through text-gray-400" : "text-white"}`}
        >
          {title}
        </h1>

        <p className={`${stateColor || ""} w-fit px-2 py-0.5 rounded-xl uppercase text-xs`}>
          {stateTitle}
        </p>
      </div>

    </div>
  )
}

export default RecentTasksCard