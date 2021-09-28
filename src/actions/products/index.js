import * as Types from "../../constants/ActionTypes";
import api from "../../Utils/api";

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

export const updateImageColorProductRequest = (mode, item, colors) => {
  return (dispatch) => {
    let clone = [...colors];
    if (mode === -1) clone = [...colors, { color: item, image: null }];
    else clone = clone.filter((dt) => dt.color.id !== item.id);
    dispatch(updateImageColor(clone));
  };
};

export const updateFileImageColorProductRequest = (file, item, colors) => {
  return (dispatch) => {
    let clone = [...colors];
    const index = clone.findIndex((dt) => dt.color.id === item.id);
    if (index !== -1) clone[index].image = file;
    dispatch(updateImageColor(clone));
  };
};

export const updateImageColor = (imageColor) => {
  return {
    type: Types.UPDATE_IMAGE_COLOR_PRODUCT,
    imageColor,
  };
};

export const loadInfoEditLineProductRequest = (idLineProduct) => {
  return async (dispatch) => {
    const lineProduct = await api(`lineProducts/${idLineProduct}`, "GET", null);
    let infoSimple = {
      lineProduct: lineProduct.data,
      categoryProduct: lineProduct.data.groupProduct.categoryGroupProduct,
      groupProduct: lineProduct.data.groupProduct,
      nameProduct: lineProduct.data.nameLineProduct,
      brand: lineProduct.data.brandProduct,
      dateInput: null,
      dateOutput: null,
      width: lineProduct.data.width,
      height: lineProduct.data.height,
      weight: lineProduct.data.weight,
    };
    let infoAttribute = null;
    const groupAttributes = await api(`groupAttributesAll`, "GET", null);
    groupAttributes.data.forEach(async (item) => {
      const data = await api(`attributeProducts/${item.id}`, "GET", null);
      infoAttribute[item.id] = {
        id: item.id,
        list: data.data,
      };
    });
    const featureData = await api(
      `grouFilterProducts/${idLineProduct}`,
      "GET",
      null
    );
    const images = await api(`imageOthers/${idLineProduct}`, "GET", null);
    let imageColor = [];
    dispatch(
      loadInfoEditLineProduct({
        infoSimple,
        infoAttribute,
        features: featureData.data,
        images: images.data,
        imageColor,
      })
    );
  };
};

export const loadInfoEditLineProduct = (data) => {
  return {
    type: Types.LOAD_INFO_EDIT_LINE_PRODUCT_REQUEST,
    data,
  };
};
