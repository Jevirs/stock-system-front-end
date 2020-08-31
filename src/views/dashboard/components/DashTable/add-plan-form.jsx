import React, { useState, useEffect, useContext, useRef } from "react";
import { Form, Select, Modal, Table, InputNumber } from "antd";
import { formatNumber } from "@/utils";
import "./style.css";

const AddPlanForm = (props) => {
  const DATA = [
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

  const [form] = Form.useForm();
  const { visible, onCancel, onOk, confirmLoading } = props;
  const [source, setSource] = useState(DATA);

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

  const EditableContext = React.createContext();

  const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
      <Form form={form} component={false}>
        <EditableContext.Provider value={form}>
          <tr {...props} />
        </EditableContext.Provider>
      </Form>
    );
  };

  const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
  }) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef();
    const form = useContext(EditableContext);
    useEffect(() => {
      if (editing) {
        inputRef.current.focus();
      }
    }, [editing]);

    const toggleEdit = () => {
      setEditing(!editing);
      form.setFieldsValue({
        [dataIndex]: record[dataIndex],
      });
    };

    const save = async (e) => {
      try {
        const values = await form.validateFields();
        toggleEdit();
        handleSave({ ...record, ...values });
      } catch (errInfo) {
        console.log("Save failed:", errInfo);
      }
    };

    let childNode = children;

    if (editable) {
      childNode = editing ? (
        <Form.Item
          style={{
            margin: 0,
          }}
          name={dataIndex}
          rules={[
            {
              required: true,
              message: `请填写${title}`,
            },
          ]}
        >
          <InputNumber
            step={1000}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            ref={inputRef}
            onPressEnter={save}
            onBlur={save}
            style={{ width: "150px" }}
          />
        </Form.Item>
      ) : (
        <div
          className='editable-cell-value-wrap'
          style={{
            paddingRight: 24,
          }}
          onClick={toggleEdit}
        >
          {children}
        </div>
      );
    }

    return <td {...restProps}>{childNode}</td>;
  };

  /* 表格渲染组件 */
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columns = [
    {
      title: "账户名称",
      dataIndex: "account",
      align: "center",
    },
    {
      title: "可使用资金",
      dataIndex: "money",
      align: "right",
      render: (text) => {
        return formatNumber(text);
      },
    },
    {
      title: "计划买入仓位",
      dataIndex: "position",
      align: "right",
      editable: true,
      render: (text) => {
        return formatNumber(text);
      },
      width: "35%",
    },
  ];
  const wrapColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: handleSave,
      }),
    };
  });

  /* 更新数据 */
  const handleSave = (row) => {
    const newData = [...source];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    setSource(newData);
  };

  const totalDiv = () => {
    const total = source.reduce((acc, cur) => acc + cur.position, 0);
    return (
      <div style={{ textAlign: "right", paddingRight: "20px" }}>
        买入计划总仓位: {formatNumber(total)}
      </div>
    );
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
          <Table
            rowClassName={() => "editable-row"}
            rowSelection={{ ...rowSelection }}
            dataSource={source}
            components={components}
            columns={wrapColumns}
            pagination={false}
          ></Table>
        </Form.Item>
      </Form>
      {totalDiv()}
    </Modal>
  );
};

export default AddPlanForm;
