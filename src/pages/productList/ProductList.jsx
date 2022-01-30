import "./ProductList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutlined, Edit } from "@mui/icons-material";
import { productRows } from "../../data";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 40 },
    {
      field: "productName",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="product-list-product">
            <img
              src={params.row.productImage}
              alt=""
              className="product-list-image"
            />
            {params.row.productName}
          </div>
        );
      },
    },
    { field: "productCategory", headerName: "Category", width: 200 },
    { field: "stock", headerName: "Stock", width: 100 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id} className="link">
              <Edit className="product-list-edit" />
            </Link>
            <DeleteOutlined
              className="product-list-delete"
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
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
