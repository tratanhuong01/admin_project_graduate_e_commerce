import { combineReducers } from "redux";
import category from "./category";
import modal from "./modal";
import form from "./form";
import products from "./products";
import socket from "./socket";
import filters from "./filters";
import user from "./user";
import headers from "./headers";
import config from "./config";
const myReducer = combineReducers({
  category,
  modal,
  form,
  products,
  socket,
  filters,
  user,
  headers,
  config,
});

export default myReducer;
