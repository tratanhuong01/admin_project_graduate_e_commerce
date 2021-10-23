import React from "react";
import { useSelector } from "react-redux";
import api from "../../../../../Utils/api";

function SettingChatPopup({ send, setSend, groupChat, setShowSetting }) {
  //
  const headers = useSelector((state) => state.headers);
  const deleteGroupChat = async () => {
    groupChat.isDelete = 1;
    await api(`groupChats`, "PUT", groupChat, headers);
    setSend(!send);
    setShowSetting(false);
  };
  //
  return (
    <div className="w-72 right-0 rounded-lg border-2 border-solid border-gray-200 shadow-lg absolute top-full mt-1 bg-gray-50">
      <div
        onClick={deleteGroupChat}
        className="w-full p-2 hover:bg-gray-200 cursor-pointer font-semibold"
      >
        Xóa đoạn chat
      </div>
    </div>
  );
}

export default SettingChatPopup;
