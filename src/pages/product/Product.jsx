import "./Product.css";
import {
  Add,
  CalendarToday,
  LocationCityOutlined,
  MailOutlined,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <div className="product">
      <div className="product-title-container">
        <h1 className="product-title">Product Details</h1>
        <Link to="/addNewProduct" className="link">
          <button className="add-product-button">
            <Add /> Add Product
          </button>
        </Link>
      </div>
      <div className="product-container">
        <div className="show-product">
          <div className="show-product-top">
            <img src="/images/Ojok.jpg" alt="" className="show-product-iamge" />
            <div className="show-product-details">
              <span className="show-product-un">Ojok Simon Peter</span>
              <span className="show-product-title">Full-stack Developer</span>
            </div>
          </div>
          <div className="show-product-button">
            <span className="show-product-account-title">Account Details</span>
            <div className="show-product-info">
              <PermIdentityIcon className="show-product-icon" />
              <div className="show-product-detail-info">jokmonsimon</div>
            </div>
            <div className="show-product-info">
              <CalendarToday className="show-product-icon" />
              <div className="show-product-detail-info">03 June 1993</div>
            </div>
            <span className="show-product-account-title">Contact Details</span>
            <div className="show-product-info">
              <PhoneAndroid className="show-product-icon" />
              <div className="show-product-detail-info">+256 776 020 431</div>
            </div>
            <div className="show-product-info">
              <MailOutlined className="show-product-icon" />
              <div className="show-product-detail-info">
                sp.jokmon@gmail.com
              </div>
            </div>
            <span className="show-product-account-title">Address</span>
            <div className="show-product-info">
              <LocationCityOutlined className="show-product-icon" />
              <div className="show-product-detail-info">Gulu | Uganda</div>
            </div>
          </div>
        </div>
        <div className="update-product">
          <span className="upade-product-info-title">Edit Product Details</span>
          <form className="update-product-info-form">
            <div className="update-product-info-left">
              <div className="update-product-info-details">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="jokmonsimon"
                  className="update-product-input"
                />
              </div>
              <div className="update-product-info-details">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Ojok Simon Peter"
                  className="update-username-input"
                />
              </div>
              <div className="update-product-info-details">
                <label>Job Title</label>
                <input
                  type="text"
                  placeholder="Full-stack Developer"
                  className="update-username-input"
                />
              </div>
              <div className="update-product-info-details">
                <label>Date of Birth</label>
                <input
                  type="text"
                  placeholder="03 June 1993"
                  className="update-product-input"
                />
              </div>
              <div className="update-product-info-details">
                <label>Phone Number</label>
                <input
                  type="text"
                  placeholder="+256 776 020 431"
                  className="update-product-input"
                />
              </div>
              <div className="update-product-info-details">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="simonpeter.oj@gmail.com"
                  className="update-product-input"
                />
              </div>
              <div className="update-product-info-details">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Gulu | Uganda"
                  className="update-product-input"
                />
              </div>
            </div>
            <div className="update-product-info-right">
              <div className="update-product-image">
                <img
                  src="/images/Ojok.jpg"
                  alt=""
                  className="product-profile-image"
                />
                <label htmlFor="file">
                  <Publish className="update-product-icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  className="choose-product-profile-image"
                  style={{ display: "none" }}
                />
              </div>
              <button className="update-product-button">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
