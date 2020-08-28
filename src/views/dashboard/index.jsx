import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Space } from "antd";

import StatisticGroup from "./components/StatisticGroup";
import DashTable from "./components/DashTable";

const Dashboard = (props) => {
  const { role, token } = props;

  if (token && role !== "admin") {
    return <Redirect to='/trade' />;
  }

  return (
    <div className='app-container'>
      <Space direction='vertical' size='large' style={{ width: "100%" }}>
        <StatisticGroup />
        <DashTable></DashTable>
      </Space>
    </div>
  );
};

export default connect((state) => state.user)(Dashboard);
