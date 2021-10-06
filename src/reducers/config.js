import * as Types from "../constants/ActionTypes";
import { v4 as uuidv4 } from "uuid";
import ContentTabDefault from "../components/ConfigScreen/ContentTabDefault/ContentTabDefault";

const initialState = {
  index: 0,
  tabs: [
    {
      id: uuidv4(),
      title: "Tab mới",
      isDefault: true,
      content: <ContentTabDefault />,
    },
  ],
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    //
    case Types.UPDATE_TABS:
      state.tabs = action.tabs;
      return { ...state };
    case Types.UPDATE_INDEX_TABS:
      state.index = action.index;
      return { ...state };
    default:
      return state;
  }
};
export default myReducer;
