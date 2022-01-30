import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import { Add, DeleteOutlined, Edit } from "@mui/icons-material";
import { userRows } from "../../data";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 40 },
    {
      field: "user",
      headerName: "User",
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
    <div className="user-list">
      <div className="user-title-container">
        <h1 className="user-title">User List</h1>
        <Link to="/addNewUser" className="link">
          <button className="add-user-button">
            <Add /> Add User
          </button>
        </Link>
      </div>
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
