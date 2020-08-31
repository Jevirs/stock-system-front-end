import React from "react";
import { Table, Button, Space, Popconfirm, message } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { formatNumber } from "@/utils";

const { Column } = Table;

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
    console.log(row);
    if (row.money > 0) {
      message.warn("此账户仍有持仓，无法删除");
    } else {
      onDelete(row);
    }
  };

  return (
    <Table
      bordered
      rowKey='account'
      dataSource={data}
      pagination={true}
      scroll={{ x: 1500 }}
    >
      <Column title='账户名称' dataIndex='name' align='center' />
      <Column title='资金账号' dataIndex='account' align='center' />
      <Column
        title='初始资金'
        dataIndex='money'
        align='right'
        render={formatRender}
      />
      <Column title='券商' dataIndex='company' align='center' />
      <Column title='交易股票池' dataIndex='sector' align='center' />
      <Column title='交易员' dataIndex='operator' align='center' />
      <Column
        title='总资产'
        dataIndex='money'
        align='right'
        render={formatRender}
      />
      <Column
        title='持仓股票数'
        dataIndex='money'
        align='right'
        render={formatRender}
      />
      <Column
        title='持仓总市值'
        dataIndex='money'
        align='right'
        render={formatRender}
      />
      <Column title='备注' dataIndex='remark' align='center' />
      <Column
        title='操作'
        dataIndex='name'
        align='center'
        fixed='right'
        render={(text, row) => {
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
        }}
      />
    </Table>
  );
};

export default dataTable;
