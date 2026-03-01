import { Autocomplete, Box, Grid, Modal, TextField } from "@mui/material";
import { IoMdClose } from "react-icons/io"; 

const AddProduct = ({ open, onClose }) => {
  const products = [
    "Electronics",
    "Fertilizer",
    "Textile",
    "Home Decoration",
    "Groceries",
    "Furniture",
    "Clothing",
    "Footwear",
    "Stationery",
    "Pharmaceutical",
    "Sports Equipment",
    "Automobile Parts",
    "Hardware Tools",
    "Mobile Accessories",
    "Kitchen Appliances",
    "Beauty Products",
    "Toys",
    "Books",
    "Dairy Products",
    "Beverages",
    "Construction Materials",
    "Computer Accessories",
    "Gardening Tools",
    "Pet Supplies",
    "Electrical Items",
    "Sanitary Products",
    "Packaging Materials",
    "Bakery Items",
    "Plastic Products",
    "Industrial Equipment",
  ];

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{
          sx: {
            backdropFilter: "blur(3px)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "40%",
          }}
          className="bg-[#fdfdfd] pt-3 px-6 pb-6 rounded-[20px]"
        >
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-[22px] font-semibold">Add Product</h1>
            <IoMdClose
              className="text-[24px] cursor-pointer"
              onClick={onClose}
            />
          </div>
          <Grid
            container
            columnSpacing={1}
            rowSpacing={2}
            className="max-h-[calc(100vh-200px)] overflow-auto"
          >
            <Grid size={12}>
              <label htmlFor="name">
                Product <span className="text-[#e71616]">*</span>
              </label>
              <Autocomplete
                disablePortal
                size="small"
                options={products || []}
                sx={{ width: "100%" }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>
            <Grid size={12}>
              <label htmlFor="email">Description</label>
              <TextField
                id="Brand"
                multiline
                type="text"
                size="small"
                placeholder="write..."
                className="w-full"
                minRows={2}
                maxRows={2}
              />
            </Grid>
          </Grid>
          <div className="flex items-center gap-3 mt-5">
            <button className="border_btn" onClick={onClose}>
              Cancel
            </button>
            <button className="fill_btn">Submit</button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default AddProduct;
