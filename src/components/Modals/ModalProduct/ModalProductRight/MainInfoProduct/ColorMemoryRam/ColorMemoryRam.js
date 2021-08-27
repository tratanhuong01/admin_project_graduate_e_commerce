import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

function ColorMemoryRam(props) {
  return (
    <>
      <div className="w-full flex my-1 font-semibold">
        <div className="w-1/2 p-1 mr-3">Màu sắc</div>
        <div className="w-1/2 p-1 ">Bộ nhớ</div>
      </div>
      <div className="w-full flex">
        <ScrollContainer className="w-1/2 mr-3 max-w-1/2 overflow-x-auto flex p-1 border-2 border-solid border-gray-200 shadow-lg">
          <div className="w-10 h-10 rounded-full bg-green-500 mr-1.5 flex-shrink-0 cursor-pointer"></div>
          <div className="w-10 h-10 rounded-full bg-red-500 mr-1.5 flex-shrink-0 cursor-pointer"></div>
          <div className="w-10 h-10 rounded-full bg-yellow-500 mr-1.5 flex-shrink-0 cursor-pointer"></div>
          <div className="w-10 h-10 rounded-full bg-pink-500 mr-1.5 flex-shrink-0 cursor-pointer"></div>
          <div className="w-10 h-10 rounded-full bg-gray-500 mr-1.5 flex-shrink-0 cursor-pointer"></div>
          <div className="w-10 h-10 rounded-full bg-gray-500 mr-1.5 flex-shrink-0 cursor-pointer"></div>
          <div className="w-10 h-10 rounded-full bg-green-500 mr-1.5 flex-shrink-0 cursor-pointer"></div>
          <div className="w-10 h-10 rounded-full bg-red-500 mr-1.5 flex-shrink-0 cursor-pointer"></div>
          <div className="w-10 h-10 rounded-full bg-yellow-500 mr-1.5 flex-shrink-0 cursor-pointer"></div>
          <div className="w-10 h-10 rounded-full bg-pink-500 mr-1.5 flex-shrink-0 cursor-pointer"></div>
          <div className="w-10 h-10 rounded-full bg-gray-500 mr-1.5 flex-shrink-0 cursor-pointer"></div>
          <div className="w-10 h-10 rounded-full bg-gray-500 mr-1.5 flex-shrink-0 cursor-pointer"></div>
        </ScrollContainer>
        <ScrollContainer className="w-1/2 max-w-1/2 overflow-x-auto flex p-1 border-2  border-solid border-gray-200 shadow-lg">
          <div
            className="px-2 h-10 rounded-lg font-semibold mr-1.5 flex-shrink-0 flex items-center 
            justify-center border-2 border-solid border-gray-200 cursor-pointer"
          >
            32GB
          </div>
          <div
            className="px-2 h-10 rounded-lg font-semibold mr-1.5 flex-shrink-0 flex items-center 
            justify-center border-2 border-solid border-gray-200 cursor-pointer"
          >
            32GB
          </div>
          <div
            className="px-2 h-10 rounded-lg font-semibold mr-1.5 flex-shrink-0 flex items-center 
            justify-center border-2 border-solid border-gray-200 cursor-pointer"
          >
            32GB
          </div>
          <div
            className="px-2 h-10 rounded-lg font-semibold mr-1.5 flex-shrink-0 flex items-center 
            justify-center border-2 border-solid border-gray-200 cursor-pointer"
          >
            32GB
          </div>
          <div
            className="px-2 h-10 rounded-lg font-semibold mr-1.5 flex-shrink-0 flex items-center 
            justify-center border-2 border-solid border-gray-200 cursor-pointer"
          >
            32GB
          </div>
          <div
            className="px-2 h-10 rounded-lg font-semibold mr-1.5 flex-shrink-0 flex items-center 
            justify-center border-2 border-solid border-gray-200 cursor-pointer"
          >
            32GB
          </div>
        </ScrollContainer>
      </div>
      <div className="w-full flex">
        <ScrollContainer className="w-1/2 mr-3 max-w-1/2 overflow-x-auto flex p-1 border-2 border-solid border-gray-200 shadow-lg items-center">
          Đã chọn :{"  "}
          <div className="w-7 h-7 ml-1 rounded-full bg-green-500 mr-1.5 flex-shrink-0 cursor-pointer"></div>
        </ScrollContainer>
        <ScrollContainer className="w-1/2 max-w-1/2 overflow-x-auto flex p-1 border-2  border-solid border-gray-200 shadow-lg">
          <div
            className="px-2 h-10 rounded-lg font-semibold mr-1.5 flex-shrink-0 flex items-center 
            justify-center border-2 border-solid border-gray-200 cursor-pointer text-xs"
          >
            32GB
          </div>
        </ScrollContainer>
      </div>
    </>
  );
}

export default ColorMemoryRam;
