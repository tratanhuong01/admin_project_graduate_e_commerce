import React from "react";
import { useSelector } from "react-redux";
import ItemDataFilterOrder from "./ItemDataFilterOrder/ItemDataFilterOrder";

function DataFilterOrder(props) {
  //
  const { table, params } = props;
  const filters = useSelector((state) => state.filters);
  //
  return (
    <div className="w-full flex py-1 mb-5 z-50">
      {filters.choose &&
        filters.choose.map((item, index) => {
          return (
            <ItemDataFilterOrder
              item={item}
              key={index}
              table={table}
              params={params}
            />
          );
        })}
      {filters.sorter ? (
        <ItemDataFilterOrder
          item={filters.sorter}
          table={table}
          type={true}
          params={params}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default DataFilterOrder;
