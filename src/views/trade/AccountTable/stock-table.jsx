import React, { useState, useEffect } from "react";
import { Input, Space, Button } from "antd";
import EditableTable from "@/components/EditableTable";
import ActionForm from "../ActionForm";
import { formatNumber } from "@/utils";

const data = [
  {
    id: "5f50b8ea5b6ac30aa67c614f",
    name: "Miles",
    code: 600202,
    level: 3,
    amount: 319699,
    plan:
      "Irure officia eu fugiat dolore nostrud consectetur non laborum do esse.",
    avg_price: 6045,
    now_price: 9901,
  },
  {
    id: "5f50b8ea552472de49e37954",
    name: "Frost",
    code: 600617,
    level: 2,
    amount: 212069,
    plan:
      "Veniam et do eu minim tempor occaecat elit adipisicing dolor non ut sunt eu duis.",
    avg_price: 5774,
    now_price: 3522,
  },
  {
    id: "5f50b8ea759a7a80f5f04e76",
    name: "Cain",
    code: 600140,
    level: 3,
    amount: 377583,
    plan:
      "Voluptate aliquip esse in culpa ullamco aute dolor pariatur amet anim ea.",
    avg_price: 6627,
    now_price: 6152,
  },
  {
    id: "5f50b8eafb97abc9b1614c39",
    name: "Sears",
    code: 600136,
    level: 1,
    amount: 318365,
    plan: "Ex laboris reprehenderit aliqua dolore sunt dolor ipsum.",
    avg_price: 2970,
    now_price: 9281,
  },
  {
    id: "5f50b8eaa49f48ab156570f0",
    name: "Mckee",
    code: 600450,
    level: 2,
    amount: 751769,
    plan: "Esse cupidatat pariatur est ullamco et.",
    avg_price: 8009,
    now_price: 9300,
  },
  {
    id: "5f50b8eaed34a3424d9f48ba",
    name: "Bowers",
    code: 600097,
    level: 3,
    amount: 180375,
    plan: "Laborum cupidatat nostrud id pariatur amet magna sint.",
    avg_price: 2874,
    now_price: 4566,
  },
  {
    id: "5f50b8ea3edcfc7268e772df",
    name: "Clemons",
    code: 600203,
    level: 1,
    amount: 120438,
    plan:
      "Culpa sint quis aute reprehenderit in quis voluptate pariatur sit elit ullamco amet id incididunt.",
    avg_price: 6505,
    now_price: 2070,
  },
  {
    id: "5f50b8ea00f6c8ba941215b4",
    name: "Joseph",
    code: 600534,
    level: 2,
    amount: 836717,
    plan: "Proident culpa voluptate fugiat incididunt dolor.",
    avg_price: 6408,
    now_price: 7597,
  },
  {
    id: "5f50b8ea1d936bd392dba9a9",
    name: "Norton",
    code: 600543,
    level: 3,
    amount: 619149,
    plan:
      "Mollit nisi dolor duis irure excepteur quis mollit aute proident cillum culpa cupidatat minim.",
    avg_price: 5006,
    now_price: 4402,
  },
  {
    id: "5f50b8eadfe7fda8ab6c4a7e",
    name: "Savage",
    code: 600186,
    level: 1,
    amount: 350919,
    plan: "Excepteur elit voluptate ipsum ex ex ut.",
    avg_price: 8199,
    now_price: 6003,
  },
  {
    id: "5f50b8ea60594f9b5216dbbd",
    name: "Holloway",
    code: 600295,
    level: 2,
    amount: 662509,
    plan: "Cillum elit ex culpa et tempor Lorem est pariatur ad veniam culpa.",
    avg_price: 6590,
    now_price: 6077,
  },
  {
    id: "5f50b8eafda77130ea3f00c4",
    name: "Tyler",
    code: 600064,
    level: 1,
    amount: 379250,
    plan: "Excepteur nisi labore veniam incididunt mollit ea duis.",
    avg_price: 5072,
    now_price: 8506,
  },
  {
    id: "5f50b8eab7791e65ac29f39c",
    name: "Parks",
    code: 600436,
    level: 3,
    amount: 152093,
    plan: "Qui pariatur duis culpa dolore dolore sint ut.",
    avg_price: 9064,
    now_price: 1204,
  },
  {
    id: "5f50b8eae26982827558fde5",
    name: "Giles",
    code: 600239,
    level: 2,
    amount: 977802,
    plan: "Excepteur esse sunt eiusmod eu mollit.",
    avg_price: 7285,
    now_price: 4706,
  },
  {
    id: "5f50b8eaee7ad9ccc6b628cf",
    name: "Haney",
    code: 600449,
    level: 3,
    amount: 822962,
    plan:
      "Consectetur culpa do ut nostrud id cillum consequat qui veniam officia dolor id eiusmod.",
    avg_price: 3651,
    now_price: 1254,
  },
  {
    id: "5f50b8ea02323073f1e5b0c8",
    name: "Underwood",
    code: 600574,
    level: 3,
    amount: 729669,
    plan:
      "Minim eu et aliquip eiusmod nisi adipisicing nulla velit excepteur commodo sint incididunt aliqua.",
    avg_price: 2011,
    now_price: 2306,
  },
  {
    id: "5f50b8ea7fe930593bb7e80b",
    name: "White",
    code: 600038,
    level: 3,
    amount: 843132,
    plan: "Eu minim pariatur mollit nulla.",
    avg_price: 5619,
    now_price: 3125,
  },
  {
    id: "5f50b8ea78afbad512a2329e",
    name: "Franco",
    code: 600114,
    level: 1,
    amount: 543153,
    plan:
      "Officia pariatur sit dolor anim consequat ea duis minim ea incididunt voluptate.",
    avg_price: 1397,
    now_price: 5995,
  },
];

const StockTable = (props) => {
  const { account } = props;
  const [stockList, setStockList] = useState([]);
  const [actionVisible, setActionVisible] = useState(false);
  const [currentStock, setCurrentStock] = useState({});
  const [actionType, setActionType] = useState("");

  useEffect(() => {
    console.log("account change & get stock list");
    setStockList(data);
  }, [account]);

  const columns = [
    {
      title: "股票代码",
      dataIndex: "code",
      align: "center",
    },
    {
      title: "股票名称",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "优先级",
      dataIndex: "level",
      align: "center",
    },
    {
      title: "持仓金额",
      dataIndex: "amount",
      align: "center",
      render: (text) => {
        return formatNumber(text);
      },
    },
    {
      title: "计划",
      dataIndex: "plan",
      align: "center",
    },
    {
      title: "买入均价",
      dataIndex: "avg_price",
      align: "center",
      editable: true,
      render: (text) => {
        return formatNumber(text);
      },
      rules: [{ required: true }],
      handleSave: () => {},
      inputRender: () => {
        return <Input />;
      },
    },
    {
      title: "现价",
      dataIndex: "now_price",
      align: "center",
      render: (text) => {
        return formatNumber(text);
      },
    },
    {
      title: "操作",
      align: "center",
      render: (row) => (
        <Space>
          <Button
            type='danger'
            onClick={() => {
              setCurrentStock(row);
              setActionType("buy");
              setActionVisible(true);
            }}
            title='买入'
          >
            买入
          </Button>

          <Button
            type='primary'
            onClick={() => {
              setCurrentStock(row);
              setActionType("sell");
              setActionVisible(true);
            }}
            title='卖出'
          >
            卖出
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <EditableTable
        rowKey='id'
        bordered
        dataSource={stockList}
        columns={columns}
      ></EditableTable>

      <ActionForm
        stock={currentStock}
        actionType={actionType}
        visible={actionVisible}
        onCancel={() => {
          setActionVisible(false);
        }}
        onOk={(data) => {
          console.log(data);
        }}
      />
    </>
  );
};

export default StockTable;
