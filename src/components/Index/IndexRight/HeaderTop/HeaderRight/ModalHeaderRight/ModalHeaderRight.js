import React from "react";

function ModalHeaderRight(props) {
  return (
    <div
      className=" absolute w-full p-3 shadow-lg border-t-2 border-sold
        border-gray-300 z-10 bg-white"
    >
      <div className="w-full flex pb-2">
        <div className="">
          <img
            src="../../images/avatar.jpg"
            className="w-16 h-16 rounded-lg"
            alt=""
          />
        </div>
        <div className="ml-3">
          <p>Trà Tấn Hưởng</p>
          <p className="text-sm text-gray-600">tratanhuong01@gmail.com</p>
          <span className="text-blue-500 text-sm">Xem thông tin</span>
        </div>
      </div>
      <hr />
      <ul className="w-full">
        <li className="w-full p-2">Cài đặt</li>
        <li className="w-full p-2">Đăng Xuất</li>
      </ul>
    </div>
  );
}

export default ModalHeaderRight;
