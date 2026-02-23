import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
} from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";
import { useFormik } from "formik";
import { useLocation } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import CustomerDetail from "./CustomerDetail";

const BillingItem = () => {
  const location = useLocation();
  const { items } = location.state;
  //   console.log("itemsData", items);

  const columns = [
    { id: "itemName", label: "Item Name", minWidth: 150 },
    { id: "brandName", label: "Brand Name", minWidth: 150 },
    { id: "quantity", label: "Quantity", minWidth: 80 },
    { id: "unitOfMeasure", label: "Unit of Measure", minWidth: 90 },
    { id: "unitSellingPrice", label: "Selling Price", minWidth: 110 },
    { id: "discount", label: "Discount", minWidth: 90 },
    { id: "Tax", label: "Tax (%)", minWidth: 80 },
    { id: "Taxamoount", label: "Tax Amount", minWidth: 120 },
    { id: "totalPrice", label: "Total Price", minWidth: 120 },
    { id: "Action", label: "Action", minWidth: 50 },
  ];

  const [customerDetail, setCustomerDetail] = useState({
    customerName: "",
    contactName: "",
    city: "",
    district: "",
    state: "",
    country: "",
    pinCode: "",
    date: "",
  });
  
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

  useEffect(() => {
    if (items && items?.length > 0) {
      const mapedItem = items.map((item) => ({
        brandName: item.brandName || "",
        itemName: item.itemName || "",
        quantity: "",
        unitOfMeasure: item.unitOfMeasure || "",
        unitSellingPrice: item.unitSellingPrice || "",
        discount: "",
        Tax: "",
        Taxamoount: "",
        totalPrice: "",
      }));
      setBillingItem(mapedItem);
    }
  }, [items]);

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
      ...prev,
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
  };
  //   console.log("billingItem", billingItem)
  return (
    <>
      <CustomerDetail />
      <div className="flex justify-between items-center mt-3 mb-1">
        <h1 className="text-[18px] font-semibold">Billing Item</h1>
      </div>
      <Paper
        elevation={0}
        sx={{ width: "100%", boxShadow: "none", overflow: "hidden" }}
      >
        <TableContainer sx={{ height: 200, boxShadow: "none" }}>
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
                sx={{ "& .MuiTableCell-root": { padding: "4px 10px" } }}
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
              {billingItem.map((row, index) => {
                return (
                  <TableRow
                    role="checkbox"
                    tabIndex={-1}
                    key={index}
                    sx={{
                      "& .MuiTableCell-root": { padding: "3px 5px" },
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
                            <div className="flex items-center gap-0.5 text-[20px]">
                              {billingItem.length - 1 === index && (
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
                          ) : (
                            <TextField
                              value={row[column.id]}
                              onChange={(e) => {
                                const updated = [...billingItem];
                                updated[index][column.id] = e.target.value;
                                setBillingItem(updated);
                              }}
                              size="small"
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
      <div className="p-1">
        <span className="text-[15px]">
          Total Item :{" "}
          <span className="font-medium">{billingItem?.length}</span>
        </span>
      </div>
    </>
  );
};
export default BillingItem;
