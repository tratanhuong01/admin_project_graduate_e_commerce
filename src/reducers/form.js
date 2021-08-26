import BrandForm from "../components/Form/BrandForm/BrandForm";
import ColorForm from "../components/Form/ColorForm/ColorForm";
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
        case "color":
          state.data = <BrandForm dataProps={action.data} />;
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
