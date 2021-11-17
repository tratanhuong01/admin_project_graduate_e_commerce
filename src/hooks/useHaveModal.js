import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as categorysAction from "../actions/category/index";

export const useHaveModal = (table, query, status) => {
  //
  const { category, headers, filters } = useSelector((state) => {
    return {
      category: state.category,
      headers: state.headers,
      filters: state.filters
    };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    //
    dispatch(
      categorysAction.loadListCategoryConnectRequest(
        `${table}${status ? "" : "s"}`,
        query,
        true,
        {
          filters: filters.choose,
          sorter: filters.sorter,
          search: filters.keyword,
          mainFilters: filters
        },
        headers
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return category;
};
