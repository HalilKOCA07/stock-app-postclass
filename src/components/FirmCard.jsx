import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import useStockRequest from "../services/useStockRequest";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { btnStyle } from "../styles/globalStyles";
import { heIL } from "@mui/material/locale";

const FirmCard = ({ firm, handleOpen, setInfoFirm }) => {
  const { getStock, deleteApi } = useStockRequest();

  return (
    <Card
      sx={{
        width: 300,
        height: 450,
        display: "grid",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      <Typography gutterBottom variant="h5" component="div">
        {firm?.name}
      </Typography>
      <CardActionArea sx={{}}>
        <CardMedia component="img" image={firm?.image} alt="green iguana" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <Typography sx={{ fontSize: 15, fontWeight: "bold" }}>
              Address:
            </Typography>
            {firm?.address}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Typography sx={{ fontSize: 15, fontWeight: "bold" }}>
              Phone:
            </Typography>
            {firm?.phone}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "center", mt: 0 }}>
        <Button
          sx={btnStyle}
          onClick={() => {
            handleOpen();
            setInfoFirm(firm);
          }}
        >
          <EditIcon />
        </Button>
        <Button sx={btnStyle} onClick={() => deleteApi("firms", firm?._id)}>
          <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default FirmCard;
