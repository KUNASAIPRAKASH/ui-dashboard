"use client";

import { useState } from "react";

interface Props {
  visibleColumns: string[];
  setVisibleColumns: (cols: string[]) => void;
  statusFilter: string;
  setStatusFilter: (val: string) => void;
}

const tabs = ["Columns", "Filters"];
const allColumns = ["ID", "Name", "Status", "Role"];

export default function SidePanel({
  visibleColumns = ["ID", "Name", "Status", "Role"],
  setVisibleColumns = () => {},
  statusFilter = "",
  setStatusFilter = () => {},
}: Props) {
  const [active, setActive] = useState("Columns");

  const toggleColumn = (col: string) => {
    if (visibleColumns.includes(col)) {
      setVisibleColumns(visibleColumns.filter((c) => c !== col));
    } else {
      setVisibleColumns([...visibleColumns, col]);
    }
  };

  return (
    <div className="flex">
      {/* Vertical Tabs */}
      <div className="w-20 bg-[#2a2b31] border-l border-gray-700 flex flex-col items-center py-6 gap-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`text-xs rotate-90 transition-colors ${
              active === tab ? "text-white" : "text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Panel */}
      <div className="w-64 bg-[#1e1f24] border-l border-gray-700 p-6">
        {active === "Columns" && (
          <div className="space-y-4">
            <h3 className="text-gray-300 font-semibold">Columns</h3>
            {allColumns.map((col) => (
              <label
                key={col}
                className="flex items-center gap-3 text-gray-300"
              >
                <input
                  type="checkbox"
                  checked={visibleColumns.includes(col)}
                  onChange={() => toggleColumn(col)}
                  className="accent-blue-500"
                />
                {col}
              </label>
            ))}
          </div>
        )}

        {active === "Filters" && (
          <div className="space-y-4">
            <h3 className="text-gray-300 font-semibold">Status Filter</h3>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full bg-[#2a2b31] text-gray-300 border border-gray-600 rounded px-3 py-2"
            >
              <option value="">All</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
}