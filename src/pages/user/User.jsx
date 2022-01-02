import {
  Add,
  CalendarToday,
  LocationCityOutlined,
  MailOutlined,
  PhoneAndroid,
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
              <div className="show-username">jokmonaimon</div>
            </div>
            <div className="show-user-info">
              <CalendarToday className="show-user-icon" />
              <div className="show-username">03 June 1993</div>
            </div>
            <div className="show-user-info">
              <PhoneAndroid className="show-user-icon" />
              <div className="show-username">+256 776 020 431</div>
            </div>
            <div className="show-user-info">
              <MailOutlined className="show-user-icon" />
              <div className="show-username">sp.jokmon@gmail.com</div>
            </div>
            <div className="show-user-info">
              <LocationCityOutlined className="show-user-icon" />
              <div className="show-username">Gulu | Uganda</div>
            </div>
          </div>
        </div>
        <div className="update-user">User Information</div>
      </div>
    </div>
  );
}
