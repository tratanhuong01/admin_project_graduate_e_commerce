import React from "react";
import ContentColor from "../../Index/IndexRight/General/RowTable/ContentColor/ContentColor";
import RowTableMain from "../RowTableMain";
import * as StringUtils from "../../../Utils/StringUtils";
function RowVoucherTable(props) {
  //
  const { item, index, feature } = props;
  //
  return (
    <RowTableMain item={item} index={index}>
      <td className="p-2">{item.code}</td>
      <td className="p-2">{item.nameDiscountCode}</td>
      <td className="p-2">{StringUtils.formatDateTimeMain(item.timeStart)}</td>
      <td className="p-2">
        {StringUtils.formatDateTimeMain(item.timeExpired)}
      </td>
      <td className="p-2">
        <span className="px-2 py-1 text-white bg-red-500 font-semibold rounded-full">
          {item.percent}&nbsp;%
        </span>
      </td>
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
