import React from "react";
import "./Sidebar.css";
import {
  AttachMoney,
  Chat,
  Email,
  Feedback,
  Home,
  Inventory,
  ManageAccounts,
  Summarize,
  SupervisedUserCircle,
  Timeline,
  TrendingUp,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item active">
              <Home className="sidebar-icon" /> Home
            </li>
            <li className="sidebar-list-item">
              <Timeline className="sidebar-icon" /> Analytics
            </li>
            <li className="sidebar-list-item">
              <TrendingUp className="sidebar-icon" /> Sales
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Quick Menu</h3>
          <ul className="sidebar-list">
            <Link to="/users" className="link">
              <li className="sidebar-list-item">
                <SupervisedUserCircle className="sidebar-icon" /> Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebar-list-item">
                <Inventory className="sidebar-icon" /> Products
              </li>
            </Link>
            <Link to="/transactions" className="link">
              <li className="sidebar-list-item">
                <AttachMoney className="sidebar-icon" /> Transactions
              </li>
            </Link>
            <Link to="/productReports" className="link">
              <li className="sidebar-list-item">
                <Summarize className="sidebar-icon" /> Reports
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Notification</h3>
          <ul className="sidebar-list">
            <Link to="/mail" className="link">
              <li className="sidebar-list-item">
                <Email className="sidebar-icon" /> Mail
              </li>
            </Link>
            <Link to="/feedback" className="link">
              <li className="sidebar-list-item">
                <Feedback className="sidebar-icon" /> Feedback
              </li>
            </Link>
            <Link to="/messages" className="link">
              <li className="sidebar-list-item">
                <Chat className="sidebar-icon" /> Messages
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Staff</h3>
          <ul className="sidebar-list">
            <Link to="/manage" className="link">
              <li className="sidebar-list-item">
                <ManageAccounts className="sidebar-icon" /> Manage
              </li>
            </Link>
            <Link to="/analytics" className="link">
              <li className="sidebar-list-item">
                <Timeline className="sidebar-icon" /> Analytics
              </li>
            </Link>
            <Link to="/reports" className="link">
              <li className="sidebar-list-item">
                <Summarize className="sidebar-icon" /> Reports
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
