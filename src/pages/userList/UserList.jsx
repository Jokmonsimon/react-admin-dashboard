import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutlined, Edit } from "@mui/icons-material";

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

  const rows = [
    {
      id: 1,
      username: "Ojok Simon Peter",
      avatar: "images/Ojok.jpg",
      email: "simonpeter.oj@gmail.com",
      status: "Active",
      transaction: "UGX 489,000",
    },
    {
      id: 2,
      username: "Ojok Simon Peter",
      avatar: "images/Ojok.jpg",
      email: "simonpeter.oj@gmail.com",
      status: "Active",
      transaction: "UGX 489,000",
    },
    {
      id: 3,
      username: "Ojok Simon Peter",
      avatar: "images/Ojok.jpg",
      email: "simonpeter.oj@gmail.com",
      status: "Inactive",
      transaction: "UGX 489,000",
    },
    {
      id: 4,
      username: "Ojok Simon Peter",
      avatar: "images/Ojok.jpg",
      email: "simonpeter.oj@gmail.com",
      status: "Active",
      transaction: "UGX 489,000",
    },
    {
      id: 5,
      username: "Ojok Simon Peter",
      avatar: "images/Ojok.jpg",
      email: "simonpeter.oj@gmail.com",
      status: "Active",
      transaction: "UGX 489,000",
    },
    {
      id: 6,
      username: "Ojok Simon Peter",
      avatar: "images/Ojok.jpg",
      email: "simonpeter.oj@gmail.com",
      status: "Active",
      transaction: "UGX 489,000",
    },
    {
      id: 7,
      username: "Ojok Simon Peter",
      avatar: "images/Ojok.jpg",
      email: "simonpeter.oj@gmail.com",
      status: "Active",
      transaction: "UGX 489,000",
    },
    {
      id: 8,
      username: "Ojok Simon Peter",
      avatar: "images/Ojok.jpg",
      email: "simonpeter.oj@gmail.com",
      status: "Active",
      transaction: "UGX 489,000",
    },
    {
      id: 9,
      username: "Ojok Simon Peter",
      avatar: "images/Ojok.jpg",
      email: "simonpeter.oj@gmail.com",
      status: "Active",
      transaction: "UGX 489,000",
    },
    {
      id: 10,
      username: "Ojok Simon Peter",
      avatar: "images/Ojok.jpg",
      email: "simonpeter.oj@gmail.com",
      status: "Active",
      transaction: "UGX 489,000",
    },
  ];

  return (
    <div className="user-list">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
