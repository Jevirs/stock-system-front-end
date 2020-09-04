import React from "react";
import { Table, Space, Button, Typography } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
const { Title } = Typography;

const data = [
  {
    id: "5f51f841d2825fd42c820592",
    name: "Hood",
    code: 600241,
  },
  {
    id: "5f51f84136903bac4db0ac46",
    name: "Lowe",
    code: 600568,
  },
  {
    id: "5f51f84165da583c204155b2",
    name: "Key",
    code: 600435,
  },
  {
    id: "5f51f84182407546fea21ec8",
    name: "Henson",
    code: 600303,
  },
  {
    id: "5f51f84148ec849c016df4d0",
    name: "Head",
    code: 600236,
  },
  {
    id: "5f51f841fb6bd4c77b1ae168",
    name: "Norman",
    code: 600130,
  },
  {
    id: "5f51f841b1e033411da57d3a",
    name: "Wiggins",
    code: 600097,
  },
  {
    id: "5f51f841da7bdf36677f7eb3",
    name: "Landry",
    code: 600601,
  },
  {
    id: "5f51f84190945de45711cc72",
    name: "Coleman",
    code: 600435,
  },
  {
    id: "5f51f841e2e86e7fc31e0a91",
    name: "Sanders",
    code: 600639,
  },
  {
    id: "5f51f841b0b1880e6bc0fdd9",
    name: "Flynn",
    code: 600608,
  },
  {
    id: "5f51f841b07c7d72c575a189",
    name: "Vincent",
    code: 600601,
  },
  {
    id: "5f51f841614268b7f1fbc08d",
    name: "Buchanan",
    code: 600115,
  },
  {
    id: "5f51f8417eee8edb3d5849b1",
    name: "Erickson",
    code: 600018,
  },
  {
    id: "5f51f8413c7db56c8899d128",
    name: "Blanchard",
    code: 600333,
  },
];

const TransferSourceTable = (props) => {
  const { selectedList, onSelect, onRemove } = props;
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setDataSource(data);
  }, []);

  const isSelected = (row) => {
    return selectedList.some((item) => {
      return item.id === row.id;
    });
  };

  const columns = [
    {
      title: "股票代码",
      dataIndex: "code",
      align: "center",
      width: "200px",
    },
    {
      title: "股票名称",
      dataIndex: "name",
      align: "center",
      width: "200px",
    },
    {
      title: "操作",
      align: "center",
      width: "200px",
      render: (row) => (
        <Space>
          <Button
            type='primary'
            shape='circle'
            icon={<PlusOutlined />}
            onClick={() => {
              onSelect(row);
            }}
            title='添加'
            disabled={isSelected(row)}
          ></Button>
          <Button
            type='primary'
            shape='circle'
            icon={<MinusOutlined />}
            onClick={() => {
              onRemove(row);
            }}
            title='移除'
            disabled={!isSelected(row)}
          ></Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Title level={4}>所有股票</Title>
      <Table
        rowKey='id'
        bordered
        dataSource={dataSource}
        columns={columns}
        pagination={{
          pageSize: 5,
        }}
        size='small'
      ></Table>
    </>
  );
};

export default TransferSourceTable;
