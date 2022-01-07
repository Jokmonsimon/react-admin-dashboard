import "./ProductList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutlined, Edit } from "@mui/icons-material";
import { productRows } from "../../data";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (productId) => {
    setData(data.filter((item) => item.productId !== productId));
  };

  const columns = [
    { field: "productId", headerName: "ID", width: 40 },
    {
      field: "productName",
      headerName: "Product Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="user-list-user">
            <img src={params.row.avatar} alt="" className="user-list-image" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id} className="link">
              <Edit className="user-list-edit" />
            </Link>
            <DeleteOutlined
              className="user-list-delete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="product-list">
      <h1 className="product-title">Product List</h1>
      <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
