import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Box, Button, Grid } from "@mui/material";
import { AlignHorizontalCenter } from "@mui/icons-material";

export const LoadingSkeleton = () => {
  return (
    <Stack spacing={2}>
      <Skeleton variant="text" height={80} />
      <Skeleton variant="rectangular" height={60} />
      <Skeleton variant="rectangular" height={60} />
      <Skeleton variant="rounded" height={40} />
    </Stack>
  );
};

export const ErrorMessage = () => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Somethings went wrong. Page faild to load.
      </Alert>
    </Stack>
  );
};

export const WarningMessage = ({ handleOpen }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        <span>No data to list. You must add new product ==={">"}</span>
        <Button variant="contained" onClick={() => handleOpen()} sx={{ ml: 2 }}>
          ADD PRODUCT
        </Button>
      </Alert>
    </Stack>
  );
};

//************** CARDS KELETON ******/

export default function CardSkeleton() {
  return (
    <Stack spacing={1}>
      <Box display={"grid"} justifyContent={"center"}>
        <Skeleton variant="rectangular" width={210} height={150} />
        <Skeleton sx={{mt:2, mb:2}} variant="rectangular" width={210} height={40} />
        <Skeleton variant="rectangular" width={100} height={20} />
      </Box>

      <Box display={"flex"} sx={{ justifyContent: "center", mt:4}}>
        <Skeleton variant="circular" width={30} height={30} />
        <Skeleton variant="circular" width={30} height={30} />
      </Box>
    </Stack>
  );
}
