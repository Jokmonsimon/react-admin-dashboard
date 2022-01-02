import "./User.css";

export default function User() {
  return (
    <div className="user">
      <div className="user-title-container">
        <h1 className="user-title">Edit User</h1>
        <button className="add-user-button">Add User</button>
      </div>
      <div className="user-container">
        <div className="show-user"></div>
        <div className="update-user"></div>
      </div>
    </div>
  );
}
