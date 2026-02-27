"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { SidebarData } from "../../constants";
import { usePathname } from "next/navigation";

const Sidebar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-screen w-64 bg-[#18172b] text-white z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static
        `}
      >
        {/* Mobile Header */}
        <div className="flex justify-between items-center p-4 border-b border-white/10 md:hidden">
          <h1 className="text-lg font-bold tracking-wide">ARD</h1>
          <button onClick={() => setIsOpen(false)}>
            <X className="text-[#94A3B8]" size={24} />
          </button>
        </div>

        {/* Desktop Logo */}
        <div className="hidden md:block p-4 border-b border-white/10">
          <h1 className="text-lg font-bold tracking-wide">ARD</h1>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 p-4">
          {SidebarData.map((item, index) => {
            const isActive = pathname === item.link;

            return (
              <Link
                key={index}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className={`
                  relative px-4 py-2 rounded-lg transition-all duration-200 group
                  ${
                    isActive
                      ? "bg-[#1E293B] text-white shadow-md"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                {/* Left Active Indicator */}
                {isActive && (
                  <span className="absolute left-0 top-0 h-full w-1 bg-[#94A3B8] rounded-r-md" />
                )}

                <span className="relative z-10">{item.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;