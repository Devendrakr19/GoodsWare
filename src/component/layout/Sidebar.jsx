import React from "react";
import { RxDashboard } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { MdOutlineLogout } from "react-icons/md";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isActiveSidebar = useSelector((state)=> state?.auth?.sidebarToggle)

  const sidebarData = [
    { key:1, title: "Dashboard", url: "/dashboard", icon: <RxDashboard /> },
    { key:2, title: "Users", url: "", icon: <BiUser /> },
    { key:3, title: "Products", url: "", icon: <MdProductionQuantityLimits /> },
    { key:4, title: "Reports", url: "", icon: <TbReportAnalytics /> }, 
  ];

  return (
    <>
      <div className="pl-2 pt-2">
        <div className={`w-full ${isActiveSidebar ? "h-[60px] p-2" : "h-[120px] p-7"} bg-[#74a8a4] rounded flex justify-center items-center`}>
          <img src="./goodsware.svg" alt="goodsware" className="object-cover w-full" /> 
        </div>
        <div className={`bg-[#74a8a4] py-5 mt-3 rounded ${isActiveSidebar ? "h-[calc(100vh-90px)] px-3" : "h-[calc(100vh-150px)] px-4.5"}`}>
          <div className={`flex flex-col ${isActiveSidebar ? "h-[calc(100vh-165px)]" : "h-[calc(100vh-230px)]"} overflow-auto hide_scrollbar`}>
            {sidebarData.map((item, index) => (
              <NavLink
                to={item?.url}
                key={item?.key}
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-[#335765] text-[white]" : ""
                  } ${isActiveSidebar ? "justify-center py-2.5":"gap-[10px] py-2"} flex items-center hover:bg-[#335765] hover:text-[white] text-[18px] px-2  mb-1.5 rounded`
                }
              >
                {isActiveSidebar ? (
                   <span className="text-[22px]">
                       {item?.icon}
                   </span>
                ):(
                    <>
                        {item?.icon}
                        <span>{item?.title}</span>
                    </>
                )}
              </NavLink>
            ))}
          </div>
          <div className={`${isActiveSidebar ? "justify-center px-3 py-2.5" : "px-2 py-2"} hover:bg-[#335765] hover:text-[white] text-[18px] rounded flex items-center gap-[10px]`}>
            {isActiveSidebar ? (
                <MdOutlineLogout className="text-[22px]"/>                  
            ): (
                <>
                <MdOutlineLogout/>  

                <span>Logout</span>
                </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
