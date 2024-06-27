import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import useStockRequest from "../services/useStockRequest";
import { btnStyle } from "../styles/globalStyles";

export default function PurchasesTable({ purchases, handleOpen, setInfo }) {
  const {deleteApi} = useStockRequest()
  const getRowId = (row) => row._id;
  const columns = [
    {
      field: "createdAt",
      headerName: "Date:",
      width: 200,
      align:"center",
      headerAlign:"center",
      renderCell: ({ row }) => {
        return new Date(row.createdAt).toLocaleDateString("tr-TR");
      },
    },
    {
      field: "firmId",
      headerName: "Firm",
      width: 140,
      editable: true,
      align:"center",
      headerAlign:"center",
      renderCell: ({ row }) => row?.firmId.name,
    },
    {
      field: "brandId",
      headerName: "Brand",
      width: 140,
      editable: true,
      align:"center",
      headerAlign:"center",
      renderCell: ({ row }) => row?.brandId?.name,
    },
    {
      field: "productId",
      headerName: "Product",
      width: 120,
      editable: true,
      align:"center",
      headerAlign:"center",
      renderCell: ({ row }) => row?.productId?.name,
    },
    {
      field: "quantity",
      headerName: "Quentity",
      width: 100,
      type: "number",
      editable: false,
      align:"center",
      headerAlign:"center",
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
      type: "number",
      editable: false,
      align:"center",
      headerAlign:"center",
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 100,
      type: "number",
      editable: false,
      align:"center",
      headerAlign:"center",
    },
    {
      field: "actions",
      headerName: "Acitons",
      minWidht: 40,
      align:"center",
      headerAlign:"center",
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
              setInfo({ brandId, productId, quantity, price, firmId, _id });
            }}
          />,
          <GridActionsCellItem 
          key={"remove"}
          icon={<DeleteIcon />}
          label="Remove"
          sx={btnStyle}
          onClick={() => deleteApi("purchases", _id)}
          />
        ];
      },
    },
  ];

  return (
    <Box sx={{m:"auto", minWidth:900, maxWidth:1000, mt:4 }}>
      <DataGrid
        autoHeight
        rows={purchases}
        columns={columns}
        pageSizeOptions={[10,50,75,100]}
        disableRowSelectionOnClick
        getRowId={getRowId}
        slots={{toolbar:GridToolbar}}
        
      />
    </Box>
  );
}
