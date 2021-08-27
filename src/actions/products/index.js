import * as Types from "../../constants/ActionTypes";

export const loadCategoryProductByIndex = (index) => {
  return {
    type: Types.LOAD_CATEGORY_PRODUCT_BY_INDEX,
    index,
  };
};

export const loadInfoAttributeData = (data) => {
  return {
    type: Types.LOAD_INFO_ATTRIBUTE_DATA,
    data,
  };
};
