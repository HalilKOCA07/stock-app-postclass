import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import useStockRequest from "../services/useStockRequest";
import FormControl from "@mui/material/FormControl";
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

export default function FirmModal({open, handleClose, setInfoFirm, infoFirm }) {
  const { postStock, putStock } = useStockRequest();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfoFirm({ ...infoFirm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    if(infoFirm._id){
        putStock("firms", infoFirm)
    }else{
       postStock("firms", infoFirm)
    }
   
    handleClose()
  };

  console.log(infoFirm);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <FormControl fullWidth>
            <TextField
              label="Firm Name"
              id="name"
              name="name"
              inputProps={{ min: 0 }}
              sx={{ mt: 2 }}
              variant="outlined"
              value={infoFirm?.name}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Phone"
              id="phone"
              name="phone"
              inputProps={{ min: 0 }}
              sx={{ mt: 2 }}
              variant="outlined"
              value={infoFirm?.phone}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Address"
              id="address"
              name="address"
              inputProps={{ min: 0 }}
              sx={{ mt: 2 }}
              variant="outlined"
              value={infoFirm?.address}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Image"
              id="image"
              name="image"
              inputProps={{ min: 0 }}
              sx={{ mt: 2 }}
              variant="outlined"
              value={infoFirm?.image}
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
              {infoFirm?._id ? "Edit Firm" : "New Add Firm"}
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}
