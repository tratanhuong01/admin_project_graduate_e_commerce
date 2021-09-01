import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../../../../Utils/api";
import OptionFeatureProduct from "./OptionFeatureProduct/OptionFeatureProduct";

function FeatureProduct(props) {
  //
  const products = useSelector((state) => state.products);

  //
  return (
    <div
      className="w-11/12 mx-auto overflow-y-auto scrollbar-css"
      style={{
        height: 530,
        maxHeight: 530,
      }}
    >
      <div className="w-full flex">
        <OptionFeatureProduct
          name="nameFunctionProduct"
          table="functionProductsAll"
        />
      </div>
    </div>
  );
}

export default FeatureProduct;
