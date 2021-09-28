import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../../Utils/api";
import * as productsAction from "../../../../../actions/products/index";
function ItemAddImageProduct(props) {
  //
  const [colors, setColors] = useState([]);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result = await api(`colorsAll`, "GET", null);
      if (unmounted) return;
      setColors(result.data);
    }
    fetch();
    return () => {
      unmounted = true;
    };
    //
  }, []);
  //
  return (
    <div
      className="mx-2 flex items-center justify-center"
      style={{ width: "calc(33.3% - 16px )" }}
    >
      <div>
        <p className="text-center mb-3 font-semibold text-xl">
          {" "}
          Chọn màu sản phẩm{" "}
        </p>
        <div className="w-full flex flex-wrap h-60 overflow-y-auto scrollbar-css justify-center">
          {colors.map((color, index) => {
            const pos = products.imageColor.findIndex(
              (item) => item.color.id === color.id
            );
            return (
              <span
                onClick={() =>
                  dispatch(
                    productsAction.updateImageColorProductRequest(
                      pos,
                      color,
                      products.imageColor
                    )
                  )
                }
                key={index}
                className={`${
                  pos === -1
                    ? "border-gray-200 hover:border-gray-800"
                    : "border-gray-800"
                } m-1 w-12 h-12 rounded-full border-4 border-solid cursor-pointer `}
                style={{ backgroundColor: color.code }}
              ></span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ItemAddImageProduct;
