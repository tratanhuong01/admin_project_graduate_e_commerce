import React from "react";
import RowTableMain from "../RowTableMain";

function RowGroupFilterProductTable(props) {
  //
  const { item, index } = props;
  //
  return (
    <RowTableMain item={item} index={index}>
      <td className="p-2">{item.groupProductFilter.nameGroupProduct}</td>
      <td className="p-2">{item.nameGroupFilterProduct}</td>
    </RowTableMain>
  );
}

export default RowGroupFilterProductTable;
