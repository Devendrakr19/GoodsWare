import React from "react";
import Grid from "@mui/material/Grid"; 
import { Outlet } from "react-router-dom";
import Header from "./Header"; 
const Layout = () => { 
  return (
    <>
      <Grid container columnSpacing={1.5}> 
        <Grid item size={12}>
          <Header />
        </Grid>
        <Grid item size={12}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
