import React from "react";
import RowTableMain from "../RowTableMain";

function SlideTable(props) {
  //
  const { index, item } = props;
  //
  return <RowTableMain item={item} index={index}></RowTableMain>;
}

export default SlideTable;
