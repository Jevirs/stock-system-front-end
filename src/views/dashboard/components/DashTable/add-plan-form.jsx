import React from "react";
import { Form, Select, Modal, Table } from "antd";
const { Column } = Table;

const addPlanForm = (props) => {
  const [form] = Form.useForm();
  const { visible, onCancel, onOk, confirmLoading } = props;

  const shareOptions = [
    {
      name: "贵州茅台",
      value: "600000",
    },
    {
      name: "衡水老白干",
      value: "600200",
    },
    {
      name: "绍兴黄酒",
      value: "600100",
    },
  ];

  const tableData = [
    {
      key: 600000,
      account: 60000,
      money: 70000,
      position: 4000,
    },
    {
      key: 600100,
      account: 600100,
      money: 60500,
      position: 8900,
    },
    {
      key: 600200,
      account: 600200,
      money: 50500,
      position: 9900,
    },
    {
      key: 600300,
      account: 600300,
      money: 5800,
      position: 7600,
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };

  return (
    <Modal
      width={800}
      title='新增买入计划'
      visible={visible}
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            onOk(values, () => {
              form.resetFields();
            });
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
      confirmLoading={confirmLoading}
      destroyOnClose={true}
    >
      <Form form={form}>
        <Form.Item label='买入股票:' name='id'>
          <Select style={{ width: "150px" }}>
            {shareOptions.map((item) => {
              return (
                <Select.Option value={item.value} key={item.value}>
                  {item.name}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item label='账户选择:' name='accounts'>
          <Table rowSelection={{ ...rowSelection }} dataSource={tableData}>
            <Column
              title='账户名称'
              dataIndex='account'
              key='account'
              align='center'
            />
            <Column
              title='可使用资金'
              dataIndex='money'
              key='money'
              align='center'
            />
            <Column
              title='计划买入仓位'
              dataIndex='position'
              key='position'
              align='center'
            />
          </Table>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default addPlanForm;
