import React from "react";
import ContentColor from "../../../Index/IndexRight/General/RowTable/ContentColor/ContentColor";

function RowOrderTable(props) {
  //
  const { category, item, index, feature } = props;
  //
  return (
    <tr>
      <td className="p-2">
        <input type="checkbox" className="transform scale-125" />;
      </td>
      <td className="p-2">
        {category.index === 0 ? index + 1 : index + 1 + category.index * 10}
      </td>
      <td className="p-2">{item.id}</td>
      <td className="p-2">
        <ContentColor
          condition={feature.condition.status}
          typeData={item.status}
        />
      </td>
      <td className="p-2">{item.address}</td>
      <td className="p-2">{item.phone}</td>
      <td className="p-2">
        {new Intl.NumberFormat().format(item.total)} <u>đ</u>
      </td>
      <td className="p-2">{item.timeCreated}</td>
      <td className="p-2">{item.timeCompleted}</td>
      <td className="p-2">
        {new Intl.NumberFormat().format(item.fee)} <u>đ</u>
      </td>
      <td className="p-2">
        {new Intl.NumberFormat().format(item.sale)} <u>đ</u>
      </td>
      <td className="p-2">{item.note}</td>
    </tr>
  );
}

export default RowOrderTable;
