import React from "react";

function InfoOrderLeft(props) {
  const data = [
    "Tổng tiền hàng",
    "Phí vận chuyển",
    "Giảm giá phí vận chuyển",
    "Tổng số tiền",
  ];
  return (
    <div className="w-2/3 lg:w-3/5 flex flex-col text-xs text-gray-600 dark:text-white">
      {data.map((item, index) => (
        <div
          key={index}
          className="w-full flex items-center justify-end py-4 border-b-2 border-solid 
        border-gray-200 border-r-2 pr-3"
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default InfoOrderLeft;
