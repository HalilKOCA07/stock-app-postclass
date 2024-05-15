import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import useStockRequest from "../services/useStockRequest";

export default function ProductsData({open}) {
  const getRowId = (row) => row._id;
  const { deleteStock } = useStockRequest();
  const { products, purchases, sales } = useSelector((state) => state.stock)
  const columns = [
    { field: "_id", headerName: "ID", minWidht: 150, flex: 1.4 },
    {
      field: "categoryId",
      headerName: "Category",
      width: 150,
      flex: 1,
      headerAlign: "center",
      align: "center",
      editable: true,
      valueGetter: (props) => props?.name,
    },
    {
      field: "brandId",
      headerName: "Brand",
      minWidth: 150,
      flex: 1.2,
      headerAlign: "center",
      align: "center",
      editable: true,
      valueGetter: (props) => props?.name,
    },
    {
      field: "name",
      headerName: "Name",
      type: "text",
      minWidth: 110,
      flex: 1.1,
      headerAlign: "center",
      align: "center",
      editable: true,
    },
    {
      field: "purchases",
      headerName: "Purchases",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "sales",
      headerName: "Sales",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "quantity",
      headerName: "Stock",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      getActions: (props) => {
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            onClick={() => deleteStock("products", props.id)}
            label="Delete"
          />,
        ];
      },
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        autoHeight
        getRowId={getRowId}
        columns={columns}
        rows={products}
        pageSizeOptions={[5,10,15,20,50,100]}
        checkboxSelection
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}
