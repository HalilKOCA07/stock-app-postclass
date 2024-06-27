import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useStockRequest from "../services/useStockRequest";
import { red } from "@mui/material/colors";
import { btnStyle } from "../styles/globalStyles";

export default function ProductsList({ products, setInfo, handleOpen }) {
  const { deleteApi } = useStockRequest();
  const getRowId = (row) => row._id;
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      minWidth: 110,
      headerAlign: "center",
      align: "center",
      width: 200
    },
    {
      field: "categoryId",
      headerName: "Category",
      minWidth: 180,
      headerAlign: "center",
      align: "center",
      // renderCell: ({ row }) => row?.categoryId?.name,
      valueGetter: (value) => value?.name
    },
    {
      field: "brandId",
      headerName: "Brand",
      minWidth: 180,
      headerAlign: "center",
      align: "center",
      // renderCell: ({ row }) => row?.brandId?.name,    
      valueGetter: (value) => value?.name
    },
    {
      field: "name",
      headerName: "Name",
      qidth:170,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "quantity",
      headerName: "Stock",
      minWidth: 50,
      width:120,
      type: "number",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      headerName: "Acitons",
      backgroundColor: red,
      minWidth: 50,
      width:120,
      headerAlign: "center",
      align: "center",
      renderCell: ({
        row: { brandId, name, categoryId, _id },
      }) => {
        return [
          <GridActionsCellItem
            key={"edit"}
            icon={<EditIcon />}
            label="Edit"
            sx={btnStyle}
            onClick={() => {
              handleOpen();
              setInfo({ brandId, name, categoryId, _id });
            }}
          />,
          <GridActionsCellItem
            key={"remove"}
            icon={<DeleteIcon />}
            label="Remove"
            onClick={() => deleteApi("products", _id)}
            sx={btnStyle}
          />,
        ];
      },
    },
  ];

  return (
    <Box sx={{ m: "auto", minWidth: 950, maxWidth: 1050, mt: 4 }}>
      <DataGrid
        autoHeight
        rows={products}
        columns={columns}
        pageSizeOptions={[10, 50, 75, 100]}
        disableRowSelectionOnClick
        checkboxSelection
        slots={{ toolbar: GridToolbar }}
        getRowId={getRowId}
      />
    </Box>
  );
}
