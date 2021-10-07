import React from "react";
import ContentColor from "../../../../Index/IndexRight/General/RowTable/ContentColor/ContentColor";
import RowImage from "../../../../Index/IndexRight/General/RowTable/RowImage/RowImage";
import RowTableMain from "../../../../Table/RowTableMain";
import feature from "../feature";
function RowTableSlideIndex(props) {
  //
  const { item, index } = props;
  //
  return (
    <RowTableMain item={item} index={index}>
      <td className="p-2 mx-auto">
        <RowImage width={"w-16"} height={"h-20"} src={item.image} />
      </td>
      <td className="p-2">
        {item.slideProduct && item.slideProduct.nameLineProduct}
      </td>
      <td className="p-2">{item.slogan}</td>
      <td className="p-2">
        <ContentColor
          condition={feature.condition.isShow}
          typeData={item.type}
        />
      </td>
    </RowTableMain>
  );
}

export default RowTableSlideIndex;
