import React, { useState, useEffect } from "react";
import { Card, Button, Table, message, Form, Input, Space, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AccountTable from "./account-table";
import AddAccountForm from "./add-account-form";
import EditAccountForm from "./edit-account-form";
import DetailTable from "./detail-table";

import { getUsers, addUser } from "@/api/account";

const StatisticGroup = (props) => {
  const [users, setUsers] = useState([]);
  const [viewVisible, setViewVisible] = useState(false);
  const [viewLoading, setViewLoading] = useState(false);
  const [addVisible, setAddVisible] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const [currentRow, setCurrentRow] = useState({});
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

  const handleQuery = () => {
    let params = form.getFieldsValue();
    getUserList(params);
    message.success("查询成功!");
  };

  const handleAddOk = (value) => {
    console.log(value);
    setAddLoading(true);
    addUser(value).then((res) => {
      setAddVisible(false);
      setAddLoading(false);
      message.success("添加成功!");
      getUserList();
    });
  };

  const handleEditOk = (value) => {
    console.log(value);
    setEditLoading(true);
    addUser(value).then((res) => {
      setEditVisible(false);
      setEditLoading(false);
      message.success("编辑成功!");
      getUserList();
    });
  };

  const handleDelete = (value) => {
    if (value.money > 0) {
      message.warn("此账户仍有持仓，无法删除");
    } else {
      addUser(value).then((res) => {
        message.success("删除!");
        getUserList();
      });
    }
  };

  /* 表头 */
  const title = (
    <Space>
      <Form form={form} name='search' layout='inline' onFinish={handleQuery}>
        <Form.Item name='name' label='账户名称' initialValue=''>
          <Input
            placeholder='请输入账户名称'
            allowClear
            style={{ width: 150 }}
          />
        </Form.Item>
        <Form.Item name='operator' label='交易员'>
          <Select style={{ width: 150 }} placeholder='请选择交易员' allowClear>
            <Select.Option value='jack'>Jack</Select.Option>
            <Select.Option value='lucy'>Lucy</Select.Option>
            <Select.Option value='rose'>ROSE</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name='company' label='券商'>
          <Select style={{ width: 150 }} placeholder='请选择券商' allowClear>
            <Select.Option value='华西'>华西证券</Select.Option>
            <Select.Option value='开源证券'>开源证券</Select.Option>
            <Select.Option value='浙商证券'>浙商证券</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            查询
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );

  /* 表尾 */
  const extra = (
    <Button
      icon={<PlusOutlined />}
      onClick={() => {
        setAddVisible(true);
      }}
    >
      新增账户
    </Button>
  );

  const data = [
    {
      account: 8134253059,
      control_account: 60,
      control_day: 100,
      control_market: 65,
      control_price: 36,
      ip: "howardmcmillan@enjola.com",
      money: 1343445,
      name: "Mooney",
      operator: 2,
      port: 6684,
      remark: "Netropic",
      sector: 1,
      company: 3,
    },
    {
      account: 8404292435,
      control_account: 54,
      control_day: 51,
      control_market: 53,
      control_price: 45,
      ip: "mooneymcmillan@netropic.com",
      money: 4217709,
      name: "Potts",
      operator: 3,
      port: 6091,
      remark: "Marqet",
      sector: 2,
      company: 1,
    },
    {
      account: 9735193562,
      control_account: 40,
      control_day: 65,
      control_market: 35,
      control_price: 11,
      ip: "pottsmcmillan@marqet.com",
      money: 894389,
      name: "Aurora",
      operator: 3,
      port: 7187,
      remark: "Eternis",
      sector: 3,
      company: 2,
    },
    {
      account: 9074232365,
      control_account: 58,
      control_day: 99,
      control_market: 36,
      control_price: 11,
      ip: "auroramcmillan@eternis.com",
      money: 1812736,
      name: "Kelley",
      operator: 1,
      port: 5033,
      remark: "Flumbo",
      sector: 3,
      company: 2,
    },
    {
      account: 9245673505,
      control_account: 39,
      control_day: 88,
      control_market: 79,
      control_price: 23,
      ip: "kelleymcmillan@flumbo.com",
      money: 1061531,
      name: "Mildred",
      operator: 1,
      port: 2524,
      remark: "Aquoavo",
      sector: 3,
      company: 3,
    },
    {
      account: 8374562022,
      control_account: 37,
      control_day: 16,
      control_market: 68,
      control_price: 34,
      ip: "mildredmcmillan@aquoavo.com",
      money: 8129740,
      name: "Lynnette",
      operator: 2,
      port: 3929,
      remark: "Bedlam",
      sector: 3,
      company: 3,
    },
    {
      account: 9994303684,
      control_account: 24,
      control_day: 41,
      control_market: 52,
      control_price: 14,
      ip: "lynnettemcmillan@bedlam.com",
      money: 7410498,
      name: "Beatriz",
      operator: 2,
      port: 9222,
      remark: "Orbean",
      sector: 3,
      company: 3,
    },
    {
      account: 9944773598,
      control_account: 58,
      control_day: 28,
      control_market: 53,
      control_price: 63,
      ip: "beatrizmcmillan@orbean.com",
      money: 9663566,
      name: "Prince",
      operator: 3,
      port: 2240,
      remark: "Permadyne",
      sector: 1,
      company: 3,
    },
    {
      account: 8004113257,
      control_account: 70,
      control_day: 46,
      control_market: 62,
      control_price: 21,
      ip: "princemcmillan@permadyne.com",
      money: 4131863,
      name: "Mays",
      operator: 3,
      port: 8438,
      remark: "Exoplode",
      sector: 3,
      company: 3,
    },
    {
      account: 8455082244,
      control_account: 27,
      control_day: 72,
      control_market: 55,
      control_price: 49,
      ip: "maysmcmillan@exoplode.com",
      money: 8796766,
      name: "Carroll",
      operator: 3,
      port: 1890,
      remark: "Reversus",
      sector: 2,
      company: 2,
    },
    {
      account: 9444323883,
      control_account: 44,
      control_day: 36,
      control_market: 78,
      control_price: 35,
      ip: "carrollmcmillan@reversus.com",
      money: 4909886,
      name: "Raquel",
      operator: 3,
      port: 1093,
      remark: "Farmage",
      sector: 2,
      company: 3,
    },
    {
      account: 8304552456,
      control_account: 50,
      control_day: 40,
      control_market: 57,
      control_price: 31,
      ip: "raquelmcmillan@farmage.com",
      money: 2782621,
      name: "Johnston",
      operator: 3,
      port: 3560,
      remark: "Bytrex",
      sector: 2,
      company: 2,
    },
    {
      account: 9874913727,
      control_account: 34,
      control_day: 44,
      control_market: 51,
      control_price: 26,
      ip: "johnstonmcmillan@bytrex.com",
      money: 1358558,
      name: "Dolores",
      operator: 1,
      port: 2022,
      remark: "Sybixtex",
      sector: 2,
      company: 2,
    },
    {
      account: 8264093383,
      control_account: 35,
      control_day: 85,
      control_market: 10,
      control_price: 29,
      ip: "doloresmcmillan@sybixtex.com",
      money: 554346,
      name: "Mendoza",
      operator: 3,
      port: 2041,
      remark: "Franscene",
      sector: 3,
      company: 3,
    },
    {
      account: 8725342766,
      control_account: 66,
      control_day: 76,
      control_market: 18,
      control_price: 44,
      ip: "mendozamcmillan@franscene.com",
      money: 1202806,
      name: "Hancock",
      operator: 3,
      port: 6346,
      remark: "Mediot",
      sector: 2,
      company: 3,
    },
    {
      account: 8095593827,
      control_account: 51,
      control_day: 84,
      control_market: 32,
      control_price: 36,
      ip: "hancockmcmillan@mediot.com",
      money: 1945860,
      name: "Page",
      operator: 2,
      port: 6339,
      remark: "Pyrami",
      sector: 3,
      company: 2,
    },
    {
      account: 8545012980,
      control_account: 20,
      control_day: 26,
      control_market: 31,
      control_price: 40,
      ip: "pagemcmillan@pyrami.com",
      money: 4528796,
      name: "Phillips",
      operator: 3,
      port: 1564,
      remark: "Bitendrex",
      sector: 3,
      company: 2,
    },
  ];

  return (
    <div className='app-container'>
      <Card title={title} extra={extra}>
        <AccountTable
          data={data}
          onView={(row) => {
            setCurrentRow(Object.assign({}, row));
            setViewVisible(true);
          }}
          onEdit={(row) => {
            setCurrentRow(Object.assign({}, row));
            setEditVisible(true);
          }}
          onDelete={handleDelete}
        />
      </Card>

      <AddAccountForm
        visible={addVisible}
        loading={addLoading}
        onOk={handleAddOk}
        onCancel={() => {
          setAddVisible(false);
        }}
      />

      <EditAccountForm
        currentRowData={currentRow}
        visible={editVisible}
        loading={editLoading}
        onOk={handleEditOk}
        onCancel={() => {
          setEditVisible(false);
        }}
      />

      <DetailTable
        currentRowData={currentRow}
        visible={viewVisible}
        loading={viewLoading}
        onCancel={() => {
          setViewVisible(false);
        }}
        onOk={(value) => {
          console.log(value);
          setViewVisible(false);
        }}
      />
    </div>
  );
};

export default StatisticGroup;
