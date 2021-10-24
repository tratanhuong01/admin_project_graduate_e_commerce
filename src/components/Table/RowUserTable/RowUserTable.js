import React from "react";
import ContentColor from "../../Index/IndexRight/General/RowTable/ContentColor/ContentColor";
import RowTableMain from "../RowTableMain";
import * as modalsAction from "../../../actions/modals/index";
import { useDispatch } from "react-redux";
function RowUserTable(props) {
  //
  const { item, index, feature } = props;
  const dispatch = useDispatch();
  const isVerify = () => {
    if (item.isVerifyPhone === 0 && item.isVerifyEmail === 0) return 0;
    if (item.isVerifyPhone === 1 && item.isVerifyEmail === 0) return 1;
    if (item.isVerifyPhone === 0 && item.isVerifyEmail === 1) return 2;
    if (item.isVerifyPhone === 1 && item.isVerifyEmail === 1) return 3;
  };
  //
  return (
    <RowTableMain item={item} index={index}>
      <td className="p-2">{`${item.firstName} ${item.lastName}`}</td>
      <td className="p-2">
        <ContentColor condition={feature.condition.sex} typeData={item.sex} />
      </td>
      <td className="p-2">{item.email}</td>
      <td className="p-2">{item.phone}</td>
      <td className="p-2">
        {item.birthday
          ? item.birthday.split(" ").length > 0
            ? item.birthday.split(" ")[0]
            : ""
          : ""}
      </td>
      <td className="p-2">
        <ContentColor
          condition={feature.condition.isVerify}
          typeData={isVerify()}
        />
      </td>
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
      <td className="p-2 font-semibold">
        {new Intl.NumberFormat().format(
          !item.amountOrder ? 0 : item.amountOrder
        )}{" "}
        đơn hàng{" "}
        {new Intl.NumberFormat().format(
          !item.amountProduct ? 0 : item.amountProduct
        )}{" "}
        sản phẩm
      </td>
      <td className="p-2">
        <ContentColor
          condition={feature.condition.sold}
          typeData={!item.amountOrder ? 0 : 1}
        />
      </td>
      <td className="p-2">
        <ContentColor
          condition={feature.condition.isRegister}
          typeData={item.isRegister}
        />
      </td>
      <td className="p-2">{item.timeCreated}</td>
    </RowTableMain>
  );
}

export default RowUserTable;
