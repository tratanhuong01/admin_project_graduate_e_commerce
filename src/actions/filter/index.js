import * as Types from "../../constants/ActionTypes";
import * as categorysAction from "../category/index";
import * as filterApi from "../../api/filterApi";

export const addFilterCategoryRequest = (data, headers) => {
  return async (dispatch) => {
    dispatch({ type: Types.LOADING_CATEGORY, loading: true });
    const { filters, item, table, sorter, params, mainFilters } = data;
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
    stringQuery += `&timeCreatedFrom=${mainFilters.dateFrom}&timeCreatedTo=${mainFilters.dateTo}`
    try {
      const result_2 = await filterApi.filters(
        table,
        `?${params ? params.type : ""}${stringQuery}`,
        true,
        headers
      );
      const result_1 = await filterApi.filters(
        table,
        `?${params ? params.type : ""}${stringQuery}&offset=${0}&limit=10`,
        false,
        headers
      );
      dispatch(categorysAction.loadListCategory(result_1.data, result_2.data));
      dispatch(updateFilterCategory(clone));
      dispatch({ type: Types.LOADING_CATEGORY, loading: false });
    } catch (error) {
      throw error;
    }
  };
};

export const updateFilterCategory = (data) => {
  return {
    type: Types.UPDATE_FILTER_CATEGORY,
    data,
  };
};

export const removeFilterCategoryRequest = (data, headers) => {
  return async (dispatch) => {
    dispatch({ type: Types.LOADING_CATEGORY, loading: true });
    const { filters, item, table, sorter, index, params, mainFilters } = data;
    const clone = filters.filter((dt) => dt.id !== item.id);
    let stringQuery = "";
    if (clone.length > 0)
      clone.forEach((element) => {
        stringQuery += "&" + element.query;
      });
    if (sorter) stringQuery += `&${sorter.query}`;
    stringQuery += `&timeCreatedFrom=${mainFilters.dateFrom}&timeCreatedTo=${mainFilters.dateTo}`
    try {
      const result_2 = await filterApi.filters(
        table,
        `?${params ? params.type : ""}${stringQuery}`,
        true,
        headers
      );
      const result_1 = await filterApi.filters(
        table,
        `?${params ? params.type : ""}${stringQuery}&offset=${index}&limit=10`,
        false,
        headers
      );

      dispatch(categorysAction.loadListCategory(result_1.data, result_2.data));
      dispatch(updateFilterCategory(clone));
      dispatch({ type: Types.LOADING_CATEGORY, loading: false });
    } catch (error) {
      throw error;
    }
  };
};

export const resetFiltersAllRequest = (data, headers) => {
  return async (dispatch) => {
    dispatch({ type: Types.LOADING_CATEGORY, loading: true });
    const { table, index, params } = data;
    try {
      const result_1 = await filterApi.filters(
        table,
        `${params ? params.type : ""}?&offset=${index}&limit=10`,
        false,
        headers
      );
      const result_2 = await filterApi.filters(
        table,
        `?${params ? params.type : ""}`,
        false,
        headers
      );
      dispatch(categorysAction.loadListCategory(result_1.data, result_2.data));
      dispatch(updateFilterCategory([]));
      dispatch({ type: Types.LOADING_CATEGORY, loading: false });
    } catch (error) {
      throw error;
    }
  };
};

export const addSorterCategoryRequest = (data, headers) => {
  return async (dispatch) => {
    dispatch({ type: Types.LOADING_CATEGORY, loading: true });
    const { filters, item, table, index, params, mainFilters } = data;
    let stringQuery = "";
    if (filters.length > 0)
      filters.forEach((element) => {
        stringQuery += "&" + element.query;
      });
    stringQuery += `&timeCreatedFrom=${mainFilters.dateFrom}&timeCreatedTo=${mainFilters.dateTo}`
    try {
      const result_1 = await filterApi.filters(
        table,
        `?${params ? params.type : ""}${stringQuery}&${item.query
        }&offset=${index}&limit=10`,
        false,
        headers
      );
      const result_2 = await filterApi.filters(
        table,
        `?${params ? params.type : ""}${stringQuery}&${item.query}`,
        true,
        headers
      );
      dispatch(categorysAction.loadListCategory(result_1.data, result_2.data));
      dispatch(updateSorterCategory(item));
      dispatch({ type: Types.LOADING_CATEGORY, loading: false });
    } catch (error) {
      throw error;
    }
  };
};

export const removeSorterCategoryRequest = (data, headers) => {
  return async (dispatch) => {
    dispatch({ type: Types.LOADING_CATEGORY, loading: true });
    const { filters, table, index, params, mainFilters } = data;
    let stringQuery = "";
    if (filters.length > 0)
      filters.forEach((element) => {
        stringQuery += "&" + element.query;
      });
    stringQuery += `&timeCreatedFrom=${mainFilters.dateFrom}&timeCreatedTo=${mainFilters.dateTo}`
    try {
      const result_1 = await filterApi.filters(
        table,
        `?${params ? params.type : ""}${stringQuery}&offset=${index}&limit=10`,
        false,
        headers
      );
      const result_2 = await filterApi.filters(
        table,
        `?${params ? params.type : ""}${stringQuery}`,
        true,
        headers
      );
      dispatch(categorysAction.loadListCategory(result_1.data, result_2.data));
      dispatch(updateSorterCategory(null));
      dispatch({ type: Types.LOADING_CATEGORY, loading: false });
    } catch (error) {
      throw error;
    }
  };
};

export const searchCategoryRequest = (data, headers) => {
  return async (dispatch) => {
    const { filters, sorter, table, keyword, index, params, mainFilters } = data;
    let stringQuery = "";
    if (filters.length > 0)
      filters.forEach((element) => {
        stringQuery += "&" + element.query;
      });
    if (sorter) stringQuery += `&${sorter.query}`;
    stringQuery += `&timeCreatedFrom=${mainFilters.dateFrom}&timeCreatedTo=${mainFilters.dateTo}`
    try {
      const result_1 = await filterApi.filters(
        table,
        `?${params ? params.type : ""
        }${stringQuery}&keyword=${keyword}&offset=${index}&limit=10`,
        false,
        headers
      );
      const result_2 = await filterApi.filters(
        table,
        `?${params ? params.type : ""}${stringQuery}&keyword=${keyword}`,
        true,
        headers
      );
      dispatch(categorysAction.loadListCategory(result_1.data, result_2.data));
      dispatch(updateSearchCategory(keyword));
      dispatch({ type: Types.LOADING_CATEGORY, loading: false });
    } catch (error) {
      throw error;
    }
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

export const updateDateCategory = (dateFrom, dateTo) => {
  return {
    type: Types.UPDATE_DATE_CATEGORY,
    dateFrom,
    dateTo
  }
}