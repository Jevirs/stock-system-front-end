import React from "react";
import { Transfer } from "antd";
import EditableTable from "@/components/EditableTable";
import difference from "lodash/difference";

const TableTransfer = ({ leftColumns, rightColumns, ...restProps }) => {
  return (
    <Transfer {...restProps} showSelectAll={false}>
      {({
        direction,
        filteredItems,
        onItemSelectAll,
        onItemSelect,
        selectedKeys: listSelectedKeys,
        disabled: listDisabled,
      }) => {
        const columns = direction === "left" ? leftColumns : rightColumns;

        const rowSelection = {
          getCheckboxProps: (item) => ({
            disabled: listDisabled || item.disabled,
          }),
          onSelectAll(selected, selectedRows) {
            const treeSelectedKeys = selectedRows
              .filter((item) => !item.disabled)
              .map(({ key }) => key);
            const diffKeys = selected
              ? difference(treeSelectedKeys, listSelectedKeys)
              : difference(listSelectedKeys, treeSelectedKeys);
            onItemSelectAll(diffKeys, selected);
          },
          onSelect({ key }, selected) {
            onItemSelect(key, selected);
          },
          selectedRowKeys: listSelectedKeys,
        };

        return (
          <EditableTable
            rowSelection={rowSelection}
            columns={columns}
            dataSource={filteredItems}
            style={{ pointerEvents: listDisabled ? "none" : null }}
          />
        );
      }}
    </Transfer>
  );
};

export default TableTransfer;
