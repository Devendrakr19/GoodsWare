import {
  Autocomplete,
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
  TextField,
  Tooltip,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import CustomerDetail from "../layout/sale-item/CustomerDetail";

const SaleItem = () => {
  const [billingItem, setBillingItem] = useState([
    {
      brandName: "",
      itemName: "",
      quantity: "",
      unitOfMeasure: "",
      unitSellingPrice: "",
      discount: "",
      Tax: "",
      Taxamoount: "",
      totalPrice: "",
    },
  ]);

  const columns = [
    { id: "itemName", label: "Item Name", width: 200 },
    { id: "brandName", label: "Brand Name", width: 160 },
    { id: "quantity", label: "Quantity", width: 90 },
    { id: "unitOfMeasure", label: "Qty Unit", width: 130 },
    { id: "unitSellingPrice", label: "Selling Price", width: 120 },
    { id: "discount", label: "Discount (%)", width: 110 },
    { id: "Tax", label: "Tax (%)", width: 90 },
    { id: "Taxamoount", label: "Tax Amount", width: 110 },
    { id: "totalPrice", label: "Total Price", width: 130 },
    { id: "Action", label: "Action", width: 80 },
  ];

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      console.log("vl", values);
    },
  });

  const handleDeleteItem = (index) => {
    const items = billingItem.filter((_, i) => i !== index);
    setBillingItem(items);
  };

  const handleAddItem = () => {
    setBillingItem((prev) => [
      {
        brandName: "",
        itemName: "",
        quantity: "",
        unitOfMeasure: "",
        unitSellingPrice: "",
        discount: "",
        Tax: "",
        Taxamoount: "",
        totalPrice: "",
      },
      ...prev,
    ]);
  };

  const dummyItems = [
    { id: 1, name: "Iphone 16", price: 150000, tax: 18 },
    { id: 2, name: "Dell 356", price: 50000, tax: 18 },
    { id: 3, name: "HP Pavilion", price: 60000, tax: 18 },
  ];

  const dummyBrands = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Dell" },
    { id: 3, name: "HP" },
  ];

  const unitOptions = [
    "Piece (pcs)",
    "Kilogram (kg)",
    "Gram (g)",
    "Liter (L)",
    "Milliliter (ml)",
    "Meter (m)",
    "Centimeter (cm)",
    "Box",
    "Packet",
    "Dozen",
    "Set",
    "Pair",
    "Ton",
    "Quintal",
  ];
  return (
    <>
      <div className="bg-[white] p-2.5 rounded">
        <Paper
          elevation={0}
          sx={{ width: "100%", boxShadow: "none", overflow: "hidden" }}
        >
          <TableContainer sx={{ height: 320, boxShadow: "none" }}>
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
                  sx={{ "& .MuiTableCell-root": { padding: "8px 5px" } }}
                >
                  {columns?.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      // style={{ minWidth: column.minWidth }}
                      sx={{
                        width: column.width,
                        minWidth: column.width,
                        maxWidth: column.width,
                      }}
                      className="truncate"
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {billingItem.map((row, index) => {
                  return (
                    <TableRow
                      role="checkbox"
                      tabIndex={-1}
                      key={index}
                      sx={{
                        "& .MuiTableCell-root": {
                          padding: "3px 5px",
                          paddingTop: index === 0 ? "10px" : "",
                        },
                      }}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            // sx={{ borderBottom: "none" }}
                            sx={{
                              borderBottom: "none",
                              width: column.width,
                              minWidth: column.width,
                              maxWidth: column.width,
                            }}
                            className="truncate"
                          >
                            {column.id === "Action" ? (
                              <div className="flex items-center gap-0.5 text-[20px]">
                                {index === 0 && (
                                  <Tooltip
                                    title="Add Item"
                                    arrow
                                    className="cursor-pointer hover:text-[green]"
                                  >
                                    <IoMdAdd onClick={handleAddItem} />
                                  </Tooltip>
                                )}
                                {billingItem.length > 1 && (
                                  <Tooltip
                                    title="Delete"
                                    arrow
                                    className="cursor-pointer hover:text-[#e61313]"
                                  >
                                    <MdDeleteOutline
                                      onClick={() => handleDeleteItem(index)}
                                    />
                                  </Tooltip>
                                )}
                              </div>
                            ) : column.id === "itemName" ? (
                              <Autocomplete
                                size="small"
                                options={dummyItems}
                                getOptionLabel={(option) => option.name || ""}
                                value={row.itemName || null}
                                onChange={(e, newValue) => {
                                  const updated = [...billingItem];
                                  updated[index].itemName = newValue;
                                  updated[index].unitSellingPrice =
                                    newValue?.price || "";
                                  updated[index].Tax = newValue?.tax || "";
                                  setBillingItem(updated);
                                }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    placeholder="Select Item"
                                  />
                                )}
                              />
                            ) : column.id === "brandName" ? (
                              <Autocomplete
                                size="small"
                                options={dummyBrands}
                                getOptionLabel={(option) => option.name || ""}
                                value={row.brandName || null}
                                onChange={(e, newValue) => {
                                  const updated = [...billingItem];
                                  updated[index].brandName = newValue;
                                  setBillingItem(updated);
                                }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    placeholder="Select Brand"
                                  />
                                )}
                              />
                            ) : column.id === "unitOfMeasure" ? (
                              <Select
                                size="small"
                                value={row.unitOfMeasure}
                                onChange={(e) => {
                                  const updated = [...billingItem];
                                  updated[index].unitOfMeasure = e.target.value;
                                  setBillingItem(updated);
                                }}
                                fullWidth
                              >
                                {unitOptions.map((unit) => (
                                  <MenuItem key={unit} value={unit}>
                                    {unit}
                                  </MenuItem>
                                ))}
                              </Select>
                            ) : (
                              <TextField
                                value={row[column.id]}
                                onChange={(e) => {
                                  const updated = [...billingItem];
                                  updated[index][column.id] = e.target.value;
                                  setBillingItem(updated);
                                }}
                                size="small"
                                sx={{
                                  // "& .MuiInputBase-input": {
                                  //   padding: "6px 14px",
                                  // },
                                  "& .MuiOutlinedInput-root fieldset": {
                                    borderColor: "#9E9E9E",
                                  },
                                }}
                              />
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
        </Paper>
        <div className="text-[16px] flex justify-end mt-[10px] px-4">
          Total Item :{" "}
          <span className="ml-1.5 font-bold">{billingItem?.length}</span>
        </div>
      </div>

      <div className="flex justify-between gap-3.5 mt-[15px]">
        <div className="w-[65%] bg-[white] rounded px-4 py-4">
          <CustomerDetail />
        </div>
        <div className="grow">
          <div className="bg-[white] rounded px-4 py-4">
            <div className="flex">
              <span className="w-[25%] block">Subtotal:</span> 25000
            </div>
            <div className="flex">
              <span className="w-[25%] block">Discount:</span> 25000
            </div>
            <div className="flex">
              <span className="w-[25%] block">Tax:</span> 25000
            </div>
          </div>
          <div className="flex justify-end items-center gap-2 mt-[15px]">
            <button className="site_btn border_btn ">Cancel</button>
            <button className="site_btn fill_btn ">Payment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaleItem;
