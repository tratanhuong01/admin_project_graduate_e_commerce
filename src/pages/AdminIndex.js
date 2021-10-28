import React, { useEffect } from "react";
import MainIndex from "../containers/Index/MainIndex/MainIndex";
import Modal from "../containers/Modal";
import * as usersAction from "../actions/user/index";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import jwt_decode from "jwt-decode";

function AdminIndex(props) {
  //
  const { match } = props;
  const dispatch = useDispatch();
  const { user, headers } = useSelector((state) => {
    return {
      user: state.user,
      headers: state.headers,
    };
  });
  useEffect(() => {
    //
    if (localStorage && localStorage.getItem("adminToken")) {
      const token = jwt_decode(localStorage.getItem("adminToken"));
      if (token.exp < Date.now() / 1000) {
        localStorage.removeItem("adminToken");
      } else {
        document
          .getElementsByTagName("body")[0]
          .classList.add("overflow-hidden");
        dispatch(usersAction.loadInfoUserRequest(headers));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return localStorage && localStorage.getItem("adminToken") ? (
    <>
      {user ? (
        <MainIndex match={match} />
      ) : (
        <div className="w-full flex items-center justify-center h-screen">
          <i className="fas fa-circle-notch fa-spin text-4xl text-organce"></i>
        </div>
      )}
      <Modal />
    </>
  ) : (
    <Redirect to="../../admin/login" />
  );
}

export default AdminIndex;
