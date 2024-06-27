import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  cardStyle,
  newAddingBtnStyle,
  pageHeaderStyle,
} from "../styles/globalStyles";
import FirmCard from "../components/FirmCard";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";
import FirmModal from "../components/FirmModal";

const Firms = () => {
  const { getStock } = useStockRequest();
  const { firms } = useSelector((state) => state.stock);

  const [open, setOpen] = useState(false);
  const initialState = {
    name: "",
    phone: "",
    image: "",
    address: "",
  };

  const [infoFirm, setInfoFirm] = useState(initialState);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfoFirm(initialState);
  };

  useEffect(() => {
    getStock("firms");
  }, []);
  return (
    <div>
      <Typography sx={pageHeaderStyle}>FIRMS</Typography>
      <Button sx={newAddingBtnStyle} onClick={handleOpen}>
        New Add Firm
      </Button>
      <Stack
        sx={cardStyle}
        useFlexGap
        direction={"row"}
        spacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {firms.map((firm) => (
          <Box key={firm?._id} sx={{}}>
            <FirmCard
              firm={firm}
              handleOpen={handleOpen}
              setInfoFirm={setInfoFirm}
            />
          </Box>
        ))}
      </Stack>
      <FirmModal
        open={open}
        handleClose={handleClose}
        setInfoFirm={setInfoFirm}
        infoFirm={infoFirm}
        firms={firms}
      />
    </div>
  );
};

export default Firms;
