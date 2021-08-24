import React from "react";

function ItemDataFilterOrder(props) {
  return (
    <div
      className="mr-2 mt-2 text-xs cursor-pointer 
      p-1.5 bg-blue-100 text-blue-500 font-semibold"
    >
      <span className="mr-1">Xác Minh</span>:
      <span className="ml-1">Đang xác minh</span>
      &nbsp;&nbsp;&nbsp;
      <span className="text-xm">×</span>
    </div>
  );
}

export default ItemDataFilterOrder;
