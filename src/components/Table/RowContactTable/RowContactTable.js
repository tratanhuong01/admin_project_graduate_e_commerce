import React from "react";
import ContentColor from "../../Index/IndexRight/General/RowTable/ContentColor/ContentColor";
import RowTableMain from "../RowTableMain";
import feature from "../../../screens/ContactScreen/feature";
function RowContactTable(props) {
  //
  const { item, index } = props;
  //
  return (
    <RowTableMain item={item} index={index}>
      <td className="p-2">{item.fullName}</td>
      <td className="p-2">{item.phone}</td>
      <td className="p-2">{item.email}</td>
      <td className="p-2">{item.content.substring(0, 70)}</td>
      <td className="p-2">{item.timeCreated}</td>
      <td className="p-2">
        <ContentColor
          typeData={item.status}
          condition={feature.condition.status}
        />
      </td>
    </RowTableMain>
  );
}

export default RowContactTable;
