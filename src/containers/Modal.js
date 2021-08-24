import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Modal(props) {
  //
  const states = useSelector((state) => {
    return {
      modal: state.modal,
    };
  });
  const { modal } = states;
  useEffect(() => {
    if (modal.data)
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
    else
      document
        .getElementsByTagName("body")[0]
        .classList.remove("overflow-hidden");
  }, [modal]);
  //
  return (
    <div
      className={`w-full h-screen bg-opacity-50 bg-black top-0 left-0 fixed z-main  
      ${modal.data ? "" : "hidden"}`}
    >
      {modal.data}
    </div>
  );
}

export default Modal;
