import { Box, Grid, Modal } from "@mui/material";
import React from "react";
import { IoMdClose } from "react-icons/io";

const ViewItem = ({ open, onClose }) => {
  const ItemData = [
    {
      title: "Product Name",
      Value: "Laptop",
    },
    { title: "Brand Name", Value: "HP" },
    { title: "Item Name", Value: "HP Work book s23" },
    { title: "Unit of Measure", Value: "pcs" },
    { title: "Unit Cost Price", Value: "35,0000" },
    { title: "Unit Selling Price", Value: "60,0000" },
    // { title: "Quantity", Value: "10" },
    { title: "Available Item", Value: "10" },
    { title: "Sold Item", Value: "5" }, 
    { title: "Size", Value: "14.5cm" },
    { title: "Color", Value: "Black" },
    { title: "Weight", Value: "1.85gm" },
    { title: "Expiray Date", Value: "N/A" },
    { title: "Warranty", Value: "1 Year" },
    { title: "Supplier Name", Value: "Dev Interprises" },
    { title: "Supplier contact", Value: "7371034132" },
    ,
  ];
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
            width: "45%",
          }}
          className="bg-[#fdfdfd] pt-3 px-6 pb-6 rounded-[20px]"
        >
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-[22px] font-semibold">Item Details</h1>
            <IoMdClose
              className="text-[24px] cursor-pointer"
              onClick={onClose}
            />
          </div>
          <Grid container rowSpacing={1} className="mt-2">
            {ItemData.map((item, index) => (
              <Grid key={index} size={4} className="flex flex-col">
                <span className="text-[15px]">{item?.title}</span>
                <span className="font-semibold text-[15px]">{item?.Value}</span>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default ViewItem;
