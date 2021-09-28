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
      <td className="p-2">
        <img
          src={item.brandProduct.imageBrand}
          alt=""
          className="w-24 mx-auto"
        />
      </td>
      <td className="p-2">{item.width}</td>
      <td className="p-2">{item.height}</td>
      <td className="p-2">{item.weight}</td>
    </RowTableMain>
  );
}

export default RowLineProductTable;
