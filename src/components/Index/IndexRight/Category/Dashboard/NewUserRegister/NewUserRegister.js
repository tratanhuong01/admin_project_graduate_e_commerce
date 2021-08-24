import React from "react";
import ItemNewUserRegister from "./ItemNewUserRegister/ItemNewUserRegister";

function NewUserRegister(props) {
  return (
    <div className="item__new p-1 bg-white mx-1 w-full">
      <p className="font-bold text-xm font-bold my-2 pl-3">
        Người dùng đăng kí mới
      </p>
      <ul className="w-full flex flex-wrap">
        <ItemNewUserRegister />
        <ItemNewUserRegister />
        <ItemNewUserRegister />
        <ItemNewUserRegister />
      </ul>
    </div>
  );
}

export default NewUserRegister;
