import { combineReducers } from "redux";
import category from "./category";
import modal from "./modal";
import form from "./form";
import products from "./products";
const myReducer = combineReducers({
  category,
  modal,
  form,
  products,
});

export default myReducer;
