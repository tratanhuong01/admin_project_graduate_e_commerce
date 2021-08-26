import BrandForm from "../components/Form/BrandForm/BrandForm";
import CategoryProductForm from "../components/Form/CategoryProductForm/CategoryProductForm";
import ColorForm from "../components/Form/ColorForm/ColorForm";
import GroupProductForm from "../components/Form/GroupProductForm/GroupProductForm";
import LineProductForm from "../components/Form/LineProductForm/LineProductForm";
import MemoryForm from "../components/Form/MemoryForm/MemoryForm";
import * as Types from "../constants/ActionTypes";

const initialState = {
  data: null,
  loading: false,
  type: 0,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.OPEN_FORM_ADD:
      switch (action.table) {
        case "color":
          state.data = <ColorForm dataProps={null} />;
          state.type = 0;
          break;
        case "brand":
          state.data = <BrandForm dataProps={null} />;
          state.type = 0;
          break;
        case "memorie":
          state.data = <MemoryForm dataProps={null} />;
          state.type = 0;
          break;
        case "lineProduct":
          state.data = <LineProductForm dataProps={null} />;
          state.type = 0;
          break;
        case "categoryProduct":
          state.data = <CategoryProductForm dataProps={null} />;
          state.type = 0;
          break;
        case "groupProduct":
          state.data = <GroupProductForm dataProps={null} />;
          state.type = 0;
          break;
        default:
          break;
      }
      state.loading = false;
      return { ...state };

    case Types.OPEN_FORM_EDIT:
      switch (action.table) {
        case "color":
          state.data = <ColorForm dataProps={action.data} />;
          state.type = 1;
          break;
        case "brand":
          state.data = <BrandForm dataProps={action.data} />;
          state.type = 1;
          break;
        case "memorie":
          state.data = <MemoryForm dataProps={action.data} />;
          state.type = 1;
          break;
        case "lineProduct":
          state.data = <LineProductForm dataProps={action.data} />;
          state.type = 1;
          break;
        case "categoryProduct":
          state.data = <CategoryProductForm dataProps={action.data} />;
          state.type = 1;
          break;
        case "groupProduct":
          state.data = <GroupProductForm dataProps={action.data} />;
          state.type = 1;
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
