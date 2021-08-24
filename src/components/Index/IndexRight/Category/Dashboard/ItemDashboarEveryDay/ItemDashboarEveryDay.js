import React from "react";

function ItemDashboarEveryDay(props) {
  return (
    <li className="w-full mx-3 bg-yellow-500 text-white p-5 flex item__category__dashboard mb-2">
      <div className="text-center w-1/4 items-center">
        <span
          className="fas fa-users text-2xl my-2 w-12 h-12 rounded-full 
          bg-opacity-50 bg-black flex items-center justify-center"
        ></span>
      </div>
      <div className="w-3/4 text-center px-2 py-2.5 xl:py-0 items-center font-bold">
        <p>Lượt đăng kí</p>
        <p>0</p>
      </div>
    </li>
  );
}

export default ItemDashboarEveryDay;
