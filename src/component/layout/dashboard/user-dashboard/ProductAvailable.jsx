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

const ProductAvailable = () => {
  const columns = [
    { id: "Name", label: "Product Name", minWidth: 80 },
    { id: "Email", label: "Purchase Price", minWidth: 80 },
    { id: "ContactNumber", label: "Selling Price", minWidth: 80 },
    { id: "Status", label: "Stock In", minWidth: 50 },
    { id: "Created", label: "Purchase Date", minWidth: 80 },
  ];

  const rows = [
    {
      Name: "Laptop",
      Email: "35,000",
      ContactNumber: "50,000",
      Status: "5",
      Created: "2024-01-10",
    },
    {
      Name: "Laptop",
      Email: "35,000",
      ContactNumber: "50,000",
      Status: "5",
      Created: "2024-01-10",
    },
    {
      Name: "Laptop",
      Email: "35,000",
      ContactNumber: "50,000",
      Status: "5",
      Created: "2024-01-10",
    },
    {
      Name: "Laptop",
      Email: "35,000",
      ContactNumber: "50,000",
      Status: "5",
      Created: "2024-01-10",
    },
  ];

  return (
    <div className="bg-[#fdfdfdda] rounded  px-3 pt-1 h-[248px]">
      <h1 className="text-[18px] font-semibold mb-1">Available Product</h1>
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
                background: "#748d99",
                color: "#fff",
                fontSize: "15px",
                fontWeight: "600",
              },
            }}
          >
            <TableHead>
              <TableRow
                sx={{ "& .MuiTableCell-root": { padding: "5px 10px" } }}
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
              {rows.slice(0, 4).map((row, index) => {
                return (
                  <TableRow
                    role="checkbox"
                    tabIndex={-1}
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-[#c7cfd3cf]" : "bg-[#e1e9eaeb]"
                    }`}
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
  );
};

export default ProductAvailable;
