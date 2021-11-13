import React from "react";
import { useSelector } from "react-redux";

function WrapperLoadingNotModal(props) {
  const form = useSelector((state) => state.form);
  return (
    <div className="w-full relative py-3 flex">
      {props.children}
      {form.loading && (
        <div
          className="w-full absolute top-0 left-0 bg-white bg-opacity-50 flex items-center justify-center "
          style={{ height: "calc(100vh - 80px)" }}
        >
          <i className="fas fa-circle-notch fa-spin text-5xl text-organce"></i>
        </div>
      )}
    </div>
  );
}

export default WrapperLoadingNotModal;
