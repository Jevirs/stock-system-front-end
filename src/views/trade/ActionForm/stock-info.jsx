import React from "react";
import { Descriptions } from "antd";
import { formatNumber } from "@/utils";

const StockInfo = () => {
  return (
    <Descriptions title='中国平安 601138' column={2}>
      <Descriptions.Item label='现价'>33.33元</Descriptions.Item>
      <Descriptions.Item label='当日成交量'>
        {formatNumber(19000000)}手
      </Descriptions.Item>
      <Descriptions.Item label='价格限制'>
        {formatNumber(190)}元
      </Descriptions.Item>
      <Descriptions.Item label='单量限制'>
        {formatNumber(19000000)}元
      </Descriptions.Item>
      <Descriptions.Item label='仓位限制'>
        {formatNumber(19000000)}元
      </Descriptions.Item>
      <br />
      <Descriptions.Item label='涨停'>
        {formatNumber(22000000)}元
      </Descriptions.Item>
      <Descriptions.Item label='跌停'>
        {formatNumber(22000000)}元
      </Descriptions.Item>
    </Descriptions>
  );
};

export default StockInfo;
