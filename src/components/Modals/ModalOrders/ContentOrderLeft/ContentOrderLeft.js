import React from "react";
import InfoOrderLeft from "../InfoOrderLeft/InfoOrderLeft";
import InfoOrderRight from "../InfoOrderRight/InfoOrderRight";
import ItemOrder from "../ItemOrder/ItemOrder";

function ContentOrderLeft(props) {
  //
  const { order } = props;

  //
  return (
    <div className="w-1/2">
      <div className="w-full relative">
        {order.billDetailList.map((item, index) => (
          <ItemOrder item={item} key={index} />
        ))}
      </div>
      <div className="w-full flex">
        <InfoOrderLeft />
        <InfoOrderRight order={order} />
      </div>
      <div className="w-full flex text-sm">
        <div className="w-2/3 lg:w-3/5 py-3 flex items-center justify-end text-organce">
          <span className="bx bx-check-shield text-2xl mr-3"></span>
          <span className="text-gray-600 mr-3 dark:text-white">
            Phương thức thanh toán
          </span>
        </div>
        <div
          className="w-1/3 lg:w-2/5 py-3 flex items-center justify-end text-sm 
              text-gray-600 dark:text-white"
        >
          Thanh toán khi nhận hàng
        </div>
      </div>
    </div>
  );
}

export default ContentOrderLeft;
