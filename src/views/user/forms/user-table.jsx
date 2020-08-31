import React from "react";
import { Table, Space, Button, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const { Column } = Table;

const UserTable = (props) => {
  return (
    <Table bordered rowKey='id' dataSource={props.users} pagination={false}>
      <Column title='用户名称' dataIndex='name' key='name' align='center' />
      <Column title='用户权限' dataIndex='role' key='role' align='center' />
      <Column
        title='用户描述'
        dataIndex='description'
        key='description'
        align='center'
      />
      <Column
        title='操作'
        key='action'
        width={200}
        align='center'
        render={(row) => (
          <Space>
            <Button
              shape='circle'
              icon={<EditOutlined />}
              onClick={() => {
                props.onEdit(row);
              }}
              title='编辑'
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
        )}
      />
    </Table>
  );
};

export default UserTable;
