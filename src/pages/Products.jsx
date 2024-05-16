import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductsData from "../components/ProductsData";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";
import ProductsModal from "../components/ProductsModal";
import { ErrorMessage, LoadingSkeleton, WarningMessage } from "../components/DataMessage";

const Products = () => {
  const { getStock } = useStockRequest();
  const {products, loading, error } = useSelector((state) => state.stock);
  const [info, setInfo] = useState({
    name: "",
    categoryId: "",
    brandId: "",
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      name: "",
      categoryId: "",
      brandId: "",
    });
  };

  useEffect(() => {
    getStock("products");
    getStock("categories");
    getStock("brands");
    getStock("purchases");
    getStock("sales");
  }, []);
  return (
    <div>
      <Typography variant="h4" sx={{ color: "red", fontSize: 25 }}>
        PRODUCTS
      </Typography>
      {products.length > 0 && <Button
        variant="contained"
        onClick={() => handleOpen()}
        sx={{ mt: 2, mb: 2 }}
      >
        NEW PRODUCT
      </Button>}
      <Box>
        {loading && <LoadingSkeleton />}
        {error && !loading && <ErrorMessage />}
        {!products.length && !loading && !error && <WarningMessage handleOpen={handleOpen}/>}
        {!loading && !error && products.length > 0 && <ProductsData />}
        
      </Box>
      <ProductsModal
        open={open}
        info={info}
        setInfo={setInfo}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Products;
