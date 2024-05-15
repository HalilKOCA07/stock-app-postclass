import React, { useEffect, useState } from "react";
import BrandsCard from "../components/BrandsCard";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import useStockRequest from "../services/useStockRequest";
import BrandsModal from "../components/BrandModal";
import CardSkeleton, { WarningMessage } from "../components/DataMessage";
import { ErrorMessage } from "formik";

const Brands = () => {
  const { brands, loading, error } = useSelector((state) => state.stock);
  const { getStock } = useStockRequest();

  const [info, setInfo] = useState({
    name: "",
    image: "",
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      name: "",
      image: "",
    });
  };

  useEffect(() => {
    getStock("brands");
  }, []);
  return (
    <div>
      <Typography variant="h4" sx={{ color: "red", fontSize: 25 }}>
        BRANDS
      </Typography>
      <Button variant="contained" onClick={handleOpen} sx={{ mt: 2, mb: 2 }}>
        NEW BRAND
      </Button>
      <Box>
        {loading && <CardSkeleton />}
        {error && !loading && <ErrorMessage />}
        {!brands.length && !loading && !error && (
          <WarningMessage handleOpen={handleOpen} />
        )}
        {brands.length && !loading && !error && (
                <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
        }}
      >
        {brands.map((brand) => (
          <Grid item key={brand._id} xs={12} sm={6} md={4}>
            <BrandsCard
              brand={brand}
              handleOpen={handleOpen}
              setInfo={setInfo}
            />
          </Grid>
        ))}
      </Box>
        )}

      </Box>

      <BrandsModal
        open={open}
        handleClose={handleClose}
        setInfo={setInfo}
        info={info}
      />
    </div>
  );
};

export default Brands;
