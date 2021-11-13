import React from "react";
import RowTableMain from "../RowTableMain";

function RowColorTable(props) {
  //
  const { item, index } = props;
  //
  return (
    <RowTableMain item={item} index={index}>
      <td className="p-2">
        {
          <div
            className="w-10 h-10 rounded-full mx-auto border-2 border-solid border-gray-700"
            style={{ backgroundColor: item.code }}
          ></div>
        }
      </td>
      <td className="p-2">{item.description}</td>
    </RowTableMain>
  );
}

export default RowColorTable;
