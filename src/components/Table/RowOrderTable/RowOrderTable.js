import React from "react";
import ContentColor from "../../Index/IndexRight/General/RowTable/ContentColor/ContentColor";
import RowTableMain from "../RowTableMain";
import * as modalsAction from "../../../actions/modals/index";
import { useDispatch } from "react-redux";
function RowOrderTable(props) {
  //
  const { item, index, feature } = props;
  const dispatch = useDispatch();
  //
  return (
    <RowTableMain item={item} index={index}>
      <td className="p-2">{item.id}</td>
      <td className="p-2">
        <ContentColor
          onClick={() =>
            dispatch(
              modalsAction.openModalUpdateStatusCategory({
                data: feature.status,
                itemCurrent: item.status,
                table: feature.nameTable,
                id: item.id,
              })
            )
          }
          condition={feature.condition.status}
          typeData={item.status}
        />
      </td>
      <td className="p-2">{item.fullName}</td>
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
    </RowTableMain>
  );
}

export default RowOrderTable;
