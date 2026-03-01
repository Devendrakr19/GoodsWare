import { Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <>
      <Grid container className="bg-[#4c5252] relative">
        {Array(288)
          .fill()
          .map((item, index) => (
            <Grid
              key={index}
              size={0.5}
              className="h-[60.7px] border-[1px] border-[#00000014] hover:inset-shadow-white hover:bg-[#ffffff]"
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
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
};

export default LoginLayout;
