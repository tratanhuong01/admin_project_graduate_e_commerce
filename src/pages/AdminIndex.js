import React, { useEffect } from "react";
import MainIndex from "../containers/Index/MainIndex/MainIndex";
import Modal from "../containers/Modal";

function AdminIndex(props) {
  //
  const { match } = props;
  useEffect(() => {
    const fetch = () => {
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
    };
    fetch();
  }, []);
  //
  return (
    <>
      <MainIndex match={match} />
      <Modal />
    </>
  );
}

export default AdminIndex;
