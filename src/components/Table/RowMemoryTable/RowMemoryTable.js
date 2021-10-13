import React from "react";
import RowTableMain from "../RowTableMain";

function RowMemoryTable(props) {
  //
  const { item, index } = props;
  //
  return (
    <RowTableMain item={item} index={index}>
      <td className="p-2">{item.nameMemory}</td>
    </RowTableMain>
  );
}

export default RowMemoryTable;
