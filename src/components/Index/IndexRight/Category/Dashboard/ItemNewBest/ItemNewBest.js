import React from "react";

function ItemNewBest(props) {
  //
  const { content, item, attribute, specification, Component } = props;
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
        <div className="text-gray-600 font-semibold break-all whitespace-nowrap flex items-center">
          <div>{content(item)}</div>
          {specification && (
            <div className="ml-1">
              <Component status={item[specification]} />
            </div>
          )}
        </div>
        <p className="text-sm text-gray-600">{item.timeCreated}</p>
      </div>
    </li>
  );
}

export default ItemNewBest;
