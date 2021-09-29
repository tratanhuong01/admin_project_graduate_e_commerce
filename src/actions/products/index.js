import { convertFromRaw, EditorState } from "draft-js";
import * as Types from "../../constants/ActionTypes";
import api from "../../Utils/api";
import htmlToDraft from "html-to-draft";

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

export const loadInfoImageMainProductRequest = (data) => {
  return async (dispatch) => {
    const { lineProduct, color } = data;
    const result = await api(
      `images/lineProduct/color/?idLineProduct=${lineProduct.id}&idColor=${color.id}`,
      "GET",
      null
    );
    dispatch(loadInfoImageMainProduct(result.data, color));
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

export const loadFeaturesProductRequest = (products, table) => {
  return async (dispatch) => {
    const result = await api(
      `${table}/${products.infoSimple.groupProduct.slugGroupProduct}`,
      "GET",
      null
    );
    let clone = [...result.data];
    products.features.choose.forEach((dt) => {
      const index = clone.findIndex((dt_) => dt_.id === dt.id);
      if (index !== -1) clone.splice(index, 1);
    });
    dispatch(
      loadFeaturesProduct({
        choose: products.features.choose,
        listCurrent: clone,
        list: clone,
      })
    );
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
    let infoAttribute = {};
    const groupAttributes = await api(`groupAttributesAll`, "GET", null);
    groupAttributes.data.forEach(async (item) => {
      const data = await api(
        `attributeProducts/?idLineProduct=${idLineProduct}&idGroupAttribute=${item.id}`,
        "GET",
        null
      );
      let list = [];
      data.data.forEach((dt) => {
        list.push({
          data: dt.attributeProduct,
          value: dt.valueAttributeProduct,
        });
      });
      infoAttribute[item.id] = {
        id: item.id,
        list,
      };
    });
    let features = [];
    const featureData = await api(
      `detailFunctionProducts/${idLineProduct}`,
      "GET",
      null
    );
    featureData.data.forEach((element) => {
      features.push(element.functionProductDetail);
    });
    const images = await api(`imageOthers/${idLineProduct}`, "GET", null);
    let imageColor = [];
    const imageColorData = await api(
      `images/lineProduct/?idLineProduct=${idLineProduct}`,
      "GET",
      null
    );
    imageColorData.data.forEach((dt) => {
      imageColor.push({
        color: dt.colorProduct,
        image: dt,
      });
    });
    dispatch(
      loadInfoEditLineProduct({
        infoSimple,
        infoAttribute,
        features,
        images: images.data,
        imageColor,
        descriptions: EditorState.createWithContent(
          convertFromRaw(
            htmlToDraft(
              lineProduct.data.describeProduct
                ? lineProduct.data.describeProduct
                : "<p></p>"
            )
          )
        ),
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

export const resetDataProductState = () => {
  return {
    type: Types.RESET_DATA_PRODUCT_STATE,
  };
};
