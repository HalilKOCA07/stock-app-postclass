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

export default function ProductsModal({ open, handleClose, setInfo, info }) {
  const { getStock, postStock, putStock } = useStockRequest();
  const navigate = useNavigate();
  const { categories, brands } = useSelector((state) => state.stock);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
console.log(open)
  const handleSubmit = (e) => {
    e.preventDefault()

    if(info._id){
        putStock("products", info)
    }else{
       postStock("products", info)
    }
   
    handleClose()
  };

  console.log(info);

  useEffect(() => {
    getStock("categories");
    getStock("brands");
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
            <InputLabel id="categories-select-label">categories</InputLabel>
            <Select
              labelId="categories-select-label"
              value={info?.categoryId?._id || info?.categoryId}
              name="categoryId"
              label="Category"
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
                Add New Category
              </MenuItem>
              <hr />
              {categories.map((item) => (
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

          <FormControl fullWidth>
            <TextField
              label="Name"
              id="name"
              name="name"
              inputProps={{ min: 0 }}
              sx={{ mt: 2 }}
              variant="outlined"
              value={info?.name}
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
              {info?._id ? "Edit Product" : "New Add Product"}
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}
