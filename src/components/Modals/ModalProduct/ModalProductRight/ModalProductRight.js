import React from "react";
import { useSelector } from "react-redux";
import ProductRightFooter from "./ProductRightFooter/ProductRightFooter";

function ModalProductRight(props) {
  //
  const products = useSelector((state) => state.products);
  //
  return (
    <div className="w-3/4 mx-2 h-full flex relative">
      <div className="w-full">{products.data}</div>
      <ProductRightFooter />
    </div>
  );
}

export default ModalProductRight;
