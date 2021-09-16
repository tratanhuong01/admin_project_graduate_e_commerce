import React from "react";

function ItemUserChatLeft(props) {
  return (
    <>
      <div className="w-full hover:bg-gray-100 p-1.5 flex items-center relative cursor-pointer element__hover">
        <div className="w-14 h-14 m-1 relative">
          <img
            src="https://pickaface.net/gallery/avatar/20140911_184056_617_demo.png"
            alt=""
            className="w-14 h-14 rounded-full"
          />
          <span className="w-3 h-3 rounded-full bg-green-500 absolute bottom-0 right-0"></span>
        </div>
        <div className="flex flex-col pl-5">
          <p className="font-semibold mb-1">Trà Hưởng</p>
          <p className="text-blue-500 font-semibold text-sm">Chào admin ạ .</p>
        </div>
        <span className="text-sm text-gray-600 absolute top-2 font-semibold font-sans right-2">
          12:30
        </span>
        <div className="w-7 h-7 rounded-full text-gray-700 items-center justify-center absolute top-9 -mt-1 right-2 hidden element__show">
          <span className="bx bx-dots-horizontal text-xl"></span>
        </div>
      </div>
      <span className="text-xs text-gray-500 mb-2 pl-2.5">
        tratanhuong01@gmail.com - 0354114665
      </span>
    </>
  );
}

export default ItemUserChatLeft;
