import React from "react";

function ButtonAddCustom(props) {
  return (
    <button
      className="px-5 mx-4 absolute -right-2 py-2.5 rounded-lg bg-blue-500 font-semibold 
        text-white flex justify-center items-center"
    >
      <i className="bx bx-plus mr-3 text-xl"></i>Thêm
    </button>
  );
}

export default ButtonAddCustom;
