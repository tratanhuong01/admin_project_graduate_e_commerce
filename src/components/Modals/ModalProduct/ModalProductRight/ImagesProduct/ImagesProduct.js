import React from "react";
import ItemImagesProduct from "./ItemImagesProduct/ItemImagesProduct";

function ImagesProduct(props) {
  return (
    <div
      className="w-11/12 mx-auto overflow-y-auto overflow-x-hidden scrollbar-css flex flex-wrap px-2"
      style={{
        height: 530,
        maxHeight: 530,
      }}
    >
      <ItemImagesProduct />
      <ItemImagesProduct />
      <ItemImagesProduct />
      <ItemImagesProduct />
      <ItemImagesProduct />
      <ItemImagesProduct />
      <ItemImagesProduct />
      <ItemImagesProduct />
      <ItemImagesProduct />
      <ItemImagesProduct />
      <ItemImagesProduct />
      <ItemImagesProduct />
    </div>
  );
}

export default ImagesProduct;
