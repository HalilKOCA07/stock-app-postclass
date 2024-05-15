import { Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useStockRequest from "../services/useStockRequest";

const FirmsCard = ({ firm, handleOpen, setInfo }) => {
  const { name, phone, _id, address, image } = firm;

  const {deleteStock} = useStockRequest()

  return (
    <Card
      sx={{
        maxWidth: 250,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "300px",
        height: "450px",
        p: 2,
      }}
    >
      <Typography gutterBottom variant="h6" component="div">
        {name}
      </Typography>
      <CardMedia
        component="img"
        sx={{ width: "200px"}}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {address}
        </Typography>
      </CardContent>
      <CardActions>
        <DeleteIcon sx={{ color: "red" }} onClick={() => deleteStock("firms", _id)}/>
        <EditIcon
          onClick={() => {
            handleOpen();
            setInfo(firm);
          }}
        />
      </CardActions>
    </Card>
  );
};

export default FirmsCard;
