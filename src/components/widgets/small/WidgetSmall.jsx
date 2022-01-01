import { Visibility } from "@mui/icons-material";
import "./WidgetSmall.css";

export default function WidgetSmall() {
  return (
    <div className="widget-small">
      <span className="widget-small-title">New Join Members</span>
      <ul className="widget-small-list">
        <li className="widget-small-list-item">
          <img className="widget-small-image" src="images/Ojok.jpg" alt="" />
          <div className="widget-small-user">
            <span className="widget-small-username">Ojok Simon Peter</span>
            <span className="widget-small-user-title">
              Full-stack Developer
            </span>
          </div>
          <button className="widget-small-btn">
            <Visibility className="widget-small-icon" />
            Display
          </button>
        </li>
        <li className="widget-small-list-item">
          <img className="widget-small-image" src="images/Ojok.jpg" alt="" />
          <div className="widget-small-user">
            <span className="widget-small-username">Eyena Samuel Baker</span>
            <span className="widget-small-user-title">Software Engineer</span>
          </div>
          <button className="widget-small-btn">
            <Visibility className="widget-small-icon" />
            Display
          </button>
        </li>
        <li className="widget-small-list-item">
          <img className="widget-small-image" src="images/Ojok.jpg" alt="" />
          <div className="widget-small-user">
            <span className="widget-small-username">Elisa Dimiti</span>
            <span className="widget-small-user-title">Software Engineer</span>
          </div>
          <button className="widget-small-btn">
            <Visibility className="widget-small-icon" />
            Display
          </button>
        </li>
        <li className="widget-small-list-item">
          <img className="widget-small-image" src="images/Ojok.jpg" alt="" />
          <div className="widget-small-user">
            <span className="widget-small-username">Rwotomiya Nathan</span>
            <span className="widget-small-user-title">
              Junior Software Engineer
            </span>
          </div>
          <button className="widget-small-btn">
            <Visibility className="widget-small-icon" />
            Display
          </button>
        </li>
        <li className="widget-small-list-item">
          <img className="widget-small-image" src="images/Ojok.jpg" alt="" />
          <div className="widget-small-user">
            <span className="widget-small-username">Akello Nancy</span>
            <span className="widget-small-user-title">
              Senior Software Engineer
            </span>
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
