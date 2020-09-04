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
      form.setFieldsValue({
        ...currentRowData,
      });
    }
  }, [visible]);

  const handleOk = () => {
    form
      .validateFields()
      .then((value) => {
        onOk({ ...value, id });
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Modal
      title='编辑用户'
      visible={visible}
      onCancel={onCancel}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      destroyOnClose={true}
    >
      <Form {...formItemLayout} form={form} preserve={false}>
        <Form.Item
          label='用户名称:'
          name='user_name'
          rules={[{ required: true, message: "请填写用户名" }]}
        >
          <Input placeholder='请输入用户名称' />
        </Form.Item>
        <Form.Item
          label='用户权限:'
          name='role_id'
          rules={[{ required: true, message: "请选择用户权限" }]}
        >
          <Select placeholder='请选择用户权限'>
            <Select.Option value='1'>管理员</Select.Option>
            <Select.Option value='2'>交易员</Select.Option>
          </Select>
        </Form.Item>
        {/* <Form.Item
          label='用户密码:'
          name='user_passwd'
          rules={[{ required: true, message: "请设置用户密码" }]}
        >
          <Input placeholder='请输入密码' />
        </Form.Item> */}
        <Form.Item label='用户描述:' name='remark'>
          <TextArea rows={4} placeholder='请输入用户描述' />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default EditUserForm;
