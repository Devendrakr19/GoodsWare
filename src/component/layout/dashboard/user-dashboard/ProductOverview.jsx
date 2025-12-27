import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { name: "Jan", stockIn: 400, stockOut: 240, totalItem:640 },
  { name: "Feb", stockIn: 300, stockOut: 139, totalItem:339 },
  { name: "Mar", stockIn: 200, stockOut: 180, totalItem:380 },
  { name: "Apr", stockIn: 200, stockOut: 180, totalItem:380 },
  { name: "May", stockIn: 200, stockOut: 180, totalItem:380 },
  { name: "Jun", stockIn: 200, stockOut: 180, totalItem:380 },
  { name: "Jul", stockIn: 200, stockOut: 180, totalItem:380 },
  { name: "Aug", stockIn: 200, stockOut: 180, totalItem:380 },
  { name: "Sep", stockIn: 200, stockOut: 180, totalItem:380 },
  { name: "Oct", stockIn: 200, stockOut: 180, totalItem:380 },
  { name: "Nov", stockIn: 200, stockOut: 180, totalItem:380 },
  { name: "Dec", stockIn: 200, stockOut: 180, totalItem:380 },
];


const ProductOverview = () => {
return (
    <div className="bg-[#fdfdfdda] rounded px-2 pt-1 overflow-hidden">
    <h1 className='text-[18px] font-semibold mb-1'>Product Overview</h1>
    <ResponsiveContainer width="100%" height={232} className="-ml-4">
      <BarChart data={data}
       margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="stockIn" fill="#16A34A" radius={[2, 2, 0, 0]}/>
        <Bar dataKey="stockOut" fill="#DC2626" radius={[2, 2, 0, 0]}/>
        <Bar dataKey="totalItem" fill="#7C3AED" radius={[2, 2, 0, 0]}/>
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
}

export default ProductOverview