import React from "react";
import { Form, Input, Select, Modal } from "antd";
import { useEffect } from "react";
const { TextArea } = Input;

const EditUserForm = (props) => {
  const { visible, onCancel, onOk, confirmLoading, currentRowData } = props;
  const { id } = currentRowData;

  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: {
      sm: { span: 4 },
    },
    wrapperCol: {
      sm: { span: 16 },
    },
  };

  useEffect(() => {
    if (visible) {
      console.log(currentRowData);
      form.setFieldsValue({
        ...currentRowData,
      });
    }
  }, [form, visible, currentRowData]);

  const handelOk = () => {
    form
      .validateFields()
      .then((value) => {
        onOk({ ...value, id }, () => {
          form.resetFields();
        });
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handelCancel = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <Modal
      title='编辑用户'
      visible={visible}
      onCancel={handelCancel}
      onOk={handelOk}
      confirmLoading={confirmLoading}
      forceRender
    >
      <Form {...formItemLayout} form={form}>
        <Form.Item
          label='用户名称:'
          name='name'
          rules={[{ required: true, message: "请填写用户名" }]}
        >
          <Input placeholder='请输入用户名称' />
        </Form.Item>
        <Form.Item
          label='用户权限:'
          name='role'
          rules={[{ required: true, message: "请选择用户权限" }]}
        >
          <Select placeholder='请选择用户权限'>
            <Select.Option value='admin'>管理员</Select.Option>
            <Select.Option value='operator'>交易员</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label='用户密码:'
          name='password'
          rules={[{ required: true, message: "请设置用户密码" }]}
        >
          <Input placeholder='请输入密码' />
        </Form.Item>
        <Form.Item label='用户描述:' name='remark'>
          <TextArea rows={4} placeholder='请输入用户描述' />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default EditUserForm;
