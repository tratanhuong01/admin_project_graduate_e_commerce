import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as categorysAction from "../actions/category/index";
import * as formsAction from "../actions/form/index";
export const useNotModal = (table) => {
  //
  const { category, form, headers } = useSelector((state) => {
    return {
      category: state.category,
      form: state.form,
      headers: state.headers,
    };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    //
    dispatch(
      categorysAction.loadListCategoryRequest(`${table}s`, null, false, headers)
    );
    dispatch(formsAction.openFormAdd(`${table}`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { category, form };
  //
};
