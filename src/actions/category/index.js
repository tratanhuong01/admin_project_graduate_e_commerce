import * as Types from "../../constants/ActionTypes";
import api from "../../Utils/api";

export const handleCategory = (data) => {
  return {
    type: Types.HANDLE_CATEGORY,
    data,
  };
};

export const loadListCategory = (list) => {
  return {
    type: Types.LOAD_LIST_CATEGORY,
    list,
  };
};

export const loadListCategoryRequest = (data) => {
  return async (dispatch) => {
    const result = await api(`${data}`, "GET", null);
    dispatch(loadListCategory(result.data));
  };
};

export const resetCategory = () => {
  return {
    type: Types.RESET_CATEGORY,
  };
};
