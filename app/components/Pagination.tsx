"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  maxPage: number;
}

export default function Pagination({
  page,
  setPage,
  maxPage,
}: PaginationProps) {
  return (
    <div className="h-12 border-t border-gray-700 bg-[#2a2b31] flex items-center justify-between px-4 text-sm text-gray-400">
      <div>
        Page <span className="text-white">{page}</span> of {maxPage}
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="hover:text-white"
          disabled={page <= 1}
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={() => setPage((p) => Math.min(maxPage, p + 1))}
          className="hover:text-white"
          disabled={page >= maxPage}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}