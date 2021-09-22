import React from "react";
import RowTableMain from "../../RowTableMain";

function RowAttributeTable(props) {
  //
  const { item, index } = props;
  //
  return (
    <RowTableMain item={item} index={index}>
      <td className="p-2">{item.groupAttribute.nameGroupAttribute}</td>
      <td className="p-2">{item.nameAttribute}</td>
      <td className="p-2">{item.typeAttribute}</td>
    </RowTableMain>
  );
}

export default RowAttributeTable;
