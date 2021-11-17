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
                mainFilters: filters
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
      className={`h-10 w-10 rounded-full flex items-center justify-center text-white ${index === indexCurrent ? "bg-green-500" : "bg-gray-500"
        } flex justify-center items-center cursor-pointer font-bold mx-1`}
    >
      {item}
    </li>
  );
}

export default ItemPagination;
