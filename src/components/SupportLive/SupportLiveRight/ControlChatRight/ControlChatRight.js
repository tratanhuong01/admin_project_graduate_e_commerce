import React, { useState } from "react";
import { useSelector } from "react-redux";
import api from "../../../../Utils/api";

function ControlChatRight(props) {
  //
  const { send, setSend, message, scrollBottomContent } = props;
  const [content, setContent] = useState("");
  const { socket, headers, user } = useSelector((state) => {
    return {
      socket: state.socket,
      headers: state.headers,
      user: state.user,
    };
  });
  const sendMessage = async () => {
    await api(
      `messages`,
      "POST",
      {
        id: null,
        userMessages: user,
        groupChatMessages: message.groupChat,
        guest: null,
        content: content,
        images: null,
        timeCreated: null,
        typeMessages: 0,
      },
      headers
    );
    setSend(!send);
    setContent("");
    scrollBottomContent();
    socket.emit("chatMessage", message.groupChat.id);
  };
  //
  return (
    <div className="w-full flex items-end justify-between">
      <input
        type="text"
        placeholder="Nhập tin nhắn...."
        className="w-10/12 p-2.5 border-2 border-solid border-gray-200 shadow-sm focus:border-blue-500 
        rounded-sm"
        onKeyUp={(event) => {
          if (event.keyCode === 13) sendMessage();
        }}
        spellCheck={false}
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <div className=" flex items-center py-2  justify-around w-20">
        <i className="bx bx-smile text-gray-500 text-2xl"></i>
        <i className="bx bx-link-alt text-gray-500 text-2xl"></i>
      </div>
      <button
        onClick={() => sendMessage()}
        className="flex p-2 bg-organce items-center justify-center text-white font-semibold rounded-sm px-2 ml-4"
      >
        Gửi <i className="bx bx-send text-2xl ml-4"></i>
      </button>
    </div>
  );
}

export default ControlChatRight;
