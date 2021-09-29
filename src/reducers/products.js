import React from "react";
import AttributesProduct from "../components/Modals/ModalProduct/ModalProductRight/AttributesProduct/AttributesProduct";
import DescriptionsProduct from "../components/Modals/ModalProduct/ModalProductRight/DescriptionsProduct/DescriptionsProduct";
import ImagesProduct from "../components/Modals/ModalProduct/ModalProductRight/ImagesProduct/ImagesProduct";
import InfoSimple from "../components/Modals/ModalProduct/ModalProductRight/InfoSimple/InfoSimple";
// import MainInfoProduct from "../components/Modals/ModalProduct/ModalProductRight/MainInfoProduct/MainInfoProduct";
import * as Types from "../constants/ActionTypes";
import { v4 as uuidv4 } from "uuid";
import FeatureProduct from "../components/Modals/ModalProduct/ModalProductRight/FeatureProduct/FeatureProduct";
import ImageRespectiveProduct from "../components/Modals/ModalProduct/ImageRespectiveProduct/ImageRespectiveProduct";

const initialState = {
  data: <InfoSimple />,
  infoSimple: {
    categoryProduct: null,
    groupProduct: null,
    nameProduct: null,
    brand: null,
    dateInput: null,
    dateOutput: null,
    width: null,
    height: null,
    weight: null,
  },
  infoAttribute: null,
  infoMain: {
    lineProduct: null,
    colors: [],
    roms: [],
    ram: null,
    images: {},
    lists: [
      {
        id: -1,
        nameProduct: null,
        priceInput: 0,
        priceOutput: 0,
        sale: 0,
        amountInput: 0,
        amountOutput: 0,
        color: { id: null },
        rom: { id: null },
        ram: null,
      },
    ],
    index: 1,
    type: false,
  },
  features: {
    choose: [],
    listCurrent: [],
    list: [],
  },
  images: [],
  descriptions: null,
  loading: true,
  imageColor: [],
  index: 0,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOAD_CATEGORY_PRODUCT_BY_INDEX:
      state.index = action.index;
      switch (action.index) {
        case 0:
          state.data = <InfoSimple />;
          break;
        case 1:
          state.infoMain.lists[0].nameProduct = state.infoSimple.nameProduct;
          state.data = <ImageRespectiveProduct />;
          break;
        case 2:
          state.data = <ImagesProduct />;
          break;
        case 3:
          state.data = <AttributesProduct />;
          break;
        case 4:
          state.data = <FeatureProduct />;
          break;
        case 5:
          state.data = <DescriptionsProduct />;
          break;
        default:
          break;
      }
      state.loading = false;
      return { ...state };
    case Types.LOAD_INFO_ATTRIBUTE_DATA:
      state.infoAttribute = action.data;
      return { ...state };
    case Types.LOAD_SIMPLE_INFO_PRODUCT_DATA:
      switch (action.index) {
        case 0:
          state.infoSimple.categoryProduct = action.data;
          break;
        case 1:
          state.infoSimple.groupProduct = action.data;
          break;
        case 2:
          state.infoSimple.nameProduct = action.data;
          break;
        case 3:
          state.infoSimple.brand = action.data;
          break;
        case 4:
          state.infoSimple.dateInput = action.data;
          break;
        case 5:
          state.infoSimple.dateOutput = action.data;
          break;
        case 6:
          state.infoMain.lineProduct = action.data;
          break;
        case 7:
          state.infoSimple.width = action.data;
          break;
        case 8:
          state.infoSimple.height = action.data;
          break;
        case 9:
          state.infoSimple.weight = action.data;
          break;
        default:
          break;
      }
      return { ...state };
    case Types.LOAD_INFO_MAIN_PRODUCT_DATA:
      switch (action.index) {
        case 0:
          state.infoMain.colors = action.data;
          break;
        case 1:
          state.infoMain.roms = action.data;
          break;
        case 2:
          state.infoMain.ram = action.data;
          break;
        default:
          break;
      }
      return { ...state };
    case Types.LOAD_INFO_MAIN_PRODUCT_DATA_FULL:
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
                    state.infoMain.ram ? state.infoMain.ram.nameRam : ""
                  } ${rom.nameMemory} màu ${color.description.toLowerCase()}`,
                  priceInput: 0,
                  priceOutput: 0,
                  sale: 0,
                  amountInput: 0,
                  amountOutput: 0,
                  color: color,
                  rom: rom,
                  ram: state.infoMain.ram,
                },
              ];
            else {
              state.infoMain.lists[index].nameProduct = `${
                state.infoMain.lineProduct.nameLineProduct
              } ${state.infoMain.ram ? state.infoMain.ram.nameRam : ""} ${
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
                  state.infoMain.ram ? state.infoMain.ram.nameRam : ""
                } ${rom.nameMemory}`,
                amountInput: 0,
                amountOutput: 0,
                sale: 0,
                color: { id: "" },
                rom: rom,
                ram: state.infoMain.ram,
              },
            ];
          else {
            state.infoMain.lists[index].nameProduct = `${
              state.infoMain.lineProduct.nameLineProduct
            } ${state.infoMain.ram ? state.infoMain.ram.nameRam : ""} ${
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
        });
      }
      return { ...state };
    case Types.LOAD_INFO_MAIN_PRODUCT_BY_INDEX:
      state.infoMain.index = action.index;
      return { ...state };
    case Types.LOAD_INFO_IMAGE_MAIN_PRODUCT:
      if (state.infoMain.colors.length > 0)
        state.infoMain.images = {
          ...state.infoMain.images,
          [action.data.id]: action.file,
        };
      else
        state.infoMain.images = {
          ...state.infoMain.images,
          [-1]: action.file,
        };
      return { ...state };
    case Types.REMOVE_INFO_MAIN_PRODUCT:
      state.infoMain.lists = state.infoMain.lists.filter(
        (item) => action.data.id !== item[action.name]["id"]
      );
      state.infoMain[`${action.name}s`] = state.infoMain[
        `${action.name}s`
      ].filter((item) => action.data.id !== item.id);

      if (
        state.infoMain.colors.length === 0 &&
        state.infoMain.roms.length === 0
      ) {
        state.infoMain.lists.push({
          id: -1,
          nameProduct: null,
          amount: 0,
          priceInput: 0,
          priceOutput: 0,
          sale: 0,
          color: { id: null },
          rom: { id: null },
          ram: state.infoMain.ram,
        });
      }
      return { ...state };
    case Types.CHANGE_TO_PRODUCT_IS_MULTI_RAM:
      state.infoMain.type = action.bool;
      return { ...state };
    case Types.LOAD_INFO_MAIN_PRICE_AMOUNT_SALE:
      switch (action.index) {
        case 0:
          state.infoMain.lists[state.infoMain.index - 1].priceInput =
            action.data;
          break;
        case 1:
          state.infoMain.lists[state.infoMain.index - 1].priceOutput =
            action.data;
          break;
        case 2:
          state.infoMain.lists[state.infoMain.index - 1].amountInput =
            action.data;
          break;
        case 3:
          state.infoMain.lists[state.infoMain.index - 1].sale = action.data;
          break;
        case 4:
          state.infoMain.lists[state.infoMain.index - 1].amountOutput =
            action.data;
          break;
        default:
          break;
      }
      return { ...state };
    case Types.LOAD_INFO_MAIN_IMAGE_OTHER:
      state.images = action.list;
      return { ...state };
    case Types.LOAD_FEATURE_PRODUCT:
      state.features.choose = action.data.choose;
      state.features.listCurrent = action.data.listCurrent;
      state.features.list = action.data.list;
      console.log(state);
      return { ...state };
    case Types.REMOVE_FEATURE_PRODUCT:
      state.features = action.data;
      return { ...state };
    case Types.ADD_FEATURE_PRODUCT:
      state.features = action.data;
      return { ...state };
    case Types.LOAD_FEATURE_PRODUCT_CURRENT:
      state.features.listCurrent = action.listCurrent;
      return { ...state };
    case Types.LOAD_DESCRIPTION_PRODUCT:
      state.descriptions = action.data;
      return { ...state };
    case Types.UPDATE_IMAGE_COLOR_PRODUCT:
      state.imageColor = action.imageColor;
      return { ...state };
    case Types.LOAD_INFO_EDIT_LINE_PRODUCT_REQUEST:
      state.infoSimple = action.data.infoSimple;
      state.infoAttribute = action.data.infoAttribute;
      state.features.choose = action.data.features;
      state.images = action.data.images;
      state.descriptions = action.data.descriptions;
      state.imageColor = action.data.imageColor;
      return { ...state };
    case Types.RESET_DATA_PRODUCT_STATE:
      state = {
        data: <InfoSimple />,
        infoSimple: {
          lineProduct: null,
          categoryProduct: null,
          groupProduct: null,
          nameProduct: null,
          brand: null,
          dateInput: null,
          dateOutput: null,
          width: null,
          height: null,
          weight: null,
        },
        infoAttribute: null,
        infoMain: {
          colors: [],
          roms: [],
          ram: null,
          images: {},
          lists: [
            {
              id: -1,
              nameProduct: null,
              priceInput: 0,
              priceOutput: 0,
              sale: 0,
              amountInput: 0,
              amountOutput: 0,
              color: { id: null },
              rom: { id: null },
              ram: null,
            },
          ],
          index: 1,
          type: false,
        },
        features: {
          choose: [],
          listCurrent: [],
          list: [],
        },
        images: [],
        descriptions: null,
        loading: true,
        imageColor: [],
        index: 0,
      };
      return { ...state };
    default:
      return state;
  }
};
export default myReducer;
