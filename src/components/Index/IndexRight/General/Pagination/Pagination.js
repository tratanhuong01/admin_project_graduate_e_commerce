import React from "react";
import ItemPagination from "./ItemPagination/ItemPagination";

function Pagination(props) {
  return (
    <div className="w-full flex justify-center">
      <ul className="flex justify-center">
        <ItemPagination />
        <ItemPagination />
        <ItemPagination />
      </ul>
    </div>
  );
}

export default Pagination;
