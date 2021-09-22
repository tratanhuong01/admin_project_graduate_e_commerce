import { combineReducers } from "redux";
import category from "./category";
import modal from "./modal";
import form from "./form";
import products from "./products";
import socket from "./socket";
import filters from "./filters";
const myReducer = combineReducers({
  category,
  modal,
  form,
  products,
  socket,
  filters,
});

export default myReducer;
