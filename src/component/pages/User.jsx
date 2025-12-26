import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import { MdOutlineModeEdit, MdDeleteOutline } from "react-icons/md";
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";
import AddUser from "../layout/user/AddUser";
import { IoSearchOutline } from "react-icons/io5";

const User = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [addUserPopup, setAddUserPopup] = useState(false);

  const columns = [
    { id: "Name", label: "User Name", minWidth: 170 },
    { id: "Email", label: "Email", minWidth: 170 },
    { id: "ContactNumber", label: "Cantact Number", minWidth: 170 },
    { id: "Status", label: "Status", minWidth: 170 },
    { id: "Created", label: "Created", minWidth: 170 },
    { id: "Action", label: "Action", minWidth: 100 },
  ];
  
  const handleAddUser = () => {
    setAddUserPopup(true);
  }

  const handleCloseUser = () => {
    setAddUserPopup(false);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

const rows = [
  {
    Name: "John Doe",
    Email: "john@example.com",
    ContactNumber: "9876543210",
    Status: "Active",
    Created: "2024-01-10",
  },
  {
    Name: "Jane Smith",
    Email: "jane@example.com",
    ContactNumber: "9123456780",
    Status: "Inactive",
    Created: "2024-01-12",
  },
  {
    Name: "Alex Brown",
    Email: "alex@example.com",
    ContactNumber: "9988776655",
    Status: "Active",
    Created: "2024-01-15",
  },
  {
    Name: "Emma Wilson",
    Email: "emma@example.com",
    ContactNumber: "9090909090",
    Status: "Active",
    Created: "2024-01-18",
  },
  {
    Name: "Mike Jones",
    Email: "mike@example.com",
    ContactNumber: "9871234560",
    Status: "Inactive",
    Created: "2024-01-20",
  },
  {
    Name: "Sarah Lee",
    Email: "sarah@example.com",
    ContactNumber: "9012345678",
    Status: "Active",
    Created: "2024-01-22",
  },
  {
    Name: "David Clark",
    Email: "david@example.com",
    ContactNumber: "9345678123",
    Status: "Active",
    Created: "2024-01-25",
  },
  {
    Name: "Olivia Martin",
    Email: "olivia@example.com",
    ContactNumber: "9887766554",
    Status: "Inactive",
    Created: "2024-01-27",
  },
  {
    Name: "Chris Adams",
    Email: "chris@example.com",
    ContactNumber: "9567891234",
    Status: "Active",
    Created: "2024-01-29",
  },
  {
    Name: "Nina Kumar",
    Email: "nina@example.com",
    ContactNumber: "9876501234",
    Status: "Active",
    Created: "2024-02-01",
  },
  {
    Name: "Rohit Sharma",
    Email: "rohit@example.com",
    ContactNumber: "9123987654",
    Status: "Inactive",
    Created: "2024-02-03",
  },
  {
    Name: "Priya Verma",
    Email: "priya@example.com",
    ContactNumber: "9988123456",
    Status: "Active",
    Created: "2024-02-05",
  },
  {
    Name: "Arjun Mehta",
    Email: "arjun@example.com",
    ContactNumber: "9098765432",
    Status: "Active",
    Created: "2024-02-07",
  },
  {
    Name: "Kavya Nair",
    Email: "kavya@example.com",
    ContactNumber: "9345612789",
    Status: "Inactive",
    Created: "2024-02-09",
  },
  {
    Name: "Rahul Patel",
    Email: "rahul@example.com",
    ContactNumber: "9874561230",
    Status: "Active",
    Created: "2024-02-11",
  },
];

  return (
    <>
      <div className="flex justify-between items-center mb-2"> 
        <div className="flex items-center bg-[#fdfdfd] rounded border-[1px] border-[#335765]">
          <input type="text" placeholder="Search..." className="outline-none px-2 py-1.5 w-[300px]"/>
          <IoSearchOutline className="text-[20px] mr-1.5"/>
        </div>     
        <button className="fill_btn" onClick={handleAddUser}>Add User</button>
      </div>
      <Paper
        elevation={0}
        sx={{ width: "100%", boxShadow: "none", overflow: "hidden" }}
      >
        <TableContainer sx={{ height: 540, boxShadow: "none" }}>
          <Table
            stickyHeader
            aria-label="sticky table"
            sx={{
              "& .MuiTableCell-stickyHeader": {
                boxShadow: "none",
                borderBottom: "none",
                background: "#748d92",
                color: "#fff",
                fontSize: "15px",
                fontWeight: "600",
              },
            }}
          >
            <TableHead>
              <TableRow
                sx={{ "& .MuiTableCell-root": { padding: "14px 15px" } }}
              >
                {columns?.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-[#c7cfd3cf]" : "bg-[#e1e9eaeb]"
                      }`}
                      sx={{
                        "& .MuiTableCell-root": { padding: "14.4px 15px" },
                      }}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            sx={{ borderBottom: "none" }}
                          >
                            {column.id === "Action" ? (
                              <div className="flex items-center gap-3 text-[20px]">
                                <Tooltip
                                  title="Edit"
                                  arrow
                                  className="cursor-pointer hover:text-[#0c8dc0]"
                                >
                                  <MdOutlineModeEdit onClick={handleAddUser}/>
                                </Tooltip>
                                <Tooltip
                                  title="Delete"
                                  arrow
                                  className="cursor-pointer hover:text-[#e61313]"
                                >
                                  <MdDeleteOutline />
                                </Tooltip>
                                <Tooltip
                                  title={
                                    row?.Status === "Active"
                                      ? "InActive User"
                                      : "Active User"
                                  }
                                  arrow
                                  className="cursor-pointer text-[#335765]"
                                >
                                  {" "}
                                  {row?.Status === "Active" ? (
                                    <LiaToggleOnSolid />
                                  ) : (
                                    <LiaToggleOffSolid />
                                  )}
                                </Tooltip>
                              </div>
                            ) : (
                              <Tooltip title={value} arrow>
                                {value}
                              </Tooltip>
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ backgroundColor: "#adbfbd" }}
        />
      </Paper>
      <AddUser open={addUserPopup} onClose={handleCloseUser}/>
    </>
  );
};

export default User;
