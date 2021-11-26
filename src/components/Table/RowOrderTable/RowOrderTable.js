import React from "react";
import ContentColor from "../../Index/IndexRight/General/RowTable/ContentColor/ContentColor";
import RowTableMain from "../RowTableMain";
import * as StringUtil from "../../../Utils/StringUtils";
function RowOrderTable(props) {
  //
  const { item, index, feature } = props;
  //
  return (
    <RowTableMain item={item} index={index}>
      <td className="p-2">{item.id}</td>
      <td className="p-2">
        <ContentColor
          onClick={() => ""}
          condition={feature.condition.status}
          typeData={item.status}
        />
      </td>
      <td className="p-2">{item.fullName}</td>
      <td className="p-2 font-semibold">
        {item.address.split(",").map((data, index) => (
          <div key={index}>{data}</div>
        ))}
      </td>
      <td className="p-2">{item.phone}</td>
      <td className="p-2">
        {new Intl.NumberFormat().format(item.total)} <u>đ</u>
      </td>
      <td className="p-2">
        <ul className="font-bold">
          <li>Đặt hàng : {item.timeCreated ? (
            StringUtil.formatDateTimeMain(item.timeCreated)
          ) : (
            <i className="fas fa-circle-notch fa-spin text-sm text-organce"></i>
          )} </li>
          <li>Giao hàng dự kiến : {item.timeIntend ? (
            item.timeIntend.split(" ")[0].replaceAll('-', '/')
          ) : (
            <i className="fas fa-circle-notch fa-spin text-sm text-organce"></i>
          )} </li>
          <li>Duyệt hàng : {item.timeApproval ? (
            StringUtil.formatDateTimeMain(item.timeApproval)
          ) : (
            <i className="fas fa-circle-notch fa-spin text-sm text-organce"></i>
          )} </li>
          <li>Hoàn thành : {item.timeCompleted ? (
            StringUtil.formatDateTimeMain(item.timeCompleted)
          ) : (
            <i className="fas fa-circle-notch fa-spin text-sm text-organce"></i>
          )} </li>
        </ul>
      </td>
      <td className="p-2">
        {new Intl.NumberFormat().format(item.fee)} <u>đ</u>
      </td>
      <td className="p-2">
        {new Intl.NumberFormat().format(item.sale)} <u>đ</u>
      </td>
      <td className="p-2">{item.note}</td>
    </RowTableMain>
  );
}

export default RowOrderTable;
