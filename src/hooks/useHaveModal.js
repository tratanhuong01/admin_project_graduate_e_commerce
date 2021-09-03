import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as categorysAction from "../actions/category/index";

export const useHaveModal = (table) => {
  //
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    //
    dispatch(categorysAction.loadListCategoryRequest(`${table}s`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return category;
};
