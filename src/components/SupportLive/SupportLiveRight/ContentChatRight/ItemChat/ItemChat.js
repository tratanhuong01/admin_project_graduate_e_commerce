import React from "react";

function ItemChat(props) {
  //
  const { type, item } = props;
  //
  return (
    <div
      className={`w-full flex my-2 ${
        type === 0 ? "justify-start" : "justify-end "
      } `}
    >
      <div
        className={`${
          type === 0
            ? "max-w-3/4 flex items-center"
            : "w-3/4 flex items-center justify-end"
        }`}
      >
        {type === 0 && (
          <div className="w-10 h-10 relative">
            <img
              src={item.groupChatMessages.avatar}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="w-2.5 h-2.5 rounded-full absolute bottom-0 right-0 bg-green-500"></span>
          </div>
        )}
        <div
          className={`ml-4 max-w-11/12 rounded-lg p-2.5 ${
            type === 0 ? "bg-gray-200 text-gray-700 " : "bg-organce text-white"
          }`}
        >
          {item.content}
        </div>
      </div>
    </div>
  );
}

export default ItemChat;
