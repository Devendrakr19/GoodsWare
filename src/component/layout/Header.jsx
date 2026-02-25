import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegCircleUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { isActiveSidebar } from "../redux/slices/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const isToggle = useSelector((state) => state?.auth?.sidebarToggle);

  const handleToggle = () => {
    dispatch(isActiveSidebar(!isToggle));
  };

  return (
    <>
      <div className="pt-2 pr-2">
        <div className="bg-[#00cec4] px-3 py-[17px] rounded flex justify-between items-center">
          <div className="flex items-center gap-3">
            <GiHamburgerMenu
              className="text-[22px] cursor-pointer hover:text-[white] transition delay-75"
              onClick={handleToggle}
            />
            <span className="text-[#000000]"> Sanjay Jaiswal Store</span>
          </div>
          <div className="">
            <FaRegCircleUser className="text-[24px] text-[#242323]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
