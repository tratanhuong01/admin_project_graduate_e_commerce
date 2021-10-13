import React from "react";
import ContentColor from "../../Index/IndexRight/General/RowTable/ContentColor/ContentColor";
import RowTableMain from "../RowTableMain";

function RowVoucherTable(props) {
  //
  const { item, index, feature } = props;
  //
  return (
    <RowTableMain item={item} index={index}>
      <td className="p-2">{item.code}</td>
      <td className="p-2">{item.nameDiscountCode}</td>
      <td className="p-2">{item.timeStart}</td>
      <td className="p-2">{item.timeExpired}</td>
      <td className="p-2">{item.percent}</td>
      <td className="p-2">{item.amount}</td>
      <td className="p-2">
        <ContentColor
          condition={feature.condition.typeDiscountCode}
          typeData={item.type}
        />
      </td>

      <td className="p-2 font-semibold">
        {new Intl.NumberFormat().format(item.min)}
      </td>
      <td className="p-2 font-semibold">
        {new Intl.NumberFormat().format(item.max)}
      </td>
    </RowTableMain>
  );
}

export default RowVoucherTable;
