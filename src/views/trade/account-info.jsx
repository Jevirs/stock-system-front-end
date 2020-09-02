import React from "react";
import { Descriptions } from "antd";
import { formatNumber } from "@/utils";

const AccountInfo = () => {
  return (
    <Descriptions title='账户一' column={5}>
      <Descriptions.Item label='账户名称'></Descriptions.Item>
      <Descriptions.Item label='总资产'>
        {formatNumber(19000000)}
      </Descriptions.Item>
      <Descriptions.Item label='持仓股票数'>
        {formatNumber(190)}
      </Descriptions.Item>
      <Descriptions.Item label='持仓总市值'>
        {formatNumber(19000000)}
      </Descriptions.Item>
      <Descriptions.Item label='可使用资金'>
        {formatNumber(22000000)}
      </Descriptions.Item>
    </Descriptions>
  );
};

export default AccountInfo;
