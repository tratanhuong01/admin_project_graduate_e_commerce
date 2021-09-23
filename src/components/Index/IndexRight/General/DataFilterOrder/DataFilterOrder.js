import React from "react";
import { useSelector } from "react-redux";
import ItemDataFilterOrder from "./ItemDataFilterOrder/ItemDataFilterOrder";

function DataFilterOrder(props) {
  //
  const { table } = props;
  const filters = useSelector((state) => state.filters);
  //
  return (
    <div className="w-full flex py-1">
      {filters.choose &&
        filters.choose.map((item, index) => {
          return <ItemDataFilterOrder item={item} key={index} table={table} />;
        })}
    </div>
  );
}

export default DataFilterOrder;
