import React from "react";
import Dashboard from "../components/Index/IndexRight/Category/Dashboard/Dashboard";
import * as Types from "../constants/ActionTypes";
import Category from "../components/Index/IndexRight/Category/Category";

const initialState = {
  data: <Dashboard />,
  loading: true,
  list: null,
  length: 0,
  index: 0,
  choose: [],
};

const myReducer = (state = initialState, action) => {
  let index = -1;
  switch (action.type) {
    case Types.HANDLE_DASHBOARD:
      state.data = <Dashboard />;
      state.loading = true;
      return { ...state };
    case Types.RESET_CATEGORY:
      state.list = null;
      state.data = null;
      return { ...state };
    case Types.HANDLE_CATEGORY:
      if (action.data.type === "dashboard") state.data = <Dashboard />;
      else state.data = <Category data={action.data} />;
      state.loading = true;
      return { ...state };
    case Types.LOAD_LIST_CATEGORY:
      state.length = action.length;
      state.list = action.list;
      state.index = 0;
      return { ...state };
    case Types.LOAD_PAGINATION:
      state.index = action.index;
      state.list = action.list;
      return { ...state };
    case Types.ADD_ITEM_CHOOSE:
      state.choose = [...state.choose, action.item];
      return { ...state };
    case Types.REMOVE_ITEM_CHOOSE:
      index = state.choose.findIndex((item) => item.id === action.item.id);
      let items = [...state.choose];
      if (index !== -1) {
        items.splice(index, 1);
        state.choose = items;
      }
      return { ...state };
    default:
      return state;
  }
};
export default myReducer;
