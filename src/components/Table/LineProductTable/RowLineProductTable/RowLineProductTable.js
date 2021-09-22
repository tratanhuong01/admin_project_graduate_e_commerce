import React from "react";
import RowTableMain from "../../RowTableMain";

function RowLineProductTable(props) {
  //
  const { item, index } = props;
  //
  return (
    <RowTableMain item={item} index={index}>
      <td className="p-2">{item.groupProduct.nameGroupProduct}</td>
      <td className="p-2">{item.nameLineProduct}</td>
    </RowTableMain>
  );
}

export default RowLineProductTable;
