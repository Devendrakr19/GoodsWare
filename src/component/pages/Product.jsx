import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import AddProduct from "../layout/product/AddProduct";
import { FaPencilAlt } from "react-icons/fa";
import { Tooltip } from "@mui/material";
const Product = () => {
  const [addProductPopup, setAddProductPopup] = useState(false);

  const handleAddProduct = () => {
    setAddProductPopup(true);
  };

  const handleCloseProduct = () => {
    setAddProductPopup(false);
  };

  const rows = [
    {
      Product: "Electronics",
      StockIn: "500",
      StockOut: "320",
      Created: "2024-01-10",
    },
    {
      Product: "Groceries",
      StockIn: "1200",
      StockOut: "980",
      Created: "2024-02-15",
    },
    {
      Product: "Furniture",
      StockIn: "150",
      StockOut: "90",
      Created: "2024-03-05",
    },
    {
      Product: "Clothing",
      StockIn: "800",
      StockOut: "600",
      Created: "2024-01-22",
    },
    {
      Product: "Stationery",
      StockIn: "400",
      StockOut: "250",
      Created: "2024-04-12",
    },
    {
      Product: "Hardware",
      StockIn: "300",
      StockOut: "180",
      Created: "2024-02-28",
    },
    {
      Product: "Automobile Parts",
      StockIn: "220",
      StockOut: "140",
      Created: "2024-03-18",
    },
    {
      Product: "Pharmaceutical",
      StockIn: "950",
      StockOut: "720",
      Created: "2024-01-30",
    },
    {
      Product: "Sports Equipment",
      StockIn: "275",
      StockOut: "150",
      Created: "2024-04-05",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center mb-2 px-[20px]">
        <div className="flex items-center bg-[#fdfdfd] rounded-full border-[1px] border-[#3357657d]">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none px-5 py-1.5 w-[300px]"
          />
          <IoSearchOutline className="text-[20px] mr-3" />
        </div>
        <button className="fill_btn !rounded-full" onClick={handleAddProduct}>
          Add Product
        </button>
      </div>
      <div className="flex items-center flex-wrap gap-[15px] px-[20px] mt-[15px]">
        {rows.map((item, index) => (
          <div
            className="bg-[white] rounded-[15px] px-[20px] py-[15px] w-[362px] card_shadow"
            key={index}
          >
            <h1 className="text-[18px] text-[#171717] font-medium">
              {item?.Product}
            </h1>
            <div className="flex items-center px-[2px] py-[4px]">
              <div className="flex flex-col w-[50%]">
                <span className="text-[#545353]">Available Item</span>
                <span className="text-[18px] font-medium">{item?.StockIn}</span>
              </div>
              <span className="w-[1px] h-[40px] block bg-[#dfdede]"></span>
              <div className="flex flex-col pl-[30px]">
                <span className="text-[#545353]">Item sold</span>
                <span className="text-[18px] font-medium">
                  {item?.StockOut}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between border-t-[1px] border-t-[#efeeee] pt-[8px]">
              <div className="flex items-center gap-[5px] text-[14px] text-[#6c6969]">
                <span>Created:</span>
                <span>{item?.Created}</span>
              </div>
              <div className="flex items-center gap-[6px]">
                <Tooltip title="Edit" arrow>
                  <span className="bg-[#efefef] p-1.5 rounded text-[14px] cursor-pointer text-[#104ccd] hover:bg-[#104ccd] hover:text-[white] transition delay-150">
                    <FaPencilAlt onClick={handleAddProduct} />
                  </span>
                </Tooltip>
                <Tooltip title="Delete" arrow>
                  <span className="bg-[#efefef] p-1 rounded text-[18px] cursor-pointer text-[#e61313] hover:bg-[#e61313] hover:text-[white] transition delay-150">
                    <MdDeleteOutline />
                  </span>
                </Tooltip>
              </div>
            </div>
          </div>
        ))}
      </div>
      <AddProduct open={addProductPopup} onClose={handleCloseProduct} />
    </>
  );
};

export default Product;
