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
import { LiaToggleOffSolid, LiaToggleOnSolid  } from "react-icons/lia";
const User = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const columns = [
    { id: "UserName", label: "User Name", minWidth: 170 },
    { id: "Email", label: "Email", minWidth: 170 },
    { id: "ContactNumber", label: "Cantact Number", minWidth: 170 },
    { id: "Status", label: "Status", minWidth: 170 },
    { id: "Created", label: "Created", minWidth: 170 },
    { id: "Action", label: "Action", minWidth: 100 },
  ];

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


  const rows = [
    {
      UserName: "Devendra",
      Email: "Devendra",
      ContactNumber: "Devendra",
      Status: "Active",
      Created: "Devendra",
    },
    {
      UserName: "Devendra",
      Email: "Devendra",
      ContactNumber: "Devendra",
      Status: "Active",
      Created: "Devendra",
    },
    {
      UserName: "Devendra",
      Email: "Devendra",
      ContactNumber: "Devendra",
      Status: "Active",
      Created: "Devendra",
    },
    {
      UserName: "Devendra",
      Email: "Devendra",
      ContactNumber: "Devendra",
      Status: "Active",
      Created: "Devendra",
    },
    {
      UserName: "Devendra",
      Email: "Devendra",
      ContactNumber: "Devendra",
      Status: "Active",
      Created: "Devendra",
    },
    {
      UserName: "Devendra",
      Email: "Devendra",
      ContactNumber: "Devendra",
      Status: "InActive",
      Created: "Devendra",
    },
    {
      UserName: "Devendra",
      Email: "Devendra",
      ContactNumber: "Devendra",
      Status: "InActive",
      Created: "Devendra",
    },
    {
      UserName: "Devendra",
      Email: "Devendra",
      ContactNumber: "Devendra",
      Status: "InActive",
      Created: "Devendra",
    },
    {
      UserName: "Devendra",
      Email: "Devendra",
      ContactNumber: "Devendra",
      Status: "Devendra",
      Created: "Devendra",
    },
    {
      UserName: "Devendra",
      Email: "Devendra",
      ContactNumber: "Devendra",
      Status: "Devendra",
      Created: "Devendra",
    },
    {
      UserName: "Devendra",
      Email: "Devendra",
      ContactNumber: "Devendra",
      Status: "Devendra",
      Created: "Devendra",
    },
    {
      UserName: "Devendra",
      Email: "Devendra",
      ContactNumber: "Devendra",
      Status: "Devendra",
      Created: "Devendra",
    },
    {
      UserName: "Devendra",
      Email: "Devendra",
      ContactNumber: "Devendra",
      Status: "Devendra",
      Created: "Devendra",
    },
    {
      UserName: "Devendra",
      Email: "Devendra",
      ContactNumber: "Devendra",
      Status: "Devendra",
      Created: "Devendra",
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-[20px] font-semibold">Users List</h1>
        <button className="fill_btn">Add User</button>
      </div>
      <Paper elevation={0} sx={{ width: "100%", boxShadow:"none", overflow: "hidden" }}>
        <TableContainer sx={{ height: 540, boxShadow:"none",}}>
          <Table stickyHeader aria-label="sticky table"  sx={{
                "& .MuiTableCell-stickyHeader": {
                boxShadow: "none",
                borderBottom: "none", 
                background:"#748d92",
                color:"#fff",
                fontSize:"15px",
                fontWeight:"600"
                },
            }}>
            <TableHead>
              <TableRow sx={{"& .MuiTableCell-root": {padding:"14px 15px"}}}>
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
                      className={`${index % 2 === 0 ? "bg-[#c7cfd3cf]" : "bg-[#e1e9eaeb]"}`} 
                      sx={{"& .MuiTableCell-root": {padding:"14.4px 15px"}}}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align} sx={{borderBottom:"none"}}>
                            {column.id === "Action" ? (
                                <div className="flex items-center gap-3 text-[20px]">
                                    <Tooltip title="Edit" arrow className="cursor-pointer hover:text-[#335765]"><MdOutlineModeEdit/></Tooltip>
                                    <Tooltip title="Delete" arrow className="cursor-pointer hover:text-[#335765]"><MdDeleteOutline/></Tooltip>
                                    <Tooltip title={row?.Status === "Active" ? "InActive User" : "Active User"} arrow className="cursor-pointer text-[#335765]"> {row?.Status=== "Active" ? <LiaToggleOnSolid/> : <LiaToggleOffSolid/> }</Tooltip>
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
          sx={{backgroundColor:"#adbfbd"}}
        />
      </Paper>
    </>
  );
};

export default User;
