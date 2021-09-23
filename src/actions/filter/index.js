import * as Types from "../../constants/ActionTypes";
import * as categorysAction from "../category/index";
import * as filterApi from "../../api/filterApi";

export const addFilterCategoryRequest = (data) => {
  return async (dispatch) => {
    const { filters, item, table } = data;
    const index = filters.findIndex((dt) => dt.idFilter === item.idFilter);
    let clone = [];
    if (index === -1) clone = [...filters, item];
    else {
      clone = filters.filter((dt) => dt.idFilter !== item.idFilter);
      clone = [...clone, item];
    }
    let stringQuery = "";
    if (clone.length > 0)
      clone.forEach((element) => {
        stringQuery += "&" + element.query;
      });
    const result = await filterApi.filters(
      table,
      `?${table}Type=0${stringQuery}`
    );
    dispatch(categorysAction.loadListCategory(result.data, result.data.length));
    dispatch(updateFilterCategory(clone));
  };
};

export const updateFilterCategory = (data) => {
  return {
    type: Types.UPDATE_FILTER_CATEGORY,
    data,
  };
};

export const removeFilterCategoryRequest = (data) => {
  return async (dispatch) => {
    const { filters, item, table } = data;
    const clone = filters.filter((dt) => dt.id !== item.id);
    let stringQuery = "";
    if (clone.length > 0)
      clone.forEach((element) => {
        stringQuery += "&" + element.query;
      });
    const result = await filterApi.filters(
      table,
      `?${table}Type=0${stringQuery}`
    );
    dispatch(categorysAction.loadListCategory(result.data, result.data.length));
    dispatch(updateFilterCategory(clone));
  };
};

export const resetFiltersAllRequest = (table) => {
  return async (dispatch) => {
    const result = await filterApi.filters(table, `?${table}Type=0`);
    dispatch(categorysAction.loadListCategory(result.data, result.data.length));
    dispatch(updateFilterCategory([]));
  };
};
