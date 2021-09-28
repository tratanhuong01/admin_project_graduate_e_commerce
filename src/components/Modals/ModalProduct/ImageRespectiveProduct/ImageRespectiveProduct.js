import React from "react";
import { useSelector } from "react-redux";
import ItemAddImageProduct from "./ItemAddImageProduct/ItemAddImageProduct";
import ItemImageRespectiveProduct from "./ItemImageRespectiveProduct/ItemImageRespectiveProduct";

function ImageRespectiveProduct(props) {
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
      <div className="w-full flex flex-wrap">
        {products.imageColor.map((item, index) => (
          <ItemImageRespectiveProduct item={item} key={index} />
        ))}
        <ItemAddImageProduct />
      </div>
    </div>
  );
}

export default ImageRespectiveProduct;
