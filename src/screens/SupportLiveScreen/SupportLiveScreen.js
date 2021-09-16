import React from "react";
import SupportLiveLeft from "../../components/SupportLive/SupportLiveLeft/SupportLiveLeft";
import SupportLiveRight from "../../components/SupportLive/SupportLiveRight/SupportLiveRight";

function SupportLiveScreen(props) {
  return (
    <div className="w-full p-3 my-3" style={{ height: "calc(100vh - 76px)" }}>
      <SupportLiveLeft />
      <SupportLiveRight />
    </div>
  );
}

export default SupportLiveScreen;
