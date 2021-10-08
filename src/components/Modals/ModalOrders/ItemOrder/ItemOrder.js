import React from "react";

function ItemOrder(props) {
  //
  const { item } = props;
  //
  return (
    <div className="w-full flex items-center text-gray-600 dark:text-white flex-shrink-0 mb-3">
      <div className="w-2/3 flex items-center">
        <img
          src={item.productFull.image.src}
          alt=""
          className="w-24 h-24 p-1 rounded-lg object-contain"
        />
        <div className="flex ml-4 flex-col">
          <span className="mb-1 font-semibold hover:text-organce">
            {item.productFull.nameLineProduct}
          </span>
          <p>Số lương : {item.billDetail.amount}</p>
          <p className="flex flex-col">
            Màu : {item.productFull.color.description}
            {item.productFull.memory &&
              `- Bộ nhớ : ${item.productFull.memory.nameMemory}`}
          </p>
        </div>
      </div>
      <div className="w-1/3 flex items-center justify-end font-semibold">
        {new Intl.NumberFormat().format(item.billDetail.price)} <u>đ</u> x{" "}
        {item.billDetail.amount}
      </div>
    </div>
  );
}

export default ItemOrder;
