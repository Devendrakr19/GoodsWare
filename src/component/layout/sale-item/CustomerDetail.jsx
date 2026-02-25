import { Grid, TextField } from "@mui/material";
import React from "react";

const CustomerDetail = () => {
  return (
    <>
      <div className="w-full mb-[5px]">
        <h1 className="text-[18px] font-semibold">Customer Details</h1>
      </div>
      <Grid container columnSpacing={1.5} rowSpacing={1.5}>
        <Grid size={4}>
          <label htmlFor="customerName">
            Name<span className="text-[#e71616]">*</span>
          </label>
          <TextField
            id="customerName"
            type="text"
            size="small"
            placeholder="Dev"
            className="w-full"
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
            className="w-full"
          />
        </Grid>
        <Grid size={4}>
          <label htmlFor="date">
            Date<span className="text-[#e71616]">*</span>
          </label>
          <TextField id="date" type="date" size="small" className="w-full" />
        </Grid>
        <Grid size={12}>
          <label htmlFor="address">
            Address<span className="text-[#e71616]">*</span>
          </label>
          <TextField
            multiline
            id="address"
            size="small"
            className="w-full"
            minRows={3}
            maxRows={3}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default CustomerDetail;
