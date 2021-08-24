import React from "react";
import ItemReplyCurrent from "./ItemReplyCurrent/ItemReplyCurrent";

function ReplyCurrent(props) {
  return (
    <div className="item__new p-1 bg-white mx-1 w-full">
      <p className="font-bold text-xm font-bold my-2 pl-3">Phản hồi gần đây</p>
      <ul className="w-full flex flex-wrap">
        <ItemReplyCurrent />
        <ItemReplyCurrent />
        <ItemReplyCurrent />
        <ItemReplyCurrent />
      </ul>
    </div>
  );
}

export default ReplyCurrent;
