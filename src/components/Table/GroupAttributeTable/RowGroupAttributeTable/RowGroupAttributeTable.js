import React from "react";
import RowTableMain from "../../RowTableMain";

function RowGroupAttributeTable(props) {
  //
  const { item, index } = props;
  //
  return (
    <RowTableMain item={item} index={index}>
      <td className="p-2">{item.nameGroupAttribute}</td>
    </RowTableMain>
  );
}

export default RowGroupAttributeTable;
