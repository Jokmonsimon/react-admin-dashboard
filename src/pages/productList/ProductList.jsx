import "./ProductList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutlined, Edit } from "@mui/icons-material";
import { userRows } from "../../data";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
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
