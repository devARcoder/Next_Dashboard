import { Search } from 'lucide-react';
import React from 'react';

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-md">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="w-5 h-5 text-[#94A3B8]" />
      </div>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search tasks, projects..."
        className="w-full text-[#94A3B8] pl-10 pr-4 py-2 border border-[#94A3B8] rounded-lg focus:outline-none text-sm"
      />
    </div>
  );
};

export default SearchBar;