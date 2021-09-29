import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as productsAction from "../../../../../../actions/products/index";
function ItemImagesProduct(props) {
  //
  const { index, image } = props;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  //
  return (
    <div
      className="h-60 rounded-lg mb-3 relative px-2"
      style={{ width: "calc(25% - 16px)" }}
    >
      <span
        onClick={() => {
          let clone = [...products.images];
          clone.splice(index, 1);
          dispatch(productsAction.loadInfoMainImageOther(clone));
        }}
        className="w-6 h-6 rounded-full font-semibold text-2xl bg-gray-200 hover:bg-gray-500 absolute top-0 right-0 flex items-center justify-center cursor-pointer hover:text-white"
      >
        <i className="bx bx-x" />
      </span>
      <img
        className="w-full h-60 object-contain rounded-lg"
        alt=""
        src={image.id ? image.src : URL.createObjectURL(image)}
      />
    </div>
  );
}

export default ItemImagesProduct;
