import React from "react";
import { Card } from "antd";

import AccountInfo from "./account-info";
import StockTable from "./stock-table";

const AccountTable = (props) => {
  const { account } = props;

  return (
    <Card title={<AccountInfo account={account} />}>
      <StockTable account={account} />
    </Card>
  );
};

export default AccountTable;
