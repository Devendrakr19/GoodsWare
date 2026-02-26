import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";

const ProductTransaction = () => {
  const columns = [
    { id: "BuyerName", label: "Buyer Name", minWidth: 100 },
    { id: "Name", label: "Product Name", minWidth: 100 }, 
    { id: "PurchaseItem", label: "Purchase Item", minWidth: 100 }, 
    { id: "ContactNumber", label: "Total Price", minWidth: 100 },
    { id: "Created", label: "Purchase Date", minWidth: 100 }, 
  ];

  const rows = [
    {
      BuyerName:"Devendra Kumar",
      Name: "Laptop",
      PurchaseItem: "1",
      Email: "35,000",
      ContactNumber: "50,000",
      Status: "5",
      Created: "2024-01-10",
    },
    {
      BuyerName:"Devendra Kumar",
      Name: "Laptop",
      PurchaseItem: "2",
      Email: "35,000",
      ContactNumber: "1,00,000",
      Status: "5",
      Created: "2024-01-10",
    },
    {
      BuyerName:"Devendra Kumar",
      Name: "Laptop",
      PurchaseItem: "1",
      Email: "35,000",
      ContactNumber: "50,000",
      Status: "5",
      Created: "2024-01-10",
    },
    {
      BuyerName:"Devendra Kumar",
      Name: "Laptop",
      PurchaseItem: "1",
      Email: "35,000",
      ContactNumber: "50,000",
      Status: "5",
      Created: "2024-01-10",
    },
    {
      BuyerName:"Devendra Kumar",
      Name: "Laptop",
      PurchaseItem: "1",
      Email: "35,000",
      ContactNumber: "50,000",
      Status: "5",
      Created: "2024-01-10",
    },
    {
      BuyerName:"Devendra Kumar",
      Name: "Laptop",
      PurchaseItem: "1",
      Email: "35,000",
      ContactNumber: "50,000",
      Status: "5",
      Created: "2024-01-10",
    },
      
  ];

  return (
    <>
      <div className="bg-[#fff] rounded  px-3 pt-1 h-[290px]">
        <h1 className="text-[18px] font-semibold mb-1">Product Transaction</h1>
        <Paper
          elevation={0}
          sx={{ width: "100%", boxShadow: "none", overflow: "hidden" }}
        >
          <TableContainer sx={{ boxShadow: "none" }}>
            <Table
              stickyHeader
              aria-label="sticky table"
              sx={{
                "& .MuiTableCell-stickyHeader": {
                  boxShadow: "none",
                  borderBottom: "none",
                  background: "#F1F2F6", 
                  fontSize: "15px",
                  fontWeight: "600",
                },
              }}
            >
              <TableHead>
                <TableRow
                  sx={{ "& .MuiTableCell-root": { padding: "9px 10px" } }}
                >
                  {columns?.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                      className="truncate"
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(0, 5).map((row, index) => {
                  return (
                    <TableRow
                      role="checkbox"
                      tabIndex={-1}
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F1F2F6]"
                      } truncate`}
                      sx={{
                        "& .MuiTableCell-root": { padding: "10.5px 10px" },
                      }}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            sx={{ borderBottom: "none" }}
                          >
                            {
                              <Tooltip title={value} arrow>
                                {value}
                              </Tooltip>
                            }
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </>
  );
};

export default ProductTransaction;
