import React from "react";
import ContentColor from "../../Index/IndexRight/General/RowTable/ContentColor/ContentColor";
import RowTableMain from "../RowTableMain";
import * as modalsAction from "../../../actions/modals/index";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import moment from "moment";
import * as StringUtil from "../../../Utils/StringUtils";
import "moment/locale/vi";
function RowUserTable(props) {
  //
  const socket = useSelector((state) => state.socket);
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
      <td className="p-2">
        {(item.firstName !== null) & (item.lastName != null) ? (
          `${item.firstName} ${item.lastName}`
        ) : (
          <i className="fas fa-circle-notch fa-spin text-sm text-organce"></i>
        )}
      </td>
      <td className="p-2">
        {item.sex ? (
          <ContentColor condition={feature.condition.sex} typeData={item.sex} />
        ) : (
          <i className="fas fa-circle-notch fa-spin text-sm text-organce"></i>
        )}
      </td>
      <td className="p-2">
        {item.email || (
          <i className="fas fa-circle-notch fa-spin text-sm text-organce"></i>
        )}
      </td>
      <td className="p-2">
        {item.phone || (
          <i className="fas fa-circle-notch fa-spin text-sm text-organce"></i>
        )}
      </td>
      <td className="p-2">
        {item.birthday ? (
          item.birthday.split(" ").length > 0 ? (
            StringUtil.formatDateTimeBack2(item.birthday.split(" ")[0])
          ) : (
            ""
          )
        ) : (
          <i className="fas fa-circle-notch fa-spin text-sm text-organce"></i>
        )}
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
                actionFunc: (id) => {
                  socket.emit("updateStatusUser", id);
                },
              })
            )
          }
          condition={feature.condition.status}
          typeData={item.status}
        />
      </td>
      <td className="p-2">
        {new Intl.NumberFormat().format(
          !item.amountOrder ? 0 : item.amountOrder
        )}{" "}
        đơn hàng <br />
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
      <td className="p-2">
        {moment(
          `${item.timeCreated.split(" ")[0].split("-")[2]}${
            item.timeCreated.split(" ")[0].split("-")[0]
          }${item.timeCreated.split(" ")[0].split("-")[1]}`,
          "YYYYMMDD"
        ).fromNow()}
      </td>
    </RowTableMain>
  );
}

export default RowUserTable;
