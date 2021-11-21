import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as categorysAction from "../../../../actions/category/index";

function ItemUpdateStatusCategory(props) {
  //
  const { item, value, setValue, table, column, id, dataMain, dataType } = props;
  const { category, filters, headers } = useSelector((state) => {
    return {
      category: state.category,
      filters: state.filters,
      headers: state.headers,
    };
  });
  const dispatch = useDispatch();
  const action = () => {
    setValue(item.data);
    dispatch(
      categorysAction.updateStatusCategoryRequest(
        {
          table: table,
          item: Object.assign(item, { column, id }),
          query: {
            full: `?userType=${dataType}`,
            limit: `?userType=${dataType}&limit=${10}&offset=${category.index
              }`,
          },
          status: true,
          filterData: {
            filters: filters.choose,
            sorter: filters.sorter,
            search: filters.search,
            mainFilters: filters
          },
        },
        headers
      )
    );

    if (dataMain.actionFunc)
      if (typeof dataMain.actionFunc === "function") dataMain.actionFunc(id);
  };
  //
  return (
    <li
      onClick={action}
      className="w-full flex p-2 my-2 cursor-pointer hover:bg-gray-200"
    >
      <div className="w-20 h-20 hover:text-gray-100 hover:bg-gray-500 rounded-full flex items-center justify-center bg-gray-200">
        <i className={`${item.icon} text-3xl`}></i>
      </div>
      <div className="w-9/12 pl-4 flex items-center flex-wrap">
        <p className="font-semibold text-xl dark:text-white w-full">
          {item.name}
        </p>
        <p className="dark:text-white w-full text-sm mb-1">
          {item.description}
        </p>
      </div>
      <div className="w-1/12 p-6 cursor-pointer">
        <input
          type="radio"
          className="text-3xl h-4 transform scale-150"
          name="data"
          onChange={action}
          checked={value === item.data}
        />
      </div>
    </li>
  );
}

export default ItemUpdateStatusCategory;
