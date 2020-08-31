import React from "react";
import { Form, Input, Modal, message } from "antd";
import { useState } from "react";

const ResetPwd = (props) => {
  const { visible, onCancel, onOk } = props;
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: {
      sm: { span: 4 },
    },
    wrapperCol: {
      sm: { span: 16 },
    },
  };

  const handelOk = () => {
    form
      .validateFields()
      .then((value) => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          form.resetFields();
          message.success("修改成功，请重新登录...");
          onOk();
        }, 1500);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handelCancel = () => {
    form.resetFields();
    onCancel();
  };

  const validatePwd = (rule, value, callback) => {
    if (value !== form.getFieldValue("password")) {
      callback(new Error("两次密码不一致"));
    } else {
      callback();
    }
  };

  return (
    <Modal
      title='修改密码'
      visible={visible}
      onCancel={handelCancel}
      onOk={handelOk}
      confirmLoading={loading}
    >
      <Form {...formItemLayout} form={form}>
        <Form.Item
          label='旧密码:'
          name='old'
          rules={[{ required: true, message: "请填写旧密码" }]}
        >
          <Input placeholder='请填写旧密码' type='password' />
        </Form.Item>
        <Form.Item
          label='新密码:'
          name='password'
          rules={[{ required: true, message: "请填写新密码" }]}
        >
          <Input placeholder='请填写新密码' type='password' />
        </Form.Item>
        <Form.Item
          label='确认密码:'
          name='confirm'
          rules={[
            { required: true, message: "请确认新密码" },
            {
              validator: (rule, value, callback) => {
                validatePwd(rule, value, callback);
              },
              validateTrigger: "blur",
            },
          ]}
        >
          <Input placeholder='请确认新密码' type='password' />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ResetPwd;
