import React, { useState } from "react";
import { useSelector } from "react-redux";
import ModalHeaderRight from "./ModalHeaderRight/ModalHeaderRight";

function HeaderRight(props) {
  //
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.user);
  //
  return (
    <div className="w-3/4 xl:w-1/3 relative">
      <ul className="flex justify-end xl:mr-8 mr-3 items-center">
        <li className=" flex items-center relative mx-3 cursor-pointer">
          <i className="far fa-envelope text-2xl"></i>
          <span
            className="absolute -top-1 -right-2 w-4 h-4 rounded-full bg-red-500 text-white 
          font-bold flex justify-center text-xs items-center shadow-lg-red"
          >
            9
          </span>
        </li>
        <li className="flex items-center relative mx-3 cursor-pointer">
          <i className="far fa-bell text-2xl"></i>
          <span
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white 
          font-bold flex justify-center text-xs items-center shadow-lg-red"
          >
            9
          </span>
        </li>
        <li className="p-2 flex items-center">
          <div className="w-full flex relative p-2 cursor-pointer">
            <div className="text-right mr-2 cursor-pointer">
              <img
                src={user.avatar}
                className="w-9 h-9 rounded-full object-cover"
                alt=""
              />
            </div>
            <div className=" items-center hidden lg:flex">
              <p className="font-bold text-sm">{`${user.firstName} ${user.lastName}`}</p>
            </div>
            <i
              onClick={() => setShow(!show)}
              className="fas fa-caret-down absolute top-1/3 -right-3 cursor-pointer"
            ></i>
          </div>
        </li>
      </ul>
      {show && <ModalHeaderRight />}
    </div>
  );
}

export default HeaderRight;
