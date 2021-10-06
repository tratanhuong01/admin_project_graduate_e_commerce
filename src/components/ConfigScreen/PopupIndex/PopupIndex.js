import React from "react";
import InputConfigScreen from "../InputConfigScreen/InputConfigScreen";

function PopupIndex(props) {
  return (
    <>
      <InputConfigScreen />
      <div className="w-full bg-pink-300 flex-1  flex items-center justify-center">
        Popup
      </div>
    </>
  );
}

export default PopupIndex;
