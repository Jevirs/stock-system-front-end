import React from "react";
import { Form, Input, Modal, DatePicker } from "antd";

const { TextArea } = Input;

const AddSectorForm = (props) => {
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
        onOk({ ...values, time: values.time.format("yyyy-MM-DD") });
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Modal
      title='新增板块'
      visible={visible}
      onCancel={onCancel}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      destroyOnClose={true}
    >
      <Form {...formItemLayout} form={form} preserve={false}>
        <Form.Item
          label='板块名称:'
          name='name'
          rules={[{ required: true, message: "请输入板块名称" }]}
        >
          <Input placeholder='请输入板块名称' />
        </Form.Item>
        <Form.Item
          label='有效期止:'
          name='time'
          rules={[{ required: true, message: "请选择有效期" }]}
        >
          <DatePicker placeholder='请选择有效期' style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item label='备注:' name='remark'>
          <TextArea rows={4} placeholder='请输入备注' />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddSectorForm;
