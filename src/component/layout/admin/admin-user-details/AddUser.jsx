import { Box, Grid, Modal, TextField } from "@mui/material";
import React from "react";
import { IoMdClose } from "react-icons/io";
const AddUser = ({ open, onClose }) => {
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
            width: "50%",
          }}
          className="bg-[#fdfdfd] pt-3 px-6 pb-6 rounded-[20px]"
        >
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-[22px] font-semibold">Add User</h1>
            <IoMdClose
              className="text-[24px] cursor-pointer"
              onClick={onClose}
            />
          </div>
          <Grid container columnSpacing={2} rowSpacing={1.5}>
            <Grid size={6}>
              <label htmlFor="StoreName">
                Store Name <span className="text-[#e71616]">*</span>
              </label>
              <TextField
                id="StoreName"
                type="text"
                size="small"
                placeholder="John Store"
                className="w-full"
              />
            </Grid>
            <Grid size={6}>
              <label htmlFor="name">
                Name <span className="text-[#e71616]">*</span>
              </label>
              <TextField
                id="name"
                type="text"
                size="small"
                placeholder="Enter name"
                className="w-full"
              />
            </Grid>
            <Grid size={6}>
              <label htmlFor="email">
                Email <span className="text-[#e71616]">*</span>
              </label>
              <TextField
                id="email"
                type="text"
                size="small"
                placeholder="example@gmail.com"
                className="w-full"
              />
            </Grid>
            <Grid size={6}>
              <label htmlFor="ContactNumber">
                Contact Number <span className="text-[#e71616]">*</span>
              </label>
              <TextField
                id="ContactNumber"
                type="text"
                size="small"
                placeholder="+91"
                className="w-full"
              />
            </Grid>
            <Grid size={6}>
              <label htmlFor="password">
                Password <span className="text-[#e71616]">*</span>
              </label>
              <TextField
                id="password"
                type="password"
                size="small"
                placeholder="********"
                className="w-full"
              />
            </Grid>
            <Grid size={6}>
              <label htmlFor="ConfirmPassword">
                Confirm Password <span className="text-[#e71616]">*</span>
              </label>
              <TextField
                id="ConfirmPassword"
                type="password"
                size="small"
                placeholder="********"
                className="w-full"
              />
            </Grid>
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

export default AddUser;
