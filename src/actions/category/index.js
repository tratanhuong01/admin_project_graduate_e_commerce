import * as Types from "../../constants/ActionTypes";

export const handleCategory = (data) => {
  return {
    type: Types.HANDLE_CATEGORY,
    data,
  };
};
