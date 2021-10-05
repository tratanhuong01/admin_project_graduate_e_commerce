import * as Types from "../constants/ActionTypes";

const initialState = null;

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    //
    case Types.LOGIN_ACCOUNT:
      localStorage.setItem("adminToken", action.data.token);
      state = action.data.user;
      return { ...state };
    case Types.LOGOUT_ACCOUNT:
      localStorage.removeItem("adminToken");
      state = null;
      return { ...state };
    default:
      return state;
  }
};
export default myReducer;
