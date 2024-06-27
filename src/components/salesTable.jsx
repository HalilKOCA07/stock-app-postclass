import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useStockRequest from "../services/useStockRequest";
import { red } from "@mui/material/colors";
import { btnStyle } from "../styles/globalStyles";

export default function SalesTable({ sales, setInfoSales, open, handleOpen }) {
  const { deleteApi } = useStockRequest();
  const getRowId = (row) => row._id;
  const columns = [
    {
      field: "createdAt",
      headerName: "Date",
      minWidth: 90,
      headerAlign: "center",
      align: "center",
      width: 200,
      renderCell: ({ row }) => {
        return new Date(row.createdAt).toLocaleDateString("tr-TR");
      },
    },
    {
      field: "brandId",
      headerName: "Brand",
      minWidth: 200,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => row?.brandId?.name,
    },
    {
      field: "productId",
      headerName: "Product",
      minWidth: 200,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => row?.productId?.name,
    },
    {
      field: "quantity",
      headerName: "Quentity",
      minWidth: 40,
      type: "number",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 40,
      type: "number",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "amount",
      headerName: "Amount",
      minWidth: 40,
      type: "number",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      headerName: "Acitons",
      backgroundColor: red,
      minWidth: 40,
      headerAlign: "center",
      align: "center",
      renderCell: ({
        row: { brandId, productId, quantity, price, firmId, _id },
      }) => {
        return [
          <GridActionsCellItem
            key={"edit"}
            icon={<EditIcon />}
            label="Edit"
            sx={btnStyle}
            onClick={() => {
              handleOpen();
              setInfoSales({ brandId, productId, quantity, price, firmId, _id });
            }}
          />,
          <GridActionsCellItem
            key={"remove"}
            icon={<DeleteIcon />}
            label="Remove"
            onClick={() => deleteApi("sales", _id)}
            sx={btnStyle}
          />,
        ];
      },
    },
  ];

  return (
    <Box sx={{ m: "auto", minWidth: 900, maxWidth: 1000, mt: 4 }}>
      <DataGrid
        autoHeight
        rows={sales}
        columns={columns}
        pageSizeOptions={[10, 50, 75, 100]}
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
        getRowId={getRowId}
      />
    </Box>
  );
}
