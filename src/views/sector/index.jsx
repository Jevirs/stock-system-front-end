import React, { useState, useEffect } from "react";
import { Card, Button, message, Space, Form, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import SectorTable from "./sector-table";
import AddSectorForm from "./add-sector-form";
import EditSectorForm from "./edit-sector-form";
import SettingSectorForm from "./setting-sector-form";

import { getUsers, editUser, deleteUser, addUser } from "@/api/user";

const Sector = () => {
  const [users, setUsers] = useState([]);
  const [currentRowData, setCurrentRow] = useState({});

  const [editVisible, setEditVisible] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const [addVisible, setAddVisible] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const [settingVisible, setSettingVisible] = useState(false);
  const [settingLoading, setSettingLoading] = useState(false);

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

  /* 新增 */
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

  /* 编辑 */
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
        <Form.Item name='name' label='板块名称' initialValue=''>
          <Input
            placeholder='请输入板块名称'
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
      <Button
        icon={<PlusOutlined />}
        onClick={() => {
          setAddVisible(true);
        }}
      >
        新增板块
      </Button>
    </span>
  );

  return (
    <div className='app-container'>
      <Card title={title} extra={extra}>
        <SectorTable
          dataSource={users}
          onEdit={(row) => {
            setCurrentRow(Object.assign({}, row));
            setEditVisible(true);
          }}
          onSetting={(row) => {
            setCurrentRow(Object.assign({}, row));
            setSettingVisible(true);
          }}
          onDelete={handleDelOk}
        />
      </Card>

      <AddSectorForm
        visible={addVisible}
        confirmLoading={addLoading}
        onCancel={() => {
          setAddVisible(false);
        }}
        onOk={handleAddOk}
      />

      <EditSectorForm
        currentRowData={currentRowData}
        visible={editVisible}
        confirmLoading={editLoading}
        onCancel={() => {
          setEditVisible(false);
        }}
        onOk={handleEditOk}
      />

      <SettingSectorForm
        visible={settingVisible}
        confirmLoading={settingLoading}
        onCancel={() => {
          setSettingVisible(false);
        }}
        onOk={(row) => {
          console.log(row);
        }}
      />
    </div>
  );
};

export default Sector;
