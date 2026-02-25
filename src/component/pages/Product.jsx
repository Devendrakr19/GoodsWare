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
import { IoSearchOutline } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import AddProduct from "../layout/product/AddProduct";

const Product = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [addProductPopup, setAddProductPopup] = useState(false);

  const columns = [
    { id: "Product", label: "Product", minWidth: 170 },
    // { id: "category", label: "Category", minWidth: 170 },
    { id: "TotalItem", label: "Available Item", minWidth: 170 },
    // { id: "StockIn", label: "Stock In", minWidth: 170 },
    { id: "StockOut", label: "Item Sold", minWidth: 170 },
    // { id: "CostPrice", label: "Cost Price", minWidth: 170 },
    // { id: "Status", label: "Status", minWidth: 170 },
    { id: "Created", label: "Created", minWidth: 170 },
    { id: "Action", label: "Action", minWidth: 100 },
  ];

  const handleAddProduct = () => {
    setAddProductPopup(true);
  };

  const handleCloseProduct = () => {
    setAddProductPopup(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const rows = [
    {
      Product: "Electronic",
      TotalItem: "50",
      StockIn: "30",
      StockOut: "20",
      CostPrice: "50,000",
      Created: "2024-01-10",
    }, 
    {
      Product: "TextTile",
      TotalItem: "50",
      StockIn: "30",
      StockOut: 0,
      CostPrice: "50,000",
      Created: "2024-01-10",
    },
    {
      Product: "Fetilizer",
      TotalItem: "50",
      StockIn: "30",
      StockOut: "20",
      CostPrice: "50,000",
      Created: "2024-01-10",
    },
    {
      Product: "Cement",
      TotalItem: "50",
      StockIn: "30",
      StockOut: "20",
      CostPrice: "50,000",
      Created: "2024-01-10",
    }, 
  ];

  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center bg-[#fdfdfd] rounded border-[1px] border-[#3357657d]">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none px-2 py-1.5 w-[300px]"
          />
          <IoSearchOutline className="text-[20px] mr-1.5"/>
        </div>
        <button className="fill_btn" onClick={handleAddProduct}>
          Add Product
        </button>
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
                background: "#009E9A",
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
                        index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F1F2F6]"
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
                                {/* <Tooltip
                                  title="View"
                                  arrow
                                  className="cursor-pointer hover:text-[green]"
                                >
                                  <LuEye />
                                </Tooltip> */}
                                <Tooltip
                                  title="Edit"
                                  arrow
                                  className="cursor-pointer text-[#0c8dc0]"
                                >
                                  <MdOutlineModeEdit onClick={handleAddProduct} />
                                </Tooltip>
                                <Tooltip
                                  title="Delete"
                                  arrow
                                  className="cursor-pointer text-[#e61313]"
                                >
                                  <MdDeleteOutline />
                                </Tooltip>
                              </div>
                            ) : (
                              <Tooltip title={value} arrow>
                                {value ?? "N/A"}
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
          sx={{ backgroundColor: "#F1F2F6" }}
        />
      </Paper>
      <AddProduct open={addProductPopup} onClose={handleCloseProduct}/>
    </>
  );
};

export default Product;
