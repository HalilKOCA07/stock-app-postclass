import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import useStockRequest from "../services/useStockRequest";

const Home = () => {
  const { sales } = useSelector((state) => state.stock);
  const { getStock } = useStockRequest();
  console.log(sales);

  let salesPrice = 0;
  let porfitPrice = 0;
  let purchasesPrice = 0;

  useEffect(() => {
    getStock("sales");
  }, []);
  return (
    <div>
      <Box bgcolor={"red"} display={"flex"} justifyContent={"center"} gap={3}>
        <Card sx={{ minWidth: 250, maxWidth: 250 }}>
          <CardContent sx={{ width: 50 }}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              SALES
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {sales.reduce((item, price) => (item = item + price.amount), 0)}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 250, maxWidth: 250 }}>
          <CardContent sx={{ width: 50 }}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              PROFIT
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {sales.reduce((item, price) => (item = item + price.amount), 0)}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 250, maxWidth: 250 }}>
          <CardContent sx={{ width: 50 }}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              PRCHASES
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Home;
