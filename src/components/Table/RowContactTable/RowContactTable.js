import React from "react";
import RowTableMain from "../RowTableMain";

function RowContactTable(props) {
  //
  const { item, index } = props;
  //
  return (
    <RowTableMain item={item} index={index}>
      <td className="p-2">{item.fullName}</td>
      <td className="p-2">{item.phone}</td>
      <td className="p-2">{item.email}</td>
      <td className="p-2">{item.content.substring(0, 70)}</td>
      <td className="p-2">{item.timeCreated}</td>
    </RowTableMain>
  );
}

export default RowContactTable;
