import React from "react";
import AttributeForm from "../components/Form/AttributeForm/AttributeForm";
import BrandForm from "../components/Form/BrandForm/BrandForm";
import CategoryProductForm from "../components/Form/CategoryProductForm/CategoryProductForm";
import ColorForm from "../components/Form/ColorForm/ColorForm";
import GroupAttributeForm from "../components/Form/GroupAttributeForm/GroupAttributeForm";
import GroupProductForm from "../components/Form/GroupProductForm/GroupProductForm";
import LineProductForm from "../components/Form/LineProductForm/LineProductForm";
import MemoryForm from "../components/Form/MemoryForm/MemoryForm";
import GroupFilterProductForm from "../components/Form/GroupFilterProductForm/GroupFilterProductForm";
import * as Types from "../constants/ActionTypes";
import FunctionProductForm from "../components/Form/FunctionProductForm/FunctionProductForm";
import RamForm from "../components/Form/RamForm/RamForm";

const initialState = {
  data: null,
  loading: false,
  list: [],
  length: 0,
  type: 0,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.OPEN_FORM_ADD:
      switch (action.table) {
        case "color":
          state.data = <ColorForm dataProps={null} table={action.table} />;
          state.type = 0;
          break;
        case "brand":
          state.data = <BrandForm dataProps={null} table={action.table} />;
          state.type = 0;
          break;
        case "memorie":
          state.data = <MemoryForm dataProps={null} table={action.table} />;
          state.type = 0;
          break;
        case "ram":
          state.data = <RamForm dataProps={null} table={action.table} />;
          state.type = 0;
          break;
        case "lineProduct":
          state.data = (
            <LineProductForm dataProps={null} table={action.table} />
          );
          state.type = 0;
          break;
        case "categoryProduct":
          state.data = (
            <CategoryProductForm dataProps={null} table={action.table} />
          );
          state.type = 0;
          break;
        case "groupProduct":
          state.data = (
            <GroupProductForm dataProps={null} table={action.table} />
          );
          state.type = 0;
          break;
        case "groupAttribute":
          state.data = (
            <GroupAttributeForm dataProps={action.data} table={action.table} />
          );
          state.type = 0;
          break;
        case "attribute":
          state.data = (
            <AttributeForm dataProps={action.data} table={action.table} />
          );
          state.type = 0;
          break;
        case "groupFilterProduct":
          state.data = (
            <GroupFilterProductForm
              dataProps={action.data}
              table={action.table}
            />
          );
          state.type = 0;
          break;
        case "functionProduct":
          state.data = (
            <FunctionProductForm dataProps={action.data} table={action.table} />
          );
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
          state.data = (
            <ColorForm dataProps={action.data} table={action.table} />
          );
          state.type = 1;
          break;
        case "brand":
          state.data = (
            <BrandForm dataProps={action.data} table={action.table} />
          );
          state.type = 1;
          break;
        case "memorie":
          state.data = (
            <MemoryForm dataProps={action.data} table={action.table} />
          );
          state.type = 1;
          break;
        case "lineProduct":
          state.data = (
            <LineProductForm dataProps={action.data} table={action.table} />
          );
          state.type = 1;
          break;
        case "categoryProduct":
          state.data = (
            <CategoryProductForm dataProps={action.data} table={action.table} />
          );
          state.type = 1;
          break;
        case "groupProduct":
          state.data = (
            <GroupProductForm dataProps={action.data} table={action.table} />
          );
          state.type = 1;
          break;
        case "groupAttribute":
          state.data = (
            <GroupAttributeForm dataProps={action.data} table={action.table} />
          );
          state.type = 1;
          break;
        case "attribute":
          state.data = (
            <AttributeForm dataProps={action.data} table={action.table} />
          );
          state.type = 1;
          break;
        case "groupFilterProduct":
          state.data = (
            <GroupFilterProductForm
              dataProps={action.data}
              table={action.table}
            />
          );
          state.type = 1;
          break;
        case "functionProduct":
          state.data = (
            <FunctionProductForm dataProps={action.data} table={action.table} />
          );
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
