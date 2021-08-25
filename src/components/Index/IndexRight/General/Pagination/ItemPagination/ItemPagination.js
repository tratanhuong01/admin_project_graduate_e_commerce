import React from "react";
import { useDispatch } from "react-redux";
import * as categorysAction from "../../../../../../actions/category/index";

function ItemPagination(props) {
  //
  const { table, indexCurrent, index, item } = props;
  const dispatch = useDispatch();
  //
  return (
    <li
      onClick={() => {
        dispatch(
          categorysAction.loadPaginationRequest({
            index: item,
            table: table,
          })
        );
      }}
      className={`py-2 px-2.5 text-white ${
        index === indexCurrent ? "bg-yellow-700" : "bg-green-700"
      } flex justify-center items-center 
      cursor-pointer font-bold mx-1`}
    >
      {item}
    </li>
  );
}

export default ItemPagination;
