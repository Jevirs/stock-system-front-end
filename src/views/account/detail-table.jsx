import React, { useState } from "react";
import { Modal, Descriptions, Rate, InputNumber } from "antd";
import EditableTable from "@/components/EditableTable";
import { formatNumber } from "@/utils";

const DetailTable = (props) => {
  const dataSource = [
    {
      key: "5f4de5a57f7bd77d7be4f960",
      code: 8365513564,
      level: 4,
      value: 2843580,
      name: "Karla",
      price: 7572,
      plan: "Toyletry",
    },
    {
      key: "5f4de5a5b59cba43f05ffe27",
      code: 8305042106,
      level: 5,
      value: 1386406,
      name: "Kaye",
      price: 6261,
      plan: "Hawkster",
    },
    {
      key: "5f4de5a5d6a65ba80919a1aa",
      code: 8594352297,
      level: 5,
      value: 8601792,
      name: "Park",
      price: 7200,
      plan: "Geekular",
    },
    {
      key: "5f4de5a5635bd985e5d3a5a5",
      code: 8404373404,
      level: 1,
      value: 9736976,
      name: "Camacho",
      price: 7086,
      plan: "Yurture",
    },
    {
      key: "5f4de5a5ec1ab825ac7ee06b",
      code: 9204712852,
      level: 2,
      value: 9117237,
      name: "Mayra",
      price: 3649,
      plan: "Portalis",
    },
    {
      key: "5f4de5a5e31425d40cff2238",
      code: 9775332397,
      level: 3,
      value: 1778929,
      name: "Freida",
      price: 5993,
      plan: "Medmex",
    },
    {
      key: "5f4de5a599c4978744b0563a",
      code: 9864132204,
      level: 2,
      value: 9695788,
      name: "Duncan",
      price: 5191,
      plan: "Anacho",
    },
    {
      key: "5f4de5a5520e73839e52b6ca",
      code: 9614872140,
      level: 4,
      value: 1698070,
      name: "Merle",
      price: 9834,
      plan: "Indexia",
    },
    {
      key: "5f4de5a5febf1e71de3236b3",
      code: 8036003311,
      level: 5,
      value: 9180169,
      name: "Booker",
      price: 1742,
      plan: "Automon",
    },
    {
      key: "5f4de5a513ae3fc4ddbef303",
      code: 9894412979,
      level: 2,
      value: 5946935,
      name: "Nguyen",
      price: 7676,
      plan: "Exoswitch",
    },
    {
      key: "5f4de5a548668fe985947489",
      code: 9774373410,
      level: 3,
      value: 3022624,
      name: "Elvira",
      price: 8360,
      plan: "Xixan",
    },
    {
      key: "5f4de5a557eca9bf9b297690",
      code: 9115042370,
      level: 5,
      value: 5424794,
      name: "Holloway",
      price: 6053,
      plan: "Calcu",
    },
    {
      key: "5f4de5a5355bdfa869dfcd1f",
      code: 9014433584,
      level: 1,
      value: 2309619,
      name: "Wheeler",
      price: 8133,
      plan: "Accidency",
    },
    {
      key: "5f4de5a5e2eade5503fbe35d",
      code: 9924483224,
      level: 2,
      value: 6570052,
      name: "Barry",
      price: 7781,
      plan: "Isosphere",
    },
    {
      key: "5f4de5a55eb96cc578b87ee9",
      code: 9814182682,
      level: 3,
      value: 3627481,
      name: "Mccall",
      price: 9936,
      plan: "Injoy",
    },
    {
      key: "5f4de5a59cd9230d1c2540f4",
      code: 9364782418,
      level: 4,
      value: 6480913,
      name: "Georgia",
      price: 3429,
      plan: "Electonic",
    },
    {
      key: "5f4de5a5c5397a0fffcda4f5",
      code: 9425062412,
      level: 1,
      value: 2683929,
      name: "Ford",
      price: 1194,
      plan: "Kongene",
    },
  ];
  const { visible, loading, currentRowData, onCancel, onOk } = props;
  const [source, setSource] = useState(dataSource);

  const columns = [
    {
      title: "股票代码",
      dataIndex: "code",
    },
    {
      title: "股票名称",
      dataIndex: "name",
    },
    {
      title: "优先级",
      dataIndex: "level",
      render: (value) => {
        return <Rate disabled count={3} defaultValue={value} />;
      },
    },
    {
      width: "200px",
      editable: true,
      title: "买入均价",
      dataIndex: "price",
      align: "right",
      rules: [
        {
          required: true,
          message: `请输入买入均价`,
        },
      ],
      render: (value) => {
        return formatNumber(value);
      },
      handleSave: (row) => {
        console.log(row);
        const newData = [...source];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setSource(newData);
      },
      inputRender: (props) => {
        return (
          <InputNumber
            step={1000}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            style={{ width: "150px" }}
            {...props}
          />
        );
      },
    },
    {
      width: "200px",
      editable: true,
      title: "持仓市值",
      dataIndex: "value",
      align: "right",
      rules: [
        {
          required: true,
          message: `请输入买入均价`,
        },
      ],
      render: (value) => {
        return formatNumber(value);
      },
      handleSave: (row) => {
        const newData = [...source];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setSource(newData);
      },
      inputRender: (props) => {
        return (
          <InputNumber
            step={1000}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            style={{ width: "150px" }}
            {...props}
          />
        );
      },
    },
    {
      title: "计划",
      dataIndex: "plan",
    },
  ];

  return (
    <Modal
      width='960px'
      title='账户信息'
      visible={visible}
      onCancel={onCancel}
      onOk={() => {
        onOk(source);
      }}
      confirmLoading={loading}
      destroyOnClose={true}
    >
      <Descriptions title={currentRowData.name}>
        <Descriptions.Item label='初始资金'>
          {formatNumber(currentRowData.money)}
        </Descriptions.Item>
        <Descriptions.Item label='总资产'>
          {formatNumber(currentRowData.money)}
        </Descriptions.Item>
        <Descriptions.Item label='持仓总市值'>
          {formatNumber(currentRowData.money)}
        </Descriptions.Item>
        <Descriptions.Item label='持仓股票数'>
          {formatNumber(currentRowData.company)}
        </Descriptions.Item>
        <Descriptions.Item label='交易员'>
          {currentRowData.remark}
        </Descriptions.Item>
        <Descriptions.Item label='股票池'>
          {currentRowData.ip}
        </Descriptions.Item>
      </Descriptions>

      <EditableTable
        rowKey='dataIndex'
        columns={columns}
        bordered={true}
        dataSource={source}
      />
    </Modal>
  );
};

export default DetailTable;
