import React from "react";

function ItemDashboarEveryDay(props) {
  //
  const { item } = props;
  //
  return (
    <li
      className={`w-full bg-gradient-to-r  mr-3 ${item.bgColorFrom} ${item.bgColorTo} text-white py-5 px-2 flex item__category__dashboard mb-2 
      font-semibold`}
    >
      <div className="text-center w-12 items-center">
        <span
          className={`${item.icon} text-2xl my-2 w-12 h-12 rounded-full 
          bg-opacity-50 bg-black flex items-center justify-center`}
        ></span>
      </div>
      <div className="w-full text-center px-2 py-2.5 xl:py-0 items-center">
        <p>{item.label}</p>
        <p className="mt-1 flex items-center justify-center">
          {new Intl.NumberFormat().format(item.number)}{" "}
          <i className={`text-white ${item.icon} ml-2`} />
        </p>
      </div>
    </li>
  );
}

export default ItemDashboarEveryDay;
