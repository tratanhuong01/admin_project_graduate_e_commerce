import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as categorysAction from "../actions/category/index";

export const useHaveModal = (table, query, status) => {
  //
  const { category, headers } = useSelector((state) => {
    return {
      category: state.category,
      headers: state.headers,
    };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    //
    dispatch(
      categorysAction.loadListCategoryRequest(
        `${table}${status ? "" : "s"}`,
        query,
        status,
        headers
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return category;
};
