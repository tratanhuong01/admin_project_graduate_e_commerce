import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as usersAction from "../../../../../../actions/user/index";
function ModalHeaderRight(props) {
  //
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  //
  return (
    <div
      className=" absolute w-full p-3 shadow-lg border-t-2 border-sold
        border-gray-300 z-10 bg-white"
    >
      <div className="w-full flex pb-2">
        <div className="">
          <img src={user.avatar} className="w-16 h-16 rounded-lg" alt="" />
        </div>
        <div className="ml-3">
          <p>{`${user.firstName} ${user.lastName}`}</p>
          <p className="text-sm text-gray-600">{user.email}</p>
          <span className="text-blue-500 text-sm">Xem thông tin</span>
        </div>
      </div>
      <hr />
      <ul className="w-full">
        <li className="w-full p-2">Cài đặt</li>
        <li
          onClick={() => {
            dispatch(usersAction.logoutAccount());
          }}
          className="w-full p-2"
        >
          Đăng Xuất
        </li>
      </ul>
    </div>
  );
}

export default ModalHeaderRight;
