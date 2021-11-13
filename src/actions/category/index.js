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
    try {
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
    } catch (error) {
      throw error;
    }
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
    try {
      const result1 = await api(
        `${data}${params ? params.limit : ""}`,
        "GET",
        null,
        Object.assign(headers, {
          "Content-Type": "application/json",
        })
      );
      const result2 = await api(
        `${data}All${params ? params.full : ""}`,
        "GET",
        null,
        Object.assign(headers, {
          "Content-Type": "application/json",
        })
      );
      dispatch(
        loadListCategory(
          result1.data,
          status ? result2.data : result2.data.length
        )
      );
    } catch (error) {
      throw error;
    }
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
    try {
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
    } catch (error) {
      throw error;
    }
  };
};

export const resetCategory = () => {
  return {
    type: Types.RESET_CATEGORY,
  };
};

export const loadPaginationRequest = (data, headers) => {
  return async (dispatch) => {
    try {
      const result = await api(
        `${data.table}s/${data.index * 10}/10`,
        "GET",
        null,
        headers
      );
      dispatch(loadPagination(result.data, data.index));
      document.getElementById("contentRight").scrollTo(0, 0);
    } catch (error) {
      throw error;
    }
  };
};

export const loadPaginationModalRequest = (data, headers) => {
  return async (dispatch) => {
    const { table, filters, sorter, index, search, params } = data;
    let stringQuery = "";
    if (filters.length > 0)
      filters.forEach((element) => {
        stringQuery += "&" + element.query;
      });
    if (sorter) stringQuery += `&${sorter.query}`;
    if (search) stringQuery += `&keyword=${search}`;
    try {
      const result = await filterApi.filters(
        table,
        `?${params ? params.type : ""}${stringQuery}&offset=${index}&limit=10`,
        false,
        headers
      );
      dispatch(loadPagination(result.data, data.index));
      document.getElementById("contentRight").scrollTo(0, 0);
    } catch (error) {
      throw error;
    }
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
      try {
        await api(`${table}`, "DELETE", element, headers);
      } catch (error) {
        throw error;
      }
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
            params,
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
  headers,
  funcOther
) => {
  return async (dispatch) => {
    try {
      const result = await crudApi.addData(
        obj,
        status ? `${table}s` : table,
        headers
      );
      if (status) {
        dispatch(
          loadListCategoryConnectRequest(
            `${table}Filters`,
            query,
            status,
            filters,
            Object.assign(headers, {
              "Content-Type": "application/json",
            })
          )
        );
      } else
        dispatch(
          loadListCategoryRequest(
            table,
            query,
            status,
            Object.assign(headers, {
              "Content-Type": "application/json",
            })
          )
        );
      console.log(funcOther);
      if (funcOther) {
        funcOther(result.data.id, obj, headers);
      }
    } catch (error) {
      throw error;
    }
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
    try {
      await crudApi.updateCategory(
        table + "s",
        { id: item.id, value: item.data },
        item.column,
        headers
      );
    } catch (error) {
      throw error;
    }
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

export const setIndexCategory = (index) => {
  return {
    type: Types.SET_INDEX_CATEGORY,
    index,
  };
};
