"use client";

import React, { useState } from "react";
import GoalsCard from "@/components/goals/GoalsCard";
import Buttons from "@/components/shared/Buttons";
import Heading from "@/components/shared/Heading";
import AddGoalModal from "@/components/goals/AddGoalModal";
import { PlusCircle } from "lucide-react";

interface Goal {
  id: number;
  title: string;
  description: string;
  progress: number;
  category: string;
  target: string;
  deadline: string;
}

const GoalsPage = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddGoal = (goalData: Omit<Goal, "id">) => {
    const newGoal: Goal = {
      id: Date.now(),
      ...goalData,
    };

    setGoals((prev) => [...prev, newGoal]);
  };

  const handleUpdateProgress = (id: number) => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === id
          ? { ...goal, progress: Math.min(goal.progress + 10, 100) }
          : goal
      )
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <Heading
          title="Focus Area"
          para="Track your long time ambitions and milestones."
        />

        <Buttons
          icon={<PlusCircle size={18} />}
          name="Add New Goal"
          colors="bg-blue-600 text-white"
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {goals.map((goal) => (
          <GoalsCard
            key={goal.id}
            {...goal}
            onUpdate={handleUpdateProgress}
          />
        ))}
      </div>

      <AddGoalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddGoal}
      />
    </div>
  );
};

export default GoalsPage;