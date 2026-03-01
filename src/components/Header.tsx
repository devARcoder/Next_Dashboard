"use client";

import { useState, useEffect, useRef } from "react";
import { Bell, Search, Menu, User, X } from "lucide-react";
import SearchBar from "./shared/SearchBar";

const Header = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // 🔥 Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };

    if (searchOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [searchOpen]);

  // 🔥 Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target as Node)
      ) {
        setSearchOpen(false);
      }
    };

    if (searchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchOpen]);

  return (
    <>
      <div className="flex items-center justify-between p-4 shadow-md bg-[#18172b] sticky top-0 z-10">
        
        {/* Mobile Menu */}
        <button onClick={() => setIsOpen(true)} className="md:hidden">
          <Menu className="text-[#94A3B8]" size={24} />
        </button>

        {/* Desktop Search */}
        <div className="hidden md:block w-1/3">
          <SearchBar />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <Search
            onClick={() => setSearchOpen(true)}
            className="text-[#94A3B8] md:hidden cursor-pointer"
          />
          <Bell className="text-[#94A3B8]" />
          <div className="border border-[#94A3B8] rounded-full p-1">
            <User className="w-5 h-5 text-[#94A3B8]" />
          </div>
        </div>
      </div>

      {/* 🔥 Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start justify-center pt-24 px-4">
          
          <div
            ref={modalRef}
            className="bg-[#1E1B3A] w-full max-w-lg p-5 rounded-2xl relative
                       animate-scaleIn"
          >
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute top-7 z-50 right-7"
            >
              <X className="text-[#94A3B8] cursor-pointer" />
            </button>

            <SearchBar />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;