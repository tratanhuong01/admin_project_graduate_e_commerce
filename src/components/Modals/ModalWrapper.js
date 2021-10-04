import React from "react";
import CloseModal from "../CloseModal/CloseModal";

function ModalWrapper(props) {
  //
  const { className, style, title, children, addEvent } = props;
  //
  return (
    <div className={className} style={style}>
      <div className="w-full relative rounded-lg bg-white z-50">
        <div
          className="w-full fixed top-0 bg-white z-50 h-16 flex items-center justify-center 
         rounded-lg"
        >
          <p className="text-2xl font-bold dark:text-white">{title}</p>
          <CloseModal addEvent={addEvent} />
          <hr />
        </div>
        {children}
      </div>
    </div>
  );
}

export default ModalWrapper;
