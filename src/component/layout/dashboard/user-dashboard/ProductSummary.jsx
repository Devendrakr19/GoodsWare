import React from 'react'

const ProductSummary = () => { 
  return (
    <>
    <div className="bg-[#fdfdfdda] h-[265px] px-5 pt-2 pb-5 rounded">
        <h1 className='text-[18px] font-semibold'>Product Summary</h1>
        <div className="flex items-center justify-between mt-2 shadow bg-[#748d92] rounded p-4">
            <div className="flex flex-col">
                <span className='text-[20px] font-medium'>Sold</span>
                <span className='text-[24px] font-medium text-[#f7f4f4]'>31,234 Items</span>
            </div> 
            <span className='w-[1px] h-[60px] bg-[black]'></span>
            <div className="flex flex-col">
                <span className='text-[20px] font-medium'>Value of Item</span>
                <span className='text-[24px] font-medium text-[#f7f4f4]'>&#8377; 31,234</span>
            </div>
        </div>
        <div className="flex items-center justify-between mt-2 shadow bg-[#748d92] rounded p-4">
            <div className="flex flex-col">
                <span className='text-[20px] font-medium'>Remaining</span>
                <span className='text-[24px] font-medium text-[#f7f4f4]'>31,234 Items</span>
            </div> 
            <span className='w-[1px] h-[60px] bg-[black]'></span>
            <div className="flex flex-col">
                <span className='text-[20px] font-medium'>Value of Item</span>
                <span className='text-[24px] font-medium text-[#f7f4f4]'>&#8377; 31,234</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductSummary