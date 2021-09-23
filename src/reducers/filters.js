import * as Types from "../constants/ActionTypes";

const initialState = {
  choose: [],
  sorter: null,
  search: "",
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.UPDATE_FILTER_CATEGORY:
      state.choose = action.data;
      return { ...state };
    case Types.UPDATE_SORTER_CATEGORY:
      state.sorter = action.sorter;
      return { ...state };
    case Types.UPDATE_SEARCH_CATEGORY:
      state.keyword = action.keyword;
      return { ...state };
    default:
      return state;
  }
};
export default myReducer;
