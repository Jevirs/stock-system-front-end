import React from "react";
import { Space, Button, Select, InputNumber, Typography } from "antd";
import EditableTable from "@/components/EditableTable";
import { MinusOutlined } from "@ant-design/icons";
import { formatNumber } from "@/utils";

const { Title } = Typography;

const TransferSourceTable = (props) => {
  const { selectedList, onUpdate, onRemove } = props;

  console.log(selectedList);

  const columns = [
    {
      title: "股票代码",
      dataIndex: "code",
      align: "center",
    },
    {
      title: "股票名称",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "优先级",
      dataIndex: "level",
      align: "center",
      editable: true,
      render: (text) => {
        if (text === 1) {
          return "低";
        } else if (text === 2) {
          return "中";
        } else if (text === 3) {
          return "高";
        } else {
          return "--";
        }
      },
      rules: [{ required: true, message: "请选择优先级" }],
      handleSave: (row) => {
        onUpdate(row);
      },
      inputRender: (props) => {
        return (
          <Select {...props}>
            <Select.Option value={1}>低</Select.Option>
            <Select.Option value={2}>中</Select.Option>
            <Select.Option value={3}>高</Select.Option>
          </Select>
        );
      },
    },
    {
      title: "计划",
      children: [
        {
          title: "方向",
          dataIndex: "plan_action",
          align: "center",
          width: 100,
          editable: true,
          render: (text) => {
            if (text === 1) {
              return "增持";
            } else if (text === 2) {
              return "减持";
            } else {
              return "--";
            }
          },
          rules: [{ required: true, message: "请选择极化方向" }],
          handleSave: (row) => {
            onUpdate(row);
          },
          inputRender: (props) => {
            return (
              <Select {...props}>
                <Select.Option value={1}>增持</Select.Option>
                <Select.Option value={2}>减持</Select.Option>
              </Select>
            );
          },
        },
        {
          title: "金额",
          dataIndex: "plan_amount",
          width: 100,
          align: "center",
          editable: true,
          render: (text) => {
            return formatNumber(text);
          },
          rules: [{ required: true, message: "请输入金额" }],
          handleSave: (row) => {
            onUpdate(row);
          },
          inputRender: (props) => {
            return (
              <InputNumber
                step={1000}
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                {...props}
              />
            );
          },
        },
      ],
    },
    {
      title: "操作",
      align: "center",
      render: (row) => (
        <Space>
          <Button
            type='primary'
            shape='circle'
            icon={<MinusOutlined />}
            onClick={() => {
              onRemove(row);
            }}
            title='移除'
          ></Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Title level={4}>板块股票池</Title>
      <EditableTable
        rowKey='id'
        bordered
        dataSource={selectedList}
        columns={columns}
        pagination={{
          pageSize: 5,
        }}
        size='small'
      ></EditableTable>
    </>
  );
};

export default TransferSourceTable;
