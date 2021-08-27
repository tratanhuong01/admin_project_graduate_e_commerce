import React, { useState } from "react";
import ItemImagesProduct from "./ItemImagesProduct/ItemImagesProduct";

function ImagesProduct(props) {
  //
  const [listImage, setListImage] = useState([]);
  //
  return (
    <div
      className="w-11/12 mx-auto overflow-y-auto overflow-x-hidden scrollbar-css flex flex-wrap px-2"
      style={{
        height: 530,
        maxHeight: 530,
      }}
    >
      {listImage.map((image, index) => {
        return (
          <ItemImagesProduct
            image={image}
            key={index}
            index={index}
            listImage={listImage}
            setListImage={setListImage}
          />
        );
      })}
      <input
        type="file"
        onChange={(event) => setListImage([...event.target.files])}
        className="hidden"
        id="imageFiles"
        multiple={true}
      />
      <label
        htmlFor="imageFiles"
        className="w-1/4 h-60 rounded-lg mb-3 relative flex items-center justify-center 
        text-gray-600"
      >
        <i className="bx bx-image-add text-5xl text-gray-500"></i>
      </label>
    </div>
  );
}

export default ImagesProduct;
