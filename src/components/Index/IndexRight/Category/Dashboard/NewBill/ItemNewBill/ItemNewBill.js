import React from "react";

function ItemNewBill(props) {
  return (
    <li className="w-full px-2.5 pb-2.5 flex">
      <div className="relative mr-3">
        <span className="bg-blue-500 p-1.5 rounded-full absolute top-4"></span>
      </div>
      <div className="ml-3 pt-0.5">
        <img
          src="http://res.cloudinary.com/tratahuong01/image/upload/v1622792457/Avatar/ohr7yxb89srga7aoggdr.jpg"
          className="w-10 h-10 rounded-full mx-auto object-cover"
          alt=""
        />
        <br />
      </div>
      <div className="pl-3">
        <p className="text-gray-600 pb-0.5 font-bold break-all whitespace-nowrap">
          #94893284932894 Đang vận chuyển
        </p>
        <p className="text-sm text-gray-600">2021-06-04 14:34:55</p>
      </div>
    </li>
  );
}

export default ItemNewBill;
