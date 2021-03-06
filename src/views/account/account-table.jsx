import React from "react";
import { Table, Button, Space, Popconfirm, message } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { formatNumber } from "@/utils";

const dataTable = (props) => {
  const { data, onView, onEdit, onDelete } = props;
  const formatRender = (text) => {
    return formatNumber(text);
  };

  const handleView = (row) => {
    onView(row);
  };

  const handleEdit = (row) => {
    onEdit(row);
  };

  const handleDelete = (row) => {
    onDelete(row);
  };

  const actionRender = (val, row) => {
    return (
      <Space>
        <Button
          type='primary'
          shape='circle'
          icon={<SearchOutlined />}
          title='查看'
          onClick={() => {
            handleView(row);
          }}
        ></Button>
        <Button
          shape='circle'
          icon={<EditOutlined />}
          title='编辑'
          onClick={() => {
            handleEdit(row);
          }}
        ></Button>

        <Popconfirm
          title='确定要删除此账户?'
          placement='topRight'
          onConfirm={() => {
            handleDelete(row);
          }}
        >
          <Button
            type='danger'
            shape='circle'
            icon={<DeleteOutlined />}
            title='删除'
          ></Button>
        </Popconfirm>
      </Space>
    );
  };

  const columns = [
    { title: "账户名称", dataIndex: "name", align: "center" },
    { title: "资金账号", dataIndex: "account", align: "center" },
    {
      title: "初始资金",
      dataIndex: "money",
      align: "right",
      render: formatRender,
    },
    { title: "券商", dataIndex: "company", align: "center" },
    { title: "交易股票池", dataIndex: "sector", align: "center" },
    { title: "交易员", dataIndex: "operator", align: "center" },
    {
      title: "总资产",
      dataIndex: "money",
      align: "center",
      render: formatRender,
    },
    {
      title: "持仓股票数",
      dataIndex: "money",
      align: "right",
      render: formatRender,
    },
    {
      title: "持仓总市值",
      dataIndex: "money",
      align: "right",
      render: formatRender,
    },
    { title: "备注", dataIndex: "remark", align: "center" },
    {
      title: "操作",
      dataIndex: "action",
      align: "center",
      fixed: "right",
      render: actionRender,
    },
  ];

  return (
    <Table
      bordered
      rowKey='account'
      dataSource={data}
      pagination={true}
      scroll={{ x: 1500 }}
      columns={columns}
    ></Table>
  );
};

export default dataTable;
