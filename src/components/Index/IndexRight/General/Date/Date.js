import React from "react";

function Date(props) {
  return (
    <>
      <span className="mr-2 flex items-center font-bold">Từ</span>
      <input
        type="date"
        className="p-2.5 w-44 flex items-center mx-2 rounded-lg"
      />
      <span className="mr-2 flex items-center font-bold">Đến</span>
      <input
        type="date"
        className="p-2.5 w-44 flex items-center mx-2 rounded-lg"
      />
      <button className="px-4 py-3 rounded-lg bg-organce text-white font-semibold">
        Lọc theo ngày
      </button>
    </>
  );
}

export default Date;
