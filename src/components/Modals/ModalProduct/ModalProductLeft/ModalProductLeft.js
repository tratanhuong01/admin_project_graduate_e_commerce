import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as productsAction from "../../../../actions/products/index";

function ModalProductLeft(props) {
  //
  const list = [
    {
      name: "Thông tin cơ bản",
      icon: "bx bx-info-circle ",
    },
    {
      name: "Sản phẩm",
      icon: "bx bx-money ",
    },
    {
      name: "Hình ảnh khác",
      icon: "bx bx-image-add ",
    },
    {
      name: "Thuộc tính",
      icon: "bx bx-at ",
    },
    {
      name: "Mô tả",
      icon: "bx bx-detail ",
    },
  ];
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {}, [products.index]);
  //
  return (
    <div className="w-1/4 text-gray-700 fixed">
      {list.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              dispatch(productsAction.loadCategoryProductByIndex(index));
            }}
            className={`w-full p-2.5 my-1 flex items-center rounded-lg ${
              products.index === index ? "bg-gray-200" : "hover:bg-gray-200"
            } font-semibold cursor-pointer`}
          >
            <i className={`${item.icon} mr-3 text-2xl`}></i>
            {item.name}
          </div>
        );
      })}
    </div>
  );
}

export default ModalProductLeft;
