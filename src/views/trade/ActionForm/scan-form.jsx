import React from "react";
import { Form, InputNumber, Card, Button } from "antd";

const ScanForm = (props) => {
  const { confirmLoading, actionType, onSubmit } = props;
  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: {
      sm: { span: 8 },
    },
    wrapperCol: {
      sm: { span: 16 },
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
        <Form.Item label='下单间隔:' required={true}>
          <Form.Item
            noStyle
            name='rate'
            rules={[{ required: true, message: "请输入下单间隔" }]}
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
          <span> 秒</span>
        </Form.Item>

        <Form.Item label='限制手数' required={true}>
          <Form.Item
            noStyle
            name='limit'
            rules={[{ required: true, message: "请输入限制手数" }]}
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
          <span> 手</span>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
          <Button
            type='primary'
            htmlType='submit'
            size='large'
            loading={confirmLoading}
          >
            {actionType === "buy" ? "扫单买入" : "扫单卖出"}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ScanForm;
