import React from "react";
import MainIndex from "../containers/Index/MainIndex/MainIndex";
import Modal from "../containers/Modal";

function AdminIndex(props) {
  //
  const { match } = props;
  //
  return (
    <>
      <MainIndex match={match} />
      <Modal />
    </>
  );
}

export default AdminIndex;
