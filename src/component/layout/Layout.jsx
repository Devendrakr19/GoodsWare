import React from "react";
import Grid from "@mui/material/Grid";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import {useSelector} from 'react-redux'
const Layout = () => { 
    const isActiveSidebar = useSelector((state)=> state?.auth?.sidebarToggle)
    console.log("isActiveSidebar", isActiveSidebar)
  return (
    <>
      <Grid container columnSpacing={1.5}>
        <Grid item size={isActiveSidebar ? 0.7 : 2} className="transition delay-150">
          <Sidebar />
        </Grid>
        <Grid item size={isActiveSidebar ? 11.3 : 10} className="transition delay-150">
          <Grid container rowSpacing={1.5}>
            <Grid item size={12}>
             <Header/>
            </Grid>
            <Grid item size={12} className="pr-2 h-[calc(100vh-80px)] overflow-auto hide_scrollbar rounded">
                <Outlet/> 
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
