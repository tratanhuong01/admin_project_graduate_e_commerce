import React from "react";
import Pagination from "../Index/IndexRight/General/Pagination/Pagination";

function Table(props) {
  //
  const { feature, category } = props;
  //
  return (
    <>
      <div className="w-full scrollbar-css overflow-x-auto overflow-y-hidden max-w-full p-3">
        <table className="w-full bg-white">
          <tbody>{props.children}</tbody>
        </table>
      </div>
      <Pagination
        type={feature.type}
        category={category}
        table={feature.nameTable}
      />
    </>
  );
}

export default Table;
