import React from "react";
import ContentColor from "../../../../Index/IndexRight/General/RowTable/ContentColor/ContentColor";
import RowImage from "../../../../Index/IndexRight/General/RowTable/RowImage/RowImage";
import RowTableMain from "../../../../Table/RowTableMain";
import feature from "../feature";
function RowTableBannerTopSell(props) {
  //
  const { item, index } = props;
  //
  return (
    <RowTableMain item={item} index={index}>
      <td className="p-2 mx-auto">
        <RowImage width={"w-32"} height={"h-16"} src={item.imageLeft} />
      </td>
      <td className="p-2 mx-auto">
        <RowImage width={"w-32"} height={"h-16"} src={item.imageRight} />
      </td>
      <td className="p-2">
        <ContentColor
          condition={feature.condition.isShow}
          typeData={item.isShow}
        />
      </td>
    </RowTableMain>
  );
}

export default RowTableBannerTopSell;
