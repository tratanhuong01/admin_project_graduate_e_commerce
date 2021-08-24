import React from "react";
import ItemDataFilterOrder from "./ItemDataFilterOrder/ItemDataFilterOrder";

function DataFilterOrder(props) {
  return (
    <div className="w-full flex py-1">
      <ItemDataFilterOrder />
      <ItemDataFilterOrder />
    </div>
  );
}

export default DataFilterOrder;
