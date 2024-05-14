import React, { useEffect, useState } from "react";
import FirmsCard from "../components/FirmsCard";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import useStockRequest from "../services/useStockRequest";
import FirmModal from "../components/FirmModal";
import CardSkeleton, { ErrorMessage, WarningMessage } from "../components/DataMessage";

const Firms = () => {
  const { firms } = useSelector((state) => state.stock);
  const { getStock } = useStockRequest();
  const {loading, error} = useSelector((state) => state.stock)

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      name: "",
      phone: "",
      image: "",
      address: "",
    });
  };

  useEffect(() => {
    getStock();
  }, []);
  return (
    <div>
      <Typography variant="h4" sx={{ color: "red", fontSize: 25 }}>
        FIRMS
      </Typography>
      <Button variant="contained" onClick={handleOpen} sx={{ mt: 2, mb: 2 }}>
        NEW FIRMS
      </Button>

      <Box>
        {loading && <CardSkeleton />}
        {error && !loading && <ErrorMessage />}
        {!firms.length && !loading && !error && (
          <WarningMessage handleOpen={handleOpen} />
        )}
        {!loading && !error && firms.length > 0 && (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
            }}
          >
            {firms.map((firm) => (
              <Grid item key={firm._id} xs={12} sm={6} md={4}>
                <FirmsCard
                  firm={firm}
                  handleOpen={handleOpen}
                  setInfo={setInfo}
                />
              </Grid>
            ))}
          </Box>
        )}
      </Box>

      <FirmModal
        open={open}
        handleClose={handleClose}
        setInfo={setInfo}
        info={info}
      />
    </div>
  );
};

export default Firms;
