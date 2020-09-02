import React from "react";
import { Table, Space, Button, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { cnRoleDict } from "@/utils/enum";

const UserTable = (props) => {
  const columns = [
    {
      title: "用户名称",
      dataIndex: "user_name",
      align: "center",
    },
    {
      title: "用户权限",
      dataIndex: "role_id",
      align: "center",
      render: (text) => {
        return cnRoleDict[text];
      },
    },
    {
      title: "用户描述",
      dataIndex: "remark",
      align: "center",
    },
    {
      title: "操作",
      align: "center",
      width: "200px",
      render: (record) => (
        <Space>
          <Button
            shape='circle'
            icon={<EditOutlined />}
            onClick={() => {
              props.onEdit(record);
            }}
            title='编辑'
          ></Button>
          <Popconfirm
            title='确认要删除此用户吗?'
            onConfirm={() => {
              props.onDelete(record);
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
      bordered
      rowKey='id'
      dataSource={props.users}
      pagination={false}
      columns={columns}
    ></Table>
  );
};

export default UserTable;
