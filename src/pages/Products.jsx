import React, { useEffect, useState } from "react";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";
import ProductsList from "../components/productsList";
import { newAddingBtnStyle, pageHeaderStyle } from "../styles/globalStyles";
import { Box, Button, Typography } from "@mui/material";
import ProductsModal from "../components/ProductsModal";

const Products = () => {
  const { getStock } = useStockRequest();
  const { categories, products } = useSelector((state) => state.stock);

  const initialState = {
    category:"",
    brand:"",
    name:""
  }
  const [open, setOpen] = useState(false)
  const [info, setInfo] = useState(initialState)



  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setInfo(initialState)
    
  }
  useEffect(() => {
    getStock("products");
    getStock("categories");
  }, []);
  return (
    <Box>
      <Typography sx={pageHeaderStyle}>PRODUCT</Typography>
      <Button sx={newAddingBtnStyle} onClick={handleOpen}>
        New Add Product
      </Button>
      <ProductsList categories={categories} setInfo={setInfo} products={products} handleOpen={handleOpen}/>
      <ProductsModal setInfo={setInfo} info={info} handleClose={handleClose} open={open}/>
    </Box>
  )
};

export default Products;
