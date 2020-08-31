import React, { useState, useEffect } from "react";
import { Card, Button, message, Space, Form, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { getUsers, editUser, deleteUser, addUser } from "@/api/user";
import EditUserForm from "./forms/edit-user-form";
import AddUserForm from "./forms/add-user-form";
import UserTable from "./forms/user-table";

const User = () => {
  const [users, setUsers] = useState([]);
  const [editUserModalVisible, setEditVisible] = useState(false);
  const [editUserModalLoading, setEditLoading] = useState(false);
  const [currentRowData, setCurrentRow] = useState({});
  const [addUserModalVisible, setAddVisible] = useState(false);
  const [addUserModalLoading, setAddLoading] = useState(false);

  const [form] = Form.useForm();

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
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
      getUserList();
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
    <Space>
      <Form
        form={form}
        name='search'
        layout='inline'
        onFinish={() => {
          console.log(form.getFieldsValue());
        }}
      >
        <Form.Item name='name' label='用户名称' initialValue=''>
          <Input
            placeholder='请输入用户名称'
            allowClear
            style={{ width: 150 }}
          />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            查询
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );

  const extra = (
    <span>
      <Button icon={<PlusOutlined />} onClick={handleAddOpen}>
        添加用户
      </Button>
    </span>
  );

  return (
    <div className='app-container'>
      <Card title={title} extra={extra}>
        <UserTable
          users={users}
          onEdit={handleEditOpen}
          onDelete={handleDelOk}
        />
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
