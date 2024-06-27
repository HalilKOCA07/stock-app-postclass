import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function SalesModal({ open, handleClose, setInfoSales, infoSales }) {
  const { getStock, postStock, putStock } = useStockRequest();
  const navigate = useNavigate();
  const { brands, products } = useSelector((state) => state.stock);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfoSales({ ...infoSales, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    if(infoSales._id){
        putStock("sales", infoSales)
    }else{
       postStock("sales", infoSales)
    }
   
    handleClose()
  };

  console.log(infoSales);

  useEffect(() => {
    getStock("brands");
    getStock("products");
  }, []);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          {/* *************** BRANDS ***************** */}
          <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
            <InputLabel id="demo-simple-select-label">Brand</InputLabel>
            <Select
              labelId="firm-select-label"
              value={infoSales?.brandId?._id || infoSales?.brandId}
              name="brandId"
              label="Brand"
              onChange={handleChange}
              required
            >
              <MenuItem
                sx={{
                  backgroundColor: "#dbdbdb",
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
                onClick={() => navigate("/stock/brands")}
              >
                Add New Brands
              </MenuItem>
              <hr />
              {brands.map((item) => (
                <MenuItem key={item._id} value={item._id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* *************** PRODUCTS ***************** */}
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Product</InputLabel>
            <Select
              labelId="firm-select-label"
              value={infoSales?.productId?._id || infoSales?.productId}
              name="productId"
              label="Product"
              onChange={handleChange}
              required
            >
              <MenuItem
                sx={{
                  backgroundColor: "#dbdbdb",
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
                onClick={() => navigate("/stock/products")}
              >
                Add New Product
              </MenuItem>
              <hr />
              {products.map((item) => (
                <MenuItem key={item._id} value={item._id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Quantity"
              id="quantity"
              name="quantity"
              inputProps={{ min: 0 }}
              sx={{ mt: 2 }}
              variant="outlined"
              type="number"
              value={infoSales?.quantity}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Price ( € )"
              id="price"
              name="price"
              inputProps={{ min: 0 }}
              sx={{ mt: 2 }}
              variant="outlined"
              type="number"
              value={infoSales?.price}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl fullWidth>
            <Button
              sx={{
                backgroundColor: "black",
                color: "white",
                m: 3,
                ":hover": { backgroundColor: "#020265" },
              }}
              onClick={handleSubmit}
            >
              {infoSales?._id ? "Edis Sales" : "New Add Sales"}
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}
