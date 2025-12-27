import { Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <>
      <Grid container className="bg-[#74a8a4] relative">
        {Array(84)
          .fill()
          .map((item, index) => (
            <Grid
              key={index}
              size={1}
              className="h-[104.2px] border-[1px] border-[#00000014] hover:inset-shadow-white hover:bg-[#335765]"
              sx={{
                transition: "all 0.2s ease-in-out",
              }}
            ></Grid>
          ))}
        <Grid
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "28%",
            background: "#DBE2DC",
            borderRadius: "5px",
          }}
        >
            <Outlet/>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginLayout;
