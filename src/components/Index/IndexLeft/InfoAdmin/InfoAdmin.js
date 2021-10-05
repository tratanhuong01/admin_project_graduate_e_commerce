import React from "react";
import { useSelector } from "react-redux";

function InfoAdmin(props) {
  //
  const user = useSelector((state) => state.user);
  //
  return (
    <div className="w-full p-3">
      <div className="w-full flex justify-center relative p-2 border-solid border-gray-300">
        <div className="w-full lg:w-auto text-right mr-2 flex justify-center ">
          <img
            src={user.avatar}
            className="w-12 h-12 rounded-full border-4 border-solid border-blue-500 xl:border-none"
            alt=""
          />
        </div>
        <div className="hidden xl:flex items-center">
          <div className="flex flex-wrap items-center pl-4">
            <p className="font-bold">{`${user.firstName} ${user.lastName}`}</p>
            <p className="w-full">{user.userRole.nameRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoAdmin;
