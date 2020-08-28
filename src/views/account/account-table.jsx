import React from "react";
import { Table, Button, Space } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
const { Column } = Table;

const dataTable = (props) => {
  const { data } = props;

  return (
    <Table bordered rowKey='code' dataSource={data} pagination={true}>
      <Column title='账户名称' dataIndex='code' key='code' align='center' />
      <Column title='资金账号' dataIndex='name' key='name' align='center' />
      <Column title='初始资金' dataIndex='name' key='name' align='right' />
      <Column title='券商' dataIndex='name' key='name' align='center' />
      <Column title='交易股票池' dataIndex='name' key='name' align='center' />
      <Column title='交易员' dataIndex='name' key='name' align='center' />
      <Column title='总资产' dataIndex='name' key='name' align='right' />
      <Column title='持仓股票数' dataIndex='name' key='name' align='right' />
      <Column title='持仓总市值' dataIndex='name' key='name' align='right' />
      <Column title='备注' dataIndex='name' key='name' align='center' />
      <Column
        title='操作'
        dataIndex='name'
        key='name'
        align='center'
        render={() => {
          return (
            <Space>
              <Button
                type='primary'
                shape='circle'
                icon={<SearchOutlined />}
                title='查看'
              ></Button>
              <Button
                shape='circle'
                icon={<EditOutlined />}
                title='编辑'
              ></Button>
              <Button
                type='danger'
                shape='circle'
                icon={<DeleteOutlined />}
                title='删除'
              ></Button>
            </Space>
          );
        }}
      />
    </Table>
  );
};

export default dataTable;
