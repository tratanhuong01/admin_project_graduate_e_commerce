import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logo.png";
import { DASHBOARD } from "../../../../constants/Config";
//
function Logo({ show }) {
  return (
    <div
      className={`w-full text-xl font-bold flex border-solid border-gray-300 py-2 px-6 
      justify-center bg-white relative h-14 z-50 ${
        show ? " -ml-5  lg:h-auto" : ""
      }`}
    >
      <Link to={DASHBOARD}>
        <img
          src={logo}
          className={` ${
            show ? "w-52 h-20 object-contain" : "w-24 object-cover"
          } cursor-pointer`}
          alt=""
        />
      </Link>
    </div>
  );
}

export default Logo;
