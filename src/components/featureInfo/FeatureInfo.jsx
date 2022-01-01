import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import React from "react";
import "./FeatureInfo.css";

export default function FeatureInfo() {
  return (
    <div className="featured">
      <div className="featured-item">
        <span className="feature-title">Revenue</span>
        <div className="money-container">
          <span className="feature-money">UGX 12,415,750</span>
          <span className="money-rate">
            -114,800 <ArrowDownward className="money-icon negative" />
          </span>
        </div>
        <span className="feature-compare">Compared to last month</span>
      </div>
      <div className="featured-item">
        <span className="feature-title">Sales</span>
        <div className="money-container">
          <span className="feature-money">UGX 4,415,200</span>
          <span className="money-rate">
            -148,000 <ArrowDownward className="money-icon negative" />
          </span>
        </div>
        <span className="feature-compare">Compared to last month</span>
      </div>
      <div className="featured-item">
        <span className="feature-title">Cost</span>
        <div className="money-container">
          <span className="feature-money">UGX 3,815,500</span>
          <span className="money-rate">
            +889,460 <ArrowUpward className="money-icon" />
          </span>
        </div>
        <span className="feature-compare">Compared to last month</span>
      </div>
    </div>
  );
}
