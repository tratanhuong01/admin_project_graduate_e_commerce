import React from "react";
import DataFilterOrder from "../DataFilterOrder/DataFilterOrder";
import Filter from "./Filter/Filter";
import OrderBy from "./OrderBy/OrderBy";

function Control(props) {
  //
  const { data } = props;
  //
  return (
    <>
      <div className="w-full flex py-3">
        <Filter filter={data.filter} />
        <OrderBy orderBy={data.sorter} />
      </div>
      <DataFilterOrder />
    </>
  );
}

export default Control;
