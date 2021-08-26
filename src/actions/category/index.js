import * as Types from "../../constants/ActionTypes";
import api from "../../Utils/api";

export const handleCategory = (data) => {
  return {
    type: Types.HANDLE_CATEGORY,
    data,
  };
};

export const loadListCategory = (list, length) => {
  return {
    type: Types.LOAD_LIST_CATEGORY,
    list,
    length,
  };
};

export const loadListCategoryRequest = (data) => {
  return async (dispatch) => {
    const result1 = await api(`${data}`, "GET", null);
    const result2 = await api(`${data}All`, "GET", null);
    dispatch(loadListCategory(result1.data, result2.data.length));
  };
};

export const resetCategory = () => {
  return {
    type: Types.RESET_CATEGORY,
  };
};

export const loadPaginationRequest = (data) => {
  return async (dispatch) => {
    const result = await api(
      `${data.table}s/${data.index * 10}/10`,
      "GET",
      null
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
