import React, { useState } from "react";
import { Card, Button, message, Input, Space, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AddPlanForm from "./add-plan-form";
import EditPlanForm from "./edit-plan-form";
import DataTable from "./data-table";

const tableData = [
  {
    key: "5f4778b5e1fe79f04bc59326",
    index: 0,
    code: 600406,
    name: "Poole",
    money: 3103331,
    account: [
      {
        name: "Nielsen",
        money: 4533171,
        operator: "Parker",
        plan: "",
      },
      {
        name: "Potts",
        money: 4507966,
        operator: "Perkins",
        plan: "",
      },
    ],
  },
  {
    key: "5f4778b530ab58fe074b529b",
    index: 1,
    code: 600368,
    name: "Schultz",
    money: 4394095,
    account: [
      {
        name: "Cervantes",
        money: 8292923,
        operator: "Bonner",
        plan: "",
      },
      {
        name: "Webb",
        money: 7040759,
        operator: "Wilder",
        plan: "",
      },
      {
        name: "Dale",
        money: 2290768,
        operator: "Monroe",
        plan: "",
      },
      {
        name: "Lambert",
        money: 2038233,
        operator: "Spears",
        plan: "",
      },
      {
        name: "Carver",
        money: 5286705,
        operator: "Gomez",
        plan: "",
      },
    ],
  },
  {
    key: "5f4778b5a3227e037c4d096a",
    index: 2,
    code: 600417,
    name: "Stokes",
    money: 4135571,
    account: [
      {
        name: "French",
        money: 6566348,
        operator: "Lowery",
        plan: "",
      },
      {
        name: "Lloyd",
        money: 9860176,
        operator: "Britt",
        plan: "",
      },
      {
        name: "Carney",
        money: 4525053,
        operator: "Pena",
        plan: "",
      },
    ],
  },
  {
    key: "5f4778b542e42dc1ed6083f8",
    index: 3,
    code: 600060,
    name: "Dickerson",
    money: 8897462,
    account: [
      {
        name: "Murray",
        money: 7921307,
        operator: "Daniels",
        plan: "",
      },
      {
        name: "Jensen",
        money: 3452070,
        operator: "Olsen",
        plan: "",
      },
      {
        name: "Justice",
        money: 6806034,
        operator: "Mann",
        plan: "",
      },
    ],
  },
  {
    key: "5f4778b52f643fcd9ff1eeb4",
    index: 4,
    code: 600328,
    name: "Rhodes",
    money: 3701862,
    account: [
      {
        name: "Petersen",
        money: 9942712,
        operator: "Elliott",
        plan: "",
      },
      {
        name: "Knowles",
        money: 6746361,
        operator: "Gill",
        plan: "",
      },
      {
        name: "Mayo",
        money: 7936424,
        operator: "Hooper",
        plan: "",
      },
      {
        name: "Miles",
        money: 6585677,
        operator: "Santiago",
        plan: "",
      },
      {
        name: "Sanders",
        money: 3797459,
        operator: "Calderon",
        plan: "",
      },
    ],
  },
  {
    key: "5f4778b5aeffb05ca9bb79aa",
    index: 5,
    code: 600198,
    name: "Riley",
    money: 8170968,
    account: [
      {
        name: "Wilkins",
        money: 6907355,
        operator: "Shelton",
        plan: "",
      },
      {
        name: "Strickland",
        money: 8986056,
        operator: "Wright",
        plan: "",
      },
      {
        name: "Hatfield",
        money: 3922663,
        operator: "Manning",
        plan: "",
      },
      {
        name: "Dalton",
        money: 2488132,
        operator: "Watson",
        plan: "",
      },
      {
        name: "Garza",
        money: 4541983,
        operator: "Valdez",
        plan: "",
      },
    ],
  },
  {
    key: "5f4778b52b7753f03e30f830",
    index: 6,
    code: 600430,
    name: "Calhoun",
    money: 6092515,
    account: [
      {
        name: "Burt",
        money: 2812400,
        operator: "Morrison",
        plan: "",
      },
      {
        name: "Hickman",
        money: 2576469,
        operator: "Swanson",
        plan: "",
      },
    ],
  },
  {
    key: "5f4778b599d83ad4e2b94b32",
    index: 7,
    code: 600231,
    name: "Melton",
    money: 9237148,
    account: [
      {
        name: "Andrews",
        money: 5515249,
        operator: "Collins",
        plan: "",
      },
      {
        name: "Valentine",
        money: 9197156,
        operator: "Faulkner",
        plan: "",
      },
      {
        name: "Fry",
        money: 8960873,
        operator: "Curry",
        plan: "",
      },
      {
        name: "Roth",
        money: 4590135,
        operator: "Brown",
        plan: "",
      },
      {
        name: "Gibson",
        money: 9599105,
        operator: "Berry",
        plan: "",
      },
    ],
  },
  {
    key: "5f4778b58f5559093e91620a",
    index: 8,
    code: 600027,
    name: "Day",
    money: 5713348,
    account: [
      {
        name: "Ayers",
        money: 2327889,
        operator: "Bennett",
        plan: "",
      },
      {
        name: "Montoya",
        money: 9689483,
        operator: "Holmes",
        plan: "",
      },
      {
        name: "Knox",
        money: 4086474,
        operator: "Peterson",
        plan: "",
      },
      {
        name: "Dillon",
        money: 3797235,
        operator: "Dorsey",
        plan: "",
      },
    ],
  },
  {
    key: "5f4778b569ba580b4232ab9a",
    index: 9,
    code: 600113,
    name: "Robbins",
    money: 3921143,
    account: [
      {
        name: "Shaw",
        money: 3189956,
        operator: "Snyder",
        plan: "",
      },
      {
        name: "Hogan",
        money: 4008216,
        operator: "Bryant",
        plan: "",
      },
      {
        name: "Bentley",
        money: 8487768,
        operator: "Hodge",
        plan: "",
      },
    ],
  },
  {
    key: "5f4778b5518e557b914d7765",
    index: 10,
    code: 600397,
    name: "Guzman",
    money: 9948063,
    account: [
      {
        name: "Nixon",
        money: 4653078,
        operator: "Hewitt",
        plan: "",
      },
      {
        name: "Simpson",
        money: 6681232,
        operator: "Duncan",
        plan: "",
      },
      {
        name: "Donaldson",
        money: 7005614,
        operator: "Phillips",
        plan: "",
      },
      {
        name: "Baldwin",
        money: 2349936,
        operator: "Franks",
        plan: "",
      },
      {
        name: "Koch",
        money: 8360446,
        operator: "Lopez",
        plan: "",
      },
    ],
  },
  {
    key: "5f4778b5960ba3ff56bc3db2",
    index: 11,
    code: 600398,
    name: "Malone",
    money: 7464895,
    account: [
      {
        name: "Mayer",
        money: 9867665,
        operator: "Head",
        plan: "",
      },
      {
        name: "Burton",
        money: 2884672,
        operator: "Morgan",
        plan: "",
      },
      {
        name: "Chambers",
        money: 7300582,
        operator: "Tanner",
        plan: "",
      },
      {
        name: "Murphy",
        money: 6745820,
        operator: "Ballard",
        plan: "",
      },
      {
        name: "Middleton",
        money: 5853761,
        operator: "Gates",
        plan: "",
      },
    ],
  },
  {
    key: "5f4778b52cf129ac1d0ad6ff",
    index: 12,
    code: 600005,
    name: "Pitts",
    money: 7858093,
    account: [
      {
        name: "James",
        money: 7419350,
        operator: "Salazar",
        plan: "",
      },
      {
        name: "Burks",
        money: 3972462,
        operator: "Maldonado",
        plan: "",
      },
      {
        name: "Hopkins",
        money: 6381759,
        operator: "Shields",
        plan: "",
      },
    ],
  },
  {
    key: "5f4778b56c8ed053673556eb",
    index: 13,
    code: 600346,
    name: "Palmer",
    money: 7456737,
    account: [
      {
        name: "Oliver",
        money: 7057099,
        operator: "Parrish",
        plan: "",
      },
      {
        name: "Franklin",
        money: 8026935,
        operator: "Sheppard",
        plan: "",
      },
      {
        name: "Marks",
        money: 6909532,
        operator: "Yates",
        plan: "",
      },
      {
        name: "Greer",
        money: 6591341,
        operator: "Cohen",
        plan: "",
      },
      {
        name: "Ingram",
        money: 9447274,
        operator: "Haney",
        plan: "",
      },
    ],
  },
  {
    key: "5f4778b550642e7b76a064c7",
    index: 14,
    code: 600251,
    name: "Atkinson",
    money: 4141117,
    account: [
      {
        name: "Roy",
        money: 8481016,
        operator: "Gay",
        plan: "",
      },
      {
        name: "Sharpe",
        money: 9212649,
        operator: "Bowers",
        plan: "",
      },
      {
        name: "Lamb",
        money: 4901829,
        operator: "Abbott",
        plan: "",
      },
      {
        name: "Moody",
        money: 5733093,
        operator: "Mendez",
        plan: "",
      },
    ],
  },
];

const StatisticGroup = (props) => {
  const [addPlanVisible, setAddVisible] = useState(false);
  const [editPlanVisible, setEditVisible] = useState(false);
  const [addPlanLoading, setAddLoading] = useState(false);
  const [editPlanLoading, setEditLoading] = useState(false);
  const [editData, setEditData] = useState({});
  const [form] = Form.useForm();

  /* 添加计划 */
  const handleAddOk = (data) => {
    setAddLoading(true);
    setTimeout(() => {
      /* do add api */
      console.log(data);
      setAddLoading(false);
      setAddVisible(false);
      message.success("新增计划成功");
    }, 1000);
  };

  /* 添加计划 */
  const handleEditOk = (data) => {
    setEditLoading(true);
    setTimeout(() => {
      /* do add api */
      console.log(data);
      setEditLoading(false);
      setEditVisible(false);
      message.success("修改计划成功");
    }, 1000);
  };

  /* 显示编辑 */
  const handleEditOpen = (data) => {
    setEditData(Object.assign({}, data));
    setEditVisible(true);
  };

  /* 表头 */
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
        <Form.Item name='code' label='股票代码' initialValue=''>
          <Input
            placeholder='请输入股票代码'
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
    <Button
      icon={<PlusOutlined />}
      onClick={() => {
        setAddVisible(true);
      }}
    >
      新增买入计划
    </Button>
  );

  return (
    <>
      <Card title={title} extra={extra}>
        <DataTable data={tableData} onEdit={handleEditOpen} />
      </Card>

      <AddPlanForm
        visible={addPlanVisible}
        confirmLoading={addPlanLoading}
        onOk={handleAddOk}
        onCancel={() => {
          setAddVisible(false);
        }}
      />

      <EditPlanForm
        visible={editPlanVisible}
        confirmLoading={editPlanLoading}
        data={editData}
        onOk={handleEditOk}
        onCancel={() => {
          setEditVisible(false);
        }}
      />
    </>
  );
};

export default StatisticGroup;
