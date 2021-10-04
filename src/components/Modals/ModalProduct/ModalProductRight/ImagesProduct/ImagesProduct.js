import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemImagesProduct from "./ItemImagesProduct/ItemImagesProduct";
import * as productsAction from "../../../../../actions/products/index";
function ImagesProduct(props) {
  //
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {}, [products.images]);
  //
  return (
    <>
      {products.images ? (
        <>
          {products.images.map((image, index) => {
            return (
              <ItemImagesProduct image={image} key={index} index={index} />
            );
          })}
          <input
            type="file"
            onChange={(event) =>
              dispatch(
                productsAction.loadInfoMainImageOther(
                  [...products.images].concat([...event.target.files])
                )
              )
            }
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
        </>
      ) : (
        <>
          {" "}
          <input
            type="file"
            onChange={(event) =>
              dispatch(
                productsAction.loadInfoMainImageOther(
                  [...products.images].concat([...event.target.files])
                )
              )
            }
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
        </>
      )}
    </>
  );
}

export default ImagesProduct;
