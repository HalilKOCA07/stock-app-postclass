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

export default function PurchasesModal({ open, handleClose, setInfo, info }) {
  const { getStock, postStock, putStock } = useStockRequest();
  const navigate = useNavigate();
  const { firms, brands, products } = useSelector((state) => state.stock);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    if(info._id){
        putStock("purchases", info)
    }else{
       postStock("purchases", info)
    }
   
    handleClose()
  };

  console.log(info);

  useEffect(() => {
    getStock("firms");
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
          {/* *************** FIRMS ***************** */}
          <FormControl fullWidth>
            <InputLabel id="firm-select-label">Firms</InputLabel>
            <Select
              labelId="firm-select-label"
              value={info?.firmId?._id || info?.firmId}
              name="firmId"
              label="Firms"
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
                onClick={() => navigate("/stock/firms")}
              >
                Add New Firm
              </MenuItem>
              <hr />
              {firms.map((item) => (
                <MenuItem key={item._id} value={item._id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* *************** BRANDS ***************** */}
          <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
            <InputLabel id="brand-select-label">Brand</InputLabel>
            <Select
              labelId="brand-select-label"
              value={info?.brandId?._id || info?.brandId}
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
            <InputLabel id="product-select-label">Product</InputLabel>
            <Select
              labelId="product-select-label"
              name="productId"
              label="Product"
              value={info?.productId?._id || info?.productId}
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
              value={info?.quantity}
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
              value={info?.price}
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
              {info?._id ? "Edit Purchase" : "New Add Purchase"}
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}
