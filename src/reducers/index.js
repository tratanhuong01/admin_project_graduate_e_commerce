import { combineReducers } from "redux";
import category from "./category";
import modal from "./modal";
import form from "./form";
const myReducer = combineReducers({
  category,
  modal,
  form,
});

export default myReducer;
