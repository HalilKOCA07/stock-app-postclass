import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useStockRequest from "../services/useStockRequest";

export default function PurchasesData({open, handleOpen, setInfo}) {
  const getRowId = (row) => row._id;
  const { deleteStock } = useStockRequest();
  const { purchases } = useSelector((state) => state.stock)

  
   const columns = [
    { field: "createdAt", headerName: "Date", minWidht: 150, flex: 1.4, valueGetter: (props) => {
      const date = new Date(props);
      return date.toLocaleString('tr-TR');
     } },
    {
      field: "firmId",
      headerName: "Firm",
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
                handleOpen()
                setInfo(purchases)
            }}
            
            label="Edit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            onClick={() => deleteStock("purchases", props.id)}
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
        rows={purchases}
        pageSizeOptions={[5,10,15,20,50,100]}
        checkboxSelection
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}
