import React from "react";
import RowTableMain from "../RowTableMain";

function RowPaymentMethodTable(props) {
  //
  const { item, index } = props;
  //
  return <RowTableMain item={item} index={index}></RowTableMain>;
}

export default RowPaymentMethodTable;
