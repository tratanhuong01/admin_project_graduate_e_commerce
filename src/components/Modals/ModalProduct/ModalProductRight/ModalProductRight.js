import React from "react";
import { useSelector } from "react-redux";
import ProductRightFooter from "./ProductRightFooter/ProductRightFooter";

function ModalProductRight(props) {
  //
  const products = useSelector((state) => state.products);
  //
  return (
    <div className="w-3/4 mx-2 relative left-1/4 pl-2">
      <div
        className="w-full mx-auto overflow-y-auto scrollbar-css px-3"
        style={{
          height: 530,
          maxHeight: 530,
        }}
      >
        {products.data}
      </div>
      <ProductRightFooter />
    </div>
  );
}

export default ModalProductRight;
