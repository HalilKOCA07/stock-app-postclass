import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";
import {
  ErrorMessage,
  LoadingSkeleton,
  WarningMessage,
} from "../components/DataMessage";
import PurchasesData from "../components/PurchasesData";
import PurchasesModal from "../components/PurchasesModal";

const Products = () => {
  const { getStock } = useStockRequest();
  const { purchases, loading, error } = useSelector((state) => state.stock);
  const [info, setInfo] = useState({
    firmId: "",
    brandId: "",
    productId: "",
    quantity: "",
    price: "",
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      firmId: "",
      brandId: "",
      productId: "",
      quantity: "",
      price: "",
    });
  };
  useEffect(() => {
    getStock("purchases");
    getStock("firms");
    getStock("brands");
    getStock("products");
  }, []);
  return (
    <div>
      <Typography variant="h4" sx={{ color: "red", fontSize: 25 }}>
        PURCHASES
      </Typography>
      {purchases.length > 0 && (
        <Button
          variant="contained"
          onClick={() => handleOpen()}
          sx={{ mt: 2, mb: 2 }}
        >
          NEW PURCHASE
        </Button>
      )}
      <Box>
        {loading && <LoadingSkeleton />}
        {error && !loading && <ErrorMessage />}
        {!purchases.length && !loading && !error && (
          <WarningMessage handleOpen={handleOpen} />
        )}
        {!loading && !error && purchases.length > 0 && (
          <PurchasesData
            info={info}
            handleOpen={handleOpen}
            setInfo={setInfo}
          />
        )}
      </Box>
      <PurchasesModal
        open={open}
        info={info}
        setInfo={setInfo}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </div>
  );
};

export default Products;
