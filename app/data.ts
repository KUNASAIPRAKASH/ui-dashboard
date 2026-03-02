export interface Row {
  id: number;
  name: string;
  status: string;
  role: string;
}

export const dummyData: Row[] = [
  { id: 1, name: "John Doe", status: "Active", role: "Admin" },
  { id: 2, name: "Jane Smith", status: "Pending", role: "User" },
  { id: 3, name: "Michael Brown", status: "Active", role: "Editor" },
  { id: 4, name: "Emily Clark", status: "Inactive", role: "User" },
  { id: 5, name: "David Wilson", status: "Active", role: "Admin" },
  { id: 6, name: "Sophia Lee", status: "Pending", role: "User" },
  { id: 7, name: "Daniel King", status: "Active", role: "Editor" },
];


export function getFilteredData(
  search: string = "",
  statusFilter: string = ""
): Row[] {
  const searchValue = search?.toLowerCase() || "";

  return dummyData.filter((row) => {
    const matchesSearch =
      row.id.toString().includes(searchValue) ||
      row.name.toLowerCase().includes(searchValue) ||
      row.status.toLowerCase().includes(searchValue) ||
      row.role.toLowerCase().includes(searchValue);

    const matchesStatus =
      statusFilter === "" || row.status === statusFilter;

    return matchesSearch && matchesStatus;
  });




}



