import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutlined, Edit } from "@mui/icons-material";
import { userRows } from "../../data";

export default function UserList() {
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
            <Edit className="user-list-edit" />
            <DeleteOutlined className="user-list-delete" />
          </>
        );
      },
    },
  ];

  return (
    <div className="user-list">
      <DataGrid
        disableSelectionOnClick
        rows={userRows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
