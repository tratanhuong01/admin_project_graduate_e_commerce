import * as Types from "../../constants/ActionTypes";
import * as categorysAction from "../category/index";
import * as filterApi from "../../api/filterApi";

export const addFilterCategoryRequest = (data) => {
  return async (dispatch) => {
    const { filters, item, table, sorter } = data;
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
    if (sorter) stringQuery += `&${sorter.query}`;
    const result_2 = await filterApi.filters(
      table,
      `?${table}Type=0${stringQuery}`,
      true
    );
    const result_1 = await filterApi.filters(
      table,
      `?${table}Type=0${stringQuery}&offset=${0}&limit=10`
    );
    dispatch(categorysAction.loadListCategory(result_1.data, result_2.data));
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
    const { filters, item, table, sorter, index } = data;
    const clone = filters.filter((dt) => dt.id !== item.id);
    let stringQuery = "";
    if (clone.length > 0)
      clone.forEach((element) => {
        stringQuery += "&" + element.query;
      });
    if (sorter) stringQuery += `&${sorter.query}`;
    const result_2 = await filterApi.filters(
      table,
      `?${table}Type=0${stringQuery}`,
      true
    );
    const result_1 = await filterApi.filters(
      table,
      `?${table}Type=0${stringQuery}&offset=${index}&limit=10`
    );

    dispatch(categorysAction.loadListCategory(result_1.data, result_2.data));
    dispatch(updateFilterCategory(clone));
  };
};

export const resetFiltersAllRequest = (data) => {
  return async (dispatch) => {
    const { table, index } = data;
    const result_1 = await filterApi.filters(
      table,
      `?${table}Type=0&offset=${index}&limit=10`
    );
    const result_2 = await filterApi.filters(table, `?${table}Type=0`);
    dispatch(categorysAction.loadListCategory(result_1.data, result_2.data));
    dispatch(updateFilterCategory([]));
  };
};

export const addSorterCategoryRequest = (data) => {
  return async (dispatch) => {
    const { filters, item, table, index } = data;
    let stringQuery = "";
    if (filters.length > 0)
      filters.forEach((element) => {
        stringQuery += "&" + element.query;
      });
    const result_1 = await filterApi.filters(
      table,
      `?${table}Type=0${stringQuery}&${item.query}&offset=${index}&limit=10`
    );
    const result_2 = await filterApi.filters(
      table,
      `?${table}Type=0${stringQuery}&${item.query}`,
      true
    );
    dispatch(categorysAction.loadListCategory(result_1.data, result_2.data));
    dispatch(updateSorterCategory(item));
  };
};

export const removeSorterCategoryRequest = (data) => {
  return async (dispatch) => {
    const { filters, table, index } = data;
    let stringQuery = "";
    if (filters.length > 0)
      filters.forEach((element) => {
        stringQuery += "&" + element.query;
      });
    const result_1 = await filterApi.filters(
      table,
      `?${table}Type=0${stringQuery}&offset=${index}&limit=10`
    );
    const result_2 = await filterApi.filters(
      table,
      `?${table}Type=0${stringQuery}`,
      true
    );
    dispatch(categorysAction.loadListCategory(result_1.data, result_2.data));
    dispatch(updateSorterCategory(null));
  };
};

export const searchCategoryRequest = (data) => {
  return async (dispatch) => {
    const { filters, sorter, table, keyword, index } = data;
    let stringQuery = "";
    if (filters.length > 0)
      filters.forEach((element) => {
        stringQuery += "&" + element.query;
      });
    if (sorter) stringQuery += `&${sorter.query}`;
    const result_1 = await filterApi.filters(
      table,
      `?${table}Type=0${stringQuery}&keyword=${keyword}&offset=${index}&limit=10`
    );
    const result_2 = await filterApi.filters(
      table,
      `?${table}Type=0${stringQuery}&keyword=${keyword}`,
      true
    );
    dispatch(categorysAction.loadListCategory(result_1.data, result_2.data));
    dispatch(updateSearchCategory(keyword));
  };
};

export const updateSorterCategory = (sorter) => {
  return {
    type: Types.UPDATE_SORTER_CATEGORY,
    sorter,
  };
};

export const updateSearchCategory = (keyword) => {
  return {
    type: Types.UPDATE_SEARCH_CATEGORY,
    keyword,
  };
};

export const removeAllFilterSorterSearch = () => {
  return {
    type: Types.REMOVE_ALL_FILTER_SORTER_SEARCH,
  };
};
