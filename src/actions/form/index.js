import * as Types from "../../constants/ActionTypes";

export const openFormAdd = (table) => {
  return {
    type: Types.OPEN_FORM_ADD,
    table,
  };
};

export const openFormEdit = (table, data) => {
  return {
    type: Types.OPEN_FORM_EDIT,
    table,
    data,
  };
};

export const setLoadingForm = (loading) => {
  return {
    type: Types.SET_LOADING_FORM,
    loading,
  };
};
