import React from "react";
function Logo(props) {
  return (
    <div
      className="w-full text-xl font-bold flex border-solid border-gray-300 py-2 px-6 
      justify-center -ml-5 bg-white relative h-14 lg:h-auto"
    >
      <img
        src="../../../images/logo.png"
        className="absolute left-1/2 -ml-1 flex h-14 lg:object-cover cursor-pointer 
        lg:relative lg:left-3 object-contain"
        alt=""
      />
      <span
        className="font-bold text-2xl absolute top-5 xl:left-36 lg:left-28 lg:ml-1.5 text-gray-700 
      cursor-pointer hidden lg:block"
      >
        XSMART
      </span>
    </div>
  );
}

export default Logo;
