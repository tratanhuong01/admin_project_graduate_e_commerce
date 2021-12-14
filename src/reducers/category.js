import React from "react";
import Dashboard from "../components/Index/IndexRight/Category/Dashboard/Dashboard";
import * as Types from "../constants/ActionTypes";
import Category from "../components/Index/IndexRight/Category/Category";
import SupportLiveScreen from "../screens/SupportLiveScreen/SupportLiveScreen";
import ConfigScreen from "../screens/ConfigScreen/ConfigScreen";

const initialState = {
  data: <Dashboard />,
  loading: true,
  list: null,
  length: 0,
  index: 0,
  choose: [],
  loadingNotModal: false,
};

const myReducer = (state = initialState, action) => {
  let index = 0;
  switch (action.type) {
    case Types.HANDLE_DASHBOARD:
      state.data = <Dashboard />;
      state.loading = true;
      return { ...state };
    case Types.RESET_CATEGORY:
      state.list = null;
      state.data = null;
      state.choose = [];
      state.index = 0;
      return { ...state };
    case Types.HANDLE_CATEGORY:
      switch (action.data.type) {
        case "dashboard":
          state.data = <Dashboard />;
          break;
        case "support":
          state.data = <SupportLiveScreen />;
          break;
        case "config":
          state.data = <ConfigScreen />;
          break;
        default:
          state.data = <Category data={action.data} />;
          break;
      }
      // state.loading = true;
      return { ...state };
    case Types.LOAD_LIST_CATEGORY:
      state.length = action.length;
      state.list = action.list;
      state.loading = false;
      return { ...state };
    case Types.LOAD_PAGINATION:
      state.index = action.index;
      state.list = action.list;
      return { ...state };
    case Types.ADD_ITEM_CHOOSE:
      state.choose = [...state.choose, action.item];
      // state.index = 0;
      return { ...state };
    case Types.REMOVE_ITEM_CHOOSE:
      index = state.choose.findIndex((item) => item.id === action.item.id);
      let items = [...state.choose];
      if (index !== -1) {
        items.splice(index, 1);
        state.choose = items;
      }
      state.index = 0;
      return { ...state };
    case Types.REMOVE_ITEM_CHOOSE_ALL:
      state.choose = [];
      // state.index = 0;
      return { ...state };
    case Types.ADD_ITEM_CHOOSE_ALL:
      state.choose = state.list;
      return { ...state };
    case Types.RESET_INDEX_CATEGORY:
      state.index = 0;
      return { ...state };
    case Types.SET_INDEX_CATEGORY:
      state.index = action.index;
      return { ...state };
    case Types.LOADING_CATEGORY:
      state.loading = action.loading;
      return { ...state };
    case Types.LOADING_NOT_MODAL:
      state.loadingNotModal = action.loading;
      return { ...state };
    default:
      return state;
  }
};
export default myReducer;
