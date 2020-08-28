import React from "react";
import { Form, Select, Modal, InputNumber } from "antd";

const addPlanForm = (props) => {
  const [form] = Form.useForm();
  const { visible, onCancel, onOk, confirmLoading, data } = props;

  const options = [
    {
      name: "增持",
      value: "add",
    },
    {
      name: "减持",
      value: "minus",
    },
  ];

  return (
    <Modal
      title={data.name + "计划"}
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
        <Form.Item label='方向:' name='action' initialValue='add'>
          <Select style={{ width: "150px" }}>
            {options.map((item) => {
              return (
                <Select.Option value={item.value} key={item.value}>
                  {item.name}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item label='金额:' name='money' initialValue={10000}>
          <InputNumber
            style={{ width: "150px" }}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default addPlanForm;
