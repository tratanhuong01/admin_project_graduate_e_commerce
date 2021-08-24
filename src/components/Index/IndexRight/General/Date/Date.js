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
    </>
  );
}

export default Date;
