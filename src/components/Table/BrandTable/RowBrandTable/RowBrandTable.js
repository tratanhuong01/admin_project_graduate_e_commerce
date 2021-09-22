import React from "react";
import RowTableMain from "../../RowTableMain";

function RowBrandTable(props) {
  //
  const { item, index } = props;
  //
  return (
    <RowTableMain item={item} index={index}>
      <td className="p-2">{item.nameBrand}</td>
      <td className="p-2 text-center ">
        <img
          src={item.imageBrand}
          alt={"alt"}
          className={`w-24 h-7 px-1 object-cover mx-auto`}
        />
      </td>
    </RowTableMain>
  );
}

export default RowBrandTable;
