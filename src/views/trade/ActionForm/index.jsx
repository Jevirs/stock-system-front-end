import React from "react";
import { Space, Modal, Row, Col } from "antd";
import StockInfo from "./stock-info";
import TradeForm from "./trade-form";
import ScanForm from "./scan-form";
import { useEffect } from "react";

const ActionForm = (props) => {
  const { visible, onCancel, onOk, stock, actionType } = props;

  useEffect(() => {
    console.log("action something is change");
  }, [stock, actionType]);

  return (
    <Modal
      width='720px'
      title='操作'
      visible={visible}
      onCancel={onCancel}
      onOk={onOk}
      destroyOnClose={true}
      footer={null}
    >
      <Space direction='vertical'>
        <StockInfo stock={stock} />
        <Row gutter={8} justify='space-around'>
          <Col span={12}>
            <TradeForm
              actionType={actionType}
              onSubmit={(data) => {
                console.log(`立即交易 ${actionType}`);
                console.log(data);
              }}
            />
          </Col>
          <Col span={12}>
            <ScanForm
              actionType={actionType}
              onSubmit={(data) => {
                console.log(`扫单交易 ${actionType}`);
                console.log(data);
              }}
            />
          </Col>
        </Row>
      </Space>
    </Modal>
  );
};

export default ActionForm;
