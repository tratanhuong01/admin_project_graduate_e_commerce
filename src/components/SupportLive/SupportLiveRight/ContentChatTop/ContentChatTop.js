import React, { useState } from "react";
import SettingChatPopup from "./SettingChatPopup/SettingChatPopup";

function ContentChatTop(props) {
  //
  const { message, send, setSend } = props;
  const [showInput, setShowInput] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  //
  return (
    <div
      className="w-full p-2 flex justify-between h-16 items-center border-2 border-solid 
    border-gray-200 shadow-lg"
    >
      <div className="flex">
        <div className="w-12 h-12 relative">
          <img
            src={message.groupChat.avatar}
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="w-3 h-3 rounded-full absolute bottom-0 right-0 bg-green-500"></span>
        </div>
        <span className="font-semibold flex items-center pl-4">
          {message.groupChat.fullName}
        </span>
      </div>

      <div className="text-gray-600 pr-2 relative">
        {showInput && (
          <input
            type="text"
            placeholder="Nhập nội dung cần tìm..."
            className="w-80 p-2.5 rounded-full focus:border-blue-500 border-solid border-gray-200 border-2 mr-4"
          />
        )}
        <i
          onClick={() => setShowInput(!showInput)}
          className="fas fa-search text-xl cursor-pointer"
        />
        <i
          onClick={() => setShowSetting(!showSetting)}
          className="fas fa-cog text-2xl ml-6 mb-0.5 cursor-pointer"
        />
        {showSetting && (
          <SettingChatPopup
            setSend={setSend}
            send={send}
            groupChat={message.groupChat}
            setShowSetting={setShowSetting}
          />
        )}
      </div>
    </div>
  );
}

export default ContentChatTop;
