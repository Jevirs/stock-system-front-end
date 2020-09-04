import React from "react";
import { connect } from "react-redux";
import { Menu, Dropdown, Modal, Layout, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { logout, getUserInfo } from "@/store/actions";
import FullScreen from "@/components/FullScreen";
import Settings from "@/components/Settings";
import Hamburger from "@/components/Hamburger";
import BreadCrumb from "@/components/BreadCrumb";
import ResetPwd from "../ResetPwd";

import "./index.less";
import { useState } from "react";
const { Header } = Layout;

const LayoutHeader = (props) => {
  const {
    token,
    name,
    sidebarCollapsed,
    logout,
    getUserInfo,
    showSettings,
    fixedHeader,
  } = props;
  token && getUserInfo(token);

  const [resetVisible, setResetVisible] = useState(false);

  const handleLogout = (token) => {
    Modal.confirm({
      title: "注销",
      content: "确定要退出系统吗?",
      okText: "确定",
      cancelText: "取消",
      onOk: () => {
        logout(token);
      },
    });
  };
  const handlePassword = () => {
    setResetVisible(true);
  };
  const onClick = ({ key }) => {
    switch (key) {
      case "logout":
        handleLogout(token);
        break;
      case "password":
        handlePassword();
        break;
      default:
        break;
    }
  };
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item>{name}</Menu.Item>
      <Menu.Divider />
      <Menu.Item key='password'>修改密码</Menu.Item>
      <Menu.Item key='logout'>注销</Menu.Item>
    </Menu>
  );
  const computedStyle = () => {
    let styles;
    if (fixedHeader) {
      if (sidebarCollapsed) {
        styles = {
          width: "calc(100% - 80px)",
        };
      } else {
        styles = {
          width: "calc(100% - 200px)",
        };
      }
    } else {
      styles = {
        width: "100%",
      };
    }
    return styles;
  };
  return (
    <>
      {/* 这里是仿照antd pro的做法,如果固定header，
      则header的定位变为fixed，此时需要一个定位为relative的header把原来的header位置撑起来 */}
      {fixedHeader ? <Header /> : null}
      <Header
        style={computedStyle()}
        className={fixedHeader ? "fix-header" : ""}
      >
        <Hamburger />
        <BreadCrumb />
        <div className='right-menu'>
          <FullScreen />
          {showSettings ? <Settings /> : null}
          <div className='dropdown-wrap'>
            <Dropdown overlay={menu}>
              <div>
                <Avatar
                  icon={<UserOutlined />}
                  style={{ background: "#1890ffb0" }}
                >
                  {name}
                </Avatar>
              </div>
            </Dropdown>
          </div>
        </div>
      </Header>

      <ResetPwd
        visible={resetVisible}
        onOk={() => {
          setResetVisible(false);
          setTimeout(() => {
            logout(token);
          }, 1500);
        }}
        onCancel={() => {
          setResetVisible(false);
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.app,
    ...state.user,
    ...state.settings,
  };
};
export default connect(mapStateToProps, { logout, getUserInfo })(LayoutHeader);
