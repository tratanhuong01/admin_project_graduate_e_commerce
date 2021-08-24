import React from "react";
import ItemNewBill from "./ItemNewBill/ItemNewBill";

function NewBill(props) {
  return (
    <div className="item__new p-1 bg-white mx-1 w-full">
      <p className="font-bold text-xm font-bold my-2 pl-3">Đơn hàng gần đây</p>
      <ul className="w-full flex flex-wrap">
        <ItemNewBill />
        <ItemNewBill />
        <ItemNewBill />
      </ul>
    </div>
  );
}

export default NewBill;
