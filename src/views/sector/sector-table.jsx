import React from "react";
import { Table, Space, Button, Popconfirm } from "antd";
import {
  EditOutlined,
  SettingOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const SectorTable = (props) => {
  const { dataSource } = props;

  const columns = [
    {
      title: "板块名称",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "有效期止",
      dataIndex: "time",
      align: "center",
    },
    {
      title: "备注",
      dataIndex: "remark",
      align: "center",
    },
    {
      title: "操作",
      align: "center",
      width: "200px",
      render: (row) => (
        <Space>
          <Button
            shape='circle'
            icon={<EditOutlined />}
            onClick={() => {
              props.onEdit(row);
            }}
            title='编辑'
          ></Button>

          <Button
            type='primary'
            shape='circle'
            icon={<SettingOutlined />}
            onClick={() => {
              props.onSetting(row);
            }}
            title='设置'
          ></Button>

          <Popconfirm
            title='确认要删除此用户吗?'
            onConfirm={() => {
              props.onDelete(row);
            }}
            onCancel={() => {}}
            okText='是'
            cancelText='否'
          >
            <Button
              type='danger'
              shape='circle'
              icon={<DeleteOutlined />}
              title='删除'
            ></Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Table
      rowKey='id'
      bordered
      dataSource={dataSource}
      columns={columns}
    ></Table>
  );
};

export default SectorTable;
