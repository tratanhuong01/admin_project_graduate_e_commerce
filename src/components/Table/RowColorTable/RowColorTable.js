import React from "react";
import RowTableMain from "../RowTableMain";

function RowColorTable(props) {
  //
  const { item, index } = props;
  //
  return (
    <RowTableMain item={item} index={index}>
      <td className="p-2">{item.code}</td>
      <td className="p-2">{item.description}</td>
    </RowTableMain>
  );
}

export default RowColorTable;
