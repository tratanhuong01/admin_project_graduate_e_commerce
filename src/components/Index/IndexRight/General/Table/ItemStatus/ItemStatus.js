import React from "react";

function ItemStatus(props) {
  //
  const { condition, typeData } = props;
  const index = condition.findIndex((dt) => dt.type === typeData);

  //
  return (
    <span
      className={`rounded-full px-3 p-1 text-xs text-white font-semibold 
    ${condition[index].bgColor}`}
    >
      {condition[index].name}
    </span>
  );
}

export default ItemStatus;
