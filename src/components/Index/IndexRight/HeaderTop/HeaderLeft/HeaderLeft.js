import React from "react";

function HeaderLeft(props) {
  return (
    <div className="w-full lg:w-1/4 text-center">
      <div className="w-10/12 mx-auto relative">
        <input
          type="text"
          className="my-4 items-center rounded-3xl py-2.5 px-4 bg-gray-200 w-full "
          placeholder="Tìm kiếm..."
        />
        <i className="bx bx-search absolute right-3 text-gray-600 top-7 text-xl cursor-pointer"></i>
      </div>
    </div>
  );
}

export default HeaderLeft;
