import * as Types from "../../constants/ActionTypes";

export const updateTabs = (tabs) => {
  return {
    type: Types.UPDATE_TABS,
    tabs,
  };
};

export const updateIndexTabs = (index) => {
  return {
    type: Types.UPDATE_INDEX_TABS,
    index,
  };
};
