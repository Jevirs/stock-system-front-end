import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Form, Input, Button, message, Spin } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import { login, getUserInfo } from "@/store/actions";

import "./index.less";

const Login = (props) => {
  const { token, login } = props;

  const [loading, setLoading] = useState(false);

  const handleLogin = (username, password) => {
    setLoading(true);
    login(username, password)
      .then((data) => {
        message.success("登录成功");
        /* TODO */
        const token = username + "-token";
        getUserInfo(token);
      })
      .catch((error) => {
        setLoading(false);
        message.error(error);
      });
  };

  const handleSubmit = (value) => {
    const { user_name, user_passwd } = value;
    handleLogin(user_name, user_passwd);
  };

  if (token) {
    return <Redirect to='/' />;
  }
  return (
    <DocumentTitle title={"用户登录"}>
      <div className='login-container'>
        <Form onFinish={handleSubmit} className='content'>
          <div className='title'>
            <h2>用户登录</h2>
          </div>
          <Spin spinning={loading} tip='登录中...'>
            <Form.Item
              name='user_name'
              rules={[{ required: true, message: "账号不得为空" }]}
            >
              <Input
                prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                placeholder='账号'
              />
            </Form.Item>
            <Form.Item
              name='user_passwd'
              rules={[{ required: true, message: "密码不得为空" }]}
            >
              <Input
                prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                type='password'
                placeholder='密码'
              />
            </Form.Item>
            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
              >
                登录
              </Button>
            </Form.Item>
            <Form.Item></Form.Item>
          </Spin>
        </Form>
      </div>
    </DocumentTitle>
  );
};

export default connect((state) => state.user, { login, getUserInfo })(Login);
