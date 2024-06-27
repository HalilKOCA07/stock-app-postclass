import {useEffect} from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import EuroIcon from "@mui/icons-material/Euro";
import MoneyIcon from "@mui/icons-material/Money";
import Shop2Icon from "@mui/icons-material/Shop2";
import { Typography } from "@mui/material";
import { blue, deepPurple, red, teal } from "@mui/material/colors";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const FinancalIndicator = ({sales, purchases}) => {


  
  const salesAmount = sales.reduce((acc, sale) => acc + sale.amount, 0) 
  const purchasesAmount = purchases.reduce((acc, purch) => acc + purch.amount, 0) 
  const profitAmount = salesAmount - purchasesAmount
  
  const financalData = [
    {
      id: 1,
      title: "Sales",
      amount: salesAmount,
      icon: <EuroIcon />,
      bgcolor:teal[200],
      iconColor:teal[800]
    },
    {
      id: 2,
      title: "Profit",
      amount: salesAmount - purchasesAmount,
      icon: <MoneyIcon />,
      bgcolor:profitAmount > 0 ? blue[200] : red[200],
      iconColor:profitAmount > 0 ? blue[800] : red[800]

    },
    {
      id: 3,
      title: "Purchases",
      amount: purchasesAmount,
      icon: <Shop2Icon />,
      bgcolor:deepPurple[200],
      iconColor:deepPurple[800]
    },
  ];

  return (
    <Box sx={{display:"flex", justifyContent:"center", gap:5, mt:1}}>
      {financalData.map((item) => (
        <Card key={item.id} sx={{maxWidth: 250, height:100, boxShadow: 5, borderRadius:5, display:"flex", justifyContent:"center"}}>
          <CardContent sx={{width:75,height:60, m:2, boxShadow:7, display:"flex",backgroundColor:item.bgcolor, borderRadius:50, justifyContent:"center", alignItems:"center", "& .MuiSvgIcon-root":{ color:item.iconColor, fontSize:30,}}}>{item.icon}</CardContent>
          <CardActions sx={{width:175, display:"flex", flexDirection:"column", alignItems:"end", justifyContent:"center",mr:3}}>
            <Typography sx={{fontWeight:"bold", fontSize:20}}>{item.title}</Typography>
            <Typography sx={{fontWeight:"semibold", fontSize:18}}>€ {item.amount.toLocaleString("tr-TR")} </Typography>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default FinancalIndicator;
