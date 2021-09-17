import { combineReducers } from "redux";
import category from "./category";
import modal from "./modal";
import form from "./form";
import products from "./products";
import socket from "./socket";
const myReducer = combineReducers({
  category,
  modal,
  form,
  products,
  socket,
});

export default myReducer;
