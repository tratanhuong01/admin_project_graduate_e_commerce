import { combineReducers } from "redux";
import category from "./category";
import modal from "./modal";
import form from "./form";
import products from "./products";
import socket from "./socket";
import filters from "./filters";
import user from "./user";
import headers from "./headers";
const myReducer = combineReducers({
  category,
  modal,
  form,
  products,
  socket,
  filters,
  user,
  headers,
});

export default myReducer;
