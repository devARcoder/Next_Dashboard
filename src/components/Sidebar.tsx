"use client";

import React, { useState } from "react";
import { SidebarData } from "../../constants";
import Link from "next/link";
import { X, Menu } from "lucide-react";

const Sidebar = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu button for small screens */}
      <button
        className="md:hidden fixed text-white top-4 right-4 z-50 p-2 rounded "
        onClick={() => setIsOpen(true)}
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-none text-white shadow-lg z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:w-64
          ${className || ""}
        `}
      >
        {/* Close button for small screens */}
        <div className="flex justify-between items-center p-4 md:hidden">
          <h1 className="text-xl font-bold">Sidebar</h1>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Sidebar links */}
        <div className="flex flex-col gap-4 p-4 mt-0 md:mt-4">
          {SidebarData.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-white hover:text-white/80"
              onClick={() => setIsOpen(false)} // <-- Close sidebar when link clicked
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;