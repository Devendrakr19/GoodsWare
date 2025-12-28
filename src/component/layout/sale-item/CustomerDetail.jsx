import { Grid, TextField } from "@mui/material";
import React from "react";

const CustomerDetail = () => {
  return (
    <>
      <Grid container columnSpacing={2} rowSpacing={1.2}>
        <div className="w-full">
          <h1 className="text-[18px] font-semibold">Customer Details</h1>
        </div>
        <Grid size={3}>
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
        <Grid size={3}>
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
        <Grid size={3}>
          <label htmlFor="city">
            City/Village<span className="text-[#e71616]">*</span>
          </label>
          <TextField
            id="city"
            type="text"
            size="small"
            placeholder="Patna"
            className="w-full textfield_bg_color"
          />
        </Grid>
        <Grid size={3}>
          <label htmlFor="district">
            District<span className="text-[#e71616]">*</span>
          </label>
          <TextField
            id="district"
            type="text"
            size="small"
            placeholder="Patna"
            className="w-full textfield_bg_color"
          />
        </Grid>
        <Grid size={3}>
          <label htmlFor="state">
            State<span className="text-[#e71616]">*</span>
          </label>
          <TextField
            id="state"
            type="text"
            size="small"
            placeholder="Bihar"
            className="w-full textfield_bg_color"
          />
        </Grid>
        <Grid size={3}>
          <label htmlFor="country">
            Country<span className="text-[#e71616]">*</span>
          </label>
          <TextField
            id="country"
            type="text"
            size="small"
            placeholder="India"
            className="w-full textfield_bg_color"
          />
        </Grid>
        <Grid size={3}>
          <label htmlFor="pinCode">
            PinCode<span className="text-[#e71616]">*</span>
          </label>
          <TextField
            id="pinCode"
            type="text"
            size="small"
            placeholder="841219"
            className="w-full textfield_bg_color"
          />
        </Grid>
        <Grid size={3}>
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
      </Grid>
    </>
  );
};

export default CustomerDetail;
