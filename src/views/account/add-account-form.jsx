import React from "react";
import { Modal, Form, Input, InputNumber, Select } from "antd";

const AddAccountForm = (props) => {
  const [form] = Form.useForm();
  const { visible, onOk, onCancel, loading } = props;

  const formItemLayout = {
    labelCol: {
      sm: { span: 4 },
    },
    wrapperCol: {
      sm: { span: 16 },
    },
  };

  return (
    <Modal
      width='720px'
      title='新增买入计划'
      visible={visible}
      onCancel={() => {
        form.resetFields();
        onCancel();
      }}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            onOk(values, () => {
              form.resetFields();
            });
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
      confirmLoading={loading}
      destroyOnClose={true}
    >
      <Form form={form} {...formItemLayout}>
        <Form.Item label='账户名称:' name='name'>
          <Input placeholder='请输入账户名称'></Input>
        </Form.Item>

        <Form.Item label='资金账号:' name='account'>
          <Input placeholder='请输入资金账号'></Input>
        </Form.Item>
        <Form.Item label='初始资金' name='money'>
          <InputNumber
            step={1000}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            placeholder='请输入初始资金'
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item label='券商' name='company'>
          <Select placeholder='请选择券商'>
            <Select.Option key={1}>华西证券</Select.Option>
            <Select.Option key={2}>华东证券</Select.Option>
            <Select.Option key={3}>华南证券</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label='服务器IP:' name='ip'>
          <Input placeholder='请输入服务器IP'></Input>
        </Form.Item>

        <Form.Item label='服务器端口:' name='port'>
          <Input placeholder='请输入服务器端口'></Input>
        </Form.Item>

        <Form.Item label='股票池' name='sector'>
          <Select placeholder='请选择股票池'>
            <Select.Option key={1}>股票池1号</Select.Option>
            <Select.Option key={2}>股票池2号</Select.Option>
            <Select.Option key={3}>股票池3号</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label='操作交易员' name='operator'>
          <Select placeholder='请选择操作交易员'>
            <Select.Option key={1}>交易员1</Select.Option>
            <Select.Option key={2}>交易员2</Select.Option>
            <Select.Option key={3}>交易员3</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label='账户风控'>
          <span>单票买入不能超过账户总金额</span>
          <Form.Item name='control_account' initialValue={10} noStyle>
            <InputNumber
              style={{ margin: "0 10px" }}
              initialValue={10}
              step={10}
              precision={2}
              min={0}
              max={100}
              formatter={(value) => `${value}%`}
              parser={(value) => value.replace("%", "")}
            />
          </Form.Item>
        </Form.Item>

        <Form.Item label='市场风控'>
          <span>单票买入不能超过市场</span>
          <Form.Item name='control_day' initialValue={10} noStyle>
            <InputNumber
              style={{ margin: "0 10px" }}
              step={1}
              min={1}
              max={1000}
            />
          </Form.Item>
          <span>日均量值</span>
          <Form.Item name='control_market' initialValue={10} noStyle>
            <InputNumber
              style={{ margin: "10px" }}
              step={10}
              precision={2}
              min={0}
              max={100}
              formatter={(value) => `${value}%`}
              parser={(value) => value.replace("%", "")}
            />
          </Form.Item>
        </Form.Item>

        <Form.Item label='价格风控'>
          <span>单票买入价格超过现价</span>
          <Form.Item name='control_price' initialValue={10} noStyle>
            <InputNumber
              style={{ margin: "0 10px" }}
              step={10}
              precision={2}
              min={0}
              max={100}
              formatter={(value) => `${value}%`}
              parser={(value) => value.replace("%", "")}
            />
          </Form.Item>
          <span>进行提示</span>
        </Form.Item>

        <Form.Item label='备注:' name='remark'>
          <Input.TextArea placeholder='请输入备注' />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddAccountForm;
