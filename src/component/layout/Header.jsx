import React from "react";
import { RxDashboard } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router-dom";
import { MdProductionQuantityLimits } from "react-icons/md"; 
// import { BiUser } from "react-icons/bi"; 
import { PiBoxArrowDown, PiBoxArrowUp } from "react-icons/pi";
import { MdStorefront } from "react-icons/md"; 
import { FaRegCircleUser } from "react-icons/fa6";
const Header = () => {
 const navigate = useNavigate(); 

  const sidebarData = [
    { key: 1, title: "Dashboard", url: "/dashboard", icon: <RxDashboard /> },
    { key:7, title: "Suppliers", url: "", icon: <PiBoxArrowUp /> },
    // { key:2, title: "Users", url: "/user", icon: <BiUser /> },
    {
      key: 3,
      title: "Products",
      url: "/product",
      icon: <MdProductionQuantityLimits />,
    },
    {
      key: 4,
      title: "Purchase",
      url: "/purchase-item",
      icon: <PiBoxArrowDown />,
    },
    { key: 5, title: "Sale", url: "/sale-item", icon: <PiBoxArrowUp /> }, 
    { key:8, title: "Transctions", url: "/scan-item", icon: <PiBoxArrowUp /> },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-between w-[100%] px-[15px] py-[15px]">
        <div className="flex items-center gap-[4px] bg-[#efefef] rounded-full px-[15px]">
          <MdStorefront className="text-[28px]" />
          <span className="text-[18px] font-semibold">GoodsWare</span>
        </div>
        <div
          className={`flex items-center gap-[8px] bg-[#efefef] px-[10px] py-[9px] rounded-full`}
        >
          {sidebarData.map((item, index) => (
            <NavLink
              to={item?.url}
              key={item?.key}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-[#ffffff] text-[#000000]" : "text-[#636161]"
                } flex items-center gap-[3px] hover:bg-[#ffffff] hover:text-[#000000] text-[18px] px-[10px] py-[2px] rounded-full`
              }
            >
              {item?.icon}
              <span className="mt-[2px]">{item?.title}</span>
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-[15px]">
          <span className="text-[#000000]"> Sanjay Jaiswal Store</span>
          <span className="bg-[white] p-[10px] rounded-full">
            <FaRegCircleUser className="text-[24px] text-[#242323]" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
