import React from "react";
import InputConfigScreen from "../InputConfigScreen/InputConfigScreen";

function IntroduceWebsite(props) {
  return (
    <>
      <InputConfigScreen />
      <div className="w-full bg-red-300 flex-1  flex items-center justify-center">
        Giới thiệu
      </div>
    </>
  );
}

export default IntroduceWebsite;
