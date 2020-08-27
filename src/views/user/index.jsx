import React, { useState, useEffect, useRef } from "react";
import { Card, Button, Table, message, Divider } from "antd";
import { getUsers, deleteUser, editUser, addUser } from "@/api/user";
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
  const addDialog = useRef();
  const editDialog = useRef();

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
  const handleEditUser = (row) => {
    setCurrentRow(Object.assign({}, row));
    setEditVisible(true);
  };

  const handleDeleteUser = (row) => {
    const { id } = row;
    deleteUser({ id }).then((res) => {
      message.success("删除成功");
      getUsers();
    });
  };

  const handleEditUserOk = (_) => {
    const { form } = editDialog.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      setEditLoading(true);
      editUser(values)
        .then((res) => {
          form.resetFields();
          setEditLoading(false);
          setEditVisible(false);
          message.success("编辑成功!");
          getUsers();
        })
        .catch((e) => {
          message.success("编辑失败,请重试!");
        });
    });
  };

  const handleCancel = (_) => {
    setEditVisible(false);
    setAddVisible(false);
  };

  const handleAddUser = (row) => {
    setAddVisible(true);
  };

  const handleAddUserOk = (_) => {
    const { form } = addDialog.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      setAddLoading(true);
      addUser(values)
        .then((response) => {
          form.resetFields();
          setAddVisible(false);
          setAddLoading(false);
          message.success("添加成功!");
          getUsers();
        })
        .catch((e) => {
          message.success("添加失败,请重试!");
        });
    });
  };

  const title = (
    <span>
      <Button
        type='primary'
        onClick={() => {
          handleAddUser();
        }}
      >
        添加用户
      </Button>
    </span>
  );

  return (
    <div className='app-container'>
      <Card title={title}>
        <Table bordered rowKey='id' dataSource={users} pagination={false}>
          <Column title='用户ID' dataIndex='id' key='id' align='center' />
          <Column title='用户名称' dataIndex='name' key='name' align='center' />
          <Column title='用户角色' dataIndex='role' key='role' align='center' />
          <Column
            title='用户描述'
            dataIndex='description'
            key='description'
            align='center'
          />
          <Column
            title='操作'
            key='action'
            width={195}
            align='center'
            render={(text, row) => (
              <span>
                <Button
                  type='primary'
                  onClick={(row) => {
                    handleEditUser(row);
                  }}
                >
                  编辑
                </Button>
                <Divider type='vertical' />
                <Button
                  type='primary'
                  onClick={(row) => {
                    handleDeleteUser(row);
                  }}
                >
                  删除
                </Button>
              </span>
            )}
          />
        </Table>
      </Card>
      <EditUserForm
        ref={editDialog}
        currentRowData={currentRowData}
        visible={editUserModalVisible}
        confirmLoading={editUserModalLoading}
        onCancel={handleCancel}
        onOk={handleEditUserOk}
      />
      <AddUserForm
        ref={addDialog}
        visible={addUserModalVisible}
        confirmLoading={addUserModalLoading}
        onCancel={handleCancel}
        onOk={handleAddUserOk}
      />
    </div>
  );
};

export default User;
