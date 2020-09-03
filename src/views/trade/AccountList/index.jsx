import React from "react";
import { Card, List, Button, Descriptions } from "antd";
import { formatNumber } from "@/utils";
import { useEffect } from "react";

const data = [
  {
    name: "账户一",
  },
  {
    name: "账户二",
  },
  {
    name: "账户三",
  },
  {
    name: "账户四",
  },
  {
    name: "账户五",
  },
  {
    name: "账户三",
  },
  {
    name: "账户四",
  },
  {
    name: "账户五",
  },
  {
    name: "账户三",
  },
  {
    name: "账户四",
  },
  {
    name: "账户五",
  },
  {
    name: "账户三",
  },
  {
    name: "账户四",
  },
  {
    name: "账户五",
  },
  {
    name: "账户三",
  },
  {
    name: "账户四",
  },
  {
    name: "账户五",
  },
  {
    name: "账户三",
  },
  {
    name: "账户四",
  },
  {
    name: "账户五",
  },
];

const AccountList = (props) => {
  const { onSelect } = props;

  useEffect(() => {
    onSelect(data[0]);
  }, []);

  return (
    <Card>
      <List
        style={{ height: "80vh", width: "200px", overflow: "auto" }}
        itemLayout='vertical'
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                type='link'
                onClick={() => {
                  onSelect(item);
                }}
              >
                查看详情
              </Button>,
            ]}
          >
            <Descriptions title={item.name} column={1}>
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
          </List.Item>
        )}
      />
    </Card>
  );
};

export default AccountList;
