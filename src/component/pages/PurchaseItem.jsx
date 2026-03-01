import {
  MenuItem,
  Paper,
  Select,
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
import { MdOutlineModeEdit } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import AddItem from "../layout/purchase-item/AddItem";
import ViewItem from "../layout/purchase-item/ViewItem";

const PurchaseItem = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [addItemPopup, setAddItemPopup] = useState(false);
  const [product, setProduct] = useState("all");
  const [viewItem, setViewItem] = useState(false);

  const handleChange = (event) => {
    setProduct(event.target.value);
  };

  const columns = [
    { id: "brandName", label: "Brand Name", minWidth: 150 },
    { id: "itemName", label: "Item Name", minWidth: 150 },
    { id: "unitPrice", label: "Cost Price", minWidth: 70 },
    { id: "unitSellingPrice", label: "Selling Price", minWidth: 70 },
    { id: "TotalItem", label: "Available Item", minWidth: 70 },
    { id: "StockOut", label: "Sold Item", minWidth: 70 },
    { id: "Status", label: "Status", minWidth: 70 },
    { id: "Created", label: "Added", minWidth: 70 },
    { id: "Action", label: "Action", minWidth: 70 },
  ];

  const handleAddItem = () => {
    setAddItemPopup(true);
  };

  const handleCloseItem = () => {
    setAddItemPopup(false);
    setViewItem(false);
  };

  const handleViewItem = () => {
    setViewItem(true);
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
      Product: "Electronics",
      brandName: "Samsung",
      itemName: "LED TV",
      unitOfMeasure: "Piece",
      unitPrice: 45000,
      unitSellingPrice: 75000,
      TotalItem: 10,
      totalPrice: 450000,
      StockIn: 10,
      StockOut: 2,
      Status: "Available",
      Created: "2025-01-01",
    },
    {
      Product: "Electronics",
      brandName: "Apple",
      itemName: "iPhone 14",
      unitOfMeasure: "Piece",
      unitPrice: 70000,
      unitSellingPrice: 75000,
      TotalItem: 8,
      totalPrice: 560000,
      StockIn: 8,
      StockOut: 5,
      Status: "Low Stock",
      Created: "2025-01-03",
    },
    {
      Product: "Grocery",
      brandName: "Tata",
      itemName: "Salt",
      unitOfMeasure: "Kg",
      unitPrice: 25,
      unitSellingPrice: 70,
      TotalItem: 200,
      totalPrice: 5000,
      StockIn: 200,
      StockOut: 40,
      Status: "Available",
      Created: "2025-01-05",
    },
    {
      Product: "Fertilizer",
      brandName: "IFFCO",
      itemName: "Urea",
      unitOfMeasure: "Bag",
      unitPrice: 300,
      unitSellingPrice: 750,
      TotalItem: 100,
      totalPrice: 30000,
      StockIn: 100,
      StockOut: 60,
      Status: "Available",
      Created: "2025-01-07",
    },
    {
      Product: "Clothing",
      brandName: "Levis",
      itemName: "Jeans",
      unitOfMeasure: "Piece",
      unitPrice: 2500,
      unitSellingPrice: 7500,
      TotalItem: 50,
      totalPrice: 125000,
      StockIn: 50,
      StockOut: 20,
      Status: "Available",
      Created: "2025-01-10",
    },
    {
      Product: "Home Decor",
      brandName: "Philips",
      itemName: "Table Lamp",
      unitOfMeasure: "Piece",
      unitPrice: 1800,
      unitSellingPrice: 2500,
      TotalItem: 30,
      totalPrice: 54000,
      StockIn: 30,
      StockOut: 28,
      Status: "Out of Stock",
      Created: "2025-01-12",
    },
    {
      Product: "Electronics",
      brandName: "HP",
      itemName: "Laptop",
      unitOfMeasure: "Piece",
      unitPrice: 55000,
      unitSellingPrice: 75000,
      TotalItem: 6,
      totalPrice: 330000,
      StockIn: 6,
      StockOut: 1,
      Status: "Available",
      Created: "2025-01-15",
    },
    {
      Product: "Grocery",
      brandName: "Fortune",
      itemName: "Cooking Oil",
      unitOfMeasure: "Litre",
      unitPrice: 150,
      unitSellingPrice: 750,
      TotalItem: 120,
      totalPrice: 18000,
      StockIn: 120,
      StockOut: 70,
      Status: "Available",
      Created: "2025-01-18",
    },
    {
      Product: "Stationery",
      brandName: "Classmate",
      itemName: "Notebook",
      unitOfMeasure: "Piece",
      unitPrice: 60,
      unitSellingPrice: 75,
      TotalItem: 300,
      totalPrice: 18000,
      StockIn: 300,
      StockOut: 200,
      Status: "Low Stock",
      Created: "2025-01-20",
    },
    {
      Product: "Footwear",
      brandName: "Puma",
      itemName: "Running Shoes",
      unitOfMeasure: "Pair",
      unitPrice: 4200,
      unitSellingPrice: 7500,
      TotalItem: 20,
      totalPrice: 84000,
      StockIn: 20,
      StockOut: 15,
      Status: "Available",
      Created: "2025-01-22",
    },
    {
      Product: "Furniture",
      brandName: "Godrej",
      itemName: "Office Chair",
      unitOfMeasure: "Piece",
      unitPrice: 6500,
      unitSellingPrice: 7500,
      TotalItem: 15,
      totalPrice: 97500,
      StockIn: 15,
      StockOut: 10,
      Status: "Available",
      Created: "2025-01-24",
    },
    {
      Product: "Electronics",
      brandName: "Boat",
      itemName: "Bluetooth Speaker",
      unitOfMeasure: "Piece",
      unitPrice: 2200,
      unitSellingPrice: 3500,
      TotalItem: 40,
      totalPrice: 88000,
      StockIn: 40,
      StockOut: 35,
      Status: "Low Stock",
      Created: "2025-01-26",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center mb-2 px-[20px]">
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-[#fdfdfd] rounded-full border-[1px] border-[#3357657d]">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none px-5 py-1.5 w-[300px]"
            />
            <IoSearchOutline className="text-[20px] mr-3" />
          </div>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={product}
            size="small"
            onChange={handleChange}
            sx={{
              "& .MuiSelect-select": { padding: "7.5px 20px" },
              minWidth: "120px",
              background: "white",
              borderRadius: "30px",
            }}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="mobile">Electronics</MenuItem>
            <MenuItem value="laptop">Grocery</MenuItem>
            <MenuItem value="tv">Fertilizer</MenuItem>
            <MenuItem value="speaker">Clothing</MenuItem>
            <MenuItem value="headphones">Home Decor</MenuItem>
            <MenuItem value="refrigerator">Stationery</MenuItem>
            <MenuItem value="washing_machine">Footwear</MenuItem>
            <MenuItem value="microwave">Furniture</MenuItem>
          </Select>
        </div>
        <button className="fill_btn !rounded-full" onClick={handleAddItem}>
          Add Item
        </button>
      </div>
      <div className="flex items-center flex-wrap gap-[15px] px-[20px] mt-[15px] mb-[15px] h-[calc(100vh-150px)] overflow-auto">
        {rows.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[white] rounded-[15px] px-[20px] py-[15px] w-[358px] card_shadow"
            >
              <div className="flex items-center justify-between">
                <h1 className="text-[18px] text-[#171717] font-medium">
                  {item?.itemName}
                </h1>
                {item?.Status === "Available" && (
                  <span className="bg-[#E8F5E9] text-[#2E7D32] rounded-full px-[10px] text-[13px]">
                    {item?.Status}
                  </span>
                )}
                {item?.Status === "Low Stock" && (
                  <span className="bg-[#FFF3F0] text-[#EF6C00] rounded-full px-[10px] text-[13px]">
                    {item?.Status}
                  </span>
                )}
                {item?.Status === "Out of Stock" && (
                  <span className="bg-[#FFEBEE] text-[#D32F2F] rounded-full px-[10px] text-[13px]">
                    {item?.Status}
                  </span>
                )}
              </div>
              <div className="text-[#545252]">
                Brand:{" "}
                <span className="text-[black] font-medium">
                  {item?.brandName}
                </span>
              </div>
              <div className="flex items-center justify-between border-t-[1px] border-t-[#efeeee] pt-[8px] mt-[5px]">
                <div className="">
                  Cost{" "}
                  <span className="text-[#2E7D32] font-bold ml-[10px]">
                    ₹{item?.unitPrice}
                  </span>
                </div>
                <div className="">
                  Selling{" "}
                  <span className="text-[#2E7D32] font-bold ml-[10px]">
                    ₹{item?.unitSellingPrice}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between py-[5px]">
                <span>Available</span>
                <span>{item?.StockIn}</span>
              </div>
              <div className="flex items-center justify-between pb-[5px]">
                <span>Sold</span>
                <span>{item?.StockOut}</span>
              </div>
              <div className="flex items-center gap-[5px] text-[14px] text-[#6c6969]">
                <span>Created: </span>
                <span>{item?.Created}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* <Paper
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
                    className="truncate"
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
                            className="truncate"
                          >
                            {column.id === "Action" ? (
                              <div className="flex items-center gap-3 text-[20px]">
                                <Tooltip
                                  title="View"
                                  arrow
                                  className="cursor-pointer text-[#198143]"
                                >
                                  <LuEye onClick={handleViewItem}/>
                                </Tooltip>
                                <Tooltip
                                  title="Edit"
                                  arrow
                                  className="cursor-pointer text-[#0c8dc0]"
                                >
                                  <MdOutlineModeEdit onClick={handleAddItem} />
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
      </Paper> */}
      <AddItem open={addItemPopup} onClose={handleCloseItem} />
      <ViewItem open={viewItem} onClose={handleCloseItem} />
    </>
  );
};

export default PurchaseItem;
