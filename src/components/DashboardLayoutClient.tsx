"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#121121]">
      
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Area */}
      <div className="flex flex-col flex-1">
        
        {/* Header */}
        <Header setIsOpen={setIsOpen} />

        {/* Content */}
        <main className="flex-1 p-6 text-white">
          {children}
        </main>
      </div>
    </div>
  );
}