import React from "react";

function InfoAdmin(props) {
  //
  //
  return (
    <div className="w-full p-3">
      <div className="w-full flex justify-center relative p-2 border-solid border-gray-300">
        <div className="w-full lg:w-auto text-right mr-2 flex justify-center ">
          <img
            src="../../images/avatar.jpg"
            className="w-12 h-12 rounded-full border-4 border-solid border-blue-500 xl:border-none"
            alt=""
          />
        </div>
        <div className="hidden xl:flex items-center">
          <div className="flex flex-wrap items-center">
            <p className="font-bold">Trà Tấn Hưởng</p>
            <p className="w-full">Quản trị viên</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoAdmin;
