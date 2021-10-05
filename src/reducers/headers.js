import * as Types from "../constants/ActionTypes";

let initialState = {};

if (localStorage && localStorage.getItem("adminToken"))
  initialState = { Authorization: localStorage.getItem("adminToken") };

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    //
    case Types.UPDATE_HEADERS:
      state = { Authorization: action.headers };
      return { ...state };
    default:
      return state;
  }
};
export default myReducer;
