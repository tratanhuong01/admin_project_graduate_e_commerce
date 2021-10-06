import React from "react";
import InputConfigScreen from "../InputConfigScreen/InputConfigScreen";

function ContactInfo(props) {
  return (
    <>
      <InputConfigScreen />
      <div className="w-full bg-indigo-300 flex-1  flex items-center justify-center">
        Liên hệ
      </div>
    </>
  );
}

export default ContactInfo;
