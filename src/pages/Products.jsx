import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ProductsData from "../components/ProductsData";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";

const Products = () => {
  const { getProducts } = useStockRequest();

  useEffect(() => {
    getProducts("products");
    getProducts("brandsId");
    // getStock("categoryId");
  }, []);
  return (
    <div>
      <Typography variant="h4" sx={{ color: "red", fontSize: 25 }}>
        PRODUCTS
      </Typography>
      <Button variant="contained" sx={{ mt: 2, mb: 2 }}>
        NEW PRODUCT
      </Button>
      <Box>

           <ProductsData />

       
      </Box>
    </div>
  );
};

export default Products;
