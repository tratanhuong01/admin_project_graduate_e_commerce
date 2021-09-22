import React from "react";
import RowTableMain from "../../RowTableMain";

function RowGroupProductTable(props) {
  //
  const { item, index } = props;
  //
  return (
    <RowTableMain item={item} index={index}>
      <td className="p-2">{item.categoryGroupProduct.nameCategoryProduct}</td>
      <td className="p-2">{item.nameGroupProduct}</td>
      <td className="p-2">{item.slugGroupProduct}</td>
      <td className="p-2"></td>
    </RowTableMain>
  );
}

export default RowGroupProductTable;
