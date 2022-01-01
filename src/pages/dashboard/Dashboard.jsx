import React from "react";
import Chart from "../../components/chart/Chart";
import FeatureInfo from "../../components/featureInfo/FeatureInfo";
import "./Dashboard.css";
import { userData } from "../../data";
import WidgetSmall from "../../components/widgets/small/WidgetSmall";
import WidgetLarge from "../../components/widgets/large/WidgetLarge";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <FeatureInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active Users"
      />
      <div className="dashboard-widget">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}
