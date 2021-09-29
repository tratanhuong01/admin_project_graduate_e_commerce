import React from "react";
import ChooseFeatureProduct from "./ChooseFeatureProduct/ChooseFeatureProduct";
import OptionFeatureProduct from "./OptionFeatureProduct/OptionFeatureProduct";

function FeatureProduct(props) {
  //
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
          table="functionProductsBySlug"
        />
        <ChooseFeatureProduct name="nameFunctionProduct" />
      </div>
    </div>
  );
}

export default FeatureProduct;
