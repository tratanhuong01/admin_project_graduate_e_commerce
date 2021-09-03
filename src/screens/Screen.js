import React from "react";
function Screen(props) {
  //
  //
  return (
    <div
      className="w-full px-5 overflow-y-auto h-full scrollbar-css"
      id="contentRight"
      style={{ height: "calc(100% - 76px)", maxHeight: "calc(100% - 76px)" }}
    >
      {props.children}
    </div>
  );
}

export default Screen;
