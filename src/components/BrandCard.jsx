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

const BrandCard = ({ brand, handleOpen, setInfoBrand }) => {
  const { deleteApi } = useStockRequest();

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
        {brand?.name}
      </Typography>
      <Typography>
        <CardMedia component="img" image={brand?.image} alt={brand?.name} />

      </Typography>
      <CardActions sx={{ justifyContent: "center", mt: 0 }}>
        <Button
          sx={btnStyle}
          onClick={() => {
            handleOpen();
            setInfoBrand(brand);
          }}
        >
          <EditIcon />
        </Button>
        <Button sx={btnStyle} onClick={() => deleteApi("brands", brand?._id)}>
          <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default BrandCard;
