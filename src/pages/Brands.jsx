import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  cardStyle,
  newAddingBtnStyle,
  pageHeaderStyle,
} from "../styles/globalStyles";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";
import BrandCard from "../components/BrandCard";
import BrandModal from "../components/BrandModal";

const Brands = () => {
  const { getStock } = useStockRequest();
  const { brands } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const initialState = {
    name: "",
    image: "",
  };

  const [infoBrand, setInfoBrand] = useState(initialState);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfoBrand(initialState);
  };

  useEffect(() => {
    getStock("brands");
  }, []);
  return (
    <div>
      <Typography sx={pageHeaderStyle}>BRANDS</Typography>
      <Button sx={newAddingBtnStyle} onClick={handleOpen}>
        New Add Brand
      </Button>
      <Stack
        sx={cardStyle}
        useFlexGap
        direction={"row"}
        spacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {brands.map((brand) => (
          <Box key={brand?._id} sx={{}}>
            <BrandCard
              brand={brand}
              handleOpen={handleOpen}
              setInfoBrand={setInfoBrand}
            />
          </Box>
        ))}
      </Stack>
      <BrandModal
        open={open}
        handleClose={handleClose}
        setInfoBrand={setInfoBrand}
        infoBrand={infoBrand}
      />
    </div>
  );
};

export default Brands;
