import React from "react";
import ModalContact from "../components/Modals/ModalContact/ModalContact";
import ModalEmployee from "../components/Modals/ModalEmployee/ModalEmployee";
import ModalGiveVoucher from "../components/Modals/ModalGiveVoucher/ModalGiveVoucher";
import ModalNews from "../components/Modals/ModalNews/ModalNews";
import ModalOrders from "../components/Modals/ModalOrders/ModalOrders";
import ModalProduct from "../components/Modals/ModalProduct/ModalProduct";
import ModalProductMain from "../components/Modals/ModalProductMain/ModalProductMain";
import ModalUpdateStatusCategory from "../components/Modals/ModalUpdateStatusCategory/ModalUpdateStatusCategory";
import ModalVoucher from "../components/Modals/ModalVoucher/ModalVoucher";
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
        case "discountCode":
          state.data = <ModalVoucher data={null} />;
          break;
        case "user":
          state.data = <ModalEmployee data={null} />;
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
        case "discountCode":
          state.data = <ModalVoucher data={action.data} />;
          break;
        case "contact":
          state.data = <ModalContact data={action.data} />;
          break;
        case "user":
          state.data = <ModalEmployee data={action.data} />;
          break;
        default:
          break;
      }
      return { ...state };
    case Types.OPEN_MODAL_UPDATE_STATUS_CATEGORY:
      state.data = (
        <ModalUpdateStatusCategory
          dataMain={action.data}
          data={action.data.data}
          itemCurrent={action.data.itemCurrent}
          table={action.data.table}
          id={action.data.id}
        />
      );
      return { ...state };
    case Types.SET_LOADING_MODAL:
      state.loading = action.loading;
      return { ...state };
    case Types.OPEN_MODAL_GIVE_VOUCHER:
      state.data = <ModalGiveVoucher data={action.data} />
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
