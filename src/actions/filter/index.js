import * as Types from "../../constants/ActionTypes";

export const addFilterCategoryRequest = (data) => {
  return async (dispatch) => {
    const { filters, item } = data;
    const index = filters.findIndex((dt) => dt.idFilter === item.idFilter);

    if (index === -1) dispatch(updateFilterCategory([...filters, item]));
    else {
      let clone = filters.filter((dt) => dt.idFilter !== item.idFilter);
      dispatch(updateFilterCategory([...clone, item]));
    }
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
    const { filters, item } = data;
    const clone = filters.filter((dt) => dt.id !== item.id);
    dispatch(updateFilterCategory(clone));
  };
};
