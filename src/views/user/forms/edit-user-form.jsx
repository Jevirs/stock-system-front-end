import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { Form, Input, Select, Modal } from "antd";
const { TextArea } = Input;

const EditUserForm = forwardRef((props, ref) => {
  const formRef = useRef();
  const { visible, onCancel, onOk, confirmLoading, currentRowData } = props;
  const { id } = currentRowData;
  const formItemLayout = {
    labelCol: {
      sm: { span: 4 },
    },
    wrapperCol: {
      sm: { span: 16 },
    },
  };
  const validate = () => {
    console.log("validate");
    return true;
  };

  useImperativeHandle(ref, () => ({
    validate: () => {
      formRef.current.validate();
    },
  }));
  return (
    <Modal
      title='编辑'
      visible={visible}
      onCancel={onCancel}
      onOk={onOk}
      confirmLoading={confirmLoading}
    >
      <Form {...formItemLayout}>
        <Form.Item label='用户ID:'>
          <Input disabled />
        </Form.Item>
        <Form.Item label='用户名称:'>
          <Input placeholder='请输入用户名称' />
        </Form.Item>
        <Form.Item label='用户角色:'>
          <Select style={{ width: 120 }} disabled={id === "admin"}>
            <Select.Option value='admin'>admin</Select.Option>
            <Select.Option value='editor'>editor</Select.Option>
            <Select.Option value='guest'>guest</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label='用户描述:'>
          <TextArea rows={4} placeholder='请输入用户描述' />
        </Form.Item>
      </Form>
    </Modal>
  );
});
export default EditUserForm;
