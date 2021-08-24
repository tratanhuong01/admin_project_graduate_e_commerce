import { combineReducers } from "redux";
import category from "./category";
import modal from "./modal";

const myReducer = combineReducers({
  category,
  modal,
});

export default myReducer;
