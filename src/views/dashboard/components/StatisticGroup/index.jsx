import React from "react";
import { Statistic, Card, Row, Col } from "antd";

const StatisticGroup = (props) => {
  return (
    <Row gutter={16}>
      <Col span={6}>
        <Card>
          <Statistic title='总资产' value={200000000} precision={2} />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic title='总持仓市值' value={120000000} precision={2} />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic title='总持仓股票' value={20} precision={0} />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic title='可使用资金' value={80000000} precision={2} />
        </Card>
      </Col>
    </Row>
  );
};

export default StatisticGroup;
