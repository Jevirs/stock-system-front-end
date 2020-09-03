import React from "react";
import { Form, InputNumber, Card, Button } from "antd";

const TradeForm = (props) => {
  const { actionType, onSubmit } = props;
  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: {
      sm: { span: 8 },
    },
    wrapperCol: {
      sm: { span: 10 },
    },
  };

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      onSubmit(values);
    });
  };

  return (
    <Card>
      <Form
        {...formItemLayout}
        form={form}
        preserve={false}
        onFinish={handleSubmit}
      >
        <Form.Item
          label='价格:'
          name='price'
          rules={[{ required: true, message: "请输入价格" }]}
        >
          <InputNumber
            step={0.01}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            style={{ width: "120px" }}
          />
        </Form.Item>
        <Form.Item
          label='金额:'
          name='amount'
          rules={[{ required: true, message: "请输入金额" }]}
        >
          <InputNumber
            step={1}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            style={{ width: "120px" }}
          />
        </Form.Item>
        <Form.Item />
        <Form.Item />
        <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
          <Button type='danger' htmlType='submit' size='large'>
            {actionType === "buy" ? "立即买入" : "立即卖出"}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default TradeForm;
