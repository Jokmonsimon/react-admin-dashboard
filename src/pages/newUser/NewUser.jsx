import "./NewUser.css";

export default function NewUser() {
  return (
    <div className="new-user-container">
      <h1 className="new-user-title">Add New User</h1>
      <form className="new-user-form">
        <div className="new-user-form-item">
          <label className="new-user-username">Username</label>
          <input type="text" placeholder="jokmon" className="new-user-input" />
        </div>
        <div className="new-user-form-item">
          <label className="new-user-username">Full Name</label>
          <input
            type="text"
            placeholder="Ojok Simon Peter"
            className="new-user-input"
          />
        </div>
        <div className="new-user-form-item">
          <div className="new-user-gender">
            <label className="new-user-username">Gender</label>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              className="new-user-input"
            />
            <label for="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              className="new-user-input"
            />
            <label for="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              className="new-user-input"
            />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="new-user-form-item">
          <label className="new-user-username">Email</label>
          <input
            type="email"
            placeholder="jokmon@gmail.com"
            className="new-user-input"
          />
        </div>
        <div className="new-user-form-item">
          <label className="new-user-username">Password</label>
          <input
            type="password"
            placeholder="password"
            className="new-user-input"
          />
        </div>
        <div className="new-user-form-item">
          <label className="new-user-username">Phone</label>
          <input
            type="text"
            placeholder="+256 776 020 431"
            className="new-user-input"
          />
        </div>
        <div className="new-user-form-item">
          <label className="new-user-username">Address</label>
          <input
            type="text"
            placeholder="Gulu | Uganda"
            className="new-user-input"
          />
        </div>
        <div className="new-user-form-item">
          <label className="new-user-username">Status</label>
          <select name="status" id="status">
            <option value="active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </form>
    </div>
  );
}
