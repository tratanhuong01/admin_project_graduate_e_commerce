import React from "react";
import IndexLeft from "./IndexLeft/IndexLeft";
import IndexRight from "./IndexRight/IndexRight";

function MainIndex(props) {
  return (
    <div className="w-full flex">
      <IndexLeft />
      <IndexRight />
    </div>
  );
}

export default MainIndex;
