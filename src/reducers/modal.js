import React from "react";
import ModalProduct from "../components/Modals/ModalProduct/ModalProduct";
import * as Types from "../constants/ActionTypes";

const initialState = {
  data: null,
  loading: false,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.CLOSE_MODAL:
      state.data = null;
      state.loading = false;
      return { ...state };
    case Types.OPEN_MODAL_ADD:
      switch (action.table) {
        case "product":
          state.data = <ModalProduct data={null} />;
          break;
        default:
          break;
      }
      return { ...state };
    case Types.OPEN_MODAL_EDIT:
      switch (action.table) {
        case "product":
          state.data = <ModalProduct data={action.data} />;
          break;
        default:
          break;
      }
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
