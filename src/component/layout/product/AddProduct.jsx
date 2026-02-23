import { Autocomplete, Box, Grid, Modal, TextField } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import React, { useState } from "react";
const AddProduct = ({ open, onClose }) => {
  const [addProduct, setAddProduct] = useState([
    {
      ProductName: "",
      // Category: "",
      Description: "",
    },
  ]);

  const handleAdd = () => {
    setAddProduct((prev) => [
      ...prev,
      { ProductName: "", Description: "" },
      // { ProductName: "", Category: "", Description: "" },
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
            width: "40%",
          }}
          className="bg-[#fdfdfd] pt-3 px-6 pb-6 rounded-[20px]"
        >
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-[22px] font-semibold">Add Product</h1>
            <IoMdClose
              className="text-[24px] cursor-pointer"
              onClick={onClose}
            />
          </div>
          <Grid
            container
            columnSpacing={1}
            className="max-h-[calc(100vh-200px)] overflow-auto"
          >
            {addProduct.map((item, index) => (
              <React.Fragment key={index}>
                <Grid size={11} className="mb-5">
                  <Grid container columnSpacing={2} rowSpacing={1.5}>
                    {/* <Grid size={6}>
                      <label htmlFor="ProductName">
                        Product Name <span className="text-[#e71616]">*</span>
                      </label>
                      <TextField
                        id="ProductName"
                        type="text"
                        size="small"
                        placeholder="John Store"
                        className="w-full"
                      />
                    </Grid> */}
                    <Grid size={12}>
                      <label htmlFor="name">
                       Product Category <span className="text-[#e71616]">*</span>
                      </label>
                      <Autocomplete
                        disablePortal
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
                    <Grid size={12}>
                      <label htmlFor="email">Description</label>
                      <TextField
                        id="Brand"
                        multiline
                        type="text"
                        size="small"
                        placeholder="write..."
                        className="w-full"
                        minRows={2}
                        maxRows={2}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid size={1} className="flex justify-center items-center">
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
          <div className="flex items-center gap-3 mt-5">
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

export default AddProduct;
