import { useEffect, useState } from "react";
import PurchasesTable from "../components/PurchasesTable";
import { Button, Typography } from "@mui/material";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";
import PurchasesModal from "../components/PurchasesModal";
import { newAddingBtnStyle, pageHeaderStyle } from "../styles/globalStyles";

const Purchases = () => {
  const { getStock } = useStockRequest();
  const { purchases } = useSelector((state) => state.stock);

  const initialState = {
    firmId: "",
    brandId: "",
    productId: "",
    quantity: "",
    price: "",
  };
  const [info, setInfo] = useState(initialState);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setInfo(initialState);
  };

  useEffect(() => {
    getStock("purchases");
  }, []);
  return (
    <div>
      <Typography sx={pageHeaderStyle}>
        PURCHASES
      </Typography>
      <Button
        sx={newAddingBtnStyle}
        onClick={handleOpen}
      >
        New Purchase
      </Button>
      <PurchasesTable purchases={purchases} handleOpen={handleOpen} setInfo={setInfo} />
      <PurchasesModal
        info={info}
        setInfo={setInfo}
        open={open}
        handleClose={handleClose}
        purchases={purchases}
      />
    </div>
  );
};

export default Purchases;
