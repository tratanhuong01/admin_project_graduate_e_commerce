import React from "react";
import TabConfigScreen from "../../components/ConfigScreen/TabConfigScreen/TabConfigScreen";
import { useSelector } from "react-redux";

function ConfigScreen(props) {
  //
  const config = useSelector((state) => state.config);
  //
  return (
    <div
      className="w-full px-3 shadow-lg flex overflow-hidden flex-col items-center"
      style={{
        height: "calc(100vh - 80px)",
        maxHeight: "calc(100vh - 80px)",
      }}
    >
      <TabConfigScreen />
      {config.tabs[config.index] && config.tabs[config.index].content}
    </div>
  );
}

export default ConfigScreen;
