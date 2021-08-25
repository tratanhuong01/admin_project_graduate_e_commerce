import React from "react";
import loading from "../../assets/images/loading.gif";

function Loading(props) {
  //
  return (
    <div className="w-full h-screen relative bg-white dark:bg-dark-second hidden">
      <img
        src={loading}
        alt=""
        className="w-14 h-14 rounded-full absolute top-1/3 left-1/2 transform 
        -translate-x-1/2 -translate-y-1/2 "
      />
    </div>
  );
}

export default Loading;
