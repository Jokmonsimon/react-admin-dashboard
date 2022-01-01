import { Visibility } from "@mui/icons-material";
import "./WidgetSmall.css";

export default function WidgetSmall() {
  return (
    <div className="widget-small">
      <span className="widget-small-title">New Join Members</span>
      <ul className="widget-small-list">
        <li className="widget-small-list-item">
          <img
            className="widget-small-image"
            src="images/Ojok.jpg"
            alt="User Image"
          />
          <div className="widget-small-user">
            <span className="widget-small-username">Ojok Simon Peter</span>
            <span className="widget-small-user-title">Software Engineer</span>
          </div>
          <button className="widget-small-btn">
            <Visibility className="widget-small-icon" />
            Display
          </button>
        </li>
        <li className="widget-small-list-item">
          <img
            className="widget-small-image"
            src="images/Ojok.jpg"
            alt="User Image"
          />
          <div className="widget-small-user">
            <span className="widget-small-username">Ojok Simon Peter</span>
            <span className="widget-small-user-title">Software Engineer</span>
          </div>
          <button className="widget-small-btn">
            <Visibility className="widget-small-icon" />
            Display
          </button>
        </li>
        <li className="widget-small-list-item">
          <img
            className="widget-small-image"
            src="images/Ojok.jpg"
            alt="User Image"
          />
          <div className="widget-small-user">
            <span className="widget-small-username">Ojok Simon Peter</span>
            <span className="widget-small-user-title">Software Engineer</span>
          </div>
          <button className="widget-small-btn">
            <Visibility className="widget-small-icon" />
            Display
          </button>
        </li>
        <li className="widget-small-list-item">
          <img
            className="widget-small-image"
            src="images/Ojok.jpg"
            alt="User Image"
          />
          <div className="widget-small-user">
            <span className="widget-small-username">Ojok Simon Peter</span>
            <span className="widget-small-user-title">Software Engineer</span>
          </div>
          <button className="widget-small-btn">
            <Visibility className="widget-small-icon" />
            Display
          </button>
        </li>
        <li className="widget-small-list-item">
          <img
            className="widget-small-image"
            src="images/Ojok.jpg"
            alt="User Image"
          />
          <div className="widget-small-user">
            <span className="widget-small-username">Ojok Simon Peter</span>
            <span className="widget-small-user-title">Software Engineer</span>
          </div>
          <button className="widget-small-btn">
            <Visibility className="widget-small-icon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
