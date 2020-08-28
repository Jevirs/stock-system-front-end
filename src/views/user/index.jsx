import React, { useState, useEffect } from "react";
import { Card, Button, Table, message, Divider, Popconfirm, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { getUsers, editUser, deleteUser, addUser } from "@/api/user";
import EditUserForm from "./forms/edit-user-form";
import AddUserForm from "./forms/add-user-form";
const { Column } = Table;

const User = () => {
  const [users, setUsers] = useState([]);
  const [editUserModalVisible, setEditVisible] = useState(false);
  const [editUserModalLoading, setEditLoading] = useState(false);
  const [currentRowData, setCurrentRow] = useState({});
  const [addUserModalVisible, setAddVisible] = useState(false);
  const [addUserModalLoading, setAddLoading] = useState(false);

  useEffect(() => {
    initUsers();
  }, []);

  const initUsers = async () => {
    const result = await getUsers();
    const { users, status } = result.data;
    if (status === 0) {
      setUsers(users);
    }
  };

  /* 编辑 */
  const handleEditOpen = (row) => {
    setCurrentRow(Object.assign({}, row));
    setEditVisible(true);
  };
  const handleEditCancel = () => {
    setEditVisible(false);
  };
  const handleEditOk = (value, callback) => {
    console.log(value);
    setEditLoading(true);
    editUser(value).then((res) => {
      callback();
      setEditLoading(false);
      setEditVisible(false);
      message.success("修改成功!");
      getUsers();
    });
  };

  /* 新增 */
  const handleAddCancel = () => {
    setEditVisible(false);
    setAddVisible(false);
  };
  const handleAddOpen = () => {
    setAddVisible(true);
  };
  const handleAddOk = (value, callback) => {
    console.log(value);
    setAddLoading(true);
    addUser(value).then((res) => {
      callback();
      setAddVisible(false);
      setAddLoading(false);
      message.success("添加成功!");
      getUsers();
    });
  };

  /* 删除 */
  const handleDelOk = (row) => {
    console.log(row);
    deleteUser(row).then((res) => {
      message.success("删除成功!");
      getUsers();
    });
  };

  const title = (
    <span>
      <Button type='primary' onClick={handleAddOpen}>
        添加用户
      </Button>
    </span>
  );

  return (
    <div className='app-container'>
      <Card title={title}>
        <Table bordered rowKey='id' dataSource={users} pagination={false}>
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
                    handleEditOpen(row);
                  }}
                  title='编辑'
                ></Button>
                <Popconfirm
                  title='确认要删除该用户吗?'
                  onConfirm={() => {
                    handleDelOk(row);
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
      </Card>
      <EditUserForm
        currentRowData={currentRowData}
        visible={editUserModalVisible}
        confirmLoading={editUserModalLoading}
        onCancel={handleEditCancel}
        onOk={handleEditOk}
      />
      <AddUserForm
        visible={addUserModalVisible}
        confirmLoading={addUserModalLoading}
        onCancel={handleAddCancel}
        onOk={handleAddOk}
      />
    </div>
  );
};

export default User;
