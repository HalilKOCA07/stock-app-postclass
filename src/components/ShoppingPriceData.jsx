import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import useStockRequest from "../services/useStockRequest";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import KeyboardDoubleArrowUpSharpIcon from '@mui/icons-material/KeyboardDoubleArrowUpSharp';
import KeyboardDoubleArrowDownSharpIcon from '@mui/icons-material/KeyboardDoubleArrowDownSharp';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';


const ShoppingPriceData = () => {
  const { sales, purchases } = useSelector((state) => state.stock);
  const { getStock } = useStockRequest();
  console.log(sales);

  let salesPrice = 0;
  let porfitPrice = 0;
  let purchasesPrice = 0;

  const lastPriceData = () => {
     salesPrice = sales.reduce((item, price) => (item = item + price.amount), 0)
     purchasesPrice = purchases.reduce((item, price) => (item = item + price.amount), 0)
     porfitPrice = salesPrice - purchasesPrice
  }
  lastPriceData()
  useEffect(() => {
    getStock("sales");
    getStock("purchases");
  }, []);
  return (
    <div>
      <Box display={"flex"} justifyContent={"center"} gap={3}>
      {/* ***************************  SALES PRICE   ***************************** */}
        <Card sx={{ minWidth: 300, maxWidth: 300, display:"flex", justifyContent:"center", boxShadow:5}}>
          <CardContent sx={{ width: 50, display:"flex", justifyContent:"center", gap:5}}>
            <Box>
              <MonetizationOnIcon sx={{fontSize:"5rem", color:"#3b71eb", bgcolor:"#d0daf6", p:"5px", borderRadius:5}}/>
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: 25, fontWeight:"bold" }}
                color="text.secondary"
                gutterBottom
              >
                SALES
              </Typography>
              <Typography
                sx={{  fontSize: 25, fontWeight:"bold" }}
                color="text.secondary"
                gutterBottom
              >
                ${salesPrice.toFixed(2)}
              </Typography>
            </Box>
          </CardContent>
        </Card>
        {/* ****************************  PROFIT PRICE   ********************************* */}
        <Card sx={{ minWidth: 300, maxWidth: 350, display:"flex", justifyContent:"center",boxShadow:5 }}>
          <CardContent sx={{ width: 50, display:"flex", justifyContent:"center", gap:3}}>
            <Box>
              {porfitPrice < 0 ? ( <KeyboardDoubleArrowDownSharpIcon sx={{fontSize:"5rem", color:"red", bgcolor:"#f6d0d0", borderRadius:5}}/>) : (<KeyboardDoubleArrowUpSharpIcon sx={{fontSize:"5rem", color:"#3b71eb", bgcolor:"#d0daf6", borderRadius:5}}/>)}
             
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: 25, fontWeight:"bold" }}
                color="text.secondary"
                gutterBottom
              >
                PROFIT
              </Typography>
              <Typography
                sx={{  fontSize: 25, fontWeight:"bold" }}
                color="text.secondary"
                gutterBottom
              >
                ${porfitPrice.toFixed(2)}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      {/* ***************************  PURCHASES PRICE   ***************************** */}
        <Card sx={{ minWidth: 300, maxWidth: 350, display:"flex", justifyContent:"center",boxShadow:5 }}>
          <CardContent sx={{ width: 50, display:"flex", justifyContent:"center", gap:3}}>
            <Box>
              <ShoppingCartSharpIcon sx={{fontSize:"5rem", color:"#eb1300", bgcolor:"#f6d0d0",p:"5px", borderRadius:5}}/>
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: 25, fontWeight:"bold" }}
                color="text.secondary"
                gutterBottom
              >
                PURCHASES
              </Typography>
              <Typography
                sx={{  fontSize: 25, fontWeight:"bold" }}
                color="text.secondary"
                gutterBottom
              >
                ${purchasesPrice.toFixed(2)}
              </Typography>
            </Box>
          </CardContent>
        </Card>
   
      </Box>
    </div>
  );
};

export default ShoppingPriceData;
