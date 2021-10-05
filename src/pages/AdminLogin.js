import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import MainLogin from "../containers/Login/MainLogin";
import Modal from "../containers/Modal";

function AdminLogin(props) {
  const history = useHistory();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    //
    if (localStorage && localStorage.getItem("adminToken"))
      history.push("../admin/tong-quan");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <>
      <MainLogin />
      <Modal />
    </>
  );
}

export default AdminLogin;
