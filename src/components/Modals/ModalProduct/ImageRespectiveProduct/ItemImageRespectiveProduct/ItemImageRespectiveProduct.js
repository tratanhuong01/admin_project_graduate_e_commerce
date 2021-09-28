import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as productsAction from "../../../../../actions/products/index";
function ItemImageRespectiveProduct(props) {
  //
  const { item } = props;
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  //
  return (
    <div className="mx-2" style={{ width: "calc(33.3% - 16px )" }}>
      {item.image ? (
        <div className="w-full relative">
          <span
            onClick={() =>
              dispatch(
                productsAction.updateImageColorProductRequest(
                  0,
                  item.color,
                  products.imageColor
                )
              )
            }
            className="w-10 h-10 rounded-full bg-gray-300 flex justify-center 
            items-center text-2xl absolute right-0 cursor-pointer"
          >
            &times;
          </span>
          <img
            src={URL.createObjectURL(item.image)}
            alt=""
            className="w-full object-contain h-72"
          />
          <div className="flex justify-center my-1 items-center">
            <span
              className="w-10 h-10 rounded-full"
              style={{ backgroundColor: item.color.code }}
            ></span>
            <span className="font-semibold ml-3">{item.color.description}</span>
          </div>
        </div>
      ) : (
        <div className="w-full relative">
          <span
            onClick={() =>
              dispatch(
                productsAction.updateImageColorProductRequest(
                  0,
                  item.color,
                  products.imageColor
                )
              )
            }
            className="w-10 h-10 rounded-full bg-gray-300 flex justify-center 
            items-center text-2xl absolute right-0 cursor-pointer"
          >
            &times;
          </span>
          <input
            type="file"
            id="fileImage"
            className="hidden"
            onChange={(event) => {
              if (event.target.files.length > 0)
                dispatch(
                  productsAction.updateFileImageColorProductRequest(
                    event.target.files[0],
                    item.color,
                    products.imageColor
                  )
                );
            }}
          />
          <label
            htmlFor="fileImage"
            className="w-full h-72 flex items-center justify-center"
          >
            <img
              src={`https://icon-library.com/images/add-image-icon/add-image-icon-0.jpg`}
              alt=""
              className="w-1/2 object-contain"
            />
          </label>
          <div className="flex justify-center my-1 items-center">
            <span
              className="w-10 h-10 rounded-full"
              style={{ backgroundColor: item.color.code }}
            ></span>
            <span className="font-semibold ml-3">{item.color.description}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemImageRespectiveProduct;
