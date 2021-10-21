import React from "react";
import OrderUI from "./OrderUI/OrderUI";

function ContentOrderRight(props) {
  //
  const { order } = props;
  //
  return (
    <div className="w-1/2 flex flex-col h-full px-4">
      <OrderUI order={order} />
    </div>
  );
}

export default ContentOrderRight;
