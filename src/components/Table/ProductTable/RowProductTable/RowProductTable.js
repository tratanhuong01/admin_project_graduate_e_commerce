import React from "react";

function RowProductTable(props) {
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
      <td className="p-2">{item.image.src}</td>
      <td className="p-2">{item.nameGroupProduct}</td>
      <td className="p-2">{item.nameLineProduct}</td>
      <td className="p-2">{item.color.description}</td>
      <td className="p-2">{item.brand.nameBrand}</td>
      <td className="p-2">{item.memory.nameMemory}</td>
      <td className="p-2">{`${new Intl.NumberFormat().format(
        item.priceInput
      )} đ`}</td>
      <td className="p-2">{`${new Intl.NumberFormat().format(
        item.priceOutput
      )} đ`}</td>
      <td className="p-2">{item.sale}</td>
      <td className="p-2">{item.inventory}</td>
      <td className="p-2">{item.sold}</td>
      <td className="p-2">{item.user}</td>
      <td className="p-2">{item.status}</td>
      <td className="p-2"></td>
      <td className="p-2"></td>
    </tr>
  );
}

export default RowProductTable;
