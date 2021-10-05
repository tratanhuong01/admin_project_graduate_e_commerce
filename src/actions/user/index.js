import * as Types from "../../constants/ActionTypes";
import * as userApi from "../../api/userApi";

export const loadInfoUserRequest = (headers) => {
  return async (dispatch) => {
    const result = await userApi.getUserFromJWT(headers);
    if (result.data) {
      dispatch(loginAccount(result.data));
      dispatch(updateHeaders(result.data.token));
    }
  };
};

export const loginAccountRequest = (data, headers) => {
  return async (dispatch) => {
    const result = await userApi.checkLoginJWT(data, headers);
    if (result.data) {
      dispatch(loginAccount(result.data));
      dispatch(updateHeaders(result.data.token));
    } else alert("Sai thông tin đăng nhập !!");
  };
};

export const loginAccount = (data) => {
  return {
    type: Types.LOGIN_ACCOUNT,
    data,
  };
};

export const logoutAccount = () => {
  return {
    type: Types.LOGOUT_ACCOUNT,
  };
};

export const updateHeaders = (headers) => {
  return {
    type: Types.UPDATE_HEADERS,
    headers,
  };
};
