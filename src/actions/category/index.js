import * as Types from "../../constants/ActionTypes";
import api from "../../Utils/api";
import * as crudApi from "../../api/crudApi";
import * as filterApi from "../../api/filterApi";
import * as modalsAction from "../modals/index";

export const handleCategory = (data) => {
  return {
    type: Types.HANDLE_CATEGORY,
    data,
  };
};

export const searchCategoryRequest = (data, headers) => {
  return async (dispatch) => {
    const { table, keyword } = data;
    const result1 = await api(
      `${table}All/search/?keyword=${keyword}`,
      "GET",
      null,
      headers
    );
    const result2 = await api(
      `${table}/search/?keyword=${keyword}&offset=${0}&limit=${10}`,
      "GET",
      null,
      headers
    );
    dispatch(loadListCategory(result2.data, result1.data.length));
  };
};

export const loadListCategory = (list, length) => {
  return {
    type: Types.LOAD_LIST_CATEGORY,
    list,
    length,
  };
};

export const loadListCategoryRequest = (data, params, status, headers) => {
  return async (dispatch) => {
    const result1 = await api(
      `${data}${params ? params.limit : ""}`,
      "GET",
      null,
      headers
    );
    const result2 = await api(
      `${data}All${params ? params.full : ""}`,
      "GET",
      null,
      headers
    );
    dispatch(
      loadListCategory(
        result1.data,
        status ? result2.data : result2.data.length
      )
    );
  };
};

export const loadListCategoryConnectRequest = (
  data,
  params,
  status,
  filterData,
  headers
) => {
  return async (dispatch) => {
    const { filters, sorter, search } = filterData;
    let stringQuery = "";
    if (filters.length > 0)
      filters.forEach((element) => {
        stringQuery += "&" + element.query;
      });
    if (sorter) stringQuery += `&${sorter.query}`;
    if (search) stringQuery += `&keyword=${search}`;
    const result1 = await api(
      `${data}${params ? params.limit : ""}${stringQuery}`,
      "GET",
      null,
      headers
    );
    const result2 = await api(
      `${data}All${params ? params.full : ""}${stringQuery}`,
      "GET",
      null,
      headers
    );
    dispatch(
      loadListCategory(
        result1.data,
        status ? result2.data : result2.data.length
      )
    );
  };
};

export const resetCategory = () => {
  return {
    type: Types.RESET_CATEGORY,
  };
};

export const loadPaginationRequest = (data, headers) => {
  return async (dispatch) => {
    const result = await api(
      `${data.table}s/${data.index * 10}/10`,
      "GET",
      null,
      headers
    );
    dispatch(loadPagination(result.data, data.index));
    document.getElementById("contentRight").scrollTo(0, 0);
  };
};

export const loadPaginationModalRequest = (data, headers) => {
  return async (dispatch) => {
    const { table, filters, sorter, index, search } = data;
    let stringQuery = "";
    if (filters.length > 0)
      filters.forEach((element) => {
        stringQuery += "&" + element.query;
      });
    if (sorter) stringQuery += `&${sorter.query}`;
    if (search) stringQuery += `&keyword=${search}`;
    const result = await filterApi.filters(
      table,
      `?${table}Type=0${stringQuery}&offset=${index}&limit=10`,
      false,
      headers
    );
    dispatch(loadPagination(result.data, data.index));
    document.getElementById("contentRight").scrollTo(0, 0);
  };
};

export const loadPagination = (list, index) => {
  return {
    type: Types.LOAD_PAGINATION,
    list,
    index,
  };
};

export const addItemChoose = (item) => {
  return {
    type: Types.ADD_ITEM_CHOOSE,
    item,
  };
};

export const removeItemChoose = (item) => {
  return {
    type: Types.REMOVE_ITEM_CHOOSE,
    item,
  };
};

export const removeItemChooseAll = () => {
  return {
    type: Types.REMOVE_ITEM_CHOOSE_ALL,
  };
};

export const addItemChooseAll = () => {
  return {
    type: Types.ADD_ITEM_CHOOSE_ALL,
  };
};

export const deleteCategoryRequest = (list, table, data, headers) => {
  return async (dispatch) => {
    for (let index = 0; index < list.length; index++) {
      const element = list[index];
      await api(`${table}`, "DELETE", element, headers);
    }
    dispatch(removeItemChooseAll());
    if (data) {
      const { filters, sorter, search, status, params } = data;
      dispatch(
        loadListCategoryConnectRequest(
          table.slice(0, -1) + "Filters",
          params,
          status,
          {
            filters,
            sorter,
            search,
          },
          headers
        )
      );
    } else dispatch(loadListCategoryRequest(table, null, false, headers));
  };
};

export const addCategoryRequest = (
  obj,
  table,
  query,
  status,
  filters,
  headers
) => {
  return async (dispatch) => {
    await crudApi.addData(obj, status ? `${table}s` : table, headers);
    if (status)
      dispatch(
        loadListCategoryConnectRequest(
          `${table}Filters`,
          query,
          status,
          filters,
          headers
        )
      );
    dispatch(loadListCategoryRequest(table, query, status, headers));
  };
};

export const resetIndexCategory = () => {
  return {
    type: Types.RESET_INDEX_CATEGORY,
  };
};

export const updateStatusCategoryRequest = (data, headers) => {
  return async (dispatch) => {
    const { table, item, query, status, filterData } = data;
    await crudApi.updateCategory(
      table + "s",
      { id: item.id, value: item.data },
      item.column,
      headers
    );
    dispatch(
      loadListCategoryConnectRequest(
        table + "Filters",
        query,
        status,
        filterData,
        headers
      )
    );
    dispatch(modalsAction.closeModal());
  };
};

export const loadingCategory = (loading) => {
  return {
    type: Types.LOADING_CATEGORY,
    loading,
  };
};
