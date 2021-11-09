import React from "react";
import Pagination from "../Index/IndexRight/General/Pagination/Pagination";

function Table(props) {
  //
  const { feature, category, modal, params } = props;
  //
  return (
    <>
      <div className="w-full scrollbar-css overflow-x-auto overflow-y-hidden max-w-full">
        <table className="w-full bg-white table__main">
          <tbody>{props.children}</tbody>
        </table>
      </div>
      <Pagination
        params={params}
        modal={modal}
        type={feature.type}
        category={category}
        table={feature.nameTable}
      />
    </>
  );
}

export default Table;
