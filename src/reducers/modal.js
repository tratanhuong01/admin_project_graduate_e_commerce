import React from "react";
import ModalNews from "../components/Modals/ModalNews/ModalNews";
import ModalOrders from "../components/Modals/ModalOrders/ModalOrders";
import ModalProduct from "../components/Modals/ModalProduct/ModalProduct";
import ModalProductMain from "../components/Modals/ModalProductMain/ModalProductMain";
import ModalUpdateStatusCategory from "../components/Modals/ModalUpdateStatusCategory/ModalUpdateStatusCategory";
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
          state.data = <ModalProductMain data={null} />;
          break;
        case "lineProduct":
          state.data = <ModalProduct data={null} />;
          break;
        case "new":
          state.data = <ModalNews data={null} />;
          break;
        default:
          break;
      }
      return { ...state };
    case Types.OPEN_MODAL_EDIT:
      switch (action.table) {
        case "product":
          state.data = <ModalProductMain data={action.data} />;
          break;
        case "lineProduct":
          state.data = <ModalProduct data={action.data} />;
          break;
        case "new":
          state.data = <ModalNews data={action.data} />;
          break;
        case "bill":
          state.data = <ModalOrders data={action.data} />;
          break;
        default:
          break;
      }
      return { ...state };
    case Types.OPEN_MODAL_UPDATE_STATUS_CATEGORY:
      state.data = (
        <ModalUpdateStatusCategory
          data={action.data.data}
          itemCurrent={action.data.itemCurrent}
          table={action.data.table}
          id={action.data.id}
        />
      );
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
