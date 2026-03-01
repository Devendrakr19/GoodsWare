import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is Required"),
    password: Yup.string().required("Password is Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("value login", values);
      navigate("/dashboard");
    },
  });

  const handleForgot = () => {
    navigate("/forgot-password");
  };
  //  console.log("passs", formik.password)
  //  console.log("emmil", formik.email)
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="flex flex-col p-5 bg-[white] rounded">
        <h1 className="text-[20px] font-semibold text-center">Login</h1>
        <div className="">
          <label htmlFor="email">
            Email<span className="text-[#e71616]">*</span>
          </label>
          <TextField
            id="email"
            name="email"
            size="small"
            type="text"
            placeholder="example@gmail.com"
            className="w-full"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password">
            Password <span className="text-[#e71616]">*</span>
          </label>
          <TextField
            id="password"
            size="small"
            name="password"
            type="password"
            placeholder="********"
            className="w-full"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </div>
        <div className="flex justify-end">
          <span
            onClick={handleForgot}
            className="text-[13px] mt-1 hover:text-[#0862d8] cursor-pointer"
          >
            Forgot password
          </span>
        </div>
        <div className="flex justify-center items-center">
          <button type="submit" className="fill_btn !px-14 mt-5">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
