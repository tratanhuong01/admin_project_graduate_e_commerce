import React from "react";

function ItemNewBest(props) {
  //
  const { content, item, attribute } = props;
  //
  return (
    <li className="w-full px-2.5 pb-2.5 flex">
      <div className="relative mr-3">
        <span className="bg-blue-500 p-1.5 rounded-full absolute top-4"></span>
      </div>
      <div className="ml-3 pt-0.5">
        <img
          src={attribute(item)}
          className="w-10 h-10 rounded-full mx-auto object-cover"
          alt=""
        />
        <br />
      </div>
      <div className="pl-3">
        <p className="text-gray-600 pb-0.5 font-bold break-all whitespace-nowrap">
          {content(item)}
        </p>
        <p className="text-sm text-gray-600">{item.timeCreated}</p>
      </div>
    </li>
  );
}

export default ItemNewBest;
