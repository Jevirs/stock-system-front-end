import React from "react";
import { Modal } from "antd";
import TransferSourceTable from "./transfer-source-table";
import TransferTargetTable from "./transfer-target-table";
import { useState } from "react";

const SettingSectorForm = (props) => {
  const { visible, onCancel, onOk, confirmLoading } = props;
  const [selectedList, setSelectedList] = useState([]);

  const handleSelect = (row) => {
    const newData = [...selectedList];
    newData.push(Object.assign({}, row));
    setSelectedList(newData);
  };

  const handleRemove = (row) => {
    const newData = [...selectedList];
    const index = newData.findIndex((item) => row.id === item.id);
    newData.splice(index, 1);
    setSelectedList(newData);
  };

  const handleUpdate = (row) => {
    const newData = [...selectedList];
    const index = newData.findIndex((item) => row.id === item.id);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    setSelectedList(newData);
  };

  const handleSubmit = () => {
    console.log(selectedList);
    onOk(selectedList);
  };

  return (
    <Modal
      width='720px'
      title='编辑股票池'
      visible={visible}
      onCancel={onCancel}
      onOk={handleSubmit}
      confirmLoading={confirmLoading}
      destroyOnClose={true}
    >
      <TransferSourceTable
        selectedList={selectedList}
        onSelect={handleSelect}
        onRemove={handleRemove}
      />
      <TransferTargetTable
        selectedList={selectedList}
        onUpdate={handleUpdate}
        onRemove={handleRemove}
      />
    </Modal>
  );
};

export default SettingSectorForm;
