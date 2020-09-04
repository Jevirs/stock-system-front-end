import React from "react";
import { Space, Modal, Row, Col, message } from "antd";
import StockInfo from "./stock-info";
import TradeForm from "./trade-form";
import ScanForm from "./scan-form";
import { useState } from "react";
import { useEffect } from "react";

const ActionForm = (props) => {
  const { visible, onCancel, onOk, stock, actionType } = props;
  const [tradeLoading, setTradeLoading] = useState(false);
  const [scanLoading, setScanLoading] = useState(false);

  useEffect(() => {
    if (visible) {
      getQuoteData();
      let interval = setInterval(() => {
        getQuoteData();
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [visible]);

  const getQuoteData = () => {
    console.log("轮询获取行情数据");
  };

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
              confirmLoading={tradeLoading}
              actionType={actionType}
              onSubmit={(data) => {
                setTradeLoading(true);
                console.log(`立即交易 ${actionType}`);
                console.log(data);
                setTimeout(() => {
                  message.success("提交成功");
                  setTradeLoading(false);
                }, 1000);
              }}
            />
          </Col>
          <Col span={12}>
            <ScanForm
              confirmLoading={scanLoading}
              actionType={actionType}
              onSubmit={(data) => {
                setScanLoading(true);
                console.log(`扫单交易 ${actionType}`);
                console.log(data);
                setTimeout(() => {
                  message.success("提交成功");
                  setScanLoading(false);
                }, 1000);
              }}
            />
          </Col>
        </Row>
      </Space>
    </Modal>
  );
};

export default ActionForm;
