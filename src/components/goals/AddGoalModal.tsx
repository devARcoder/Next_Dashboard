"use client";

import React, { useState } from "react";
import Buttons from "../shared/Buttons";

interface AddGoalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (goal: any) => void;
}

const AddGoalModal = ({ isOpen, onClose, onAdd }: AddGoalModalProps) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    target: "",
    deadline: "",
  });

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.title) return;

    onAdd({
      ...formData,
      progress: 0,
    });

    setFormData({
      title: "",
      description: "",
      category: "",
      target: "",
      deadline: "",
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#1E293B] p-6 rounded-2xl w-[400px] space-y-4">
        <h2 className="text-xl font-semibold">Add New Goal</h2>

        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 rounded bg-[#0F172A] border border-gray-600"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 rounded bg-[#0F172A] border border-gray-600"
        />

        <input
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 rounded bg-[#0F172A] border border-gray-600"
        />

        <input
          name="target"
          placeholder="Target"
          value={formData.target}
          onChange={handleChange}
          className="w-full p-2 rounded bg-[#0F172A] border border-gray-600"
        />

        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          className="w-full p-2 rounded bg-[#0F172A] border border-gray-600"
        />

        <div className="flex gap-3 pt-2">
          <Buttons
            name="Cancel"
            colors="border border-gray-500 text-white w-full"
            onClick={onClose}
          />
          <Buttons
            name="Add Goal"
            colors="bg-blue-600 text-white w-full"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default AddGoalModal;