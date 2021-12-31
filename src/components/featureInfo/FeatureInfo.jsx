import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import React from "react";
import "./FeatureInfo.css";

export default function FeatureInfo() {
  return (
    <div className="featured">
      <div className="featured-item">
        <span className="feature-title">Revenue</span>
        <div className="money-container">
          <span className="feature-money">$2,415.00</span>
          <span className="money-rate">
            -11.4 <ArrowDownward className="money-icon negative" />
          </span>
        </div>
        <span className="feature-compare">Compared to last month</span>
      </div>
      <div className="featured-item">
        <span className="feature-title">Sales</span>
        <div className="money-container">
          <span className="feature-money">$4,415.00</span>
          <span className="money-rate">
            -1.4 <ArrowDownward className="money-icon negative" />
          </span>
        </div>
        <span className="feature-compare">Compared to last month</span>
      </div>
      <div className="featured-item">
        <span className="feature-title">Cost</span>
        <div className="money-container">
          <span className="feature-money">$3,815.00</span>
          <span className="money-rate">
            +8.4 <ArrowUpward className="money-icon" />
          </span>
        </div>
        <span className="feature-compare">Compared to last month</span>
      </div>
    </div>
  );
}
