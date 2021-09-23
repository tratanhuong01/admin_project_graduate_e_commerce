import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as filtersAction from "../../../../../../actions/filter/index";

function ItemDataFilterOrder(props) {
  //
  const { item, table, type } = props;
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  // const category = useSelector((state) => state.category);
  //
  return (
    <div
      onClick={() => {
        if (type)
          dispatch(
            filtersAction.removeSorterCategoryRequest({
              filters: filters.choose,
              table,
              index: 0,
            })
          );
        else
          dispatch(
            filtersAction.removeFilterCategoryRequest({
              filters: filters.choose,
              sorter: filters.sorter,
              item,
              table,
              index: 0,
            })
          );
      }}
      className="mr-2 mt-2 text-xs cursor-pointer rounded-sm  
      p-1 bg-blue-100 text-blue-500 font-semibold"
    >
      <span className="mr-1 text-sm">{item.nameFilter}</span>:
      <span className="ml-1 text-sm">{item.name}</span>
      &nbsp;&nbsp;&nbsp;
      <span className="text-xm">×</span>
    </div>
  );
}

export default ItemDataFilterOrder;
