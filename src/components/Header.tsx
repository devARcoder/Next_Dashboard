"use client";

import { Bell, Search, Menu, User } from "lucide-react";

const Header = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex items-center justify-between p-4 text-[] shadow-md bg-[#121121] sticky top-0 z-10">
      
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden"
      >
        <Menu className="text-[#94A3B8]" size={24} />
      </button>

      <h1 className="hidden md:block text-[#ffffff]">Dashboard</h1>

      <div className="flex items-center gap-4">
        <Search className="text-[#94A3B8]" />
        <Bell className="text-[#94A3B8]"/>
        <div className="border border-[#94A3B8] rounded-full p-1">
          <User className="w-5 h-5 text-[#94A3B8]" />
        </div>
      </div>
    </div>
  );
};

export default Header;