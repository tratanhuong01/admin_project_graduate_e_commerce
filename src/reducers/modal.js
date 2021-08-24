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

    default:
      return state;
  }
};

export default myReducer;
