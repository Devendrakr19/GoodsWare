import {
  Checkbox,
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
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SaleItem = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [product, setProduct] = useState("all");
  const [selectedItems, setSelectedItems] = useState([]);

  const handleChange = (event) => {
    setProduct(event.target.value);
  };

  const columns = [
    { id: "addCart", label: "Add to Cart", minWidth: 70 },
    { id: "brandName", label: "Brand Name", minWidth: 150 },
    { id: "itemName", label: "Item Name", minWidth: 150 },
    { id: "unitPrice", label: "Cost Price", minWidth: 70 },
    { id: "unitSellingPrice", label: "Selling Price", minWidth: 70 },
    { id: "TotalItem", label: "Available Item", minWidth: 70 },
    { id: "StockOut", label: "Sold Item", minWidth: 70 },
    { id: "Status", label: "Status", minWidth: 70 },
    { id: "Created", label: "Added", minWidth: 70 },
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

  const handleCheckboxChange = (row) => {
    setSelectedItems((prev) => {
      const exist = prev.find((item) => item?.itemName === row.itemName);
      if (exist) {
        return prev.filter((item) => item.itemName !== row?.itemName);
      } else {
        return [...prev, row];
      }
    });
  };

  const handleCart = () =>{
    navigate("/sale-item/billing-item", {state: {items : selectedItems}})
  }
  console.log("selectedItems", selectedItems);
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-[#fdfdfd] rounded border-[1px] border-[#3357657d]">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none px-2 py-1.5 w-[300px]"
            />
            <IoSearchOutline className="text-[20px] mr-1.5" />
          </div>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={product}
            size="small"
            onChange={handleChange}
            sx={{
              "& .MuiSelect-select": { padding: "7.5px" },
              minWidth: "120px",
              background: "white",
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
        {selectedItems.length >= 1 && (
          <button className="fill_btn" onClick={handleCart}>
            Go to Cart
          </button>
        )}
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
                sx={{ "& .MuiTableCell-root": { padding: "10px 10px" } }}
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
                        index % 2 === 0 ? "bg-[#c7cfd3cf]" : "bg-[#e1e9eaeb]"
                      }`}
                      sx={{
                        "& .MuiTableCell-root": { padding: "6px 10px" },
                      }}
                    >
                      {columns.map((column) => {
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            sx={{ borderBottom: "none" }}
                            className="truncate"
                          >
                            {column.id === "addCart" ? (
                              <Checkbox
                                size="small"
                                color="primary"
                                checked={selectedItems.some(
                                  (item) => item.itemName === row.itemName
                                )}
                                onChange={() => handleCheckboxChange(row)}
                              />
                            ) : (
                              <Tooltip title={row[column.id] ?? ""} arrow>
                                <span>{row[column.id] ?? "N/A"}</span>
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
    </>
  );
};

export default SaleItem;
