import React from "react";
import AttributesProduct from "../components/Modals/ModalProduct/ModalProductRight/AttributesProduct/AttributesProduct";
import DescriptionsProduct from "../components/Modals/ModalProduct/ModalProductRight/DescriptionsProduct/DescriptionsProduct";
import ImagesProduct from "../components/Modals/ModalProduct/ModalProductRight/ImagesProduct/ImagesProduct";
import InfoSimple from "../components/Modals/ModalProduct/ModalProductRight/InfoSimple/InfoSimple";
import PriceAndSale from "../components/Modals/ModalProduct/ModalProductRight/PriceAndSale/PriceAndSale";
import * as Types from "../constants/ActionTypes";

const initialState = {
  data: <InfoSimple />,
  infoSimple: null,
  priceSale: null,
  images: null,
  attributes: null,
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
          state.data = <PriceAndSale />;
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
    default:
      return state;
  }
};
export default myReducer;
