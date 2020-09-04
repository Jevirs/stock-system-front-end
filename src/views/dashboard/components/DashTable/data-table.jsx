import React from "react";
import { Table, Button, Space } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { formatNumber } from "@/utils";

const { Column } = Table;

const dataTable = (props) => {
  const { data, onEdit } = props;

  /* 嵌套子表格 */
  const expandedRowRender = (record) => {
    return (
      <div style={{ padding: "20px" }}>
        <Table
          bordered
          rowKey='name'
          dataSource={record.account}
          pagination={false}
        >
          <Column title='账户' dataIndex='name' key='name' align='center' />
          <Column
            title='交易员'
            dataIndex='operator'
            key='operator'
            align='center'
          />
          <Column
            title='持仓金额'
            dataIndex='money'
            key='money'
            align='right'
            render={(text) => {
              return formatNumber(text);
            }}
          />
          <Column
            title='计划'
            dataIndex='plan'
            key='plan'
            align='center'
            render={() => {
              return (
                <Space>
                  <span>增持 100000</span>
                  <Button
                    size='small'
                    type='primary'
                    shape='circle'
                    icon={<EditOutlined />}
                    onClick={() => {
                      onEdit(record);
                    }}
                  />
                </Space>
              );
            }}
          />
        </Table>
      </div>
    );
  };

  return (
    <Table
      bordered
      rowKey='key'
      dataSource={data}
      pagination={true}
      expandable={{ expandedRowRender }}
    >
      <Column title='股票代码' dataIndex='code' key='code' align='center' />
      <Column title='股票名称' dataIndex='name' key='name' align='center' />
      <Column
        title='总持仓金额'
        dataIndex='money'
        key='money'
        align='right'
        render={(text) => {
          return formatNumber(text);
        }}
      />
    </Table>
  );
};

export default dataTable;
