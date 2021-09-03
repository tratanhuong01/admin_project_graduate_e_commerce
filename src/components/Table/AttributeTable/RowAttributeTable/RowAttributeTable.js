import React from "react";

function RowAttributeTable(props) {
  //
  const { category, item, index } = props;
  //
  return (
    <tr>
      <td className="p-2">
        <input type="checkbox" className="transform scale-125" />;
      </td>
      <td className="p-2">
        {category.index === 0 ? index + 1 : index + 1 + category.index * 10}
      </td>
      <td className="p-2">{item.groupAttribute.nameGroupAttribute}</td>
      <td className="p-2">{item.nameAttribute}</td>
      <td className="p-2">{item.typeAttribute}</td>
    </tr>
  );
}

export default RowAttributeTable;
