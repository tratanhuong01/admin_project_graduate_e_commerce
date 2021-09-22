import * as Types from "../constants/ActionTypes";

const initialState = {
  choose: [],
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.UPDATE_FILTER_CATEGORY:
      state.choose = action.data;
      return { ...state };
    default:
      return state;
  }
};
export default myReducer;
