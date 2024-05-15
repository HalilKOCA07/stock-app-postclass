import { Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useStockRequest from "../services/useStockRequest";

const BrandsCard = ({ brand, handleOpen, setInfo }) => {
  const { name, _id, image } = brand;

  const {deleteStock} = useStockRequest()

  return (
    <Card
      sx={{
        maxWidth: 300,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "450px",
        p: 2,
      }}
    >
      <Typography gutterBottom variant="h6" component="div">
        {name}
      </Typography>
      <CardMedia
        component="img"
        sx={{ width: "250px"}}
        image={image}
        title={name}
      />
      <CardActions>
        <DeleteIcon sx={{ color: "red" }} onClick={() => deleteStock("brands", _id)}/>
        <EditIcon
          onClick={() => {
            handleOpen();
            setInfo(brand);
          }}
        />
      </CardActions>
    </Card>
  );
};

export default BrandsCard;
