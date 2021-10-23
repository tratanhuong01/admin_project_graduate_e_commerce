import React from "react";

function ItemUserChatLeft(props) {
  //
  const { message, setIndex, index, indexCurrent } = props;
  //
  return (
    <>
      <div
        onClick={() => setIndex(index)}
        className={`w-full p-1.5 flex items-center relative cursor-pointer element__hover 
        ${index === indexCurrent ? "bg-gray-100" : "hover:bg-gray-100 "}`}
      >
        <div className="w-14 h-14 m-1 relative">
          <img
            src={message.groupChat.avatar}
            alt=""
            className="w-14 h-14 rounded-full object-cover"
          />
          <span className="w-3 h-3 rounded-full bg-green-500 absolute bottom-0 right-0"></span>
        </div>
        <div className="flex flex-col pl-5">
          <p className="font-semibold mb-1">{message.groupChat.fullName}</p>
          <p
            className={`${
              message.messagesList[message.messagesList.length - 1].isRead === 1
                ? "text-gray-700"
                : "text-blue-500"
            } font-semibold text-sm`}
          >
            {message.messagesList[
              message.messagesList.length - 1
            ].content.substring(0, 40) + "..."}
          </p>
        </div>
        <span className="text-sm text-gray-600 absolute top-2 font-semibold font-sans right-2">
          12:30
        </span>
        <div className="w-7 h-7 rounded-full text-gray-700 items-center justify-center absolute top-9 -mt-1 right-2 hidden element__show">
          <span className="bx bx-dots-horizontal text-xl"></span>
        </div>
      </div>
    </>
  );
}

export default ItemUserChatLeft;
