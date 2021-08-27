import React from "react";
import { useSelector } from "react-redux";
import ProductRightFooter from "./ProductRightFooter/ProductRightFooter";

function ModalProductRight(props) {
  //
  const products = useSelector((state) => state.products);
  //
  return (
    <div className="w-3/4 mx-2 relative left-1/4 ">
      {products.data}
      <ProductRightFooter />
    </div>
  );
}

export default ModalProductRight;
