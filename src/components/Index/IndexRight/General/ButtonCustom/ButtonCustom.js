import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as modalsAction from "../../../../../actions/modals/index";
import * as categorysAction from "../../../../../actions/category/index";
function ButtonCustom(props) {
  //
  const { table, content, type, bgColor, icon, params, otherFunction } = props;
  const { category, filters, headers } = useSelector((state) => {
    return {
      category: state.category,
      filters: state.filters,
      headers: state.headers,
    };
  });
  const dispatch = useDispatch();
  //
  return (
    <button
      onClick={() => {
        if (type || type === 0) {
          if (type === 0) dispatch(modalsAction.openModalAdd(table));
          if (type === 2)
            dispatch(
              categorysAction.deleteCategoryRequest(
                category.choose,
                table + "s",
                {
                  status: true,
                  search: filters.search,
                  sorter: filters.sorter,
                  filters: filters.choose,
                  mainFilters: filters,
                  params,
                },
                headers
              )
            );
          if (type === 1)
            dispatch(modalsAction.openModalEdit(table, category.choose[0]));
        }
        else {
          typeof otherFunction === "function" && otherFunction(category.choose);
        }
      }}
      className={`px-5 ml-4 py-2.5 rounded-lg ${bgColor} font-semibold 
      text-white flex justify-center items-center`}
    >
      <i className={`${icon} mr-3 text-xl`}></i>
      {content}
    </button >
  );
}

export default ButtonCustom;
