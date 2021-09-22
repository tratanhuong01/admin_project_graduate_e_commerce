import React from "react";
import RowTableMain from "../../RowTableMain";

function RowFunctionProductTable(props) {
  //
  const { item, index } = props;
  //
  return (
    <RowTableMain item={item} index={index}>
      <td className="p-2">
        {item.groupFilterFunctionProduct.groupProductFilter.nameGroupProduct}
      </td>
      <td className="p-2">
        {item.groupFilterFunctionProduct.nameGroupFilterProduct}
      </td>
      <td className="p-2">{item.nameFunctionProduct}</td>
      <td className="p-2">{item.typeFunctionProduct}</td>
    </RowTableMain>
  );
}

export default RowFunctionProductTable;
