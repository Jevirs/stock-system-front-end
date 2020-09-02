import React from "react";
import { List } from "antd";

const AccountList = () => {
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
  ];

  return (
    <List
      style={{ width: "200px" }}
      itemLayout='vertical'
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={item.name}
            description='Ant Design, a design language for background applications, is refined by Ant UED Team'
          />
        </List.Item>
      )}
    />
  );
};

export default AccountList;
