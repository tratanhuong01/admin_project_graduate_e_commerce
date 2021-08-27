import React from "react";

function ItemImagesProduct(props) {
  //
  const { index, image, listImage, setListImage } = props;
  //
  return (
    <div className="w-1/4 h-60 rounded-lg mb-3 relative">
      <span
        onClick={() => {
          let clone = [...listImage];
          clone.splice(index, 1);
          setListImage(clone);
        }}
        className="w-6 h-6 rounded-full font-semibold text-2xl bg-gray-200 hover:bg-gray-500 absolute top-0 right-0 flex items-center justify-center cursor-pointer hover:text-white"
      >
        <i className="bx bx-x" />
      </span>
      <img
        className="w-full h-60 object-contain rounded-lg"
        alt=""
        src={URL.createObjectURL(image)}
      />
    </div>
  );
}

export default ItemImagesProduct;
