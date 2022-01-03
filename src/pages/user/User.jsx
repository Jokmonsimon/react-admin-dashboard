import {
  Add,
  CalendarToday,
  LocationCityOutlined,
  MailOutlined,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import "./User.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

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
          <div className="show-user-top">
            <img src="/images/Ojok.jpg" alt="" className="show-user-iamge" />
            <div className="show-user-details">
              <span className="show-username">Ojok Simon Peter</span>
              <span className="show-user-title">Full-stack Developer</span>
            </div>
          </div>
          <div className="show-user-button">
            <span className="show-user-account-title">Account Details</span>
            <div className="show-user-info">
              <PermIdentityIcon className="show-user-icon" />
              <div className="show-user-detail-info">jokmonsimon</div>
            </div>
            <div className="show-user-info">
              <CalendarToday className="show-user-icon" />
              <div className="show-user-detail-info">03 June 1993</div>
            </div>
            <span className="show-user-account-title">Contact Details</span>
            <div className="show-user-info">
              <PhoneAndroid className="show-user-icon" />
              <div className="show-user-detail-info">+256 776 020 431</div>
            </div>
            <div className="show-user-info">
              <MailOutlined className="show-user-icon" />
              <div className="show-user-detail-info">sp.jokmon@gmail.com</div>
            </div>
            <span className="show-user-account-title">Address</span>
            <div className="show-user-info">
              <LocationCityOutlined className="show-user-icon" />
              <div className="show-user-detail-info">Gulu | Uganda</div>
            </div>
          </div>
        </div>
        <div className="update-user">
          <span className="upade-user-info-title">Edit User Information</span>
          <form className="update-user-info-form">
            <div className="update-user-info-left">
              <div className="update-user-info-details">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="jokmonsimon"
                  className="update-user-input"
                />
              </div>
              <div className="update-user-info-details">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Ojok Simon Peter"
                  className="update-username-input"
                />
              </div>
              <div className="update-user-info-details">
                <label>Job Title</label>
                <input
                  type="text"
                  placeholder="Full-stack Developer"
                  className="update-username-input"
                />
              </div>
              <div className="update-user-info-details">
                <label>Date of Birth</label>
                <input
                  type="text"
                  placeholder="03 June 1993"
                  className="update-user-input"
                />
              </div>
              <div className="update-user-info-details">
                <label>Phone Number</label>
                <input
                  type="text"
                  placeholder="+256 776 020 431"
                  className="update-user-input"
                />
              </div>
              <div className="update-user-info-details">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="simonpeter.oj@gmail.com"
                  className="update-user-input"
                />
              </div>
              <div className="update-user-info-details">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Gulu | Uganda"
                  className="update-user-input"
                />
              </div>
            </div>
            <div className="update-user-info-right">
              <div className="update-user-image">
                <img
                  src="/images/Ojok.jpg"
                  alt=""
                  className="user-profile-image"
                />
                <label htmlFor="file">
                  <Publish />
                </label>
                <input
                  type="file"
                  id="file"
                  className="choose-user-profile-image"
                  style={{ display: "none" }}
                />
              </div>
              <button className="update-user-button">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
