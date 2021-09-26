import * as Types from "../../constants/ActionTypes";

export const closeModal = () => {
  return {
    type: Types.CLOSE_MODAL,
  };
};

export const openModalAdd = (table) => {
  return {
    type: Types.OPEN_MODAL_ADD,
    table,
  };
};

export const openModalEdit = (table, data) => {
  return {
    type: Types.OPEN_MODAL_EDIT,
    table,
    data,
  };
};

export const openModalUpdateStatusCategory = (data) => {
  return {
    type: Types.OPEN_MODAL_UPDATE_STATUS_CATEGORY,
    data,
  };
};

export const openModalNews = (newData) => {
  return {
    type: Types.OPEN_MODAL_NEWS,
    newData,
  };
};
