import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import useStockRequest from "../services/useStockRequest";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function PurchasesModal({ open, handleClose, info, setInfo }) {
  const { postStock } = useStockRequest();
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const {firms, brands, products} = useSelector((state) => state.stock);

  const handleSubmit = (e) => {
    e.preventDefault();
    postStock("purchases", info);
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component={"form"}
            onSubmit={handleSubmit}
          >
            <FormControl fullWidth>
            <InputLabel id="firmId">Firms</InputLabel>
              <Select
                label="firms"
                labelId="firmId"
                id="firmId"
                name="firmId"
                value={info.firmId}
                onChange={handleChange}
                required
              >
                {firms.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
            <InputLabel id="brandId">Brands</InputLabel>
              <Select
                label="brands"
                labelId="brandId"
                id="brandId"
                name="brandId"
                value={info.brandId}
                onChange={handleChange}
                required
              >
                {brands.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
            <InputLabel id="productId">Products</InputLabel>
              <Select
                label="products"
                labelId="productId"
                id="productId"
                name="productId"
                value={info.productId}
                onChange={handleChange}
                required
              >
                {products.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Quantity"
              name="quantity"
              id="quantity"
              type="number"
              variant="outlined"
              value={info.quantity}
              onChange={handleChange}
              required
            />
            <TextField
              label="Price"
              name="price"
              id="price"
              type="number"
              variant="outlined"
              value={info.price}
              onChange={handleChange}
              required
            />
            <Button variant="contained" type="submit">
              ADD PURCHASES
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
