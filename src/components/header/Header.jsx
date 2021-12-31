import React from "react";
import "./Header.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Language, Settings } from "@mui/icons-material";

export default function Header() {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header-left">
          <span className="logo">Jok-Code AI</span>
        </div>
        <div className="header-right">
          <div className="header-icons-container">
            <NotificationsNoneIcon />
            <span className="header-icons-badge">3</span>
          </div>
          <div className="header-icons-container">
            <Language />
            <span className="header-icons-language"></span>
          </div>
          <div className="header-icons-container">
            <Settings />
            <span className="header-icons-settings"></span>
          </div>
          <img src="images/Ojok.jpg" alt="" className="user-avater" />
        </div>
      </div>
    </div>
  );
}
