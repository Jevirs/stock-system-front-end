import React, { useState } from "react";
import { Space } from "antd";
import { connect } from "react-redux";

import AccountList from "./AccountList";
import AccountTable from "./AccountTable";
import { useEffect } from "react";

const Trade = (props) => {
  const { role } = props;
  const [account, setAccount] = useState({});

  useEffect(() => {
    if (role !== "admin") {
      handleSelect({
        name: "操作账号A",
      });
    }
  }, []);

  const handleSelect = (account) => {
    setAccount(Object.assign({}, account));
  };

  return (
    <div className='app-container'>
      <Space direction='horizontal' align='top'>
        {role === "admin" ? <AccountList onSelect={handleSelect} /> : null}
        <AccountTable account={account} />
      </Space>
    </div>
  );
};

export default connect((state) => state.user)(Trade);
