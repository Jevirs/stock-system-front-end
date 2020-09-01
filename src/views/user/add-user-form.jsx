import React from "react";
import { Form, Input, Select, Modal } from "antd";
const { TextArea } = Input;

const AddUserForm = (props) => {
  const { visible, onCancel, onOk, confirmLoading } = props;
  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: {
      sm: { span: 4 },
    },
    wrapperCol: {
      sm: { span: 16 },
    },
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        onOk(values);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Modal
      title='添加用户'
      visible={visible}
      onCancel={onCancel}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      destroyOnClose={true}
    >
      <Form {...formItemLayout} form={form} preserve={false}>
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
          <Input placeholder='请输入用户密码' />
        </Form.Item>
        <Form.Item label='备注:' name='remark'>
          <TextArea rows={4} placeholder='请输入用户描述' />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddUserForm;
