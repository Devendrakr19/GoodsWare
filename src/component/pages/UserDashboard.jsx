import { Grid, MenuItem, Select } from "@mui/material";
import { FaBoxOpen } from "react-icons/fa";
import { PiBoxArrowUpFill, PiBoxArrowDownFill } from "react-icons/pi";
import { FaBoxes } from "react-icons/fa";
import { MdStoreMallDirectory } from "react-icons/md";
import { GiBoxUnpacking } from "react-icons/gi";
import ProductOverview from "../layout/dashboard/user-dashboard/ProductOverview";
import ProductSummary from "../layout/dashboard/user-dashboard/ProductSummary";
import ProductAvailable from "../layout/dashboard/user-dashboard/ProductAvailable";
import ProductTransaction from "../layout/dashboard/user-dashboard/ProductTransaction";
import { FcCalendar } from "react-icons/fc";
import { useState } from "react";
const UserDashboard = () => {
  const [selectedTime, setSelectedTime] = useState("all");

  const productCount = [
    {
      title: "Total Product",
      count: "123",
      icon: <FaBoxOpen className="text-[#2563EB]" />,
    },
    {
      title: "Total Item",
      count: "56623",
      icon: <FaBoxes className="text-[#7C3AED]" />,
    },
    {
      title: "Stock In",
      count: "3",
      icon: <PiBoxArrowDownFill className="text-[#16A34A]" />,
    },
    {
      title: "Stock Out",
      count: "13",
      icon: <PiBoxArrowUpFill className="text-[#DC2626]" />,
    },
    {
      title: "Return Item",
      count: "1203",
      icon: <GiBoxUnpacking className="text-[#EA580C]" />,
    },
  ];

  const handleChange = (e)=>{
    setSelectedTime(e.target.value)
  }
  return (
    <>
      <Grid container columnSpacing={2} rowSpacing={1.5} className="px-[15px]">
        {productCount.map((item, index) => (
          <Grid
            size={2}
            key={index}
            className="rounded-full flex items-center justify-between bg-[#ffffff] pl-[7px] pr-[15px] py-[6px]"
          > 
            <span className="text-[20px] bg-[#efefef] rounded-full p-2">
              {item?.icon}
            </span> 
            <div className="flex items-center gap-[15px]">
              <span className="text-[16px]">{item?.title}</span>
              <span className="flex justify-end text-[24px] font-semibold">
                {item?.count}
              </span>
            </div>
          </Grid>
        ))}
        <Grid size={2} className="flex justify-end relative">
          <FcCalendar className="absolute top-[13px] text-[20px] z-10 left-[48px]"/>
          <Select
            size="small"
            value={selectedTime}
            onChange={handleChange}
            className="w-[200px] mt-[4px]"
            sx={{
              height: 40,
              backgroundColor: "#f8f9fa",
              borderRadius: "30px", 
              "& .MuiSelect-select": {
                padding: "10px 34px",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#efefef",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#efefef",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#efefef",
              },
            }}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value={"2026"}>2026</MenuItem>
            <MenuItem value={"2025"}>2025</MenuItem>
            <MenuItem value={"2024"}>2024</MenuItem>
          </Select>
        </Grid>
        <Grid size={8}>
          <ProductOverview />
        </Grid>
        <Grid size={4}>
          <ProductSummary />
        </Grid>
        <Grid size={6}>
          <ProductAvailable />
        </Grid>
        <Grid size={6}>
          <ProductTransaction />
        </Grid>
      </Grid>
    </>
  );
};

export default UserDashboard;
