import React from "react";
import { connect } from "react-redux";
import { toggleSiderBar } from "@/store/actions";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import "./index.less";
const Hamburger = (props) => {
  const { sidebarCollapsed, toggleSiderBar } = props;
  return (
    <div className='hamburger-container'>
      {sidebarCollapsed ? (
        <MenuUnfoldOutlined onClick={toggleSiderBar} />
      ) : (
        <MenuFoldOutlined onClick={toggleSiderBar} />
      )}
    </div>
  );
};

export default connect((state) => state.app, { toggleSiderBar })(Hamburger);
