import { convertFromRaw, EditorState } from "draft-js";
import * as Types from "../../constants/ActionTypes";
import api from "../../Utils/api";
import htmlToDraft from "html-to-draft";
import { v4 as uuidv4 } from "uuid";
import * as productApi from "../../api/productsApi";

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

export const loadInfoImageMainProductRequest = (data, headers) => {
  return async (dispatch) => {
    const { lineProduct, color } = data;
    const result = await api(
      `images/lineProduct/color/?idLineProduct=${lineProduct.id}&idColor=${color.id}`,
      "GET",
      null,
      headers
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

export const loadInfoMainProductDataFullRequest = (state) => {
  return (dispatch) => {
    if (state.infoMain.lists.length > 0)
      if (state.infoMain.lists[0].id === -1) state.infoMain.lists = [];
    if (state.infoMain.colors.length > 0 && state.infoMain.roms.length > 0) {
      state.infoMain.colors.forEach((color) => {
        state.infoMain.roms.forEach((rom) => {
          let index = state.infoMain.lists.findIndex((item) => {
            if (item.color.id && item.rom.id)
              return item.color.id === color.id && item.rom.id === rom.id;
            else return item.color.id === color.id || item.rom.id === rom.id;
          });
          if (index === -1)
            state.infoMain.lists = [
              ...state.infoMain.lists,
              {
                id: uuidv4(),
                nameProduct: `${state.infoMain.lineProduct.nameLineProduct} ${
                  state.infoMain.ram ? state.infoMain.ram.nameRam + "/" : ""
                } ${rom.nameMemory} màu ${color.description.toLowerCase()}`,
                priceInput: 0,
                priceOutput: 0,
                sale: 0,
                amountInput: 0,
                amountOutput: 0,
                color: color,
                rom: rom,
                ram: state.infoMain.ram,
                saleDefault: 0,
                timeStartSale: null,
                timeEndSale: null,
              },
            ];
          else {
            state.infoMain.lists[index].nameProduct = `${
              state.infoMain.lineProduct.nameLineProduct
            } ${state.infoMain.ram ? state.infoMain.ram.nameRam + "/" : ""} ${
              rom.nameMemory
            } màu ${color.description.toLowerCase()}`;
            state.infoMain.lists[index].rom = rom;
            state.infoMain.lists[index].color = color;
          }
        });
      });
    } else if (
      state.infoMain.colors.length > 0 &&
      state.infoMain.roms.length <= 0
    ) {
      state.infoMain.colors.forEach((color) => {
        const index = state.infoMain.lists.findIndex(
          (item) => item.color.id === color.id
        );
        if (index === -1)
          state.infoMain.lists = [
            ...state.infoMain.lists,
            {
              id: uuidv4(),
              nameProduct: `${
                state.infoMain.lineProduct.nameLineProduct
              } màu ${color.description.toLowerCase()}`,
              amountInput: 0,
              amountOutput: 0,
              priceInput: 0,
              priceOutput: 0,
              sale: 0,
              color: color,
              rom: { id: null },
              ram: state.infoMain.ram,
              saleDefault: 0,
              timeStartSale: null,
              timeEndSale: null,
            },
          ];
        else {
          state.infoMain.lists[index].nameProduct = `${
            state.infoMain.lineProduct.nameLineProduct
          }  màu ${color.description.toLowerCase()}`;
        }
      });
    } else if (
      state.infoMain.colors.length <= 0 &&
      state.infoMain.roms.length > 0
    ) {
      state.infoMain.roms.forEach((rom) => {
        const index = state.infoMain.lists.findIndex(
          (item) => item.rom.id === rom.id
        );

        if (index === -1)
          state.infoMain.lists = [
            ...state.infoMain.lists,
            {
              id: uuidv4(),
              nameProduct: `${state.infoMain.lineProduct.nameLineProduct} ${
                state.infoMain.ram ? state.infoMain.ram.nameRam + "/" : ""
              } ${rom.nameMemory}`,
              amountInput: 0,
              amountOutput: 0,
              sale: 0,
              color: { id: "" },
              rom: rom,
              ram: state.infoMain.ram,
              saleDefault: 0,
              timeStartSale: null,
              timeEndSale: null,
            },
          ];
        else {
          state.infoMain.lists[index].nameProduct = `${
            state.infoMain.lineProduct.nameLineProduct
          } ${state.infoMain.ram ? state.infoMain.ram.nameRam + "/" : ""} ${
            rom.nameMemory
          }`;
        }
      });
    } else {
      state.infoMain.lists.push({
        id: "",
        nameProduct: `${state.infoMain.lineProduct.nameLineProduct}`,
        amountInput: 0,
        amountOutput: 0,
        priceInput: 0,
        priceOutput: 0,
        sale: 0,
        saleDefault: 0,
        timeStartSale: null,
        timeEndSale: null,
      });
    }
    dispatch(loadInfoMainProductDataFull(state.infoMain));
  };
};

export const loadInfoMainProductDataFull = (infoMain) => {
  return {
    type: Types.LOAD_INFO_MAIN_PRODUCT_DATA_FULL,
    infoMain,
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

export const loadFeaturesProductRequest = (products, table, headers) => {
  return async (dispatch) => {
    const result = await api(
      `${table}/${products.infoSimple.groupProduct.slugGroupProduct}`,
      "GET",
      null,
      headers
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

export const loadInfoEditLineProductRequest = (idLineProduct, headers) => {
  return async (dispatch) => {
    const lineProduct = await api(
      `lineProducts/${idLineProduct}`,
      "GET",
      null,
      headers
    );
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
    const groupAttributes = await api(
      `groupAttributesAll`,
      "GET",
      null,
      headers
    );
    groupAttributes.data.forEach(async (item) => {
      const data = await api(
        `attributeProducts/?idLineProduct=${idLineProduct}&idGroupAttribute=${item.id}`,
        "GET",
        null,
        headers
      );
      let list = [];
      data.data.forEach((dt) => {
        list.push({
          id: dt.id,
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
      null,
      headers
    );
    featureData.data.forEach((element) => {
      features.push({
        ...element.functionProductDetail,
        idDetailFunctionProduct: element.id,
      });
    });
    const images = await api(
      `imageOthers/${idLineProduct}`,
      "GET",
      null,
      headers
    );
    let imageColor = [];
    const imageColorData = await api(
      `images/lineProduct/?idLineProduct=${idLineProduct}`,
      "GET",
      null,
      headers
    );
    imageColorData.data.forEach((dt) => {
      imageColor.push({
        color: dt.colorProduct,
        image: dt,
      });
    });
    const listData = {
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
    };
    dispatch(loadInfoEditLineProduct(listData));
  };
};

export const loadInfoEditProductInfoRequest = (idProduct, headers) => {
  return async (dispatch) => {
    const result = await productApi.getCombineProductInfoProduct(
      idProduct,
      headers
    );
    dispatch(
      loadInfoEditLineProduct(
        {
          lineProduct: result.data.product.lineProduct,
          image: result.data.product.imageProduct,
          ram: result.data.product.ramProduct,
          rom: result.data.product.memoryProduct,
          color: result.data.product.imageProduct.colorProduct,
          sale: result.data.infoProduct.sale,
          priceInput: result.data.infoProduct.priceInput,
          priceOutput: result.data.infoProduct.priceOutput,
          amountInput: 0,
          saleDefault: result.data.infoProduct.saleDefault,
          timeStartSale: result.data.infoProduct.timeStartSale,
          timeEndSale: result.data.infoProduct.timeEndSale,
          data: result.data,
        },
        true
      )
    );
  };
};

export const loadInfoEditLineProduct = (data, mode) => {
  return {
    type: Types.LOAD_INFO_EDIT_LINE_PRODUCT_REQUEST,
    data,
    mode,
  };
};

export const resetDataProductState = () => {
  return {
    type: Types.RESET_DATA_PRODUCT_STATE,
  };
};

export const updateInfoMainEdit = (data, index) => {
  return {
    type: Types.UPDATE_INFO_MAIN_EDIT,
    index,
    data,
  };
};
