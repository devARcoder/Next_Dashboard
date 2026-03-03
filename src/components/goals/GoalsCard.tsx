"use client";

import { MoreVertical, CheckCircle } from "lucide-react";
import React from "react";
import Buttons from "../shared/Buttons";

interface GoalsCardProps {
  id: number;
  title: string;
  description: string;
  progress: number;
  category: string;
  target: string;
  deadline: string;
  onUpdate: (id: number) => void;
}

const GoalsCard = ({
  id,
  title,
  description,
  progress,
  category,
  target,
  deadline,
  onUpdate,
}: GoalsCardProps) => {
  const isCompleted = progress >= 100;

  const getProgressColor = () => {
    if (progress < 40) return "border-red-500 text-red-500";
    if (progress < 80) return "border-yellow-400 text-yellow-400";
    if (progress < 100) return "border-blue-500 text-blue-500";
    return "border-green-500 text-green-500";
  };

  return (
    <div className="space-y-4 p-5 bg-[#1E293B] rounded-2xl">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-6">
          <div
            className={`border-4 p-4 rounded-full font-semibold ${getProgressColor()}`}
          >
            {progress}%
          </div>

          <div className="flex flex-col items-start gap-1">
            <span className="uppercase bg-blue-950 text-blue-500 text-xs rounded-full px-2 py-1 font-semibold">
              {category}
            </span>

            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="text-sm text-gray-400">{description}</p>

            
          </div>
        </div>

        <MoreVertical className="text-gray-400 cursor-pointer" />
      </div>

      <div className="flex flex-col gap-2 py-4">
        <div className="flex justify-between">
          <span className="text-[#94A3B8]">Target:</span>
          <p>{target}</p>
        </div>
        <div className="flex justify-between">
          <span className="text-[#94A3B8]">Deadline:</span>
          <p>{deadline}</p>
        </div>
      </div>

      {!isCompleted && (
        <div className="flex gap-3">
          <Buttons
            name="Update Stats"
            colors="bg-blue-600 text-white w-full"
            onClick={() => onUpdate(id)}
          />
          <Buttons
            name="Details"
            colors="border border-[#94A3B8] text-white px-4"
          />
        </div>
      )}
      {isCompleted && (
              <div className="flex items-center gap-1 text-green-500 text-sm font-medium mt-1">
                <CheckCircle size={16} />
                Successful
              </div>
            )}
    </div>
  );
};

export default GoalsCard;