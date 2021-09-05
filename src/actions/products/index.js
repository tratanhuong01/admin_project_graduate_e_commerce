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

export const loadFeaturesProduct = (data) => {
  return {
    type: Types.LOAD_FEATURE_PRODUCT,
    data,
  };
};

export const addFeaturesProductRequest = (data) => {
  return (dispatch) => {
    const { choose, item } = data;
    const list = data.list.filter((dt) => dt.id !== item.id);
    dispatch(
      addFeaturesProduct({
        choose: [...choose, item],
        listCurrent: list,
        list,
      })
    );
  };
};

export const addFeaturesProduct = (data) => {
  return {
    type: Types.ADD_FEATURE_PRODUCT,
    data,
  };
};

export const removeFeaturesProductRequest = (data) => {
  return (dispatch) => {
    const { list, item } = data;
    const choose = data.choose.filter((dt) => dt.id !== item.id);
    dispatch(
      removeFeaturesProduct({
        choose,
        listCurrent: [...list, item],
        list: [...list, item],
      })
    );
  };
};

export const removeFeaturesProduct = (data) => {
  return {
    type: Types.REMOVE_FEATURE_PRODUCT,
    data,
  };
};

export const loadFeaturesProductCurrent = (listCurrent) => {
  return {
    type: Types.LOAD_FEATURE_PRODUCT_CURRENT,
    listCurrent,
  };
};

export const loadDescriptionProduct = (data) => {
  return {
    type: Types.LOAD_DESCRIPTION_PRODUCT,
    data,
  };
};

export const loadSwitchAddProduct = (data) => {
  return {
    type: Types.LOAD_SWITCH_ADD_PRODUCT,
    data,
  };
};
