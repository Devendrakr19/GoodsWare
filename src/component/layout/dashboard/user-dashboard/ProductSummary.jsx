import React from 'react'

const ProductSummary = () => {
  return (
    <>
    <div className="bg-[#fdfdfdda] h-[265px] px-5 pt-2 pb-5">
        <h1 className='text-[20px] font-semibold'>Product Summary</h1>
        <div className="flex items-center">
            <div className="flex flex-col border-[1px] w-[50%]">
                <span>Remaining Item</span>
                <span>31234</span>
            </div>
            <div className="flex flex-col  border-[1px] w-[50%]">
                <span>Value of Item</span>
                <span>Rs 31234</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductSummary