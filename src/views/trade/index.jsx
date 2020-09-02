import React from "react";
import { Card, Space } from "antd";
import AccountList from "./account-list";
import AccountInfo from "./account-info";

const Trade = (props) => {
  return (
    <div className='app-container'>
      <Space direction='horizontal' align='top'>
        <Card>
          <AccountList />
        </Card>
        <Card title={<AccountInfo />}></Card>
      </Space>
    </div>
  );
};

export default Trade;
