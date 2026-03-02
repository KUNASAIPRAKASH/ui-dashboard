"use client";

import { useState } from "react";
import TopBar from "./components/TopBar";
import DataGrid from "./components/DataGrid";
import Pagination from "./components/Pagination";
import SidePanel from "./components/SidePanel";
import { getFilteredData } from "./data";

export default function DashboardClient() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const [visibleColumns, setVisibleColumns] = useState([
    "ID",
    "Name",
    "Status",
    "Role",
  ]);

  const [statusFilter, setStatusFilter] = useState("");

  const filteredData = getFilteredData(search, statusFilter);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredData.length / rowsPerPage)
  );

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleStatusFilterChange = (value: string) => {
    setStatusFilter(value);
    setPage(1);
  };

  return (
    <div className="bg-[#1e1f24] min-h-screen text-gray-200 flex">
      <div className="flex-1 flex flex-col">
        <TopBar search={search} setSearch={handleSearchChange} />

        <div className="flex-1 p-4 overflow-auto">
          <DataGrid
            search={search}
            page={page}
            rowsPerPage={rowsPerPage}
            visibleColumns={visibleColumns}
            statusFilter={statusFilter}
          />
        </div>

        <Pagination
          page={page}
          setPage={setPage}
          maxPage={totalPages}
        />
      </div>

      <SidePanel
        visibleColumns={visibleColumns}
        setVisibleColumns={setVisibleColumns}
        statusFilter={statusFilter}
        setStatusFilter={handleStatusFilterChange}
      />
    </div>
  );
}