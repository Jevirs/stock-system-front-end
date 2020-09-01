import React, { useState } from "react";
import { Modal, Rate, Select, Input } from "antd";
import TableTransfer from "./table-transfer";

const SettingSectorForm = (props) => {
  const { visible, onCancel, onOk, confirmLoading } = props;

  const mockData = [];
  for (let i = 0; i < 20; i++) {
    mockData.push({
      key: i.toString(),
      code: `6000${i + 1}`,
      name: `股票${i}`,
    });
  }

  const originTargetKeys = mockData
    .filter((item) => +item.key % 3 > 1)
    .map((item) => item.key);

  const [targetKeys, setTargetKeys] = useState(originTargetKeys);

  const leftTableColumns = [
    {
      dataIndex: "code",
      title: "股票代码",
    },
    {
      dataIndex: "name",
      title: "股票名称",
    },
  ];
  const rightTableColumns = [
    {
      dataIndex: "code",
      title: "股票代码",
    },
    {
      dataIndex: "name",
      title: "股票名称",
    },
    {
      editable: true,
      title: "优先级",
      dataIndex: "level",
      align: "center",
      render: (value) => {
        return "低";
      },
      handleSave: (row) => {
        const newData = [...targetKeys];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setTargetKeys(newData);
      },
      inputRender: (props) => {
        return (
          <Select {...props}>
            <Select.Option>低</Select.Option>
            <Select.Option>中</Select.Option>
            <Select.Option>高</Select.Option>
          </Select>
        );
      },
    },
    {
      editable: true,
      title: "计划",
      dataIndex: "plan",
      align: "center",
      render: (value) => {
        return value;
      },
      handleSave: (row) => {
        const newData = [...targetKeys];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setTargetKeys(newData);
      },
      inputRender: (props) => {
        return <Input {...props} />;
      },
    },
  ];

  const onChange = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };

  return (
    <Modal
      width='90%'
      title='编辑股票池'
      visible={visible}
      onCancel={onCancel}
      onOk={onOk}
      confirmLoading={confirmLoading}
    >
      <TableTransfer
        dataSource={mockData}
        targetKeys={targetKeys}
        onChange={onChange}
        showSearch={true}
        filterOption={(inputValue, item) =>
          item.title.indexOf(inputValue) !== -1 ||
          item.tag.indexOf(inputValue) !== -1
        }
        leftColumns={leftTableColumns}
        rightColumns={rightTableColumns}
        operations={["添加", "移除"]}
        titles={["所有股票", "选中股票"]}
      />
    </Modal>
  );
};

export default SettingSectorForm;
