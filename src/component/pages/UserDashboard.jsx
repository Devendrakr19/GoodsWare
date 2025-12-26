import { Grid } from '@mui/material'
import { FaBoxOpen } from "react-icons/fa";
import { PiBoxArrowUpFill, PiBoxArrowDownFill  } from "react-icons/pi";
import { FaBoxes } from "react-icons/fa"; 
import { MdStoreMallDirectory } from "react-icons/md";
import { GiBoxUnpacking } from "react-icons/gi";
import ProductOverview from '../layout/dashboard/user-dashboard/ProductOverview';
import ProductSummary from '../layout/dashboard/user-dashboard/ProductSummary';
const UserDashboard = () => {

  const productCount = [
    {title:"Total Product", count:"123", icon:<FaBoxOpen className='text-[#2563EB]'/>},
    {title:"Total Item", count:"56623", icon:<FaBoxes className='text-[#7C3AED]'/>},
    {title:"Stock In", count:"3", icon:<PiBoxArrowDownFill className='text-[#16A34A]'/>},
    {title:"Stock Out", count:"13", icon:<PiBoxArrowUpFill className='text-[#DC2626]'/>},
    {title:"Return Item", count:"1203", icon:<GiBoxUnpacking className='text-[#EA580C]'/>},
  ]
  return (
    <> 
      <Grid container columnSpacing={2} rowSpacing={1.5}>
        {productCount.map((item, index)=>(
          <Grid key={index} size={2.4} className="rounded px-5 py-4 bg-[#fdfdfdda]">
              <div className="flex items-center justify-between text-[20px]">
                <span className='text-[40px]'>
                  {item?.icon}
                </span>
                {item?.title}
              </div>
              <span className='flex justify-end text-[20px] font-semibold'>{item?.count}</span>
          </Grid>
        ))}
        <Grid size={7.2}>
          <ProductOverview/>
        </Grid>
        <Grid size={4.8}>
          <ProductSummary/>
        </Grid>


      </Grid>
    </>
  )
}

export default UserDashboard