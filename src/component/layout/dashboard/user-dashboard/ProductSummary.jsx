import React from 'react'

const ProductSummary = () => { 
  return (
    <>
    <div className="bg-[#ffffff] h-[265px] px-4 pt-2 pb-5 rounded">
        <h1 className='text-[18px] font-semibold'>Product Summary</h1>
        <div className="flex items-center justify-between mt-2 shadow bg-[#efefef] rounded p-4">
            <div className="flex flex-col w-[50%]">
                <span className='text-[20px] font-medium'>Sold</span>
                <span className='text-[24px] font-semibold truncate'>31,234 Items</span>
            </div> 
            <span className='w-[1px] h-[60px] bg-[#00000051]'></span>
            <div className="flex flex-col items-end w-[40%]">
                <span className='text-[20px] font-medium'>Value of Item</span>
                <span className='text-[24px] font-semibold truncate'>&#8377; 31,234</span>
            </div>
        </div>
        <div className="flex items-center justify-between mt-2 shadow bg-[#efefef] rounded p-4">
            <div className="flex flex-col w-[50%]">
                <span className='text-[20px] font-medium'>Remaining</span>
                <span className='text-[24px] font-semibold truncate'>31,234 Items</span>
            </div> 
            <span className='w-[1px] h-[60px] bg-[#00000051]'></span>
            <div className="flex flex-col items-end w-[40%]">
                <span className='text-[20px] font-medium'>Value of Item</span>
                <span className='text-[24px] font-semibold truncate'>&#8377; 31,234</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductSummary