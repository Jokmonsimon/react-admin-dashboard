import { Add } from "@mui/icons-material";
import "./User.css";

export default function User() {
  return (
    <div className="user">
      <div className="user-title-container">
        <h1 className="user-title">Edit User</h1>
        <button className="add-user-button">
          <Add /> Add User
        </button>
      </div>
      <div className="user-container">
        <div className="show-user">
          <img src="/images/Ojok.jpg" alt="" className="show-user-iamge" />
          <div className="show-username">Ojok Simon Peter</div>
          <div className="show-user-title">Full-stack Developer</div>
        </div>
        <div className="update-user"></div>
      </div>
    </div>
  );
}
