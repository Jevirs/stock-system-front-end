import React from "react";
import { Space } from "antd";
import StatisticGroup from "./components/StatisticGroup";
import DashTable from "./components/DashTable";

const Dashboard = () => {
  return (
    <div className='app-container'>
      <Space direction='vertical' size='large' style={{ width: "100%" }}>
        <StatisticGroup />
        <DashTable></DashTable>
      </Space>
    </div>
  );
};

export default Dashboard;
