import React from "react";
import ModalWrapper from "../ModalWrapper";

function ModalContact({ data }) {
  //
  //
  return (
    <ModalWrapper
      className={`w-1/2 rounded-lg absolute top-1/2 left-1/2 transform -translate-y-1/2 
        -translate-x-1/2 bg-white animate__animated animate__fadeIn`}
      style={{ maxHeight: "85vh" }}
      title={`Phản hồi liên hệ`}
      addEvent={() => ""}
    >
      <div className="w-full flex h-full p-3 border-r-2 border-solid border-gray-300">
        <div className="w-1/2 mr-5">
          <p className="my-2 font-semibold items-center flex">
            Họ tên :
            <span className=" px-3 py-1 rounded-full bg-yellow-700 text-white ml-4">
              {data.fullName}
            </span>
          </p>
          <p className="my-2 font-semibold items-center flex">
            Email :
            <span className=" px-3 py-1 rounded-full bg-green-700 text-white ml-4">
              {data.email}
            </span>
          </p>
          <p className="my-2 font-semibold items-center flex">
            Số điện thoại :
            <span className=" px-3 py-1 rounded-full bg-red-500 text-white ml-4">
              {data.phone}
            </span>
          </p>
          <p className="font-semibold">Nội dung</p>
          <div
            className="w-full flex text-white max-h-56 h-56 bg-gray-700 rounded-lg overflow-y-auto my-2 
          font-semibold p-3"
          >
            {data.content}
          </div>
        </div>
        <div className="w-1/2">
          <textarea
            name=""
            placeholder="Nội dung phản hồi"
            className="w-full resize-none rounded-lg p-3 flex max-h-56 overflow-y-auto my-2 h-56 border-2 border-solid border-gray-300"
          ></textarea>
          <div className="w-full flex justify-center my-3">
            <button className="text-center p-2.5 bg-organce rounded-lg text-white font-semibold">
              Gửi mail
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default ModalContact;
