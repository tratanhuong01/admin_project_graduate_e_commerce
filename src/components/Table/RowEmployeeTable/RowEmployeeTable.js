import React from 'react'
import ContentColor from '../../Index/IndexRight/General/RowTable/ContentColor/ContentColor';
import RowTableMain from '../RowTableMain';
import * as StringUtil from "../../../Utils/StringUtils";
import * as modalsAction from "../../../actions/modals/index";
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

export default function RowEmployeeTable(props) {
  const socket = useSelector((state) => state.socket);
  const { item, index, feature } = props;
  const dispatch = useDispatch();
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
