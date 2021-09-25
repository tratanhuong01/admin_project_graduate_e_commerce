import React from "react";

function ContentColor({ condition, typeData, onClick = () => "" }) {
  //
  const index = condition.findIndex((dt) => dt.type === typeData);
  //
  return (
    <span
      onClick={() => onClick()}
      className={`rounded-full px-3 p-1 text-xs text-white font-semibold 
        ${condition[index].bgColor}`}
    >
      {condition[index].name}
    </span>
  );
}

export default ContentColor;
