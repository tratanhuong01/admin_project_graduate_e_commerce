import React from "react";
import DataFilterOrder from "../DataFilterOrder/DataFilterOrder";
import Filter from "./Filter/Filter";
import OrderBy from "./OrderBy/OrderBy";

function Control(props) {
  //
  const { data, table, params } = props;
  //
  return (
    <>
      <div className="w-full flex py-3">
        <Filter filter={data.filter} table={table} params={params} />
        <OrderBy orderBy={data.sorter} table={table} params={params} />
      </div>
      <DataFilterOrder table={table} params={params} />
    </>
  );
}

export default Control;
