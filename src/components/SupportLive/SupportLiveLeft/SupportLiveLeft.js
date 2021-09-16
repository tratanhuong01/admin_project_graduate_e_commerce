import React from "react";
import ItemUserChatLeft from "./ItemUserChatLeft/ItemUserChatLeft";

function SupportLiveLeft(props) {
  return (
    <div className="w-1/3 h-full">
      <div className="w-full mb-4 relative">
        <input
          type="text"
          placeholder="Tìm kiếm"
          className="text-gray-700 border-2 border-solid p-2.5 w-full border-gray-200 rounded-full focus:border-blue-500 pl-10 focus:pl-2"
          spellCheck="false"
        />
        <span className="bx bx-search text-xl absolute top-3 left-3 text-gray-500"></span>
      </div>
      <div
        className=" overflow-y-auto scrollbar-css shadow-lg border-2 border-solid border-gray-100"
        style={{ height: "calc(100% - 64px)", maxHeight: "calc(100% - 64px)" }}
      >
        <ItemUserChatLeft />
        <ItemUserChatLeft />
        <ItemUserChatLeft />
        <ItemUserChatLeft />
        <ItemUserChatLeft />
        <ItemUserChatLeft />
        <ItemUserChatLeft />
        <ItemUserChatLeft />
        <ItemUserChatLeft />
        <ItemUserChatLeft />
        <ItemUserChatLeft />
        <ItemUserChatLeft />
        <ItemUserChatLeft />
        <ItemUserChatLeft />
        <ItemUserChatLeft />
      </div>
    </div>
  );
}

export default SupportLiveLeft;
