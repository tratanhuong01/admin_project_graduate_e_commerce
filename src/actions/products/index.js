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

export const loadSimpleInfoProductData = (data, index) => {
  return {
    type: Types.LOAD_SIMPLE_INFO_PRODUCT_DATA,
    data,
    index,
  };
};

export const loadInfoMainProductByIndex = (index) => {
  return {
    type: Types.LOAD_INFO_MAIN_PRODUCT_BY_INDEX,
    index,
  };
};

export const loadInfoImageMainProduct = (file, data) => {
  return {
    type: Types.LOAD_INFO_IMAGE_MAIN_PRODUCT,
    file,
    data,
  };
};

export const loadInfoMainProductDataFull = () => {
  return {
    type: Types.LOAD_INFO_MAIN_PRODUCT_DATA_FULL,
  };
};

export const loadInfoMainProductData = (data, index) => {
  return {
    type: Types.LOAD_INFO_MAIN_PRODUCT_DATA,
    data,
    index,
  };
};

export const removeInfoMainProduct = (data, name) => {
  return {
    type: Types.REMOVE_INFO_MAIN_PRODUCT,
    data,
    name,
  };
};

export const changeToProductIsMultiRam = (bool) => {
  return {
    type: Types.CHANGE_TO_PRODUCT_IS_MULTI_RAM,
    bool,
  };
};

export const loadInfoMainPriceAmountSale = (data, index) => {
  return {
    type: Types.LOAD_INFO_MAIN_PRICE_AMOUNT_SALE,
    data,
    index,
  };
};

export const loadInfoMainImageOther = (list) => {
  return {
    type: Types.LOAD_INFO_MAIN_IMAGE_OTHER,
    list,
  };
};
