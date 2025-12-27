import { TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const navigate = useNavigate();
     const formik = useFormik({
        initialValues: { 
          password: "",
        },
        // validationSchema,
        onSubmit: (values) => {
          console.log("value", values);
          navigate("/");
        },
      });
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="flex flex-col px-5 pt-3 pb-5">
        <h1 className="text-[20px] font-semibold text-center">
          Reset Password
        </h1>
        <div className="mt-4">
          <label htmlFor="password">
            New Password <span className="text-[#e71616]">*</span>
          </label>
          <TextField
            id="password"
            size="small"
            placeholder="********"
            className="w-full"
            //   value={formik.password}
            //   onChange={formik.password}
            //   error={formik.errors.password}
            //   helperText={formik.errors.password}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="ConfirmPassword">
            Confirm Password <span className="text-[#e71616]">*</span>
          </label>
          <TextField
            id="ConfirmPassword"
            size="small"
            placeholder="********"
            className="w-full"
            //   value={formik.password}
            //   onChange={formik.password}
            //   error={formik.errors.password}
            //   helperText={formik.errors.password}
          />
        </div>
        <div className="flex justify-center items-center mt-5">
          <button className="fill_btn !px-8">Submit</button>
        </div>
      </form>
    </>
  );
};

export default ResetPassword;
