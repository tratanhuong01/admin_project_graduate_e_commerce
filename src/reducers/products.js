import React from "react";
import AttributesProduct from "../components/Modals/ModalProduct/ModalProductRight/AttributesProduct/AttributesProduct";
import DescriptionsProduct from "../components/Modals/ModalProduct/ModalProductRight/DescriptionsProduct/DescriptionsProduct";
import ImagesProduct from "../components/Modals/ModalProduct/ModalProductRight/ImagesProduct/ImagesProduct";
import InfoSimple from "../components/Modals/ModalProduct/ModalProductRight/InfoSimple/InfoSimple";
import MainInfoProduct from "../components/Modals/ModalProduct/ModalProductRight/MainInfoProduct/MainInfoProduct";
import * as Types from "../constants/ActionTypes";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  data: <InfoSimple />,
  infoSimple: {
    categoryProduct: null,
    groupProduct: null,
    nameProduct: null,
    brand: null,
    dateInput: null,
    dateOutput: null,
  },
  infoAttribute: null,
  infoMain: {
    colors: [],
    romOrRam: [],
    images: [],
    lists: [],
    index: 1,
    type: false,
  },
  images: null,
  descriptions: null,
  loading: true,
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
          state.data = <MainInfoProduct />;
          break;
        case 2:
          state.data = <ImagesProduct />;
          break;
        case 3:
          state.data = <AttributesProduct />;
          break;
        case 4:
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
          state.infoMain.romOrRam = action.data;
          break;
        default:
          break;
      }
      return { ...state };
    case Types.LOAD_INFO_MAIN_PRODUCT_DATA_FULL:
      if (
        state.infoMain.colors.length > 0 &&
        state.infoMain.romOrRam.length > 0
      ) {
        state.infoMain.colors.forEach((color) => {
          state.infoMain.romOrRam.forEach((itemRomOrRam) => {
            const index = state.infoMain.lists.findIndex(
              (item) =>
                item.color.id === color.id &&
                item.romOrRam.rom.id === itemRomOrRam.rom.id
            );
            if (index === -1)
              state.infoMain.lists = [
                ...state.infoMain.lists,
                {
                  id: uuidv4(),
                  nameProduct: `${state.infoSimple.nameProduct} ${
                    itemRomOrRam.ram === null ? "" : itemRomOrRam.ram.id + "/"
                  } ${
                    itemRomOrRam.rom === null ? "" : itemRomOrRam.rom.id
                  } màu ${color.description.toLowerCase()}`,
                  imageDemo: null,
                  priceInput: 0,
                  priceOutput: 0,
                  sale: 0,
                  colors: color,
                  romOrRam: itemRomOrRam,
                },
              ];
          });
        });
      } else if (
        state.infoMain.colors.length > 0 &&
        state.infoMain.romOrRam.length <= 0
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
                  state.infoSimple.nameProduct
                } màu ${color.description.toLowerCase()}`,
                imageDemo: null,
                priceInput: 0,
                priceOutput: 0,
                sale: 0,
                color: color,
                romOrRam: null,
              },
            ];
        });
      } else if (
        state.infoMain.colors.length <= 0 &&
        state.infoMain.romOrRam.length > 0
      ) {
        state.infoMain.romOrRam.forEach((itemRomOrRam) => {
          const index = state.infoMain.lists.findIndex(
            (item) =>
              item.romOrRam.rom.id === itemRomOrRam.rom.id ||
              item.romOrRam.ram.id === itemRomOrRam.ram.id
          );

          if (index === -1)
            state.infoMain.lists = [
              ...state.infoMain.lists,
              {
                id: uuidv4(),
                nameProduct: `${state.infoSimple.nameProduct} ${
                  itemRomOrRam.ram === null ? "" : itemRomOrRam.ram.id + "/"
                } ${itemRomOrRam.rom === null ? "" : itemRomOrRam.rom.id}`,
                imageDemo: null,
                priceInput: 0,
                priceOutput: 0,
                sale: 0,
                color: null,
                romOrRam: itemRomOrRam,
              },
            ];
        });
      } else {
        state.infoMain.lists.push({
          id: "",
          nameProduct: `${state.infoSimple.nameProduct}`,
          imageDemo: null,
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
      console.log(state.infoMain.lists);
      const index = state.infoMain.lists.findIndex(
        (item) => item.id === action.itemList.id
      );
      if (index !== -1) state.infoMain.lists[index].imageDemo = action.file;
      return { ...state };
    case Types.REMOVE_INFO_MAIN_PRODUCT:
      state.infoMain.lists = state.infoMain.lists.filter(
        (item) => action.data.id !== item.color.id
      );
      return { ...state };
    case Types.CHANGE_TO_PRODUCT_IS_MULTI_RAM:
      state.infoMain.type = action.bool;
      return { ...state };
    default:
      return state;
  }
};
export default myReducer;
