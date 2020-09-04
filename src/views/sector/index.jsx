import React, { useState, useEffect } from "react";
import { Card, Button, message, Space, Form, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import SectorTable from "./sector-table";
import AddSectorForm from "./add-sector-form";
import EditSectorForm from "./edit-sector-form";
import SettingSectorForm from "./setting-sector-form";

const data = [
  {
    id: "5f51b6b15f8ebaa2b1b07ac7",
    name: "Deleon",
    time: "2014-10-25",
    remark: "Micronesia",
  },
  {
    id: "5f51b6b12d72575b35928943",
    name: "Potter",
    time: "2014-08-02",
    remark: "Ecuador",
  },
  {
    id: "5f51b6b164f25dfbeea7f7e6",
    name: "Savage",
    time: "2017-07-01",
    remark: "Korea (North)",
  },
  {
    id: "5f51b6b13caa9916b0043413",
    name: "Franklin",
    time: "2020-07-12",
    remark: "Colombia",
  },
  {
    id: "5f51b6b1a4fbe978938dec8f",
    name: "Gallegos",
    time: "2020-08-22",
    remark: "Tonga",
  },
  {
    id: "5f51b6b14b596cb321a21cca",
    name: "Pollard",
    time: "2014-09-03",
    remark: "Ghana",
  },
];
const Sector = () => {
  const [sectors, setSectors] = useState([]);
  const [currentRowData, setCurrentRow] = useState({});

  const [editVisible, setEditVisible] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const [addVisible, setAddVisible] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const [settingVisible, setSettingVisible] = useState(false);
  const [settingLoading, setSettingLoading] = useState(false);

  const [form] = Form.useForm();

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    setSectors(data);
  };

  /* 新增 */
  const handleAddOk = (value) => {
    console.log(value);
    setAddLoading(true);
    setTimeout(() => {
      setAddVisible(false);
      setAddLoading(false);
      message.success("添加成功!");
      getList();
    }, 1000);
  };

  /* 编辑 */
  const handleEditOk = (value) => {
    console.log(value);
    setEditLoading(true);
    setTimeout(() => {
      setEditLoading(false);
      setEditVisible(false);
      message.success("修改成功!");
      getList();
    }, 1000);
  };

  /* 删除 */
  const handleDelOk = (row) => {
    console.log(row);
    setTimeout(() => {
      message.success("删除成功!");
      getList();
    }, 1000);
  };

  /* 配置 */
  const handleSettingOk = (data) => {
    console.log(data);
    setSettingLoading(true);
    setTimeout(() => {
      setSettingVisible(false);
      setSettingLoading(false);
      message.success("配置成功!");
      getList();
    }, 1000);
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
          dataSource={sectors}
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
        onOk={handleSettingOk}
      />
    </div>
  );
};

export default Sector;
