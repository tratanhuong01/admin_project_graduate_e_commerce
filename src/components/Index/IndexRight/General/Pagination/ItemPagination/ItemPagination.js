import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as categorysAction from "../../../../../../actions/category/index";

function ItemPagination(props) {
  //
  const { table, indexCurrent, index, item, modal, params } = props;
  const dispatch = useDispatch();
  const { filters, headers } = useSelector((state) => {
    return {
      filters: state.filters,
      headers: state.headers,
    };
  });

  //
  return (
    <li
      onClick={() => {
        if (modal)
          dispatch(
            categorysAction.loadPaginationModalRequest(
              {
                table,
                filters: filters.choose,
                sorter: filters.sorter,
                index,
                search: filters.search,
                params,
              },
              headers
            )
          );
        else
          dispatch(
            categorysAction.loadPaginationRequest(
              {
                index: item,
                table: table,
              },
              headers
            )
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
