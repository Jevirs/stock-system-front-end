import React, { useState, useRef, useEffect, useContext } from "react";
import { Table, Form } from "antd";

const EditableTable = (props) => {
  const {
    /* 数据源 */
    dataSource,
    /* 数据格式 */
    columns,
    /* 其他熟悉 */
    ...restProps
  } = props;

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
    rules,
    handleSave,
    inputRender,
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
          rules={rules}
        >
          {inputRender({
            ref: inputRef,
            onPressEnter: save,
            onBlur: save,
          })}
        </Form.Item>
      ) : (
        <div className='editable-cell-value-wrap' onClick={toggleEdit}>
          {children}
        </div>
      );
    }

    return <td {...restProps}>{childNode}</td>;
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

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
        rules: col.rules,
        handleSave: col.handleSave,
        inputRender: col.inputRender,
      }),
    };
  });

  return (
    <Table
      rowClassName={() => "editable-row"}
      dataSource={dataSource}
      components={components}
      columns={wrapColumns}
      {...restProps}
    ></Table>
  );
};

export default EditableTable;
