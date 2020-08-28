import React, { useState } from "react";
import { Card, Button, Table, message, Form, Input, Space, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AccountTable from "./account-table";
const { Column } = Table;

const StatisticGroup = (props) => {
  const [addPlanVisible, setAddVisible] = useState(false);
  const [editPlanVisible, setEditVisible] = useState(false);
  const [addPlanLoading, setAddLoading] = useState(false);
  const [editPlanLoading, setEditLoading] = useState(false);
  const [editData, setEditData] = useState({});

  const [form] = Form.useForm();

  const handelQuery = () => {
    console.log(form.getFieldsValue());
  };

  /* 表头 */
  const title = (
    <Space>
      <Form form={form} name='search' layout='inline' onFinish={handelQuery}>
        <Form.Item name='name' label='账户名称' initialValue=''>
          <Input
            placeholder='请输入账户名称'
            allowClear
            style={{ width: 150 }}
          />
        </Form.Item>
        <Form.Item name='operator' label='交易员'>
          <Select style={{ width: 150 }} placeholder='请选择交易员' allowClear>
            <Select.Option value='jack'>Jack</Select.Option>
            <Select.Option value='lucy'>Lucy</Select.Option>
            <Select.Option value='rose'>ROSE</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name='company' label='券商'>
          <Select style={{ width: 150 }} placeholder='请选择券商' allowClear>
            <Select.Option value='华西'>华西证券</Select.Option>
            <Select.Option value='开源证券'>开源证券</Select.Option>
            <Select.Option value='浙商证券'>浙商证券</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            查询
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );

  /* 表尾 */
  const extra = (
    <Button
      icon={<PlusOutlined />}
      onClick={() => {
        setAddVisible(true);
      }}
    >
      新增账户
    </Button>
  );

  const data = [{ code: "2313", name: "12313" }];

  return (
    <>
      <Card title={title} extra={extra}>
        <AccountTable data={data} />
      </Card>
    </>
  );
};

export default StatisticGroup;
