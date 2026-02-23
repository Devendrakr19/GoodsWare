import { Autocomplete, Box, Grid, Modal, TextField } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import React, { useState } from "react";

const AddItem = ({ open, onClose }) => {
  const [productInfo, setProductInfo] = useState({
    productName: "",
    brandName: "",
    supplierName:"",
    supplierContact:""
  });

  const [addProduct, setAddProduct] = useState([
    {
      itemName: "",
      itemCode: "",
      unitOfMeasure: "",
      unitPrice: "",
      itemQuantity: "",
      size: "",
      color: "",
      weight: "",
      expiryDate: "",
      waranty: "",
    },
  ]);

  const handleAdd = () => {
    setAddProduct((prev) => [
      ...prev,
      {
        itemName: "",
        unitOfMeasure: "",
        unitPrice: "",
        itemQuantity: "",
        size: "",
        color: "",
        weight: "",
        expiryDate: "",
        waranty: "",
      },
    ]);
  };

  const handleDelete = (index) => {
    const filterProduct = addProduct.filter((_, i) => i !== index);
    setAddProduct(filterProduct);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{
          sx: {
            backdropFilter: "blur(3px)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "70%",
          }}
          className="bg-[#fdfdfd] pt-3 px-6 pb-6 rounded-[20px]"
        >
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-[22px] font-semibold">Add Item</h1>
            <IoMdClose
              className="text-[24px] cursor-pointer"
              onClick={onClose}
            />
          </div>
          <Grid container columnSpacing={2} rowSpacing={1} className="mb-4">
            <Grid size={5.6}>
              <label htmlFor="productName">
                Product Category <span className="text-[#e71616]">*</span>
              </label>
              <Autocomplete
                disablePortal
                id="productName"
                size="small"
                options={[
                  "Electronic",
                  "Fertilizer",
                  "Texttile",
                  "Home Decoration",
                ]}
                sx={{ width: "100%" }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>
            <Grid size={5.7}>
              <label htmlFor="brandName">
                Brand Name<span className="text-[#e71616]">*</span>
              </label>
              <TextField
                id="brandName"
                type="text"
                size="small"
                placeholder="Allen solly"
                className="w-full"
              />
            </Grid>
            <Grid size={5.6}>
              <label htmlFor="supplierName">Supplier Name</label>
              <TextField
                id="supplierName"
                type="text"
                size="small"
                placeholder="John"
                className="w-full"
              />
            </Grid>
            <Grid size={5.7}>
              <label htmlFor="supplierContact">Supplier Contact</label>
              <TextField
                id="supplierContact"
                type="text"
                size="small"
                placeholder="+91"
                className="w-full"
              />
            </Grid>
          </Grid>
          <Grid
            container
            columnSpacing={1}
            className="max-h-[calc(100vh-300px)] overflow-auto mt-2"
          >
            {addProduct.map((item, index) => (
              <React.Fragment key={index}>
                <Grid
                  size={11.3}
                  className="mb-3 border-[1px] border-[#00000066] rounded p-3"
                >
                  <Grid container columnSpacing={2} rowSpacing={1.5}>
                    <Grid size={3}>
                      <label htmlFor="itemCode">
                        Item Code
                      </label>
                      <TextField
                        id="itemCode"
                        type="text"
                        size="small"
                        placeholder="Allen shirt"
                        className="w-full"
                      />
                    </Grid>
                    <Grid size={3}>
                      <label htmlFor="itemName">
                        Item Name<span className="text-[#e71616]">*</span>
                      </label>
                      <TextField
                        id="itemName"
                        type="text"
                        size="small"
                        placeholder="Allen shirt"
                        className="w-full"
                      />
                    </Grid>
                    <Grid size={3}>
                      <label htmlFor="unitOfMeasure">
                        Unit of Measure{" "}
                        <span className="text-[#e71616]">*</span>
                      </label>
                      <Autocomplete
                        disablePortal
                        id="unitOfMeasure"
                        size="small"
                        options={[
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
                        ]}
                        sx={{ width: "100%" }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Grid>
                    <Grid size={3}>
                      <label htmlFor="unitPrice">
                        Unit Cost Price<span className="text-[#e71616]">*</span>
                      </label>
                      <TextField
                        id="unitPrice"
                        type="text"
                        size="small"
                        placeholder="1,000"
                        className="w-full"
                      />
                    </Grid>
                    <Grid size={3}>
                      <label htmlFor="unitSellingPrice">
                        Unit Selling Price
                        <span className="text-[#e71616]">*</span>
                      </label>
                      <TextField
                        id="unitSellingPrice"
                        type="text"
                        size="small"
                        placeholder="1,000"
                        className="w-full"
                      />
                    </Grid>
                    <Grid size={3}>
                      <label htmlFor="itemQuantity">
                        Item Quantity<span className="text-[#e71616]">*</span>
                      </label>
                      <TextField
                        id="itemQuantity"
                        type="text"
                        size="small"
                        placeholder="1,00"
                        className="w-full"
                      />
                    </Grid>
                    <Grid size={3}>
                      <label htmlFor="size">Size</label>
                      <TextField
                        id="size"
                        type="text"
                        size="small"
                        placeholder="1,00"
                        className="w-full"
                      />
                    </Grid>
                    <Grid size={3}>
                      <label htmlFor="color">Color</label>
                      <TextField
                        id="color"
                        type="text"
                        size="small"
                        placeholder="1,00"
                        className="w-full"
                      />
                    </Grid>
                    <Grid size={3}>
                      <label htmlFor="weight">Weight</label>
                      <TextField
                        id="weight"
                        type="text"
                        size="small"
                        placeholder="1,00"
                        className="w-full"
                      />
                    </Grid> 
                    <Grid size={3}>
                      <label htmlFor="expiryDate">Expiry Date</label>
                      <TextField
                        id="expiryDate"
                        type="date"
                        size="small"
                        className="w-full"
                      />
                    </Grid>
                    <Grid size={3}>
                      <label htmlFor="warranty">Warranty</label>
                      <TextField
                        id="warranty"
                        type="text"
                        size="small"
                        placeholder="1 years"
                        className="w-full"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid size={0.7} className="flex justify-center items-center">
                  <div className="flex flex-col gap-1">
                    {addProduct.length > 1 && (
                      <button
                        type="button"
                        className="delete_btn"
                        onClick={() => handleDelete(index)}
                      >
                        <MdDelete />
                      </button>
                    )}
                    {addProduct.length - 1 === index && (
                      <button
                        type="button"
                        className="add_btn"
                        onClick={handleAdd}
                      >
                        <IoMdAdd />
                      </button>
                    )}
                  </div>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
          <div className="flex items-center gap-3 mt-2">
            <button className="border_btn" onClick={onClose}>
              Cancel
            </button>
            <button className="fill_btn">Submit</button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default AddItem;
