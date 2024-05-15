import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useStockRequest from "../services/useStockRequest";

export default function SalesData({
  open,
  info,
  handleOpen,
  setInfo,
}) {
  const {sales} = useSelector((state) => state.stock)
  const getRowId = (row) => row._id;
  const { deleteStock } = useStockRequest();
  const columns = [
    {
      field: "createdAt",
      headerName: "Date",
      minWidht: 150,
      flex: 1.4,
      valueGetter: (props) => {
        const date = new Date(props);
        return date.toLocaleString("tr-TR");
      },
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
      headerName: "Product",
      type: "text",
      minWidth: 110,
      flex: 1.1,
      headerAlign: "center",
      align: "center",
      editable: true,
    },
    {
      field: "quantity",
      headerName: "Qantity",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price",
      headerName: "Price",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "amount",
      headerName: "Amount",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
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
            icon={<EditIcon />}
            onClick={() => {
              handleOpen();
              setInfo();
            }}
            label="Edit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            onClick={() => deleteStock("sales", props.id)}
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
        rows={sales}
        pageSizeOptions={[5, 10, 15, 20, 50, 100]}
        checkboxSelection
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}
