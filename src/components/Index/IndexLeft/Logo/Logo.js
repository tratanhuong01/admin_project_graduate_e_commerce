import React from "react";
import logo from "../../../../assets/images/logo.png";
//
function Logo(props) {
  return (
    <div
      className="w-full text-xl font-bold flex border-solid border-gray-300 py-2 px-6 
      justify-center -ml-5 bg-white relative h-14 lg:h-auto"
    >
      <img
        src={logo}
        className="w-52 h-20 object-contain cursor-pointer"
        alt=""
      />
    </div>
  );
}

export default Logo;
