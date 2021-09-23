import React from "react";
import DataFilterOrder from "../DataFilterOrder/DataFilterOrder";
import Filter from "./Filter/Filter";
import OrderBy from "./OrderBy/OrderBy";

function Control(props) {
  //
  const { data, table } = props;
  //
  return (
    <>
      <div className="w-full flex py-3">
        <Filter filter={data.filter} table={table} />
        <OrderBy orderBy={data.sorter} table={table} />
      </div>
      <DataFilterOrder table={table} />
    </>
  );
}

export default Control;
