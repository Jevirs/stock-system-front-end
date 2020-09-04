import React, { useState, useEffect } from "react";
import { Input, Space, Button, Select, InputNumber, message } from "antd";
import EditableTable from "@/components/EditableTable";
import ActionForm from "../ActionForm";
import { formatNumber } from "@/utils";

const data = [
  {
    id: "5f51a6c6447c642795738aa4",
    name: "Cotton",
    code: 600140,
    level: 3,
    amount: 281510,
    plan_action: true,
    plan_amount: 45923,
    avg_price: 9898,
    now_price: 8266,
  },
  {
    id: "5f51a6c699c79163b24205a5",
    name: "Calhoun",
    code: 600634,
    level: 1,
    amount: 755836,
    plan_action: true,
    plan_amount: 99685,
    avg_price: 4575,
    now_price: 6864,
  },
  {
    id: "5f51a6c665ad4e8b717af62b",
    name: "Navarro",
    code: 600076,
    level: 2,
    amount: 715595,
    plan_action: true,
    plan_amount: 21984,
    avg_price: 7956,
    now_price: 1906,
  },
  {
    id: "5f51a6c69bb8c249130abdc1",
    name: "Hensley",
    code: 600640,
    level: 2,
    amount: 713268,
    plan_action: false,
    plan_amount: 7436,
    avg_price: 2034,
    now_price: 4143,
  },
  {
    id: "5f51a6c6df2ca13a9fe3eb59",
    name: "Caldwell",
    code: 600456,
    level: 3,
    amount: 136206,
    plan_action: true,
    plan_amount: 65565,
    avg_price: 6337,
    now_price: 7322,
  },
  {
    id: "5f51a6c60fda4d8c824f2c3a",
    name: "York",
    code: 600431,
    level: 3,
    amount: 721972,
    plan_action: true,
    plan_amount: 38225,
    avg_price: 5134,
    now_price: 4916,
  },
  {
    id: "5f51a6c6a1043f88735010af",
    name: "Whitfield",
    code: 600052,
    level: 1,
    amount: 389904,
    plan_action: false,
    plan_amount: 25853,
    avg_price: 2837,
    now_price: 3739,
  },
  {
    id: "5f51a6c6aadae8c88922531d",
    name: "Glover",
    code: 600408,
    level: 3,
    amount: 523613,
    plan_action: false,
    plan_amount: 81390,
    avg_price: 7966,
    now_price: 5943,
  },
  {
    id: "5f51a6c68c4f77f2e4a50635",
    name: "Robinson",
    code: 600169,
    level: 3,
    amount: 194885,
    plan_action: false,
    plan_amount: 23788,
    avg_price: 5768,
    now_price: 8687,
  },
  {
    id: "5f51a6c6c7be5a4448e6560a",
    name: "Copeland",
    code: 600637,
    level: 1,
    amount: 516712,
    plan_action: true,
    plan_amount: 22850,
    avg_price: 8325,
    now_price: 4926,
  },
  {
    id: "5f51a6c63a30d242004354c3",
    name: "Whitley",
    code: 600028,
    level: 2,
    amount: 986100,
    plan_action: true,
    plan_amount: 32503,
    avg_price: 8859,
    now_price: 6786,
  },
  {
    id: "5f51a6c6ac073453c2ba5074",
    name: "Lancaster",
    code: 600421,
    level: 3,
    amount: 226254,
    plan_action: true,
    plan_amount: 1726,
    avg_price: 5734,
    now_price: 9623,
  },
  {
    id: "5f51a6c6ca35c1acbbffea07",
    name: "Armstrong",
    code: 600139,
    level: 2,
    amount: 271882,
    plan_action: true,
    plan_amount: 28097,
    avg_price: 9929,
    now_price: 6397,
  },
  {
    id: "5f51a6c69c45496317dff194",
    name: "Pratt",
    code: 600045,
    level: 1,
    amount: 177699,
    plan_action: true,
    plan_amount: 38565,
    avg_price: 3778,
    now_price: 5151,
  },
  {
    id: "5f51a6c6294416e9ada7df3b",
    name: "Gallegos",
    code: 600001,
    level: 3,
    amount: 436120,
    plan_action: false,
    plan_amount: 38971,
    avg_price: 7402,
    now_price: 8014,
  },
  {
    id: "5f51a6c65ce3eafb6df39239",
    name: "Malone",
    code: 600563,
    level: 2,
    amount: 231881,
    plan_action: true,
    plan_amount: 17684,
    avg_price: 7500,
    now_price: 5754,
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
      align: "right",
      render: (text) => {
        return formatNumber(text);
      },
    },
    {
      title: "计划",
      children: [
        {
          title: "方向",
          dataIndex: "plan_action",
          align: "center",
          width: 100,
          editable: true,
          render: (text) => {
            if (text) {
              return "增持";
            } else {
              return "减持";
            }
          },
          rules: [{ required: true }],
          handleSave: (row) => {
            console.log(row);
            const newData = [...data];
            const index = newData.findIndex((item) => row.id === item.id);
            const item = newData[index];
            newData.splice(index, 1, { ...item, ...row });
            setStockList(newData);
            message.success("计划方向修改成功");
          },
          inputRender: (props) => {
            return (
              <Select {...props}>
                <Select.Option value={true}>增持</Select.Option>
                <Select.Option value={false}>减持</Select.Option>
              </Select>
            );
          },
        },
        {
          title: "金额",
          dataIndex: "plan_amount",
          width: 100,
          align: "center",
          editable: true,
          render: (text) => {
            return formatNumber(text);
          },
          rules: [{ required: true }],
          handleSave: (row) => {
            console.log(row);
            const newData = [...data];
            const index = newData.findIndex((item) => row.id === item.id);
            const item = newData[index];
            newData.splice(index, 1, { ...item, ...row });
            setStockList(newData);
            message.success("计划金额修改成功");
          },
          inputRender: (props) => {
            return (
              <InputNumber
                step={1000}
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                {...props}
              />
            );
          },
        },
      ],
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
      handleSave: (row) => {
        console.log(row);
        const newData = [...data];
        const index = newData.findIndex((item) => row.id === item.id);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setStockList(newData);
        message.success("买入均价修改成功");
      },
      inputRender: (props) => {
        return (
          <InputNumber
            step={1000}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            {...props}
          />
        );
      },
    },
    {
      title: "现价",
      dataIndex: "now_price",
      align: "right",
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
