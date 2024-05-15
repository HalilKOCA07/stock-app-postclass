import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";
import {
  ErrorMessage,
  LoadingSkeleton,
  WarningMessage,
} from "../components/DataMessage";
import SalesData from "../components/SalesData";
import SalesModal from "../components/SalesModal";

const Products = () => {
  const { getStock } = useStockRequest();
  const { sales, loading, error } = useSelector((state) => state.stock);
  console.log("Error:", error)
  const [info, setInfo] = useState({
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
      brandId: "",
      productId: "",
      quantity: "",
      price: "",
    });
  };
  useEffect(() => {
    getStock("sales");
    getStock("brands");
    getStock("products");
  }, []);
  return (
    <div>
      <Typography variant="h4" sx={{ color: "red", fontSize: 25 }}>
        SALES
      </Typography>
      {sales.length > 0 && !error && (
        <Button
          variant="contained"
          onClick={() => handleOpen()}
          sx={{ mt: 2, mb: 2 }}
        >
          NEW SALES
        </Button>
      )}
      <Box>
        {loading && <LoadingSkeleton />}
        {error && !loading && <ErrorMessage />}
        {!sales.length && !loading && !error && (
          <WarningMessage handleOpen={handleOpen} />
        )}
        {!loading && !error && sales.length > 0 && (
          <SalesData
            info={info}
            handleOpen={handleOpen}
            setInfo={setInfo}
          />
        )}
      </Box>
      <SalesModal
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
