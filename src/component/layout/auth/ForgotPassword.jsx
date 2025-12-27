import { TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleForgotSubmit = () => {
    setIsSubmit(true);
  };
  const handleReset = () => {
    navigate("/reset-password");
  };

  return (
    <>
      <div className="px-5 pt-3 pb-5">
        {!isSubmit ? (
          <>
            <h1 className="text-[20px] font-semibold text-center">
              Forgot Password
            </h1>
            <div className="mt-5">
              <label htmlFor="email">
                Mobile or Email<span className="text-[#e71616]">*</span>
              </label>
              <TextField
                id="email"
                size="small"
                placeholder="+91 or example@gmail.com"
                className="w-full"
                // value={formik.email}
                // onChange={formik.handleChange}
                //   error={formik.touched.email && Boolean(formik.errors.email)}
                //   helperText={formik.touched.email && formik.errors.email}
                // error={formik.errors.email}
                // helperText={formik.errors.email}
              />
            </div>
            <div className="flex justify-center items-center mt-5">
              <button className="fill_btn !px-8" onClick={handleForgotSubmit}>
                Submit
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-[20px] font-semibold text-center">Enter OTP</h1>
            <div className="flex items-center justify-center gap-3 mt-4">
              {otp.map((item, index) => (
                <input
                  key={index}
                  type="text"
                  className="w-[60px] outline-none border-[1px] rounded py-1.5 px-9 text-[24px]"
                  maxLength={1}
                />
              ))}
            </div>
            <div className="flex justify-center items-center mt-5">
              <button className="fill_btn !px-8" onClick={handleReset}>
                Submit
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ForgotPassword;
