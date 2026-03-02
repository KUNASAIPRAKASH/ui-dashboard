"use client";

import { useRouter } from "next/navigation";

import { getFilteredData } from "../data";

interface DataGridProps {
  search: string;
  page: number;
  rowsPerPage: number;
  visibleColumns?: string[];
  statusFilter?: string;
}

export default function DataGrid({
  search,
  page,
  rowsPerPage,
  visibleColumns = ["ID", "Name", "Status", "Role"],
  statusFilter = "",
}: DataGridProps) {
  const router = useRouter();

  // Get the same filtered data used elsewhere
  const filteredData = getFilteredData(search, statusFilter);

  // Pagination logic
  const startIndex = (page - 1) * rowsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  return (
    <div className="h-full bg-[#1e1f24] border border-gray-700 rounded overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-[#2a2b31] text-gray-400">
          <tr>
            {visibleColumns.includes("ID") && (
              <th className="text-left px-4 py-3">ID</th>
            )}
            {visibleColumns.includes("Name") && (
              <th className="text-left px-4 py-3">Name</th>
            )}
            {visibleColumns.includes("Status") && (
              <th className="text-left px-4 py-3">Status</th>
            )}
            {visibleColumns.includes("Role") && (
              <th className="text-left px-4 py-3">Role</th>
            )}
          </tr>
        </thead>

        <tbody>
          {paginatedData.map((row) => (
            <tr
              key={row.id}
              onClick={() => router.push(`/details/${row.id}`)}
              className="border-t border-gray-700 hover:bg-[#2a2b31] cursor-pointer"
            >
              {visibleColumns.includes("ID") && (
                <td className="px-4 py-3">{row.id}</td>
              )}
              {visibleColumns.includes("Name") && (
                <td className="px-4 py-3">{row.name}</td>
              )}
              {visibleColumns.includes("Status") && (
                <td className="px-4 py-3">{row.status}</td>
              )}
              {visibleColumns.includes("Role") && (
                <td className="px-4 py-3">{row.role}</td>
              )}
            </tr>
          ))}

          {paginatedData.length === 0 && (
            <tr>
              <td
                colSpan={visibleColumns.length || 1}
                className="px-4 py-6 text-center text-gray-500"
              >
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}