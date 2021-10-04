import React from "react";
import ChooseFeatureProduct from "./ChooseFeatureProduct/ChooseFeatureProduct";
import OptionFeatureProduct from "./OptionFeatureProduct/OptionFeatureProduct";

function FeatureProduct(props) {
  //
  //
  return (
    <>
      <div className="w-full flex">
        <OptionFeatureProduct
          name="nameFunctionProduct"
          table="functionProductsBySlug"
        />
        <ChooseFeatureProduct name="nameFunctionProduct" />
      </div>
    </>
  );
}

export default FeatureProduct;
