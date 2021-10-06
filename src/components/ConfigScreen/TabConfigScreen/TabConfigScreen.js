import React from "react";
import ItemTab from "./ItemTab/ItemTab";
import { v4 as uuidv4 } from "uuid";
import ContentTabDefault from "../ContentTabDefault/ContentTabDefault";
import { useDispatch, useSelector } from "react-redux";
import * as configDatasAction from "../../../actions/configData/index";
function TabConfigScreen(props) {
  //
  const config = useSelector((state) => state.config);
  const dispatch = useDispatch();
  //
  return (
    <div className="w-full shadow-xl">
      <div className="w-full flex border-2 border-solid border-gray-300 items-center">
        {config.tabs.map((item, pos) => {
          return <ItemTab key={pos} pos={pos} item={item} />;
        })}
        <div
          onClick={() => {
            dispatch(configDatasAction.updateIndexTabs(config.tabs.length));
            dispatch(
              configDatasAction.updateTabs([
                ...config.tabs,
                {
                  id: uuidv4(),
                  title: "Tab mới",
                  isDefault: true,
                  content: <ContentTabDefault />,
                },
              ])
            );
          }}
          className="w-10 h-10 mx-2 rounded-full hover:bg-gray-200 flex justify-center items-center cursor-pointer"
        >
          <i className="bx bx-plus text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default TabConfigScreen;
