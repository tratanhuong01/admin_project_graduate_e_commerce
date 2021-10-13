import React from "react";
import RowTableMain from "../RowTableMain";

function RowCategoryProductTable(props) {
  //
  const { item, index } = props;
  //
  return (
    <RowTableMain item={item} index={index}>
      <td className="p-2">{item.nameCategoryProduct}</td>
      <td className="p-2">{item.slugCategoryProduct}</td>
    </RowTableMain>
  );
}

export default RowCategoryProductTable;
