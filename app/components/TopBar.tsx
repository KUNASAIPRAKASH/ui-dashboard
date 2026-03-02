"use client";

import { Filter, RefreshCw } from "lucide-react";

interface TopBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function TopBar({ search, setSearch }: TopBarProps) {
  return (
    <div className="p-4 border-b border-gray-700 bg-[#2a2b31]">
      <div className="flex items-center justify-between">

        {/* Search Input */}
        <div className="flex items-center bg-[#1f2024] border border-gray-600 rounded px-3 h-10">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="bg-transparent outline-none text-sm text-gray-200 w-64"
          />
          <Filter size={16} className="text-gray-400 ml-2" />
        </div>

        {/* Refresh Button */}
        <button
          onClick={() => setSearch("")}
          className="h-10 w-10 flex items-center justify-center rounded border border-gray-600 bg-[#1f2024] hover:bg-[#232428]"
        >
          <RefreshCw size={16} className="text-gray-300" />
        </button>

      </div>
    </div>
  );
}