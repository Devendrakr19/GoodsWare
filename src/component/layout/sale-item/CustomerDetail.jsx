import { Grid, TextField } from "@mui/material";
import React from "react";

const CustomerDetail = () => {
  return (
    <>
      <Grid container columnSpacing={1} rowSpacing={1}>
        <div className="w-full">
          <h1 className="text-[18px] font-semibold">Customer Details</h1>
        </div>
        <Grid size={4}>
          <label htmlFor="customerName">
            Name<span className="text-[#e71616]">*</span>
          </label>
          <TextField
            id="customerName"
            type="text"
            size="small"
            placeholder="Dev"
            className="w-full textfield_bg_color"
          />
        </Grid>
        <Grid size={4}>
          <label htmlFor="contactName">
            Contact Number<span className="text-[#e71616]">*</span>
          </label>
          <TextField
            id="contactName"
            type="text"
            size="small"
            placeholder="+91"
            className="w-full textfield_bg_color"
          />
        </Grid>
        <Grid size={4}>
          <label htmlFor="date">
            Date<span className="text-[#e71616]">*</span>
          </label>
          <TextField
            id="date"
            type="date"
            size="small"
            className="w-full textfield_bg_color"
          />
        </Grid>
        <Grid size={12}>
          <label htmlFor="address">
            Address<span className="text-[#e71616]">*</span>
          </label>
          <TextField
            multiline
            id="address" 
            size="small"
            className="w-full textfield_bg_color"
            minRows={3}
            maxRows={3}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default CustomerDetail;
